'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dc85962b589608c4546598884a7d76e4",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "451fd25c4d26ab5595f40fdd4c10ee78",
"/": "451fd25c4d26ab5595f40fdd4c10ee78",
"main.dart.js": "39fe932b2dc2aba378119e20526edbe4",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e963078b797c1c93c54ed3a67974fd0c",
".git/config": "290f6b957402aeac00fecbe649575cdd",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/92/d2291d53af09d08e8ef5c8baa85c6620a5b1cc": "7bd2a494ab8c6356bcdd033fb3482cf8",
".git/objects/3b/1de52c1e104de1a7032a87cf8b49abaa203780": "2e84c4251a26f2337e9e93c29dfee07a",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/66ec7e45d2f8336cbbb1c1891f06aa7dd20374": "9c1aea9e131c6b01bc08629bdcdd3c6a",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/04/8b3338e2769745770b4dec871e1f1b12bdaf96": "ee235719f72956f97115af1ba506b5ef",
".git/objects/6a/9630e7c98f23c97233737d414a48248fa174e8": "a0463109cb2872bb47a97be1d3f71ca8",
".git/objects/58/7b7b9e12ce296c4e77353fe5fddda96d08d854": "0b101b0307e3cf774c82207e3205ff8c",
".git/objects/60/96d8c59737704c820904846ac5e00674164d29": "9388953140f06eaeeef1ce8533c7ca88",
".git/objects/9c/79404e2e14aa4b0e81d618cfcbe4e5c9757fdc": "c9e1e1702049eabe6821a2c28a174ae0",
".git/objects/ac/5ab8aaf135deb6f62d413d00dc170c952f9d55": "5cc7694f577f385a678981202e62a8c2",
".git/objects/d0/614f4f04f322dbc17b26184e3b41337cbc791c": "02cb47a33fc4ed3410a31e75f6957a22",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/e5/c6cb483f4fa96f058c9544a4005646b1c1eb5f": "8774deb1496fb15c537dd1bdf6f7860d",
".git/objects/e5/878ce1c20c98e899d86de53dec7dd865f9e0b7": "722d11328b7fc70a4deb7f5d468a9a9d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/5e99498063ba6bcb40b39fac756bd074f80230": "93763c0ed81d74ce186879953d82c20a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/c8/4caad038bcc1c7b6e012fae3a7428e0b911910": "3016db8df3ea21ef8c8654b20e7cdd31",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/4b/870006dff77f6d796a6cd9e4ac6c54dff466fd": "58d76c105d0c4dca877b12cc4fd3db05",
".git/objects/7d/fbb63a97956e066c6805e1f721df93211afa20": "ee98ad7ab065c55e088c999003bf96bf",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/7c/22c74a9689c31b0ca9c64b5ea3f147eb579d0f": "750cb156e68983a851617cfa84f22b2c",
".git/objects/73/abf248f925b8ef27493afcea5c55c655b51466": "bd8e4b7b2944d3fdca1290e919f3f783",
".git/objects/7b/8f78131d188f2db2a8bed72122e2dcbcf5e28a": "ea13375f492c67ad9c02268304ba4aae",
".git/objects/8a/8d8670d7833b72a16d6ccec163e68b1ae50234": "ada1234622350c4c7671926e2227e1a4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/86/a75e80b68ee01efbc729c004e04ed3c40016ac": "a6c71c2c176f67ea8c2def757fb7483a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/d06091bb5660a6fef094856b6f967c9bd51383": "66ba44883c54b6c4b3dca9b936e4ed97",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/5b/390e57e2a6c2c35635fdf6ab03571054bb7a47": "65ca7bc60113aab8d89427840157cd37",
".git/objects/6c/e47ff91e2801af311b9a87e36aafc1d12893c1": "4f5d9e751a4c81c6e96c3ed1380d9845",
".git/objects/52/db6a4b6f7abefc7b12fac0070840bdafe2e100": "989f5312e86eca1bd8026e355e8a2432",
".git/objects/55/a1313170935f8903eae0c9416cd46222fb25ac": "0bc84fb46947feb0afb9d72aca618235",
".git/objects/64/c0e86dcff9d3f459bacb78106a014751f92b6b": "6fcca70719e72d62b92193d17d0b4a8a",
".git/objects/d3/5c684763e896aead463ea6f211929ff51ba2c8": "7843ce17b667c0f51f8f9b177d9ac29c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/2fa8b154a559917dc02fb4a5b413ef250f19a3": "54d3b463cae6112e72b62f2870397dcf",
".git/objects/dc/c29e40e0989ff695f8e812bf783ca6cfd47516": "96b6aed9b014439833d0d0c73d702fc6",
".git/objects/dc/0405eb4c1263a2790082de9167566ea10f8e0e": "e6d788c9a44e2cfb2815682f706d0898",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/d5/cd852d85f3a8e421207f56ea9403b179846da4": "68cd17acdce4774bcbe1a5fa5e5b2af1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/e6/e4caf586fed01a696b34cd677774537ae79aba": "4d7cc17c5cf905c84518683bcabb8753",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/c06033ab694d673aeff8ac75299df9c3cad2da": "88f5f9241c9166f40830626ea13b8ba0",
".git/objects/ce/63582e3272f678fd183a16a095a86f77f5e1a2": "3dfcdbc02923491bed5afcc796c40dc1",
".git/objects/2c/880ab250aeb62ba04b946805469310f267feda": "3a8497c07333f0d3abf1339b9d849ebd",
".git/objects/2d/148eae5c536e4bf7022342784e5bfe48f5a500": "3cd7b47fc4c49bb00eb2947e30b36ac8",
".git/objects/41/e11c49efdbfadbf6b706f9293704d1c2c912d3": "12763ed7149ffd776533310c80d7b331",
".git/objects/1b/635e17680b408e20c01184551d0a90cf35b6ca": "f63ca72b74f3c5aa40abbc3e86db2d22",
".git/objects/23/b3020de45044327affe4a2687a7b8fed84bb39": "8d3ba881cc5c5a4be8bad97f800b7407",
".git/objects/23/e11ba12a4ab6d44365d5f8fbbbc22b2de2c906": "0fd13d7cf89b99a9746c785aff34c5da",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/4f/40dabe4430b4d7288c6ae92d8fc3e17cf8e410": "7c1843130f2c3787540ded5445c7793a",
".git/objects/71/ed8f97cb42345879a10e24633254f50933aba7": "0a0936b49b8fecff7820bd17546831a2",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/8e/bdea9c9e828a82e958a13469d4276f9d06fe1c": "209c7f9658d8b75868104cc69be83959",
".git/objects/22/3c8fa4a684ec4e2a2eb853ddf58509a130a6c6": "21b413f451a2e68cbbc24a37948d3b85",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "42be61d907192cada58ca59d142baa8a",
".git/logs/refs/heads/main": "459ff1d27c5dd13f5e6c1e2c30956033",
".git/logs/refs/remotes/origin/main": "c012581c991a9a83f03d3a646272e40f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9ba7333af64c9204cf27aa46dccde2da",
".git/refs/remotes/origin/main": "9ba7333af64c9204cf27aa46dccde2da",
".git/index": "3051ed48b062dc8a4c74ff83228ab93e",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "62551c65b5549e9253c2ab0bce246ff5",
"assets/NOTICES": "5c28af1ddb336160ca34cac59c882ba1",
"assets/FontManifest.json": "44b648ced0b50bd10e4f5047f40145bf",
"assets/AssetManifest.bin.json": "3ef72e7375637c800c2ee9802bf597ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "8d0acfbf774979914d3c0d736f4be13e",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "0c71c7e7d898750d7a3f5a65543e94f3",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "090a25a56ad0ccd79fd8af75353e52c6",
"assets/fonts/MaterialIcons-Regular.otf": "074a6970071c6265b429d3cccb09839d",
"assets/assets/file/Md-Nayeem-CV.pdf": "fcbde50554239b7d02dfa4e18f0241c0",
"assets/assets/images/laan_pos_cover.jpg": "eda1d26cfcb56378bb017705cf52bddf",
"assets/assets/images/ati_snm_cover.jpg": "e48dc3c92c9f9034ad98e98b0f06ad5d",
"assets/assets/images/pharmatrack_cover.jpg": "080e62b900b18bd7f3d6c367c1fe48fb",
"assets/assets/images/emr_cover.jpg": "19cb3d1aeb089b6ebdc03844bde31d26",
"assets/assets/images/erp_cover.jpg": "bc3a382f2d29dbbd00cabfda7301d172",
"assets/assets/images/vascular_bd_cover.jpg": "4729e190e31746109a18bfb9bc5d4a5e",
"assets/assets/images/drag_bill_cover.jpg": "ffd94f847963e930c81a0d0fd8197b11",
"assets/assets/images/nayeem_profile.jpg": "296e2d277664cd03fb67204a76b5078a",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
