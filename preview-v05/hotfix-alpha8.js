/* Fishing OS v0.5 alpha8
   Resilient quick-entry binding for iPhone/PWA.
   Also binds the four dashboard metric cards in the deployed preview.
   Photo inputs in event forms keep the native iPhone source chooser (camera + library).
*/
(function(){
  async function launchQuick(type){
    try{
      const ctx=await currentContext();
      if(!ctx.day||!ctx.session){ alert('Starte zuerst einen Angeltag.'); return; }
      if(!ctx.spot){
        if(typeof chooseSpotForQuickEvent==='function') return chooseSpotForQuickEvent(type);
        if(typeof chooseSpotForEvent==='function') return chooseSpotForEvent(type,ctx);
      }
      return quickEvent(type);
    }catch(err){
      console.error('Quick entry failed',err);
      alert('Schnelleintrag konnte nicht geöffnet werden. Bitte Seite neu laden.');
    }
  }
  window.foLaunchQuick=launchQuick;

  function bindQuickButtons(root=document){
    root.querySelectorAll?.('[data-event]').forEach(btn=>{
      btn.style.pointerEvents='auto';
      btn.style.touchAction='manipulation';
      btn.onclick=function(ev){
        ev.preventDefault();
        ev.stopPropagation();
        launchQuick(btn.dataset.event);
      };
    });
  }

  function enableNativePhotoChooser(root=document){
    root.querySelectorAll?.('#eventForm input[type="file"][name="photo"]').forEach(input=>{
      input.removeAttribute('capture');
      input.setAttribute('accept','image/*');
    });
  }

  async function renderSpotOverviewPreview(){
    const [spots,waters]=await Promise.all([all('spots'),all('waters')]);
    const sp=spots.filter(active);
    $('#pageTitle').textContent='Spots';
    $('#view').innerHTML=`<div class="section"><h2>Alle Spots</h2></div>${sp.map(s=>{const w=waters.find(x=>x.id===s.waterId);return `<button class="row" data-preview-spot="${s.id}"><div style="width:52px;height:52px;border-radius:14px;background:#edf2ef;display:grid;place-items:center;font-size:24px">📍</div><div class="grow"><h3>${esc(s.name||'Spot')}</h3><p>${esc(w?.name||'Ohne Gewässer')}${s.bottom?' · '+esc(s.bottom):''}</p></div><span class="chev">›</span></button>`}).join('')||'<div class="empty">Noch keine Spots.</div>'}`;
    $$('[data-preview-spot]').forEach(b=>b.onclick=()=>{ state.tab='map'; render(); });
  }

  function bindDashboardMetrics(root=document){
    const metrics=root.querySelector?.('.metrics');
    if(!metrics || metrics.classList.contains('statMetrics')) return;
    const cards=metrics.querySelectorAll('.metric');
    if(cards.length<4) return;
    const go=[
      ()=>switchTab('catches'),
      ()=>switchTab('waters'),
      ()=>renderSpotOverviewPreview(),
      ()=>renderJournal()
    ];
    [...cards].slice(0,4).forEach((card,i)=>{
      if(card.dataset.dashboardBound==='1') return;
      card.dataset.dashboardBound='1';
      card.setAttribute('role','button');
      card.setAttribute('tabindex','0');
      card.style.pointerEvents='auto';
      card.style.cursor='pointer';
      card.style.touchAction='manipulation';
      if(!card.querySelector('.dashChev')) card.insertAdjacentHTML('beforeend','<span class="dashChev" aria-hidden="true" style="display:block;color:#a2aaa6;font-size:14px;line-height:10px;margin-top:3px">›</span>');
      card.onclick=function(ev){ ev.preventDefault(); ev.stopPropagation(); go[i](); };
      card.onkeydown=function(ev){ if(ev.key==='Enter'||ev.key===' '){ ev.preventDefault(); go[i](); } };
    });
  }

  function cleanupStatisticChevrons(root=document){
    root.querySelectorAll?.('.statMetrics .dashChev').forEach(el=>el.remove());
  }

  bindQuickButtons();
  enableNativePhotoChooser();
  cleanupStatisticChevrons();
  bindDashboardMetrics();
  const observer=new MutationObserver(muts=>{
    for(const m of muts){
      for(const n of m.addedNodes){
        if(n.nodeType===1){
          bindQuickButtons(n);
          enableNativePhotoChooser(document);
          cleanupStatisticChevrons(document);
          bindDashboardMetrics(document);
        }
      }
    }
  });
  observer.observe(document.body,{childList:true,subtree:true});

  document.addEventListener('pointerup',ev=>{
    const btn=ev.target.closest?.('[data-event]');
    if(!btn) return;
    if(ev.pointerType==='touch'){
      ev.preventDefault();
      launchQuick(btn.dataset.event);
    }
  },{capture:true,passive:false});
})();
