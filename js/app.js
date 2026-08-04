const $ = (q, root=document) => root.querySelector(q);
const $$ = (q, root=document) => [...root.querySelectorAll(q)];
const uid = () => crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
const fmtDate = d => new Intl.DateTimeFormat('de-DE',{day:'2-digit',month:'2-digit',year:'numeric'}).format(new Date(d));
const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
let state = { waters:[], spots:[], catches:[], diary:[], view:'home' };

async function refreshState(){
  state.waters = await FishingDB.getAll('waters');
  state.spots = await FishingDB.getAll('spots');
  state.catches = (await FishingDB.getAll('catches')).sort((a,b)=>new Date(b.date)-new Date(a.date));
  state.diary = (await FishingDB.getAll('diary')).sort((a,b)=>new Date(b.date)-new Date(a.date));
}
function waterName(id){ return state.waters.find(w=>w.id===id)?.name || 'Ohne Gewässer'; }
function spotName(id){ return state.spots.find(s=>s.id===id)?.name || 'Ohne Spot'; }
function setTitle(t){ $('#pageTitle').textContent=t; }
function activateTab(view){ $$('.tab').forEach(b=>b.classList.toggle('active', b.dataset.view===view)); }
function navigate(view){ state.view=view; activateTab(view); render(); window.scrollTo({top:0,behavior:'smooth'}); }

function img(c, cls='thumb'){ return c.photo ? `<img class="${cls}" src="${c.photo}" alt="${esc(c.species||'Fang')}">` : `<div class="${cls}"></div>`; }
function catchCard(c){ return `<article class="card card-row" data-catch="${c.id}">${img(c)}<div class="grow"><h3>${esc(c.species||'Unbekannter Fang')}</h3><p class="meta">${esc(waterName(c.waterId))}${c.spotId?' · '+esc(spotName(c.spotId)):''}</p><p class="meta"><b>${c.length||'–'} cm</b>${c.weight?` · ${esc(c.weight)} kg`:''} · ${fmtDate(c.date)}</p>${c.lure?`<span class="pill">${esc(c.lure)}</span>`:''}</div></article>`; }

