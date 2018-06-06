let staticCacheName = 'mws-static-v1';
let contentImgsCache = 'mws-content-imgs';
let allCaches = [
  staticCacheName,
  contentImgsCache
];




let staticFilesName = [
  'index.html',
  'restaurant.html',
  'css/styles.css',
  'css/responsive.css',
  'js/dbhelper.js',
  'js/main.js',
  'js/restaurant_info.js',
  'data/restaurants.json'
]

// caching medium size images to provide image callback
/*for (let i=1; i<=10; i++) {  
  contentImgsCache.push(`${i}_medium.jpg`);
}

console.log('Image cache:');
console.log(contentImgsCache);
*/

self.addEventListener('install', function(event) {  
  //console.log('Install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      //console.log('Caching sucess');
      return cache.addAll(staticFilesName);
    })
  );
});

self.addEventListener('activate', function(event) {
  //console.log('Activating new service worker...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        // only get the caches that start with mws and delete other caches.
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('mws-') &&
                 !allCaches.includes(cacheName);
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  //console.log(`Fetching ${event.request.url}`);
  event.respondWith(
    caches.open(allCaches).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});