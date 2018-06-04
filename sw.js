let staticCacheName = 'mws-static-v1';
let contentImgsCache = 'mws-content-imgs';
let allCaches = [
  staticCacheName /*,
  contentImgsCache*/
];

//console.log('viewport:'+ vwWidth);


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

self.addEventListener('install', function(event) {
  //window.alert('install service worker');
  console.log('Install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      console.log('Caching sucess');
      return cache.addAll(staticFilesName);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('Activating new service worker...');
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