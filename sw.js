const CACHE='crystalos-offline-v1';
const CORE=['./','./index.html','./manifest.json','./sw.js'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  event.respondWith(
    caches.match(req).then(cached=>cached || fetch(req).then(res=>{
      if(res && res.status===200 && (res.type==='basic' || res.type==='cors')){
        const copy=res.clone(); caches.open(CACHE).then(c=>c.put(req,copy));
      }
      return res;
    }).catch(()=>caches.match('./index.html')))
  );
});
