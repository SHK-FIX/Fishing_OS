from pathlib import Path

app = Path('app-v05.html')
s = app.read_text()

old_metrics = '''<div class="metrics"><div class="metric"><b>${catches.length}</b><small>Fänge</small></div><div class="metric"><b>${wa.length}</b><small>Gewässer</small></div><div class="metric"><b>${sp.length}</b><small>Spots</small></div><div class="metric"><b>${da.length}</b><small>Angeltage</small></div></div>'''
new_metrics = '''<div class="metrics"><button class="metric" type="button" data-dashboard-nav="catches"><b>${catches.length}</b><small>Fänge</small><span class="chev">›</span></button><button class="metric" type="button" data-dashboard-nav="waters"><b>${wa.length}</b><small>Gewässer</small><span class="chev">›</span></button><button class="metric" type="button" data-dashboard-nav="spots"><b>${sp.length}</b><small>Spots</small><span class="chev">›</span></button><button class="metric" type="button" data-dashboard-nav="journal"><b>${da.length}</b><small>Angeltage</small><span class="chev">›</span></button></div>'''
if old_metrics not in s:
    raise SystemExit('dashboard metric markup not found')
s = s.replace(old_metrics, new_metrics, 1)

marker = "async function renderDashboard(){"
helper = '''async function renderSpotOverviewAlpha11(){const [spots,waters]=await Promise.all([all('spots'),all('waters')]);const sp=spots.filter(active);$('#pageTitle').textContent='Spots';$('#view').innerHTML=`<div class="section"><h2>Alle Spots</h2></div>${sp.map(s=>{const w=waters.find(x=>x.id===s.waterId);return `<button class="row" data-a11-spot="${s.id}"><div style="width:52px;height:52px;border-radius:14px;background:#edf2ef;display:grid;place-items:center;font-size:24px">📍</div><div class="grow"><h3>${esc(s.name||'Spot')}</h3><p>${esc(w?.name||'Ohne Gewässer')}${s.bottom?' · '+esc(s.bottom):''}</p></div><span class="chev">›</span></button>`}).join('')||'<div class="empty">Noch keine Spots.</div>'}`;$$('[data-a11-spot]').forEach(b=>b.onclick=()=>{state.tab='map';render()})}\n'''
if 'renderSpotOverviewAlpha11' not in s:
    if marker not in s:
        raise SystemExit('renderDashboard marker not found')
    s = s.replace(marker, helper + marker, 1)

bind_marker = "$('#view').innerHTML=html;$('#heroEdit')?.addEventListener('click',chooseHero);"
bind_new = "$('#view').innerHTML=html;$$('[data-dashboard-nav]').forEach(b=>b.onclick=()=>{const d=b.dataset.dashboardNav;if(d==='catches'||d==='waters')return switchTab(d);if(d==='spots')return renderSpotOverviewAlpha11();if(d==='journal')return renderJournal()});$('#heroEdit')?.addEventListener('click',chooseHero);"
if bind_marker not in s:
    raise SystemExit('dashboard binding marker not found')
s = s.replace(bind_marker, bind_new, 1)

# Ensure buttons retain metric appearance and show touch feedback.
css_marker = '.metric small{color:var(--muted);font-size:10px}'
css_new = css_marker + '.metric{color:var(--ink);font:inherit;cursor:pointer;touch-action:manipulation}.metric:active{transform:scale(.97);background:#f4f7f5}.metric .chev{display:block;font-size:14px;line-height:10px;margin-top:3px}'
if css_marker in s and '.metric .chev' not in s:
    s = s.replace(css_marker, css_new, 1)

app.write_text(s)

sw = Path('service-worker.js')
w = sw.read_text()
w = w.replace("const C='fishing-os-v0.5.0-alpha10';", "const C='fishing-os-v0.5.0-alpha11';")
w = w.replace("const C='fishing-os-v0.5.0-alpha1';", "const C='fishing-os-v0.5.0-alpha11';")
sw.write_text(w)
print('alpha11 dashboard navigation applied directly to main app')