function renderHome(){
  setTitle('Übersicht');
  const last=state.catches[0];
  $('#mainContent').innerHTML=`
    <section class="hero"><div><p>Dein Angel-Betriebssystem</p><h2>${last?esc(waterName(last.waterId)):'Gran Canaria wartet'}</h2><p>${last?`${esc(last.species)} · ${last.length||'–'} cm`:'Lege dein erstes Gewässer und deinen ersten Fang an.'}</p></div></section>
    <div class="section-head"><h2>Deine Highlights</h2><button class="link-button" data-nav="stats">Alle anzeigen</button></div>
    <section class="metrics">
      <div class="metric"><span>🎣</span><b>${state.catches.length}</b><small>Fänge</small></div>
      <div class="metric"><span>📍</span><b>${state.waters.length}</b><small>Gewässer</small></div>
      <div class="metric"><span>⌖</span><b>${state.spots.length}</b><small>Spots</small></div>
      <div class="metric"><span>📷</span><b>${state.catches.filter(c=>c.photo).length}</b><small>Fotos</small></div>
    </section>
    <div class="section-head"><h2>Schnellzugriff</h2></div>
    <section class="quick-grid">
      <button class="quick" data-nav="newCatch"><span class="green">＋</span>Fang eintragen</button>
      <button class="quick" data-nav="spots"><span class="blue">⌖</span>Spots</button>
      <button class="quick" data-nav="stats"><span class="orange">▥</span>Statistik</button>
      <button class="quick" data-nav="hall"><span class="purple">★</span>Hall of Fame</button>
    </section>
    <div class="section-head"><h2>Letzte Fänge</h2></div>
    <section class="card-list">${state.catches.length?state.catches.slice(0,4).map(catchCard).join(''):`<div class="card empty"><span class="big">🎣</span>Noch keine Fänge gespeichert.</div>`}</section>`;
}
function renderWaters(){
  setTitle('Gewässer');
  $('#mainContent').innerHTML=`<button class="primary" id="addWater">＋ Gewässer anlegen</button><div class="section-head"><h2>Meine Gewässer</h2></div><section class="card-list">${state.waters.length?state.waters.map(w=>`<article class="card"><div class="card-row"><div class="thumb"></div><div class="grow"><h3>${esc(w.name)}</h3><p class="meta">${esc(w.location||'Kein Ort')}</p><p class="meta">${state.catches.filter(c=>c.waterId===w.id).length} Fänge · ${state.spots.filter(s=>s.waterId===w.id).length} Spots</p></div></div>${w.notes?`<p class="note">${esc(w.notes)}</p>`:''}<div class="button-row"><button class="secondary" data-water-spots="${w.id}">Spots</button><button class="danger" data-delete-water="${w.id}">Löschen</button></div></article>`).join(''):`<div class="card empty"><span class="big">🏞️</span>Lege dein erstes Gewässer an.</div>`}</section>`;
}
function renderSpots(){
  setTitle('Spots');
  $('#mainContent').innerHTML=`<button class="primary" id="addSpot">＋ Aktuellen Spot speichern</button><div class="section-head"><h2>Gespeicherte Spots</h2></div><div class="card map-card"><div class="spot-pin">📍</div></div><p class="note">Die App speichert GPS-Koordinaten offline. Die Navigation öffnet Apple Karten, sobald eine Verbindung verfügbar ist.</p><section class="card-list">${state.spots.length?state.spots.map(s=>`<article class="card"><h3>${esc(s.name)}</h3><p class="meta">${esc(waterName(s.waterId))}</p><p class="meta">${Number(s.lat).toFixed(5)}, ${Number(s.lng).toFixed(5)}</p>${s.notes?`<p class="note">${esc(s.notes)}</p>`:''}<div class="button-row"><button class="primary" data-map="${s.id}">Apple Karten</button><button class="danger" data-delete-spot="${s.id}">Löschen</button></div></article>`).join(''):`<div class="card empty"><span class="big">📍</span>Noch keine Spots gespeichert.</div>`}</section>`;
}
function renderStats(){
  setTitle('Statistik');
  const groups={}; state.catches.forEach(c=>groups[c.species||'Unbekannt']=(groups[c.species||'Unbekannt']||0)+1);
  const max=Math.max(1,...Object.values(groups));
  const longest=[...state.catches].filter(c=>Number(c.length)>0).sort((a,b)=>Number(b.length)-Number(a.length))[0];
  const avg=state.catches.length?(state.catches.reduce((s,c)=>s+(Number(c.length)||0),0)/state.catches.length).toFixed(1):0;
  $('#mainContent').innerHTML=`<section class="metrics"><div class="metric"><b>${state.catches.length}</b><small>Fänge gesamt</small></div><div class="metric"><b>${avg} cm</b><small>Ø Länge</small></div><div class="metric"><b>${longest?.length||'–'} cm</b><small>Persönlicher Rekord</small></div><div class="metric"><b>${new Set(state.catches.map(c=>c.species)).size}</b><small>Fischarten</small></div></section><div class="section-head"><h2>Fänge nach Fischart</h2></div><section class="card stat-block">${Object.keys(groups).length?Object.entries(groups).sort((a,b)=>b[1]-a[1]).map(([n,v])=>`<div class="bar-row"><span>${esc(n)}</span><div class="bar"><i style="width:${v/max*100}%"></i></div><b>${v}</b></div>`).join(''):'Noch keine Daten.'}</section><div class="section-head"><h2>Letzte Fänge</h2></div><section class="card-list">${state.catches.slice(0,5).map(catchCard).join('')||'<div class="card empty">Noch keine Fänge.</div>'}</section>`;
}
function renderHall(){
  setTitle('Hall of Fame');
  const ranks=[...state.catches].filter(c=>Number(c.length)>0).sort((a,b)=>Number(b.length)-Number(a.length));
  $('#mainContent').innerHTML=`<section class="card-list">${ranks.length?ranks.map((c,i)=>`<article class="card rank"><div class="rank-number">${i+1}</div>${img(c)}<div class="grow"><h3>${esc(c.species)}</h3><p class="meta"><b>${c.length} cm</b> · ${esc(waterName(c.waterId))}</p><p class="meta">${fmtDate(c.date)}</p></div></article>`).join(''):`<div class="card empty"><span class="big">🏆</span>Für die Rangliste brauchen wir gemessene Fische. Ja Max, Maßband benutzen.</div>`}</section>`;
}
function renderDiary(){
  setTitle('Tagebuch');
  $('#mainContent').innerHTML=`<button class="primary" id="addDiary">＋ Tagebucheintrag</button><div class="section-head"><h2>Angeltage</h2></div><section class="card-list">${state.diary.length?state.diary.map(d=>`<article class="card"><h3>${esc(d.title)}</h3><p class="meta">${fmtDate(d.date)}${d.waterId?' · '+esc(waterName(d.waterId)):''}</p><p>${esc(d.text)}</p><button class="danger" data-delete-diary="${d.id}">Löschen</button></article>`).join(''):`<div class="card empty"><span class="big">📓</span>Noch keine Tagebucheinträge.</div>`}</section>`;
}
function renderMore(){
  setTitle('Mehr');
  $('#mainContent').innerHTML=`<section class="card-list"><button class="card" data-nav="spots"><h3>📍 Spots und Navigation</h3><p class="meta">GPS-Punkte speichern und in Apple Karten öffnen</p></button><button class="card" data-nav="diary"><h3>📓 Angeltagebuch</h3><p class="meta">Erlebnisse und Beobachtungen dokumentieren</p></button><button class="card" data-nav="hall"><h3>🏆 Hall of Fame</h3><p class="meta">Deine größten Fische</p></button><button class="card" id="importButton"><h3>⇩ Datensicherung importieren</h3><p class="meta">Lokale JSON-Sicherung wiederherstellen</p></button><button class="card" id="exportMore"><h3>⇧ Datensicherung exportieren</h3><p class="meta">Alle privaten Daten als Datei sichern</p></button></section><p class="version">Fishing OS v0.1.0 · Offline-first · Daten bleiben auf deinem Gerät</p>`;
}
function render(){
  if(state.view==='home')renderHome(); else if(state.view==='waters')renderWaters(); else if(state.view==='spots')renderSpots(); else if(state.view==='stats')renderStats(); else if(state.view==='hall')renderHall(); else if(state.view==='diary')renderDiary(); else if(state.view==='more')renderMore(); else if(state.view==='newCatch'){renderHome(); openCatchForm();}
  bindPageEvents();
}

