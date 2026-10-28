/* S-Song Editor service worker: offline app shell + cached CDN libraries */
const VER='ssong-v7',CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png','./icon.svg'],
CDN=['https://cdnjs.cloudflare.com/ajax/libs/lamejs/1.2.1/lame.min.js','https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.7/jsmediatags.min.js'];
self.addEventListener('install',e=>{e.waitUntil((async()=>{const c=await caches.open(VER);await Promise.all(CORE.map(u=>c.add(u).catch(()=>{})));
 await Promise.all(CDN.map(u=>fetch(u,{mode:'no-cors'}).then(r=>c.put(u,r)).catch(()=>{})))})().then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==VER).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(x=>{const y=x.clone();caches.open(VER).then(c=>c.put('./index.html',y));return x}).catch(()=>caches.match('./index.html')));return}
 const own=u.origin===location.origin,cdn=/(^|\.)(cdnjs\.cloudflare\.com|fonts\.googleapis\.com|fonts\.gstatic\.com)$/.test(u.hostname);
 if(!own&&!cdn)return;
 e.respondWith(caches.match(r).then(hit=>{const net=fetch(r).then(x=>{if(x&&(x.ok||x.type==='opaque'))caches.open(VER).then(c=>c.put(r,x.clone()));return x}).catch(()=>hit);return hit||net}))});
