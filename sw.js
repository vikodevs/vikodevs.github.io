let cacheName="hello-pwa";
let filesToCache=['/','/index.html','/css/style.css','/js/script.js'];
self.addEventListener("install",function(e){
  e.waitUntil(
    catches.open(cacheName).then(function(cache){
      return cache.addAll(filesToCache)
    })
    );
});
self.addEventListener("fetch",function(e){
  e.respondWith(
    caches.match(e.request).then(function(response){
      return response || fetch(e.request)
    })
    );
});
