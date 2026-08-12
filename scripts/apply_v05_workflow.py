from pathlib import Path

p = Path('index.html')
s = p.read_text(encoding='utf-8')
original = s

# Safety: preserve the exact pre-migration app source once.
archive = Path('archive/v0.4-field-test/index.html')
archive.parent.mkdir(parents=True, exist_ok=True)
if not archive.exists():
    archive.write_text(original, encoding='utf-8')


def replace_once(old: str, new: str, label: str) -> None:
    global s
    count = s.count(old)
    if count != 1:
        raise SystemExit(f'{label}: expected exactly 1 match, found {count}')
    s = s.replace(old, new, 1)

replace_once("const APP_VERSION='0.4.0';", "const APP_VERSION='0.5.0-dev1';", 'version')

replace_once(
"async function migrate(){let d=await data();for(const w of d.waters){let changed=false;if(!Array.isArray(w.photos)){w.photos=[];changed=true}if(!w.profile){w.profile={};changed=true}if(typeof w.lat==='string' && Math.abs(+w.lat)>90){w.lat='';w.lon='';changed=true}if(changed)await put('waters',w)}for(const day of d.days){let changed=false;if(!Array.isArray(day.spotSessions)){day.spotSessions=[];changed=true}if(!Array.isArray(day.weatherSnapshots)){day.weatherSnapshots=[];changed=true}if(changed)await put('days',day)}}",
"async function migrate(){let d=await data();for(const w of d.waters){let changed=false;if(!Array.isArray(w.photos)){w.photos=[];changed=true}if(!w.profile){w.profile={};changed=true}if(typeof w.lat==='string' && Math.abs(+w.lat)>90){w.lat='';w.lon='';changed=true}if(changed)await put('waters',w)}for(const day of d.days){let changed=false;if(!Array.isArray(day.spotSessions)){day.spotSessions=[];changed=true}if(!Array.isArray(day.weatherSnapshots)){day.weatherSnapshots=[];changed=true}let sessions=[...(day.spotSessions||[])].sort((a,b)=>new Date(a.startedAt)-new Date(b.startedAt));for(let i=0;i<sessions.length;i++){let x=sessions[i];if(x.endedAt)continue;let next=sessions[i+1]?.startedAt||day.endedAt;if(next&&new Date(next)>=new Date(x.startedAt)){x.endedAt=next;x.durationMin=mins(x.startedAt,next);changed=true}}if(changed)await put('days',day)}}",
'migrate')

replace_once(
"function activeSpotSession(day){return [...(day?.spotSessions||[])].filter(s=>!s.endedAt).sort((a,b)=>new Date(b.startedAt)-new Date(a.startedAt))[0]}",
"function activeSpotSession(day){if(!day||day.endedAt)return null;return [...(day.spotSessions||[])].filter(s=>!s.endedAt).sort((a,b)=>new Date(b.startedAt)-new Date(a.startedAt))[0]}\nfunction sessionEnd(day,s){return s?.endedAt||day?.endedAt||null}\nfunction sessionMinutes(day,s){let end=sessionEnd(day,s);return end?mins(s.startedAt,end):mins(s.startedAt,now())}\nfunction closeOpenSpotSessions(day,end=now()){day.spotSessions=day.spotSessions||[];let closed=0;for(const s of day.spotSessions){if(!s.endedAt){s.endedAt=end;s.durationMin=mins(s.startedAt,end);closed++}}return closed}",
'session helpers')

replace_once('<button class="btn secondary" id="spotSwitch">Spot wechseln</button>', '<button class="btn secondary" id="spotAction">${as?\'Spot beenden\':\'Spot starten\'}</button>', 'dashboard spot button')
replace_once("$('#spotSwitch')?.addEventListener('click',()=>spotSwitchForm(d,day));", "$('#spotAction')?.addEventListener('click',()=>as?endSpot(day):spotStartForm(d,day));", 'dashboard spot handler')
replace_once("let end=now(),as=activeSpotSession(day);if(as){as.endedAt=end;as.durationMin=mins(as.startedAt,end)}try", "let end=now();closeOpenSpotSessions(day,end);try", 'day end closes all spots')

