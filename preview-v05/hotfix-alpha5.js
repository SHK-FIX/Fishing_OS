/* Fishing OS v0.5 alpha5
   Equipment statistics + complete event overview.
*/
function statRows(events,field,labelFallback='Nicht eingetragen'){
  const map=new Map();
  for(const e of events){
    const name=(e[field]||'').trim()||labelFallback;if(name===labelFallback)continue;
    const r=map.get(name)||{name,events:0,catches:0,bites:0,lost:0,followers:0,losses:0};r.events++;
    if(e.type==='catch')r.catches++;if(e.type==='bite')r.bites++;if(e.type==='lostInFight')r.lost++;if(e.type==='follower')r.followers++;if(e.type==='lureLoss')r.losses++;map.set(name,r);
  }
  return [...map.values()].sort((a,b)=>b.catches-a.catches||b.events-a.events||a.name.localeCompare(b.name,'de'));
}
function statEquipmentSection(title,rows){return `<div class="section"><h2>${esc(title)}</h2></div>${rows.length?rows.map((r,i)=>`<div class="row"><div style="width:42px;height:42px;border-radius:13px;background:#edf2ef;display:grid;place-items:center;font-weight:850">${i+1}</div><div class="grow"><h3>${esc(r.name)}</h3><p>${r.catches} Fänge · ${r.bites} Bisse · ${r.lost} Drill verloren · ${r.followers} Nachläufer${r.losses?` · ${r.losses} Verluste`:''}</p><p>${r.events} dokumentierte Ereignisse</p></div></div>`).join(''):'<div class="empty">Noch keine Daten.</div>'}`;}
async function showEventDetail(id){
  const e=await get('events',id);if(!e)return;const [w,s,sp,wea]=await Promise.all([e.waterId?get('waters',e.waterId):null,e.spotId?get('spots',e.spotId):null,e.speciesId?get('species',e.speciesId):null,e.weatherId?get('weather',e.weatherId):null]);
  const equipment=[e.gearName?`<p><b>Gerät:</b> ${esc(e.gearName)}</p>`:'',e.methodName?`<p><b>Methode / Rig:</b> ${esc(e.methodName)}</p>`:'',e.lureName||e.lureText?`<p><b>Köder:</b> ${esc(e.lureName||e.lureText)}</p>`:'',e.equipmentNote?`<p><b>Zusatz:</b> ${esc(e.equipmentNote)}</p>`:''].join('');
  showModal(EVENT_LABEL[e.type]||'Ereignis',`${e.photo?`<img src="${e.photo}" style="width:100%;max-height:280px;object-fit:cover;border-radius:20px;margin-bottom:12px">`:''}<div class="card"><h2 style="margin-top:0">${esc(sp?.name||EVENT_LABEL[e.type]||'Ereignis')}</h2><p>${esc(w?.name||'')} ${s?'· '+esc(s.name):''}</p><p>${fmtDate(e.occurredAt)} · ${fmtTime(e.occurredAt)}</p>${e.lengthCm?`<p><b>Länge:</b> ${e.lengthCm} cm</p>`:''}${e.weightLbs?`<p><b>Gewicht:</b> ${e.weightLbs} lbs <span class="muted">(${(e.weightLbs*0.45359237).toFixed(2)} kg)</span></p>`:''}${equipment}${wea?.status==='live'?`<p><b>Wetter:</b> ${wea.temperature??'–'} °C · ${wea.pressure??'–'} hPa</p>`:''}${e.note?`<p>${esc(e.note)}</p>`:''}</div><button class="btn danger full" id="eventTrash">In Papierkorb</button>`);
  $('#eventTrash').onclick=async()=>{if(confirm('Ereignis in den Papierkorb verschieben?')){await softDelete('events',e.id);closeModal();render()}};
}
function catchCard(e,waters,spots,species){const w=waters.find(x=>x.id===(e.waterId||e.water)),s=spots.find(x=>x.id===(e.spotId||e.spot)),sp=species.find(x=>x.id===e.speciesId);const eq=[e.methodName,e.lureName||e.lureText].filter(Boolean).join(' · ');return `<button class="row" data-catch="${e.id}">${e.photo?`<img src="${e.photo}">`:`<div style="width:68px;height:68px;border-radius:14px;background:#edf2ef;display:grid;place-items:center;font-size:27px">🎣</div>`}<div class="grow"><h3>${esc(sp?.name||e.species||'Fang')}</h3><p>${e.lengthCm?e.lengthCm+' cm':''}${e.lengthCm&&e.weightLbs?' · ':''}${e.weightLbs?e.weightLbs+' lbs':''}</p>${eq?`<p>${esc(eq)}</p>`:''}<p>${esc(w?.name||'')} ${s?'· '+esc(s.name):''}</p><p>${fmtDate(e.occurredAt||e.at)} · ${fmtTime(e.occurredAt||e.at)}</p></div><span class="chev">›</span></button>`;}
async function showStatEventList(type){
  const ev=(await all('events')).filter(e=>active(e)&&e.type===type).sort((a,b)=>new Date(b.occurredAt||b.at)-new Date(a.occurredAt||a.at));
  showModal(EVENT_LABEL[type]||'Ereignisse',ev.length?ev.map(e=>`<button class="row" data-stat-event="${e.id}"><div class="grow"><h3>${EVENT_ICON[e.type]||'•'} ${esc(EVENT_LABEL[e.type]||e.type)}</h3><p>${fmtDate(e.occurredAt||e.at)} · ${fmtTime(e.occurredAt||e.at)}${e.lureName?' · '+esc(e.lureName):''}</p></div><span class="chev">›</span></button>`).join(''):'<div class="empty">Noch keine Einträge.</div>');
  $$('[data-stat-event]').forEach(b=>b.onclick=()=>showEventDetail(b.dataset.statEvent));
}
async function renderStats(){
  const [events,days]=await Promise.all([all('events'),all('days')]);const ev=events.filter(active),c=ev.filter(e=>e.type==='catch'),b=ev.filter(e=>e.type==='bite'),l=ev.filter(e=>e.type==='lostInFight'),f=ev.filter(e=>e.type==='follower'),loss=ev.filter(e=>e.type==='lureLoss'),obs=ev.filter(e=>e.type==='observation');
  let mins=0;days.filter(active).forEach(d=>{if(d.startedAt||d.start)mins+=Math.max(0,(new Date(d.endedAt||iso())-new Date(d.startedAt||d.start))/60000)});$('#pageTitle').textContent='Statistik';
  const cards=[['catch','Fänge',c.length],['bite','Bisse',b.length],['lostInFight','Drill verloren',l.length],['follower','Nachläufer',f.length],['lureLoss','Köderverluste',loss.length],['observation','Beobachtungen',obs.length]];
  $('#view').innerHTML=`<div class="metrics statMetrics" style="grid-template-columns:repeat(3,1fr)">${cards.map(x=>`<button class="metric" data-dashboard-bound="1" data-stat-type="${x[0]}" style="cursor:pointer"><b>${x[2]}</b><small>${x[1]}</small><span class="dashChev" style="display:block;color:#a2aaa6;font-size:14px;line-height:12px;margin-top:4px">›</span></button>`).join('')}</div><div class="section"><h2>Datengrundlage</h2></div><div class="card"><p><b>Angelzeit:</b> ${(mins/60).toFixed(1)} h</p><p><b>Fänge / Angelstunde:</b> ${mins?(c.length/(mins/60)).toFixed(2):'–'}</p><p><b>Landungsquote:</b> ${(c.length+l.length)?Math.round(c.length/(c.length+l.length)*100)+' %':'–'}</p><p><b>Köderverluste:</b> ${loss.length}</p><p><b>Beobachtungen:</b> ${obs.length}</p><div class="notice">Fishing OS zeigt Zusammenhänge, aber behauptet keine Ursachen. Bei kleinen Stichproben bleibt die Bewertung bewusst vorsichtig.</div></div>${statEquipmentSection('Gerät',statRows(ev,'gearName'))}${statEquipmentSection('Methode / Rig',statRows(ev,'methodName'))}${statEquipmentSection('Köder',statRows(ev,'lureName'))}`;
  $$('[data-stat-type]').forEach(b=>b.onclick=()=>showStatEventList(b.dataset.statType));
}
