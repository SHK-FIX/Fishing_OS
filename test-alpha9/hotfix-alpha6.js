/* Fishing OS v0.5 alpha6
   Full journal timeline: sessions, spots, travel gaps and all events chronologically.
*/

function journalEventSummary(e,speciesById){
  const sp=speciesById.get(e.speciesId);
  const bits=[];
  if(e.type==='catch'){
    if(sp?.name)bits.push(sp.name);
    if(e.lengthCm)bits.push(`${e.lengthCm} cm`);
    if(e.weightLbs)bits.push(`${e.weightLbs} lbs`);
  }
  if(e.gearName)bits.push(`Gerät: ${e.gearName}`);
  if(e.methodName)bits.push(`Rig: ${e.methodName}`);
  if(e.lureName||e.lureText)bits.push(`Köder: ${e.lureName||e.lureText}`);
  if(e.equipmentNote)bits.push(e.equipmentNote);
  if(e.note)bits.push(e.note);
  return bits.join(' · ');
}

async function renderJournal(){
  const [days,sessions,waters,events,visits,spots,species]=await Promise.all(['days','sessions','waters','events','spotVisits','spots','species'].map(all));
  $('#pageTitle').textContent='Tagebuch';
  const ds=days.filter(active).sort((a,b)=>new Date(b.startedAt||b.start||0)-new Date(a.startedAt||a.start||0));
  const speciesById=new Map(species.filter(active).map(x=>[x.id,x]));

  $('#view').innerHTML=ds.map(d=>{
    const ss=sessions.filter(s=>active(s)&&s.dayId===d.id).sort((a,b)=>new Date(a.startedAt)-new Date(b.startedAt));
    const names=ss.map(s=>waters.find(w=>w.id===s.waterId)?.name).filter(Boolean);
    const dayEvents=events.filter(e=>active(e)&&e.dayId===d.id).sort((a,b)=>new Date(a.occurredAt||a.at||0)-new Date(b.occurredAt||b.at||0));
    let timeline='';

    for(const sess of ss){
      const water=waters.find(w=>w.id===sess.waterId);
      const vv=visits.filter(v=>active(v)&&v.sessionId===sess.id).sort((a,b)=>new Date(a.startedAt)-new Date(b.startedAt));
      const se=dayEvents.filter(e=>e.sessionId===sess.id);
      const items=[];

      items.push({at:new Date(sess.startedAt).getTime(),order:0,html:`<div class="timelineItem"><b>${esc(water?.name||'Gewässer')}</b><small>${fmtTime(sess.startedAt)}${sess.endedAt?' – '+fmtTime(sess.endedAt):' – läuft'}</small></div>`});

      let cursor=sess.startedAt;
      for(const v of vv){
        if(cursor&&new Date(v.startedAt)>new Date(cursor)+1000){
          items.push({at:new Date(cursor).getTime()+1,order:1,html:`<div class="timelineItem travel"><b>Unterwegs · kein Spot aktiv</b><small>${fmtTime(cursor)} – ${fmtTime(v.startedAt)} · ${fmtDuration(cursor,v.startedAt)}</small></div>`});
        }
        const spot=spots.find(x=>x.id===v.spotId);
        items.push({at:new Date(v.startedAt).getTime(),order:2,html:`<div class="timelineItem"><b>${esc(spot?.name||'Spot')}</b><small>${fmtTime(v.startedAt)} – ${v.endedAt?fmtTime(v.endedAt):'läuft'} · ${fmtDuration(v.startedAt,v.endedAt||iso())}</small></div>`});
        cursor=v.endedAt||iso();
      }
      const end=sess.endedAt||(d.endedAt?d.endedAt:iso());
      if(cursor&&new Date(end)>new Date(cursor)+1000){
        items.push({at:new Date(cursor).getTime()+1,order:1,html:`<div class="timelineItem travel"><b>Unterwegs · kein Spot aktiv</b><small>${fmtTime(cursor)} – ${sess.endedAt||d.endedAt?fmtTime(end):'jetzt'} · ${fmtDuration(cursor,end)}</small></div>`});
      }

      for(const e of se){
        const at=e.occurredAt||e.at;
        const spot=spots.find(x=>x.id===e.spotId);
        const summary=journalEventSummary(e,speciesById);
        const photo=e.photo?`<img src="${e.photo}" style="width:52px;height:52px;object-fit:cover;border-radius:12px;margin-top:7px">`:'';
        items.push({at:new Date(at).getTime(),order:3,html:`<div class="timelineItem" data-journal-event="${e.id}"><b>${EVENT_ICON[e.type]||'•'} ${esc(EVENT_LABEL[e.type]||e.type||'Ereignis')}</b><small>${fmtTime(at)}${spot?` · ${esc(spot.name)}`:''}</small>${summary?`<div class="small" style="margin-top:4px">${esc(summary)}</div>`:''}${photo}</div>`});
      }

      items.sort((a,b)=>a.at-b.at||a.order-b.order);
      timeline+=items.map(x=>x.html).join('');
    }

    return `<div class="card"><div class="section" style="margin:0"><div><h2 style="margin:0">${fmtDate(d.startedAt||d.start)}</h2><div class="muted">${names.join(' → ')||'Historischer Angeltag'}</div></div><span class="badge">${dayEvents.filter(e=>e.type==='catch').length} Fänge</span></div><p>${fmtTime(d.startedAt||d.start)} – ${d.endedAt?fmtTime(d.endedAt):'läuft'} · ${fmtDuration(d.startedAt||d.start,d.endedAt||iso())}</p>${timeline?`<div class="timeline">${timeline}</div>`:''}</div>`;
  }).join('')||'<div class="empty">Noch keine Angeltage.</div>';

  $$('[data-journal-event]').forEach(el=>el.onclick=()=>showEventDetail(el.dataset.journalEvent));
}
