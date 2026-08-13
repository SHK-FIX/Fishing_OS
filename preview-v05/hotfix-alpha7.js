/* Fishing OS v0.5 alpha7
   - harden quick-entry tap handling
   - keep quick entries usable with or without an active spot
   - existing spot selection or instant new spot before event form
*/

async function chooseSpotForQuickEvent(type){
  const ctx=await currentContext();
  if(!ctx.day||!ctx.session)return alert('Starte zuerst einen Angeltag.');
  const spots=(await all('spots')).filter(s=>active(s)&&s.waterId===ctx.session.waterId);
  showModal(EVENT_LABEL[type],`<div class="form"><div class="warning">Aktuell ist kein Spot aktiv. Du kannst einen vorhandenen Spot wählen oder direkt hier einen neuen Spot anlegen.</div>${spots.map(s=>`<button type="button" class="row" data-qe-spot="${s.id}"><div class="grow"><h3>${esc(s.name)}</h3><p>${s.bottom?esc(s.bottom):'Keine Details'}</p></div><span class="chev">›</span></button>`).join('')||'<div class="empty">Noch kein Spot vorhanden.</div>'}<button type="button" class="btn full" id="qeNewSpot">＋ Spot hier anlegen & weiter</button><button type="button" class="btn secondary full" id="qeCancel">Abbrechen</button></div>`);
  $$('[data-qe-spot]').forEach(b=>b.onclick=async()=>{const id=b.dataset.qeSpot;closeModal();await startSpot(id);await quickEvent(type)});
  $('#qeNewSpot').onclick=async()=>{closeModal();await minimalSpotForContext(ctx.session);await quickEvent(type)};
  $('#qeCancel').onclick=closeModal;
}

const quickEventFormAlpha7=quickEvent;
quickEvent=async function(type){
  const ctx=await currentContext();
  if(!ctx.day||!ctx.session)return alert('Starte zuerst einen Angeltag.');
  if(!ctx.spot)return chooseSpotForQuickEvent(type);
  return quickEventFormAlpha7(type);
};

// Capture-phase delegation prevents stale/missing per-button handlers after rerenders.
document.addEventListener('click',e=>{
  const b=e.target.closest?.('[data-event]');
  if(!b)return;
  e.preventDefault();
  e.stopImmediatePropagation();
  const type=b.dataset.event;
  if(type)quickEvent(type);
},true);
