from pathlib import Path
p=Path('index.html')
s=p.read_text()

def one(old,new,label):
    global s
    n=s.count(old)
    if n!=1: raise SystemExit(f'guard failed {label}: expected 1, got {n}')
    s=s.replace(old,new)

one("async function centerMe(){try{let p=await gpsOnce();if(meMarker)state.map.removeLayer(meMarker);if(meCircle)state.map.removeLayer(meCircle);meMarker=L.circleMarker([p.lat,p.lon],{radius:9,weight:3,color:'#fff',fillColor:'#0aa0a8',fillOpacity:1}).addTo(state.map).bindPopup('Dein aktueller Standort');if(Number.isFinite(p.accuracy))meCircle=L.circle([p.lat,p.lon],{radius:p.accuracy,weight:1,opacity:.5,fillOpacity:.08}).addTo(state.map);state.map.setView([p.lat,p.lon],Math.max(state.map.getZoom(),16));}catch{alert('Dein Standort konnte nicht gelesen werden. Prüfe die Standortfreigabe.')}}$('#mapMe').onclick=centerMe;centerMe();","async function locateMe(center=false){try{let p=await gpsOnce();if(meMarker)state.map.removeLayer(meMarker);if(meCircle)state.map.removeLayer(meCircle);meMarker=L.circleMarker([p.lat,p.lon],{radius:9,weight:3,color:'#fff',fillColor:'#0aa0a8',fillOpacity:1}).addTo(state.map).bindPopup('Dein aktueller Standort');if(Number.isFinite(p.accuracy))meCircle=L.circle([p.lat,p.lon],{radius:p.accuracy,weight:1,opacity:.5,fillOpacity:.08}).addTo(state.map);if(center)state.map.setView([p.lat,p.lon],Math.max(state.map.getZoom(),16));}catch{if(center)alert('Dein Standort konnte nicht gelesen werden. Prüfe die Standortfreigabe.')}}$('#mapMe').onclick=()=>locateMe(true);locateMe(false);",'map location UX')
one("${[['catch','🐟','Fang'],['bite','🪝','Biss'],['lost','🎣','Im Drill verloren'],['follow','🐠','Nachläufer'],['observe','🔭','Beobachtung']].map(x=>`<button class=\"card\" data-qa=\"${x[0]}\" style=\"font-size:20px\">${x[1]}<br><b>${x[2]}</b></button>`).join('')}","${[['catch','🐟','Fang'],['bite','🪝','Biss'],['lost','🎣','Im Drill verloren'],['follow','🐠','Nachläufer'],['observe','🔭','Beobachtung'],['lureloss','💥','Köderverlust']].map(x=>`<button class=\"card\" data-qa=\"${x[0]}\" style=\"font-size:20px\">${x[1]}<br><b>${x[2]}</b></button>`).join('')}",'plus menu lure loss')
one("a.download='FishingOS-v0.4-Backup-'","a.download='FishingOS-v0.5-Backup-'",'backup filename')
p.write_text(s)
print('v0.5 pretest polish applied')
