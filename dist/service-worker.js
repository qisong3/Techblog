/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b1d637f0bbb2ece5181602fa83ade98f"
  },
  {
    "url": "assets/css/0.styles.adfe6b18.css",
    "revision": "efe9c10d7d326d1fa40812fe5322e9d3"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.58656899.js",
    "revision": "8995c7c8830cc296e7bd0cc196d3427f"
  },
  {
    "url": "assets/js/10.8e85ae47.js",
    "revision": "620e56b00b897d42ad9c83678439534f"
  },
  {
    "url": "assets/js/11.ddbccdfd.js",
    "revision": "e48d548884b8b57abbf18cbe5736a160"
  },
  {
    "url": "assets/js/12.d04067af.js",
    "revision": "69dbb139d9cbec6934d3699321c43d30"
  },
  {
    "url": "assets/js/13.1a178c18.js",
    "revision": "1eba3b04c62a987b40df1cf9e0662372"
  },
  {
    "url": "assets/js/14.8e29b601.js",
    "revision": "784f3988ff753a3317f966280b9d12a4"
  },
  {
    "url": "assets/js/15.a2d18e84.js",
    "revision": "de3d036bfbe3bb6b313a13a77e61890a"
  },
  {
    "url": "assets/js/16.e2d461b5.js",
    "revision": "61d51eaf64e5d73ccb7b112a5d64a0ac"
  },
  {
    "url": "assets/js/17.2d6ab183.js",
    "revision": "4113551ff8e0a7c965fc57f51cba95a8"
  },
  {
    "url": "assets/js/18.a659c591.js",
    "revision": "76ad9c2666109d90f0df4564a33f8b6c"
  },
  {
    "url": "assets/js/19.620f27eb.js",
    "revision": "740d25752879e5f01879ef02930a94bc"
  },
  {
    "url": "assets/js/20.34f1e2e0.js",
    "revision": "2c1db4c89985b4d173976b54c491b900"
  },
  {
    "url": "assets/js/21.21c2f338.js",
    "revision": "dd6b50c0b1cce6ef257e9915c148bc37"
  },
  {
    "url": "assets/js/3.b2d0adc6.js",
    "revision": "981ccbe5f4e9609ae73a6659e1c1a74e"
  },
  {
    "url": "assets/js/4.9f90312f.js",
    "revision": "6033c419cfc936e4b178cd08e8897ced"
  },
  {
    "url": "assets/js/5.49e52079.js",
    "revision": "148f928333377cc8016677dc07e3dff3"
  },
  {
    "url": "assets/js/6.313c2fdb.js",
    "revision": "48b1e4679c42aaba9e967fed2c63b4b4"
  },
  {
    "url": "assets/js/7.7aa04633.js",
    "revision": "b3e2701de194d1de8ab523b02998adb5"
  },
  {
    "url": "assets/js/8.d2f6e1cd.js",
    "revision": "0eb0968ceb2c77a25dc00322620d347e"
  },
  {
    "url": "assets/js/9.6ac2f6f6.js",
    "revision": "4ae69a93d588950e573dd7e7e902e6a9"
  },
  {
    "url": "assets/js/app.21acc6d6.js",
    "revision": "7c61e94a24cf4bf6f2c0586fb3152af2"
  },
  {
    "url": "avatar.png",
    "revision": "d4c6b927a6d961deecc6535452e9d76e"
  },
  {
    "url": "bg.png",
    "revision": "5f53fafcd30e71be561d33a98e4ac0be"
  },
  {
    "url": "blogs/技术/从零开始搭建vuepress.html",
    "revision": "a72a965096e96e109ef1908793d7e9d8"
  },
  {
    "url": "blogs/技术/vuepress-低调不失风格的在线文档(博客)框架.html",
    "revision": "1a30486ab0b5622bd73a13e26361277d"
  },
  {
    "url": "blogs/框架/JavaSE 版本演进之路.html",
    "revision": "e1f8626fc7fe0ad05572e92ca3e6d8cb"
  },
  {
    "url": "blogs/源码/guide.html",
    "revision": "d2c07e7255e4f43741f9549b8d45c6e0"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "445a0c7a3fc5d78b31e6f9e45a54de8f"
  },
  {
    "url": "categories/index.html",
    "revision": "839a681d539e0882cc6c672dd7046b54"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "51227d59a4804a363e04e2cb379a3edd"
  },
  {
    "url": "docs/Java/api.html",
    "revision": "602b9709704cc0690119330d1c21c044"
  },
  {
    "url": "docs/Java/index.html",
    "revision": "b5b9293893e37d62f8e8048c3ff89b29"
  },
  {
    "url": "docs/Java/JavaSE 版本演进之路.html",
    "revision": "9dfa70e279c69c4f006f8408ed83dcec"
  },
  {
    "url": "docs/Java/plugin.html",
    "revision": "34d2245dc0f2345ead483ff64ff2a3ca"
  },
  {
    "url": "docs/Java/theme.html",
    "revision": "a9a64efc13230277f602c848454a40b5"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "img/从零开始搭建vuepress/empty_home.png",
    "revision": "0c9fb9b8e952c5d45bcea142ea47c937"
  },
  {
    "url": "index.html",
    "revision": "0f70b361b65830f9599dfc1479b8d214"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/index.html",
    "revision": "b87c7f7a7f22d01b57d038d6ccd55fe4"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "3fb328eb7e3580f4f6dd156e98f9f58e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c130d9487579057c5bfa05ff564de15b"
  },
  {
    "url": "timeline/index.html",
    "revision": "d4f41afd76000fbb762ec2f61e35bdc5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