function modal(html){ $('#modalContent').innerHTML=html; $('#modal').showModal(); $('.close')?.addEventListener('click',()=>$('#modal').close()); }
function waterOptions(selected=''){ return `<option value="">Bitte wählen</option>${state.waters.map(w=>`<option value="${w.id}" ${selected===w.id?'selected':''}>${esc(w.name)}</option>`).join('')}`; }
function spotOptions(waterId=''){ return `<option value="">Kein Spot</option>${state.spots.filter(s=>!waterId||s.waterId===waterId).map(s=>`<option value="${s.id}">${esc(s.name)}</option>`).join('')}`; }
function openWaterForm(){ modal(`<div class="modal-head"><h2>Neues Gewässer</h2><button class="close">×</button></div><form class="form" id="waterForm"><div class="field"><label>Name</label><input name="name" required placeholder="z. B. Ayagaures Stausee"></div><div class="field"><label>Ort</label><input name="location" placeholder="Gran Canaria"></div><div class="field"><label>Notizen</label><textarea name="notes" placeholder="Zugang, Regeln, Besonderheiten …"></textarea></div><button class="primary">Gewässer speichern</button></form>`); $('#waterForm').onsubmit=saveWater; }
async function saveWater(e){e.preventDefault();const f=new FormData(e.target);await FishingDB.put('waters',{id:uid(),name:f.get('name').trim(),location:f.get('location').trim(),notes:f.get('notes').trim(),createdAt:new Date().toISOString()});$('#modal').close();await refreshState();navigate('waters');}
function openSpotForm(){
  modal(`<div class="modal-head"><h2>Spot speichern</h2><button class="close">×</button></div><form class="form" id="spotForm"><div class="field"><label>Name</label><input name="name" required placeholder="z. B. Rocky Point"></div><div class="field"><label>Gewässer</label><select name="waterId">${waterOptions()}</select></div><div class="form-grid"><div class="field"><label>Breitengrad</label><input id="lat" name="lat" type="number" step="any" required></div><div class="field"><label>Längengrad</label><input id="lng" name="lng" type="number" step="any" required></div></div><button type="button" class="secondary" id="locate">Aktuellen Standort übernehmen</button><div class="field"><label>Notizen</label><textarea name="notes"></textarea></div><button class="primary">Spot speichern</button></form>`);
  $('#locate').onclick=locate; $('#spotForm').onsubmit=saveSpot; locate();
}
function locate(){ if(!navigator.geolocation)return alert('GPS wird nicht unterstützt.');navigator.geolocation.getCurrentPosition(p=>{$('#lat').value=p.coords.latitude;$('#lng').value=p.coords.longitude;},()=>alert('Standort konnte nicht gelesen werden. Bitte Safari die Standortfreigabe erlauben.'),{enableHighAccuracy:true,timeout:12000}); }
async function saveSpot(e){e.preventDefault();const f=new FormData(e.target);await FishingDB.put('spots',{id:uid(),name:f.get('name').trim(),waterId:f.get('waterId'),lat:Number(f.get('lat')),lng:Number(f.get('lng')),notes:f.get('notes').trim(),createdAt:new Date().toISOString()});$('#modal').close();await refreshState();navigate('spots');}
function openCatchForm(){
  modal(`<div class="modal-head"><h2>Neuer Fang</h2><button class="close">×</button></div><form class="form" id="catchForm"><div class="field"><label>Foto</label><input id="photo" type="file" accept="image/*" capture="environment"><img id="preview" class="photo-preview"></div><div class="field"><label>Fischart</label><input name="species" required placeholder="z. B. Schwarzbarsch"></div><div class="form-grid"><div class="field"><label>Länge (cm)</label><input name="length" type="number" step="0.1" inputmode="decimal"></div><div class="field"><label>Gewicht (kg)</label><input name="weight" type="number" step="0.01" inputmode="decimal"></div></div><div class="field"><label>Datum und Uhrzeit</label><input name="date" type="datetime-local" value="${new Date(Date.now()-new Date().getTimezoneOffset()*60000).toISOString().slice(0,16)}"></div><div class="field"><label>Gewässer</label><select id="catchWater" name="waterId" required>${waterOptions()}</select></div><div class="field"><label>Spot</label><select id="catchSpot" name="spotId">${spotOptions()}</select></div><div class="field"><label>Köder</label><input name="lure" placeholder="z. B. Chatterbait"></div><div class="field"><label>Notizen</label><textarea name="notes" placeholder="Wie war der Fang?"></textarea></div><button class="primary">Fang speichern</button></form>`);
  let photo=''; $('#photo').onchange=async e=>{const file=e.target.files[0];if(!file)return;photo=await compressImage(file);$('#preview').src=photo;$('#preview').classList.add('visible');};
  $('#catchWater').onchange=e=>$('#catchSpot').innerHTML=spotOptions(e.target.value);
  $('#catchForm').onsubmit=e=>saveCatch(e,()=>photo);
}
function compressImage(file){return new Promise((resolve,reject)=>{const img=new Image();const reader=new FileReader();reader.onload=()=>img.src=reader.result;reader.onerror=reject;img.onload=()=>{const max=1280,scale=Math.min(1,max/Math.max(img.width,img.height));const c=document.createElement('canvas');c.width=Math.round(img.width*scale);c.height=Math.round(img.height*scale);c.getContext('2d').drawImage(img,0,0,c.width,c.height);resolve(c.toDataURL('image/jpeg',.72));};reader.readAsDataURL(file);});}
async function saveCatch(e,getPhoto){e.preventDefault();const f=new FormData(e.target);await FishingDB.put('catches',{id:uid(),species:f.get('species').trim(),length:f.get('length'),weight:f.get('weight'),date:new Date(f.get('date')).toISOString(),waterId:f.get('waterId'),spotId:f.get('spotId'),lure:f.get('lure').trim(),notes:f.get('notes').trim(),photo:getPhoto(),createdAt:new Date().toISOString()});$('#modal').close();await refreshState();navigate('home');}
function openDiaryForm(){modal(`<div class="modal-head"><h2>Tagebucheintrag</h2><button class="close">×</button></div><form class="form" id="diaryForm"><div class="field"><label>Titel</label><input name="title" required placeholder="Morgensession Ayagaures"></div><div class="field"><label>Datum</label><input name="date" type="date" value="${new Date().toISOString().slice(0,10)}"></div><div class="field"><label>Gewässer</label><select name="waterId">${waterOptions()}</select></div><div class="field"><label>Eintrag</label><textarea name="text" required placeholder="Wetter, Aktivität, Erkenntnisse …"></textarea></div><button class="primary">Eintrag speichern</button></form>`);$('#diaryForm').onsubmit=saveDiary;}
async function saveDiary(e){e.preventDefault();const f=new FormData(e.target);await FishingDB.put('diary',{id:uid(),title:f.get('title').trim(),date:new Date(f.get('date')).toISOString(),waterId:f.get('waterId'),text:f.get('text').trim()});$('#modal').close();await refreshState();navigate('diary');}
function openCatchDetail(id){const c=state.catches.find(x=>x.id===id);if(!c)return;modal(`<div class="modal-head"><h2>${esc(c.species)}</h2><button class="close">×</button></div>${c.photo?`<img class="photo-preview visible" src="${c.photo}">`:''}<div class="card"><p><b>${c.length||'–'} cm</b>${c.weight?` · ${esc(c.weight)} kg`:''}</p><p class="meta">${fmtDate(c.date)} · ${esc(waterName(c.waterId))} · ${esc(spotName(c.spotId))}</p><p>${esc(c.notes||'Keine Notiz')}</p><span class="pill">${esc(c.lure||'Kein Köder')}</span></div><button class="danger" id="deleteCatch">Fang löschen</button>`);$('#deleteCatch').onclick=async()=>{if(confirm('Diesen Fang wirklich löschen?')){await FishingDB.remove('catches',id);$('#modal').close();await refreshState();render();}};}

