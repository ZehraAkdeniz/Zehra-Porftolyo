'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/0.png": "b6fd98cfcf5830dbe62b9c91e32b100a",
"assets/asset/0.svg": "cb49f48aa1be4e2d9d4dc65640dac584",
"assets/asset/1.png": "d8c232cd2d7d3102731ff5d229ef454b",
"assets/asset/10.png": "1d4abff2308a8fa9c8da78c14b096ff5",
"assets/asset/11.png": "e12a948be0608a9f425b5bc90965c6e3",
"assets/asset/12.png": "3a925fa7c87b13ae2eae8f8b34d8afe3",
"assets/asset/13.png": "7e8e1f3e4c0807d6ea7b3e238b56db66",
"assets/asset/14.png": "871e218b8bc4bca0d2a7c8740e549442",
"assets/asset/15.png": "868eef5806496cd74b2957a0147fdb1a",
"assets/asset/16.png": "b667f3a4c9f91fc7d7263fae28822c59",
"assets/asset/2.png": "9fec3051b02fe958ed7524fb1a2585ab",
"assets/asset/3.png": "fa05be8ccd13b6c2b99a48b96500fdd8",
"assets/asset/4.png": "c9e6a9bf323b78ebcde8140ce06c22ac",
"assets/asset/5.png": "1c90cfe1eb353c0fb1361b11c4e25ec6",
"assets/asset/6.png": "de0a39e94203b2f749cc1bff33388efc",
"assets/asset/7.png": "3c90fa906f7343506f04815ce4b47107",
"assets/asset/8.png": "430f65ca68bf0a3bf15184bd99338348",
"assets/asset/9.png": "e896bd8098fc78548ec7878130a8fd94",
"assets/asset/bc.png": "086de48c9c77d407fb9c8148910bb155",
"assets/asset/bgbottom.svg": "36c3b0baa32dfb0fb6d057debc9094f4",
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
"assets/AssetManifest.bin": "51a45ca5c3b0b23f74ed111cfa30f22c",
"assets/AssetManifest.bin.json": "e93c6af28a26e0f31afaf54fb8a153d2",
"assets/AssetManifest.json": "b7956b706bff6d2da3939c3fc124f6cd",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "1b8323004cc80f27e61bd44b3f0c28f4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dff17ea79d1402db0197cb92f5495451",
"/": "dff17ea79d1402db0197cb92f5495451",
"main.dart.js": "ef6810c4f41321c5c93f7eb0ee10e209",
"manifest.json": "103ceb2794d311f8fdd3ffb0128b5bcf",
"version.json": "bb7a2dba4577408a78a8a6a3e2872e76"};
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
