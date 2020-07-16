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
    "revision": "ef9b44ddf5150f61a32490fa9c24f00f"
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
    "url": "assets/js/1.43fa7df0.js",
    "revision": "ec6b32be836f4351673fdd7420f8d8ad"
  },
  {
    "url": "assets/js/10.148162b4.js",
    "revision": "b39a8324308d06534aa24f3eb35dac26"
  },
  {
    "url": "assets/js/11.ddbccdfd.js",
    "revision": "e48d548884b8b57abbf18cbe5736a160"
  },
  {
    "url": "assets/js/12.21f43167.js",
    "revision": "9c292db8889eeeaa84d4d2c5618ff869"
  },
  {
    "url": "assets/js/13.2421977a.js",
    "revision": "bb30539137e764ffb0bdff7d321c1b51"
  },
  {
    "url": "assets/js/14.d659c261.js",
    "revision": "23fc5c694fbde01de6a7b3ef9a147def"
  },
  {
    "url": "assets/js/15.fd4bf4b8.js",
    "revision": "690fc0980401572e70275b754640f8aa"
  },
  {
    "url": "assets/js/16.f4d18094.js",
    "revision": "fc38e2771f052e317848bb1f54b207c4"
  },
  {
    "url": "assets/js/17.03ce0e4c.js",
    "revision": "ef4fb4a99cd6f3e09932d69404ebe865"
  },
  {
    "url": "assets/js/3.8f091e11.js",
    "revision": "c4500f8db00c5d5131a88fe36101ff01"
  },
  {
    "url": "assets/js/4.18c8e13f.js",
    "revision": "2aa2b39dda688b6be4216303881098a5"
  },
  {
    "url": "assets/js/5.ad457e09.js",
    "revision": "c98ac3907762782f2ccd07dc8e3d70e4"
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
    "url": "assets/js/9.a1b45eb1.js",
    "revision": "4ea4c0faca74785c09a7f6b317cf421b"
  },
  {
    "url": "assets/js/app.7cbf1662.js",
    "revision": "f0065f9c93f78f18bc529a7101d6a3e6"
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
    "revision": "ea1f124a172a9239275acd25f6d72e31"
  },
  {
    "url": "blogs/技术/vuepress-低调不失风格的在线文档(博客)框架.html",
    "revision": "d82e83d9319b9d876109ad007ac711b6"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "1064de865bf336afae1141e55b262e6c"
  },
  {
    "url": "categories/index.html",
    "revision": "919d137b09d04cd07cf7342a6bb15550"
  },
  {
    "url": "docs/Java/index.html",
    "revision": "81b8eabe36d506205d6f62fad704ea7f"
  },
  {
    "url": "docs/Java/Java版本演进之路.html",
    "revision": "55f76d3cce646441c9f6f62f2ebeddae"
  },
  {
    "url": "docs/Java/Java虚拟机演进之路.html",
    "revision": "f0b006c024c05788c0f00e972113cbbb"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "img/从零开始搭建vuepress/default_full.png",
    "revision": "9c1ceb87a4ec5f2fb6ab33ccf6dab39a"
  },
  {
    "url": "img/从零开始搭建vuepress/empty_home.png",
    "revision": "0c9fb9b8e952c5d45bcea142ea47c937"
  },
  {
    "url": "index.html",
    "revision": "c3bb6493452852df73b1de12d68baace"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "c8b509583732d13bf03b08c587295086"
  },
  {
    "url": "tag/index.html",
    "revision": "14af4fabea78b962c4bbcad0b8df86bf"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "025aca5fb38ac8fbbdc31fa96145d239"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fc615b3cbbbc212ed4f5fd19e69d69df"
  },
  {
    "url": "timeline/index.html",
    "revision": "a9cf7d005f177d44c7056776c9e8bd96"
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