function bindPageEvents(){
  $$('[data-nav]').forEach(b=>b.onclick=()=>navigate(b.dataset.nav));
  $('#addWater')?.addEventListener('click',openWaterForm); $('#addSpot')?.addEventListener('click',openSpotForm); $('#addDiary')?.addEventListener('click',openDiaryForm);
  $$('[data-catch]').forEach(b=>b.onclick=()=>openCatchDetail(b.dataset.catch));
  $$('[data-map]').forEach(b=>b.onclick=()=>{const s=state.spots.find(x=>x.id===b.dataset.map);location.href=`https://maps.apple.com/?ll=${s.lat},${s.lng}&q=${encodeURIComponent(s.name)}`;});
  $$('[data-delete-water]').forEach(b=>b.onclick=async()=>{if(confirm('Gewässer löschen? Zugehörige Fänge bleiben erhalten.')){await FishingDB.remove('waters',b.dataset.deleteWater);await refreshState();render();}});
  $$('[data-delete-spot]').forEach(b=>b.onclick=async()=>{if(confirm('Spot löschen?')){await FishingDB.remove('spots',b.dataset.deleteSpot);await refreshState();render();}});
  $$('[data-delete-diary]').forEach(b=>b.onclick=async()=>{if(confirm('Eintrag löschen?')){await FishingDB.remove('diary',b.dataset.deleteDiary);await refreshState();render();}});
  $('#importButton')?.addEventListener('click',()=>$('#importInput').click()); $('#exportMore')?.addEventListener('click',exportData);
}
async function exportData(){const data=await FishingDB.exportAll();const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`Fishing-OS-Backup-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href);}
async function importData(file){try{const data=JSON.parse(await file.text());if(!confirm('Vorhandene lokale Daten werden ersetzt. Fortfahren?'))return;await FishingDB.importAll(data);await refreshState();render();alert('Datensicherung importiert.');}catch{alert('Die Sicherungsdatei ist ungültig.');}}

async function init(){
  await FishingDB.open(); await refreshState();
  const h=new Date().getHours(); $('#greeting').textContent=`${h<11?'Guten Morgen':h<18?'Guten Tag':'Guten Abend'}, Max`;
  $$('.tab').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.view)));
  $('#exportButton').onclick=exportData; $('#importInput').onchange=e=>e.target.files[0]&&importData(e.target.files[0]);
  render();
  if('serviceWorker' in navigator) navigator.serviceWorker.register('./service-worker.js').catch(console.error);
}
document.addEventListener('DOMContentLoaded',init);