replace_once(
'''function spotDetail(d,s){if(!s)return;let day=currentDay(d),active=activeSpotSession(day);show(spotLabel(d,s.id),`${s.photos?.length?`<div class="photos">${s.photos.map(p=>`<img src="${p}">`).join('')}</div>`:''}<p><b>${esc(waterName(d,s.waterId))}</b></p><p class="muted">${s.depth?`Tiefe ${esc(s.depth)} m · `:''}${esc(s.access||'')}</p>${s.notes?`<p>${esc(s.notes)}</p>`:''}<div class="form"><a class="btn full" style="text-align:center;text-decoration:none" href="${appleMaps(s.lat,s.lon,spotLabel(d,s.id))}" target="_blank">Apple Karten</a>${day&&day.waterId===s.waterId?`<button class="btn secondary full" id="fishHere">${active?.spotId===s.id?'Aktueller Spot':'Hier angeln / Spot wechseln'}</button>`:''}<button class="btn ghost full" id="editSpot">Bearbeiten</button></div>`);$('#editSpot').onclick=()=>spotForm(d,s.waterId,s);$('#fishHere')?.addEventListener('click',async()=>{await switchSpot(day,s.id);$('#modal').close();render()})}
async function switchSpot(day,spotId){let t=now();day.spotSessions=day.spotSessions||[];let a=activeSpotSession(day);if(a&&a.spotId===spotId)return;if(a){a.endedAt=t;a.durationMin=mins(a.startedAt,t)}let sess={id:crypto.randomUUID(),spotId,startedAt:t};try{let wx=await freshWeather();sess.weather=wx;day.weatherSnapshots=[...(day.weatherSnapshots||[]),wx]}catch{}day.spotSessions.push(sess);await put('days',day)}
function spotSwitchForm(d,day){let sp=d.spots.filter(s=>s.waterId===day.waterId),a=activeSpotSession(day);show('Spot wechseln',sp.map(s=>`<button class="row" data-switch="${s.id}"><div style="font-size:28px">📍</div><div class="grow"><h3>${esc(spotLabel(d,s.id))}</h3><div class="muted">${a?.spotId===s.id?'Aktuell':'Startet neue Spot-Zeit'}</div></div>›</button>`).join('')||'<div class="empty">Lege zuerst einen Spot an.</div>');$$('[data-switch]').forEach(b=>b.onclick=async()=>{await switchSpot(day,b.dataset.switch);$('#modal').close();render()})}''',
'''function spotDetail(d,s){if(!s)return;let day=currentDay(d),active=activeSpotSession(day),sameWater=day&&day.waterId===s.waterId;show(spotLabel(d,s.id),`${s.photos?.length?`<div class="photos">${s.photos.map(p=>`<img src="${p}">`).join('')}</div>`:''}<p><b>${esc(waterName(d,s.waterId))}</b></p><p class="muted">${s.depth?`Tiefe ${esc(s.depth)} m · `:''}${esc(s.access||'')}</p>${s.notes?`<p>${esc(s.notes)}</p>`:''}${sameWater&&active&&active.spotId!==s.id?`<div class="warning">Aktuell läuft ${esc(spotLabel(d,active.spotId))}. Beende diesen Spot zuerst.</div>`:''}<div class="form"><a class="btn full" style="text-align:center;text-decoration:none" href="${appleMaps(s.lat,s.lon,spotLabel(d,s.id))}" target="_blank">Apple Karten</a>${sameWater?`<button class="btn secondary full" id="fishHere">${active?.spotId===s.id?'Aktueller Spot':'Spot starten'}</button>`:''}<button class="btn ghost full" id="editSpot">Bearbeiten</button></div>`);$('#editSpot').onclick=()=>spotForm(d,s.waterId,s);$('#fishHere')?.addEventListener('click',async()=>{if(active?.spotId===s.id)return;let ok=await startSpot(day,s.id);if(ok){$('#modal').close();render()}})}
async function startSpot(day,spotId){if(!day||day.endedAt)return false;day.spotSessions=day.spotSessions||[];let a=activeSpotSession(day);if(a){alert(`Beende zuerst ${a.spotId===spotId?'diesen Spot':'den aktuell laufenden Spot'}.`);return false}let t=now(),sess={id:crypto.randomUUID(),spotId,startedAt:t};try{let wx=await freshWeather();sess.weather=wx;day.weatherSnapshots=[...(day.weatherSnapshots||[]),wx]}catch{}day.spotSessions.push(sess);await put('days',day);return true}
async function endSpot(day){let a=activeSpotSession(day);if(!a)return;let t=now();a.endedAt=t;a.durationMin=mins(a.startedAt,t);try{let wx=await freshWeather();a.endWeather=wx;day.weatherSnapshots=[...(day.weatherSnapshots||[]),wx]}catch{}await put('days',day);render()}
function spotStartForm(d,day){let sp=d.spots.filter(s=>s.waterId===day.waterId),a=activeSpotSession(day);if(a){alert('Beende zuerst den aktuell laufenden Spot.');return}show('Spot starten',sp.map(s=>`<button class="row" data-startspot="${s.id}"><div style="font-size:28px">📍</div><div class="grow"><h3>${esc(spotLabel(d,s.id))}</h3><div class="muted">Startet die Spot-Zeit erst jetzt</div></div>›</button>`).join('')||'<div class="empty">Lege zuerst einen Spot an.</div>');$$('[data-startspot]').forEach(b=>b.onclick=async()=>{if(await startSpot(day,b.dataset.startspot)){$('#modal').close();render()}})}''',
'spot workflow')

