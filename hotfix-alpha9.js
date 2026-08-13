/* Fishing OS v0.5 alpha9
   Dashboard metrics are navigation controls, not dead counters.
*/
(() => {
  const baseRenderDashboard = renderDashboard;

  async function renderSpotOverviewAlpha9(){
    const [spots,waters]=await Promise.all([all('spots'),all('waters')]);
    const sp=spots.filter(active);
    $('#pageTitle').textContent='Spots';
    $('#view').innerHTML=`<div class="section"><h2>Alle Spots</h2></div>${sp.map(s=>{const w=waters.find(x=>x.id===s.waterId);return `<button class="row" data-alpha9-spot="${s.id}"><div style="width:52px;height:52px;border-radius:14px;background:#edf2ef;display:grid;place-items:center;font-size:24px">📍</div><div class="grow"><h3>${esc(s.name||'Spot')}</h3><p>${esc(w?.name||'Ohne Gewässer')}${s.bottom?' · '+esc(s.bottom):''}</p></div><span class="chev">›</span></button>`}).join('')||'<div class="empty">Noch keine Spots.</div>'}`;
    $$('[data-alpha9-spot]').forEach(b=>b.onclick=async()=>{
      const d=await snapshot();
      const s=d.spots.find(x=>x.id===b.dataset.alpha9Spot);
      if(typeof showSpotDetail==='function') return showSpotDetail(s,d);
      if(typeof spotDetail==='function') return spotDetail(d,s);
      state.tab='map'; render();
    });
  }

  renderDashboard = async function(){
    await baseRenderDashboard();
    const cards=$$('.metrics .metric');
    if(cards.length<4)return;
    const destinations=[
      ()=>switchTab('catches'),
      ()=>switchTab('waters'),
      ()=>renderSpotOverviewAlpha9(),
      ()=>renderJournal()
    ];
    cards.slice(0,4).forEach((card,i)=>{
      card.setAttribute('role','button');
      card.setAttribute('tabindex','0');
      card.setAttribute('aria-label',['Fänge öffnen','Gewässer öffnen','Spots öffnen','Angeltage öffnen'][i]);
      card.style.cursor='pointer';
      card.style.position='relative';
      card.style.touchAction='manipulation';
      if(!card.querySelector('.alpha9chev')) card.insertAdjacentHTML('beforeend','<span class="alpha9chev" aria-hidden="true">›</span>');
      const go=()=>destinations[i]();
      card.onclick=go;
      card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}};
    });
  };

  const style=document.createElement('style');
  style.textContent=`.metrics .metric[role="button"]{transition:transform .08s ease,background .08s ease;padding-bottom:15px}.metrics .metric[role="button"]:active{transform:scale(.97);background:#f4f7f5}.alpha9chev{display:block;color:#a2aaa6;font-size:16px;line-height:12px;margin-top:3px}`;
  document.head.appendChild(style);

  // The main app performs its first dashboard render before hotfix files load.
  // Re-render once after installing this override so the current four metric
  // cards receive their handlers immediately, including after a fresh reload.
  Promise.resolve().then(()=>{
    if(typeof state!=='undefined' && state.tab==='dashboard' && typeof render==='function') render();
  });
})();
