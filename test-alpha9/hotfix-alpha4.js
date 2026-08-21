/* Fishing OS v0.5 alpha4
   Separate libraries: Gerät, Methode/Rig, Köder.
   Photos supported for every library item.
   Events can select all three separately plus a free note.
*/

function equipmentGroup(x){
  if(x?.group)return x.group;
  const k=(x?.kind||'').toLowerCase();
  if(k==='köder')return 'lure';
  if(k==='rig'||k==='setup'||k.includes('methode'))return 'method';
  return 'gear';
}
function groupLabel(g){return g==='gear'?'Gerät':g==='method'?'Methode / Rig':'Köder'}
function groupIcon(g){return g==='gear'?'🎣':g==='method'?'⌁':'🪱'}
function eqOptions(items,group,selected=''){
  const arr=items.filter(x=>active(x)&&equipmentGroup(x)===group);
  return `<option value="">Nicht eingetragen</option>${arr.map(x=>`<option value="${x.id}" ${x.id===selected?'selected':''}>${esc(x.name)}${x.model?` · ${esc(x.model)}`:''}</option>`).join('')}`;
}

async function renderTackle(){
  const items=(await all('tackle')).filter(active);
  $('#pageTitle').textContent='Ausrüstung';
  const groups=['gear','method','lure'];
  $('#view').innerHTML=`<div class="notice">Gerät, Methode/Rig und Köder werden getrennt gespeichert. Alles ist optional und kann direkt beim Angeln ergänzt werden.</div>${groups.map(g=>{
    const list=items.filter(x=>equipmentGroup(x)===g);
    return `<div class="section"><h2>${groupLabel(g)}</h2><button class="textbtn" data-new-eq="${g}">＋ Hinzufügen</button></div>${list.map(x=>`<button class="row" data-eq="${x.id}">${x.photo?`<img src="${x.photo}">`:`<div style="width:68px;height:68px;border-radius:14px;background:#edf2ef;display:grid;place-items:center;font-size:27px">${groupIcon(g)}</div>`}<div class="grow"><h3>${esc(x.name)}</h3><p>${esc(x.model||'')}</p><p>${esc(eqSummary(x))}</p></div><span class="chev">›</span></button>`).join('')||`<div class="empty">Noch kein ${groupLabel(g)} eingetragen.</div>`}
  `}).join('')}`;
  $$('[data-new-eq]').forEach(b=>b.onclick=()=>equipmentForm(b.dataset.newEq));
  $$('[data-eq]').forEach(b=>b.onclick=async()=>{const x=await get('tackle',b.dataset.eq);equipmentForm(equipmentGroup(x),x)});
}
function eqSummary(x){
  if(equipmentGroup(x)==='gear')return [x.gearType,x.line,x.leader].filter(Boolean).join(' · ');
  if(equipmentGroup(x)==='method')return [x.hookSize,x.rigWeight?x.rigWeight+' g':''].filter(Boolean).join(' · ');
  return [x.size,x.color,x.lureWeight?x.lureWeight+' g':''].filter(Boolean).join(' · ');
}
function equipmentFields(group,existing){
  if(group==='gear')return `<div class="field"><label>Geräteart</label><select name="gearType"><option>Komplettes Set</option><option>Rute</option><option>Rolle</option><option>Hauptschnur</option><option>Vorfach</option><option>Sonstiges</option></select></div><div class="field"><label>Name</label><input name="name" required value="${esc(existing?.name||'')}"></div><div class="field"><label>Hersteller / Modell · optional</label><input name="model" value="${esc(existing?.model||'')}"></div><div class="field"><label>Schnur · optional</label><input name="line" value="${esc(existing?.line||'')}"></div><div class="field"><label>Vorfach · optional</label><input name="leader" value="${esc(existing?.leader||'')}"></div>`;
  if(group==='method')return `<div class="field"><label>Methode / Rig</label><input name="name" required placeholder="z. B. Texas Rig" value="${esc(existing?.name||'')}"></div><div class="inline"><div class="field"><label>Hakengröße · optional</label><input name="hookSize" placeholder="z. B. 5/0" value="${esc(existing?.hookSize||'')}"></div><div class="field"><label>Gewicht g · optional</label><input name="rigWeight" type="number" step="0.1" inputmode="decimal" value="${esc(existing?.rigWeight??'')}"></div></div>`;
  return `<div class="field"><label>Ködername</label><input name="name" required value="${esc(existing?.name||'')}"></div><div class="field"><label>Hersteller / Modell · optional</label><input name="model" value="${esc(existing?.model||'')}"></div><div class="inline"><div class="field"><label>Größe · optional</label><input name="size" placeholder="z. B. 5\"" value="${esc(existing?.size||'')}"></div><div class="field"><label>Farbe · optional</label><input name="color" value="${esc(existing?.color||'')}"></div></div><div class="field"><label>Gewicht g · optional</label><input name="lureWeight" type="number" step="0.1" inputmode="decimal" value="${esc(existing?.lureWeight??'')}"></div>`;
}
function equipmentForm(group,existing=null){
  showModal(existing?`${groupLabel(group)} bearbeiten`:`${groupLabel(group)} hinzufügen`,`<form class="form" id="equipmentForm">${equipmentFields(group,existing)}<div class="field"><label>Foto · optional</label><input name="photo" type="file" accept="image/*"><img class="photoPreview" id="eqPhotoPreview" ${existing?.photo?`src="${existing.photo}" style="display:block"`:''}></div><div class="field"><label>Notiz · optional</label><textarea name="note">${esc(existing?.note||'')}</textarea></div><button class="btn full">Speichern</button></form>`);
  if(group==='gear'&&existing?.gearType)$('#equipmentForm [name=gearType]').value=existing.gearType;
  const pf=$('#equipmentForm [name=photo]');
  pf.onchange=()=>{if(pf.files[0]){const u=URL.createObjectURL(pf.files[0]);$('#eqPhotoPreview').src=u;$('#eqPhotoPreview').style.display='block'}};
  $('#equipmentForm').onsubmit=async e=>{
    e.preventDefault();const fd=new FormData(e.currentTarget);let photo=existing?.photo||'';if(pf.files[0])photo=await fileToDataURL(pf.files[0]);
    const obj={...(existing||{}),id:existing?.id||uid(),group,name:fd.get('name'),model:fd.get('model')||'',note:fd.get('note')||'',photo,deletedAt:null};
    if(group==='gear'){obj.kind='Gerät';obj.gearType=fd.get('gearType')||'';obj.line=fd.get('line')||'';obj.leader=fd.get('leader')||'';}
    if(group==='method'){obj.kind='Methode/Rig';obj.hookSize=fd.get('hookSize')||'';obj.rigWeight=num(fd.get('rigWeight'));}
    if(group==='lure'){obj.kind='Köder';obj.size=fd.get('size')||'';obj.color=fd.get('color')||'';obj.lureWeight=num(fd.get('lureWeight'));}
    await put('tackle',obj);closeModal();renderTackle();
  };
}

