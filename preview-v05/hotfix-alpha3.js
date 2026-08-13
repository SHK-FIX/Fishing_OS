/* Fishing OS v0.5 alpha3 hotfix
   - existing spot selection when no spot is active
   - tackle/setup selection in quick events
   - full journal timeline with spots, travel gaps, events and manual weather refreshes
*/

function fmtJournalDuration(a,b){
  if(!a||!b)return '–';
  const ms=Math.max(0,new Date(b)-new Date(a));
  const mins=Math.max(1,Math.round(ms/60000));
  if(mins<60)return `${mins} min`;
  return `${Math.floor(mins/60)}:${String(mins%60).padStart(2,'0')} h`;
}

function tackleChoices(items,selected=''){
  const usable=items.filter(x=>active(x)&&['Köder','Rig','Setup'].includes(x.kind));
  return `<option value="">Nicht eingetragen</option>${usable.map(x=>`<option value="${x.id}" ${x.id===selected?'selected':''}>${esc(x.name)}${x.kind?` · ${esc(x.kind)}`:''}</option>`).join('')}`;
}

async function chooseSpotForEvent(type,ctx){
  const spots=(await all('spots')).filter(s=>active(s)&&s.waterId===ctx.session.waterId);
  showModal(EVENT_LABEL[type],`<div class="form"><div class="warning">Aktuell ist kein Spot aktiv. Wähle einen vorhandenen Spot oder lege an deiner Position sofort einen neuen an.</div>${spots.map(s=>`<button class="row" data-event-spot="${s.id}"><div class="grow"><h3>${esc(s.name)}</h3><p>${s.bottom?esc(s.bottom):'Keine Details'}</p></div><span class="chev">›</span></button>`).join('')||'<div class="empty">Noch kein Spot vorhanden.</div>'}<button class="btn full" id="quickNewSpotForEvent">＋ Spot hier anlegen & weiter</button><button class="btn secondary full" id="cancelEventSpot">Abbrechen</button></div>`);
  $$('[data-event-spot]').forEach(b=>b.onclick=async()=>{await startSpot(b.dataset.eventSpot);closeModal();quickEvent(type)});
  $('#quickNewSpotForEvent').onclick=async()=>{await minimalSpotForContext(ctx.session);closeModal();quickEvent(type)};
  $('#cancelEventSpot').onclick=closeModal;
}

async function quickEvent(type){
  let ctx=await currentContext();
  if(!ctx.day||!ctx.session)return alert('Starte zuerst einen Angeltag.');
  if(!ctx.spot)return chooseSpotForEvent(type,ctx);
  ctx=await currentContext();
  const [species,tackle]=await Promise.all([all('species'),all('tackle')]);
  const speciesActive=species.filter(active).sort((a,b)=>(a.sort??99)-(b.sort??99));
  const tackleActive=tackle.filter(active);
  const weather=await latestWeather(ctx.session.id);
  const tackleField=type!=='observation'?`<div class="field"><label>Köder / Rig / Setup · optional</label><select name="tackleId">${tackleChoices(tackleActive)}</select></div>`:'';
  showModal(EVENT_LABEL[type],`<form class="form" id="eventForm"><div class="notice">${esc(ctx.water?.name||'')} · ${esc(ctx.spot?.name||'')} · ${weather?.status==='live'?`Wetter ${weather.temperature??'–'} °C · ${fmtTime(weather.capturedAt)}`:'Wetter nicht aktuell'}</div><button type="button" class="btn secondary full" id="refreshInEvent">↻ Wetter aktualisieren</button>${type==='catch'?`<div class="field"><label>Fischart · optional</label><select name="speciesId"><option value="">Nicht eingetragen</option>${speciesActive.map(s=>`<option value="${s.id}">${esc(s.name)}</option>`).join('')}</select></div><div class="inline"><div class="field"><label>Länge cm · optional</label><input name="lengthCm" type="number" inputmode="decimal" step="0.1"></div><div class="field"><label>Gewicht lbs · optional</label><input name="weightLbs" type="number" inputmode="decimal" step="0.01"></div></div>`:''}${tackleField}${type==='observation'?`<div class="field"><label>Kategorie · optional</label><select name="observationCategory"><option value="">–</option><option>Fischaktivität</option><option>Beute / Nahrungsangebot</option><option>Wasser</option><option>Struktur & Vegetation</option><option>Tierwelt</option><option>Angeldruck / Störung</option><option>Wetteränderung</option><option>Sonstiges</option></select></div>`:''}<div class="field"><label>Notiz · optional</label><textarea name="note"></textarea></div><div class="field"><label>Foto · optional</label><input name="photo" type="file" accept="image/*" capture="environment"><img class="photoPreview" id="eventPhotoPreview"></div><button class="btn full">Speichern & weiterangeln</button></form>`);
  $('#refreshInEvent').onclick=manualWeatherRefresh;
  const pf=$('#eventForm input[name=photo]');
  pf.onchange=()=>{if(pf.files[0]){const u=URL.createObjectURL(pf.files[0]);$('#eventPhotoPreview').src=u;$('#eventPhotoPreview').style.display='block'}};
  $('#eventForm').onsubmit=async e=>{
    e.preventDefault();
    const fd=new FormData(e.currentTarget),current=await currentContext(),w=await latestWeather(current.session.id);
    let photoData=''; const f=pf.files[0]; if(f)photoData=await fileToDataURL(f);
    const selectedTackle=fd.get('tackleId')?await get('tackle',fd.get('tackleId')):null;
    const ev={id:uid(),type,dayId:current.day.id,sessionId:current.session.id,spotVisitId:current.visit?.id||null,spotId:current.spot?.id||null,waterId:current.water?.id||null,occurredAt:iso(),timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,weatherId:w?.id||null,speciesId:fd.get('speciesId')||'',lengthCm:num(fd.get('lengthCm')),weightLbs:num(fd.get('weightLbs')),tackleId:selectedTackle?.id||'',tackleKind:selectedTackle?.kind||'',lureText:selectedTackle?.name||'',observationCategory:fd.get('observationCategory')||'',note:fd.get('note')||'',photo:photoData,deletedAt:null,historical:false};
    await put('events',ev);closeModal();render();
  };
}

