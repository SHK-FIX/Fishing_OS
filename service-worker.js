const C='fishing-os-v0.5.0-alpha1';
const A=['./','./index.html','./app-v05.html','./manifest.json','./assets/icons/icon-180.png','./assets/icons/icon-192.png','./assets/icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const u=new URL(e.request.url);
 const networkFirst=u.hostname.includes('open-meteo.com')||u.hostname.includes('arcgisonline.com')||u.hostname.includes('openstreetmap.org')||u.hostname.includes('unpkg.com');
 if(networkFirst){e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(C).then(c=>c.put(e.request,x));return r}).catch(()=>caches.match(e.request)));return}
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{const y=x.clone();caches.open(C).then(c=>c.put(e.request,y));return x}).catch(()=>caches.match('./app-v05.html'))));
});
