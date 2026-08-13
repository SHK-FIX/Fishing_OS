/* Fishing OS v0.5 alpha8
   Resilient quick-entry binding for iPhone/PWA.
   Avoids stale button handlers after rerenders and keeps no-spot flow available.
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

  bindQuickButtons();
  const observer=new MutationObserver(muts=>{
    for(const m of muts){
      for(const n of m.addedNodes){ if(n.nodeType===1) bindQuickButtons(n); }
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
