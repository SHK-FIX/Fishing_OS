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

/* Fishing OS v0.5 alpha9 repair layer
   - serializes spot/session mutations to prevent duplicate open visits
   - makes spot start idempotent for repeated iPhone taps
   - closes every open visit/session when changing water or finishing a day
   - captures richer weather details
   - makes journal durations sane even for older incomplete visit records
*/
(function(){
  let sessionMutation=Promise.resolve();
  function withSessionMutation(task){
    const run=sessionMutation.then(task,task);
    sessionMutation=run.catch(()=>{});
    return run;
  }

  async function newestOpenSession(dayId){
    const ss=(await all('sessions')).filter(s=>active(s)&&s.dayId===dayId&&!s.endedAt)
      .sort((a,b)=>new Date(b.startedAt||0)-new Date(a.startedAt||0));
    return ss[0]||null;
  }
  async function newestOpenVisit(sessionId){
    const vv=(await all('spotVisits')).filter(v=>active(v)&&v.sessionId===sessionId&&!v.endedAt)
      .sort((a,b)=>new Date(b.startedAt||0)-new Date(a.startedAt||0));
    return vv[0]||null;
  }

  activeSession=async function(){
    const d=await activeDay();
    return d?newestOpenSession(d.id):null;
  };
  activeVisit=async function(){
    const s=await activeSession();
    return s?newestOpenVisit(s.id):null;
  };

  async function closeOpenVisits(sessionId,endedAt=iso()){
    const open=(await all('spotVisits')).filter(v=>active(v)&&v.sessionId===sessionId&&!v.endedAt);
    for(const v of open){ v.endedAt=endedAt; await put('spotVisits',v); }
    return open;
  }
  async function closeOpenSessions(dayId,endedAt=iso()){
    const open=(await all('sessions')).filter(s=>active(s)&&s.dayId===dayId&&!s.endedAt);
    for(const s of open){
      await closeOpenVisits(s.id,endedAt);
      s.endedAt=endedAt;
      await put('sessions',s);
    }
    return open;
  }

  endVisit=async function(){
    const s=await activeSession();
    if(!s)return null;
    const ended=iso();
    const closed=await closeOpenVisits(s.id,ended);
    return closed[0]||null;
  };

  startSpot=async function(spotId){
    return withSessionMutation(async()=>{
      const s=await activeSession();
      if(!s){ alert('Kein aktiver Gewässerabschnitt.'); return null; }
      const current=await newestOpenVisit(s.id);
      if(current?.spotId===spotId) return current;
      await closeOpenVisits(s.id,iso());
      const v={id:uid(),sessionId:s.id,spotId,startedAt:iso(),endedAt:null,deletedAt:null};
      await put('spotVisits',v);
      const spot=await get('spots',spotId);
      if(spot){
        try{
          const lat=+spot.lat,lon=+spot.lon;
          if(Number.isFinite(lat)&&Number.isFinite(lon)) await captureWeather('spotStart',{lat,lon},s.id,v.id);
        }catch(err){ console.warn('Spot weather capture failed',err); }
      }
      render();
      return v;
    });
  };

  stopSpot=async function(){
    return withSessionMutation(async()=>{
      const s=await activeSession();
      if(s) await closeOpenVisits(s.id,iso());
      render();
    });
  };

  startWaterSession=async function(waterId,dayId=null){
    return withSessionMutation(async()=>{
      const day=dayId?await get('days',dayId):await activeDay();
      if(!day)return null;
      const now=iso();
      await closeOpenSessions(day.id,now);
      const s={id:uid(),dayId:day.id,waterId,startedAt:iso(),endedAt:null,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,deletedAt:null};
      await put('sessions',s);
      try{const p=await locationNow();await captureWeather('sessionStart',p,s.id,null)}catch{}
      return s;
    });
  };

  finishDay=async function(){
    return withSessionMutation(async()=>{
      const d=await activeDay();
      if(!d)return;
      const ended=iso();
      await closeOpenSessions(d.id,ended);
      d.endedAt=ended;
      await put('days',d);
      render();
    });
  };

  captureWeather=async function(source,pos,sessionId,visitId){
    if(!pos||!Number.isFinite(+pos.lat)||!Number.isFinite(+pos.lon))throw new Error('Keine Position');
    const lat=+pos.lat,lon=+pos.lon;
    const payload={id:uid(),sessionId,visitId:visitId||null,capturedAt:iso(),timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,lat,lon,source,status:'unavailable',temperature:null,apparentTemperature:null,pressure:null,humidity:null,windSpeed:null,windGust:null,windDirection:null,cloudCover:null,precipitation:null,sunrise:null,sunset:null,deletedAt:null};
    try{
      const url=`https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(lat)}&longitude=${encodeURIComponent(lon)}&current=temperature_2m,apparent_temperature,relative_humidity_2m,surface_pressure,wind_speed_10m,wind_gusts_10m,wind_direction_10m,cloud_cover,precipitation&daily=sunrise,sunset&forecast_days=1&wind_speed_unit=kmh&timezone=auto`;
      const r=await fetch(url,{cache:'no-store'});
      if(!r.ok)throw new Error('Wetterdienst nicht erreichbar');
      const j=await r.json(),c=j.current||{},d=j.daily||{};
      payload.temperature=c.temperature_2m??null;
      payload.apparentTemperature=c.apparent_temperature??null;
      payload.pressure=c.surface_pressure??null;
      payload.humidity=c.relative_humidity_2m??null;
      payload.windSpeed=c.wind_speed_10m??null;
      payload.windGust=c.wind_gusts_10m??null;
      payload.windDirection=c.wind_direction_10m??null;
      payload.cloudCover=c.cloud_cover??null;
      payload.precipitation=c.precipitation??null;
      payload.sunrise=Array.isArray(d.sunrise)?d.sunrise[0]??null:null;
      payload.sunset=Array.isArray(d.sunset)?d.sunset[0]??null:null;
      payload.status='live';
    }catch(e){ payload.status='offline'; }
    await put('weather',payload);
    return payload;
  };

  function weatherValue(v,suffix=''){return v==null||Number.isNaN(+v)?'–':`${Math.round(+v)}${suffix}`;}
  async function enrichWeatherPanel(){
    const ctx=await currentContext();
    if(!ctx?.session)return;
    const w=await latestWeather(ctx.session.id);
    const card=document.querySelector('.card.session');
    if(!card||!w)return;
    let extra=card.querySelector('.weatherDetail.alpha9Extra');
    if(extra)extra.remove();
    extra=document.createElement('div');
    extra.className='weatherDetail alpha9Extra';
    extra.innerHTML=`<div><small>Gefühlt</small><b>${weatherValue(w.apparentTemperature,'°')}</b></div><div><small>Feuchte</small><b>${weatherValue(w.humidity,' %')}</b></div><div><small>Böen</small><b>${weatherValue(w.windGust,' km/h')}</b></div><div><small>Niederschlag</small><b>${w.precipitation==null?'–':(+w.precipitation).toFixed(1)+' mm'}</b></div>`;
    const details=card.querySelector('.weatherDetail');
    if(details) details.insertAdjacentElement('afterend',extra);
    if(w.sunrise||w.sunset){
      const line=document.createElement('div');
      line.className='small muted alpha9Sun';
      line.style.marginTop='7px';
      line.textContent=`Sonne ${w.sunrise?fmtTime(w.sunrise):'–'} ↑ · ${w.sunset?fmtTime(w.sunset):'–'} ↓`;
      extra.insertAdjacentElement('afterend',line);
    }
  }

  const renderDashboardAlpha9=renderDashboard;
  renderDashboard=async function(){
    await renderDashboardAlpha9();
    await enrichWeatherPanel();
  };

  renderJournal=async function(){
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
        const sessionEnd=sess.endedAt||d.endedAt||null;
        items.push({at:new Date(sess.startedAt).getTime(),order:0,html:`<div class="timelineItem"><b>${esc(water?.name||'Gewässer')}</b><small>${fmtTime(sess.startedAt)}${sessionEnd?' – '+fmtTime(sessionEnd):' – läuft'}</small></div>`});
        let cursor=sess.startedAt;
        for(let i=0;i<vv.length;i++){
          const v=vv[i],next=vv[i+1];
          if(cursor&&new Date(v.startedAt)>new Date(cursor)+1000){
            items.push({at:new Date(cursor).getTime()+1,order:1,html:`<div class="timelineItem travel"><b>Unterwegs · kein Spot aktiv</b><small>${fmtTime(cursor)} – ${fmtTime(v.startedAt)} · ${fmtDuration(cursor,v.startedAt)}</small></div>`});
          }
          const inferredEnd=v.endedAt||(next?.startedAt)||sessionEnd||null;
          const spot=spots.find(x=>x.id===v.spotId);
          items.push({at:new Date(v.startedAt).getTime(),order:2,html:`<div class="timelineItem"><b>${esc(spot?.name||'Spot')}</b><small>${fmtTime(v.startedAt)} – ${inferredEnd?fmtTime(inferredEnd):'läuft'} · ${fmtDuration(v.startedAt,inferredEnd||iso())}</small></div>`});
          cursor=inferredEnd||iso();
        }
        const end=sessionEnd||iso();
        if(cursor&&new Date(end)>new Date(cursor)+1000){
          items.push({at:new Date(cursor).getTime()+1,order:1,html:`<div class="timelineItem travel"><b>Unterwegs · kein Spot aktiv</b><small>${fmtTime(cursor)} – ${sessionEnd?fmtTime(end):'jetzt'} · ${fmtDuration(cursor,end)}</small></div>`});
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
      const dayEnd=d.endedAt||null;
      return `<div class="card"><div class="section" style="margin:0"><div><h2 style="margin:0">${fmtDate(d.startedAt||d.start)}</h2><div class="muted">${names.join(' → ')||'Historischer Angeltag'}</div></div><span class="badge">${dayEvents.filter(e=>e.type==='catch').length} Fänge</span></div><p>${fmtTime(d.startedAt||d.start)} – ${dayEnd?fmtTime(dayEnd):'läuft'} · ${fmtDuration(d.startedAt||d.start,dayEnd||iso())}</p>${timeline?`<div class="timeline">${timeline}</div>`:''}</div>`;
    }).join('')||'<div class="empty">Noch keine Angeltage.</div>';
    $$('[data-journal-event]').forEach(el=>el.onclick=()=>showEventDetail(el.dataset.journalEvent));
  };
})();