async function renderJournal(){
  const [days,sessions,waters,events,visits,spots,weather]=await Promise.all(['days','sessions','waters','events','spotVisits','spots','weather'].map(all));
  $('#pageTitle').textContent='Tagebuch';
  const ds=days.filter(active).sort((a,b)=>new Date(b.startedAt||b.start||0)-new Date(a.startedAt||a.start||0));
  const now=iso();
  $('#view').innerHTML=ds.map(d=>{
    const ss=sessions.filter(s=>active(s)&&s.dayId===d.id).sort((a,b)=>new Date(a.startedAt)-new Date(b.startedAt));
    const dayEvents=events.filter(e=>active(e)&&e.dayId===d.id);
    const names=ss.map(s=>waters.find(w=>w.id===s.waterId)?.name).filter(Boolean);
    let body='';
    for(const s of ss){
      const water=waters.find(w=>w.id===s.waterId);
      const sv=visits.filter(v=>active(v)&&v.sessionId===s.id).sort((a,b)=>new Date(a.startedAt)-new Date(b.startedAt));
      const se=dayEvents.filter(e=>e.sessionId===s.id);
      const manualW=weather.filter(w=>active(w)&&w.sessionId===s.id&&w.source==='manualRefresh');
      let items=[{kind:'session',at:s.startedAt,end:s.endedAt||null,label:water?.name||'Gewässer'}];
      for(const v of sv){const spot=spots.find(x=>x.id===v.spotId);items.push({kind:'spot',at:v.startedAt,end:v.endedAt||null,label:spot?.name||'Spot'});}
      for(const e of se)items.push({kind:'event',at:e.occurredAt,end:null,label:`${EVENT_ICON[e.type]||'•'} ${EVENT_LABEL[e.type]||'Ereignis'}`,sub:e.lureText||''});
      for(const w of manualW)items.push({kind:'weather',at:w.capturedAt,end:null,label:'↻ Wetter aktualisiert',sub:`${w.temperature??'–'} °C · ${w.pressure??'–'} hPa · ${w.windSpeed??'–'} km/h`});
      items.sort((a,b)=>new Date(a.at)-new Date(b.at));
      const visitRanges=sv.map(v=>({a:new Date(v.startedAt),b:new Date(v.endedAt||now)}));
      const bounds=[new Date(s.startedAt),...sv.flatMap(v=>[new Date(v.startedAt),new Date(v.endedAt||now)]),new Date(s.endedAt||now)].sort((a,b)=>a-b);
      for(let i=0;i<bounds.length-1;i++){
        const a=bounds[i],b=bounds[i+1]; if(b<=a)continue;
        const mid=new Date((a.getTime()+b.getTime())/2);
        const covered=visitRanges.some(r=>mid>=r.a&&mid<=r.b);
        if(!covered && (b-a)>=30000)items.push({kind:'travel',at:a.toISOString(),end:b.toISOString(),label:'Unterwegs · kein Spot aktiv'});
      }
      items.sort((a,b)=>new Date(a.at)-new Date(b.at)||({session:0,travel:1,spot:2,event:3,weather:4}[a.kind]-{session:0,travel:1,spot:2,event:3,weather:4}[b.kind]));
      body+=`<div style="margin-top:14px"><div class="badge">${esc(water?.name||'Gewässer')}</div><div class="timeline">${items.map(x=>`<div class="timelineItem ${x.kind==='travel'?'travel':''}"><b>${esc(x.label)}</b><small>${fmtTime(x.at)}${x.end?` – ${fmtTime(x.end)} · ${fmtJournalDuration(x.at,x.end)}`:''}${x.sub?` · ${esc(x.sub)}`:''}</small></div>`).join('')}</div></div>`;
    }
    return `<div class="card"><div class="section" style="margin:0"><div><h2 style="margin:0">${fmtDate(d.startedAt||d.start)}</h2><div class="muted">${names.join(' → ')||'Historischer Angeltag'}</div></div><span class="badge">${dayEvents.filter(e=>e.type==='catch').length} Fänge</span></div><p>${fmtTime(d.startedAt||d.start)} – ${d.endedAt?fmtTime(d.endedAt):'läuft'} · ${fmtJournalDuration(d.startedAt||d.start,d.endedAt||now)}</p>${body||'<div class="empty">Keine Detaildaten.</div>'}</div>`;
  }).join('')||'<div class="empty">Noch keine Angeltage.</div>';
}

// force alpha3 UI after the base script finished initializing
setTimeout(()=>{if(typeof render==='function')render()},50);