replace_once(
'''function dayDetail(d,day){let ev=d.events.filter(e=>e.dayId===day.id).sort((a,b)=>new Date(a.at)-new Date(b.at)),sessions=day.spotSessions||[];show(`Angeltag ${date(day.startedAt)}`,`<p><b>${esc(waterName(d,day.waterId))}</b><br><span class="muted">${time(day.startedAt)}${day.endedAt?' – '+time(day.endedAt):' · läuft'}</span></p>${weatherHTML(day.weather)}<div class="section"><h2>Spot-Zeiten</h2></div>${sessions.map(s=>`<div class="row"><div style="font-size:26px">📍</div><div class="grow"><b>${esc(spotLabel(d,s.spotId))}</b><div class="muted">${time(s.startedAt)}${s.endedAt?' – '+time(s.endedAt):' · läuft'}</div></div><b>${s.endedAt?s.durationMin:mins(s.startedAt,now())} min</b></div>`).join('')||'<div class="empty">Keine Spot-Zeiten.</div>'}<div class="section"><h2>Ereignisse</h2></div>${ev.map(e=>erow(e,d)).join('')||'<div class="empty">Keine Ereignisse.</div>'}`);bindEvents(d)}''',
'''function dayDetail(d,day){let ev=d.events.filter(e=>e.dayId===day.id).sort((a,b)=>new Date(a.at)-new Date(b.at)),sessions=day.spotSessions||[];show(`Angeltag ${date(day.startedAt)}`,`<p><b>${esc(waterName(d,day.waterId))}</b><br><span class="muted">${time(day.startedAt)}${day.endedAt?' – '+time(day.endedAt):' · läuft'}</span></p>${weatherHTML(day.weather)}<div class="section"><h2>Spot-Zeiten</h2></div>${sessions.map(s=>{let end=sessionEnd(day,s),running=!end&&!day.endedAt;return `<div class="row"><div style="font-size:26px">📍</div><div class="grow"><b>${esc(spotLabel(d,s.spotId))}</b><div class="muted">${time(s.startedAt)}${end?' – '+time(end):running?' · läuft':' · beendet'}</div></div><b>${sessionMinutes(day,s)} min</b></div>`}).join('')||'<div class="empty">Keine Spot-Zeiten.</div>'}<div class="section"><h2>Ereignisse</h2></div>${ev.map(e=>erow(e,d)).join('')||'<div class="empty">Keine Ereignisse.</div>'}`);bindEvents(d)}''',
'historical spot display')

replace_once("let m=s.endedAt?s.durationMin:mins(s.startedAt,now());spotMinutes", "let m=sessionMinutes(day,s);spotMinutes", 'stats spot minutes')

# Invariants: the old automatic-switch workflow must be gone.
for forbidden in ['Spot wechseln', 'switchSpot(', 'spotSwitchForm(', 'id="spotSwitch"']:
    if forbidden in s:
        raise SystemExit(f'forbidden legacy token remains: {forbidden}')

if s == original:
    raise SystemExit('No changes produced')

p.write_text(s, encoding='utf-8')
print('v0.5 workflow patch applied safely')
