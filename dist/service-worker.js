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
    "revision": "2b051d0b22c219f2b8b5ffd4b58ee761"
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
    "url": "assets/js/1.62433f57.js",
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
    "url": "assets/js/12.7df671e9.js",
    "revision": "6c0d54c0f9dc8cfc367bd1f8daf51e12"
  },
  {
    "url": "assets/js/13.2eba1141.js",
    "revision": "605693f7bb05fc197dc556f803921239"
  },
  {
    "url": "assets/js/14.82336714.js",
    "revision": "63bf1ee6b1867fbf4ef9ca84d2464977"
  },
  {
    "url": "assets/js/15.1dfcc014.js",
    "revision": "dd1ddd15a6720ab432f72184c0db5d2a"
  },
  {
    "url": "assets/js/16.b0bacc27.js",
    "revision": "d4c7a896eccd0b66e705110f949eb3d9"
  },
  {
    "url": "assets/js/17.e1c7313c.js",
    "revision": "40c25ee994981433c9a2ead87a5b1e04"
  },
  {
    "url": "assets/js/18.6887a21f.js",
    "revision": "3b40a1c3f6bde8a3224ab426ea6f2e0b"
  },
  {
    "url": "assets/js/19.aa71c0b3.js",
    "revision": "e07cd8f673e9b891afc353fd8706f26f"
  },
  {
    "url": "assets/js/20.f80cacfc.js",
    "revision": "4c3f210986f292c89f5cf73fdc8f7e7a"
  },
  {
    "url": "assets/js/3.a3205613.js",
    "revision": "981ccbe5f4e9609ae73a6659e1c1a74e"
  },
  {
    "url": "assets/js/4.beb1d399.js",
    "revision": "6033c419cfc936e4b178cd08e8897ced"
  },
  {
    "url": "assets/js/5.76c841df.js",
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
    "url": "assets/js/9.e13b7c0b.js",
    "revision": "ea0c38a667a3aee28939dfc7bd86f105"
  },
  {
    "url": "assets/js/app.e2f614e5.js",
    "revision": "33a2d9a079e6acaee8e28a6bc1a500d8"
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
    "url": "blogs/技术/2020-07-10-使用vuepress搭建博客.html",
    "revision": "673e0647f8bbcdce195a79607c2acf83"
  },
  {
    "url": "blogs/框架/JavaSE 版本演进之路.html",
    "revision": "5f244808e825b426cf4ad1414cb9aeec"
  },
  {
    "url": "blogs/源码/guide.html",
    "revision": "5a3144e241e627f20740e73cc77eaf00"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "87ad1a59f2ecec50199e63a3e51c1315"
  },
  {
    "url": "categories/index.html",
    "revision": "38e360ee21e93395a8536db5eadaf148"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "a061f21f6bdac68caa2d288b9e6d8fbd"
  },
  {
    "url": "docs/Java/api.html",
    "revision": "0ade57d4988188cc062a2d2e487763cb"
  },
  {
    "url": "docs/Java/index.html",
    "revision": "53d015f95fd07c78860740d4f3112288"
  },
  {
    "url": "docs/Java/JavaSE 版本演进之路.html",
    "revision": "1f6c0ef9c44a9772b957ed96a3403b64"
  },
  {
    "url": "docs/Java/plugin.html",
    "revision": "87abeedb25b971c1cf1a5493907a1422"
  },
  {
    "url": "docs/Java/theme.html",
    "revision": "171246618ef6e6c18e958077bc8b7277"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "4349b6da3b41175c3c13dc38311948bd"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/index.html",
    "revision": "c49ab4cff2b167f5dc1d83120135c815"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "74c4cab5b0cd1d4009dcb2477277e3f6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "79800ba5140a86185e702e89364e3c71"
  },
  {
    "url": "timeline/index.html",
    "revision": "8b6a2921de018eefd4c2961d2139ff3c"
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