async function quickEvent(type){
  let ctx=await currentContext();
  if(!ctx.day||!ctx.session)return alert('Starte zuerst einen Angeltag.');
  if(!ctx.spot)return chooseSpotForEvent(type,ctx);
  ctx=await currentContext();
  const [species,tackle]=await Promise.all([all('species'),all('tackle')]);
  const speciesActive=species.filter(active).sort((a,b)=>(a.sort??99)-(b.sort??99));
  const weather=await latestWeather(ctx.session.id);
  const equipment=type!=='observation'?`<div class="sheetSection">Ausrüstung · optional</div><div class="field"><label>Gerät</label><select name="gearId">${eqOptions(tackle,'gear')}</select></div><div class="field"><label>Methode / Rig</label><select name="methodId">${eqOptions(tackle,'method')}</select></div><div class="field"><label>Köder</label><select name="lureId">${eqOptions(tackle,'lure')}</select></div><div class="field"><label>Zusatz zu Köder / Setup · optional</label><input name="equipmentNote" placeholder="z. B. sehr langsam geführt"></div>`:'';
  showModal(EVENT_LABEL[type],`<form class="form" id="eventForm"><div class="notice">${esc(ctx.water?.name||'')} · ${esc(ctx.spot?.name||'')} · ${weather?.status==='live'?`Wetter ${weather.temperature??'–'} °C · ${fmtTime(weather.capturedAt)}`:'Wetter nicht aktuell'}</div><button type="button" class="btn secondary full" id="refreshInEvent">↻ Wetter aktualisieren</button>${type==='catch'?`<div class="field"><label>Fischart · optional</label><select name="speciesId"><option value="">Nicht eingetragen</option>${speciesActive.map(s=>`<option value="${s.id}">${esc(s.name)}</option>`).join('')}</select></div><div class="inline"><div class="field"><label>Länge cm · optional</label><input name="lengthCm" type="number" inputmode="decimal" step="0.1"></div><div class="field"><label>Gewicht lbs · optional</label><input name="weightLbs" type="number" inputmode="decimal" step="0.01"></div></div>`:''}${equipment}${type==='observation'?`<div class="field"><label>Kategorie · optional</label><select name="observationCategory"><option value="">–</option><option>Fischaktivität</option><option>Beute / Nahrungsangebot</option><option>Wasser</option><option>Struktur & Vegetation</option><option>Tierwelt</option><option>Angeldruck / Störung</option><option>Wetteränderung</option><option>Sonstiges</option></select></div>`:''}<div class="field"><label>Notiz · optional</label><textarea name="note"></textarea></div><div class="field"><label>Foto · optional</label><input name="photo" type="file" accept="image/*" capture="environment"><img class="photoPreview" id="eventPhotoPreview"></div><button class="btn full">Speichern & weiterangeln</button></form>`);
  $('#refreshInEvent').onclick=manualWeatherRefresh;
  const pf=$('#eventForm [name=photo]');pf.onchange=()=>{if(pf.files[0]){const u=URL.createObjectURL(pf.files[0]);$('#eventPhotoPreview').src=u;$('#eventPhotoPreview').style.display='block'}};
  $('#eventForm').onsubmit=async e=>{
    e.preventDefault();const fd=new FormData(e.currentTarget),current=await currentContext(),w=await latestWeather(current.session.id);let photo='';if(pf.files[0])photo=await fileToDataURL(pf.files[0]);
    const gear=fd.get('gearId')?await get('tackle',fd.get('gearId')):null,method=fd.get('methodId')?await get('tackle',fd.get('methodId')):null,lure=fd.get('lureId')?await get('tackle',fd.get('lureId')):null;
    await put('events',{id:uid(),type,dayId:current.day.id,sessionId:current.session.id,spotVisitId:current.visit?.id||null,spotId:current.spot?.id||null,waterId:current.water?.id||null,occurredAt:iso(),timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,weatherId:w?.id||null,speciesId:fd.get('speciesId')||'',lengthCm:num(fd.get('lengthCm')),weightLbs:num(fd.get('weightLbs')),gearId:gear?.id||'',gearName:gear?.name||'',methodId:method?.id||'',methodName:method?.name||'',lureId:lure?.id||'',lureName:lure?.name||'',lureText:lure?.name||'',equipmentNote:fd.get('equipmentNote')||'',observationCategory:fd.get('observationCategory')||'',note:fd.get('note')||'',photo,deletedAt:null,historical:false});
    closeModal();render();
  };
}

setTimeout(()=>{if(state?.tab==='more')renderMore();},80);
