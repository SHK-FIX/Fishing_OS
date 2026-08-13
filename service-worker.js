const C='fishing-os-v0.5.0-alpha11';
const A=['./','./index.html','./app-v05.html','./manifest.json','./hotfix-alpha3.js','./hotfix-alpha9.js','./assets/icons/icon-180.png','./assets/icons/icon-192.png','./assets/icons/icon-512.png'];

self.addEventListener('install',e=>e.waitUntil(
  caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())
));

self.addEventListener('activate',e=>e.waitUntil(
  caches.keys()
    .then(keys=>Promise.all(keys.filter(x=>x!==C).map(x=>caches.delete(x))))
    .then(()=>self.clients.claim())
));

self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  const sameOrigin=u.origin===self.location.origin;
  const liveExternal=u.hostname.includes('open-meteo.com')||u.hostname.includes('arcgisonline.com')||u.hostname.includes('openstreetmap.org')||u.hostname.includes('unpkg.com');

  // Online: always prefer the newest Fishing OS code and live services.
  // Offline: fall back to the last cached working copy.
  if(sameOrigin||liveExternal){
    e.respondWith(
      fetch(e.request,{cache:'no-store'})
        .then(r=>{
          if(r&&r.ok){const copy=r.clone();caches.open(C).then(c=>c.put(e.request,copy));}
          return r;
        })
        .catch(()=>caches.match(e.request).then(r=>r||caches.match('./app-v05.html')))
    );
    return;
  }

  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
