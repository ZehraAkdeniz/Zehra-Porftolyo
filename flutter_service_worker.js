'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"apple-touch-icon.png": "558fb18c52199d2cb76cd0a94e381cd2",
"assets/asset/0.svg": "cb49f48aa1be4e2d9d4dc65640dac584",
"assets/asset/bc.png": "086de48c9c77d407fb9c8148910bb155",
"assets/asset/bgbottom.svg": "36c3b0baa32dfb0fb6d057debc9094f4",
"assets/asset/images/0.png": "e12f71ec5087389cb80b327a0d52cde3",
"assets/asset/images/1.png": "e596bfd3a64ba76e84cec346e8395b13",
"assets/asset/images/2.png": "107720792b18e7e0094d4874feb8a87e",
"assets/asset/images/3.png": "b0a530cf57b12a01282462b4bad2b98e",
"assets/asset/images/4.png": "72663d77305f159041caf3655689a4ea",
"assets/asset/images/5.png": "ecdbd6a07c4a09edce7c66d100f51f1d",
"assets/asset/images/6.png": "e967218a5c79e6a7a767477a720641ee",
"assets/asset/images/7.png": "57cb22f6ae313b601a375e5104749fd7",
"assets/asset/images/8.png": "693f2da7ed03590579eeee8924b932a1",
"assets/asset/Jost-Bold.ttf": "76eb83c74dcd2522b10cf958893d3182",
"assets/asset/Jost-ExtraBold.ttf": "1b1bb84839743b32bb09fee33ad0422a",
"assets/asset/Jost-Regular.ttf": "3ccf189874e82464a4233d9dccd41c97",
"assets/asset/Jost-SemiBold.ttf": "50dcc642bc107b54d474ab83800ac187",
"assets/asset/mektup.png": "4b2c70182abaf70910ce80db5dd7f850",
"assets/asset/pp.png": "10b65f0c148fcf1ad7af4353396f3aee",
"assets/asset/programs/0.png": "240ed00f3bfeb0eeaa9dc60aa65a67a0",
"assets/asset/programs/1.png": "a1c4056e1a192f0e7c22ae481d433904",
"assets/asset/programs/2.png": "067134911a7769889e4c68356069425b",
"assets/asset/programs/3.png": "48f6b11ae1f459a2a8a8625159c0ef5e",
"assets/asset/programs/4.png": "a6a147eadb16276e35d37ee9c00ea2a3",
"assets/asset/programs/5.png": "702616d1191a97eaa15f313ded013085",
"assets/asset/programs/6.png": "c394b2fa5b15a13cc0cc89df1665bee1",
"assets/asset/ReemKufi-Regular.ttf": "5150fe9c1a0688d20b99b6f6a6d2567c",
"assets/asset/telefon.png": "cb8a8cc64a7ca929498146a0a5ea97a1",
"assets/asset/videos/0.mp4": "0dca356b1345e4cc14866c00cb9ac035",
"assets/asset/videos/1.mp4": "0ebb2c57161b96c978fc1a16a9798271",
"assets/asset/videos/2.mp4": "1129b562c04f259e0121d7cf82d0643b",
"assets/asset/videos/3.mp4": "63e4fa60c329b60cd4cd379dacc8da9e",
"assets/asset/videos/4.mp4": "d01cb81132d955a91b3eedc5c683706d",
"assets/asset/videos/5.mp4": "704bf5411bf994e7519c93c133318570",
"assets/AssetManifest.bin": "8d9508962666f4ab42493a97d7884c8a",
"assets/AssetManifest.bin.json": "78d9cd633d1b8f74ab31c7e8428f0527",
"assets/AssetManifest.json": "fde73928b74d3d00aa2b4b55509e8a43",
"assets/FontManifest.json": "6185ec72dbfdd1bd18b0fb30db6fac8b",
"assets/fonts/MaterialIcons-Regular.otf": "e467e2b02788e01501da493a5737158b",
"assets/NOTICES": "0daeb352d7eeec9e3cba409061f9a578",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon-96x96.png": "cd2307948e24cc2136cf5969cf62bad8",
"favicon.ico": "64bfc1f64b7aa156704658a0f189aa26",
"favicon.svg": "f9707a61ebadc1f78c3d329b299c96b6",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "0e2658de31845bdcf6d3e4a446f609b7",
"index.html": "672686f7a3508170f4f3d63cc505c0ba",
"/": "672686f7a3508170f4f3d63cc505c0ba",
"main.dart.js": "3c3a76b6e5c7a743860986e92f4d363c",
"site.webmanifest": "f4cd51acac0116ea8a9266182685e6b3",
"version.json": "bb7a2dba4577408a78a8a6a3e2872e76",
"web-app-manifest-192x192.png": "97dfdfee8917cf51438d7e3051b67b70",
"web-app-manifest-512x512.png": "18797be9599676108e9b1551deaa5720"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
