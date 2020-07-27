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
    "revision": "dd3a92e1d08bcef7473af171a13a527b"
  },
  {
    "url": "assets/css/0.styles.3567c905.css",
    "revision": "5e2d1228e1ae74f6ec8ebdcd223eee18"
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
    "url": "assets/js/1.e7001280.js",
    "revision": "a3ddb3860bd36b599959b6471089daea"
  },
  {
    "url": "assets/js/10.27f9126b.js",
    "revision": "377ebb74c6010d9aa2685d7fedee4ed4"
  },
  {
    "url": "assets/js/11.5356d049.js",
    "revision": "13a9125bce1702657f77f8c2d176a770"
  },
  {
    "url": "assets/js/12.5e009bb5.js",
    "revision": "c3cb2daa5285ca9d43cf0ef2641c792b"
  },
  {
    "url": "assets/js/13.4b3c7998.js",
    "revision": "2b06b0bb1c49a39877e7c9746e5ed5be"
  },
  {
    "url": "assets/js/14.3d146bf7.js",
    "revision": "951abb8679f6afcaba337ceada4a486c"
  },
  {
    "url": "assets/js/15.2f8d3e9d.js",
    "revision": "fd49ce49618b4cc1e2de3ce543152f2b"
  },
  {
    "url": "assets/js/16.b96d72f6.js",
    "revision": "c23decabfe27f6c761a6a5272ec2ae73"
  },
  {
    "url": "assets/js/17.f19cc435.js",
    "revision": "87c7d98f906582ab307e7f6f9a041814"
  },
  {
    "url": "assets/js/18.90c87b4e.js",
    "revision": "2f08b286ff5fe6787402261cc2faa0ad"
  },
  {
    "url": "assets/js/19.a4466dca.js",
    "revision": "e696c376f2e11c8fcc242dc89bfb8d3e"
  },
  {
    "url": "assets/js/2.5b7311d1.js",
    "revision": "7d7efeb9485eb1a215f4d2f5f6fb4d86"
  },
  {
    "url": "assets/js/20.c8b146e2.js",
    "revision": "0f5b97876e0362ca6089e8eb0055fb0b"
  },
  {
    "url": "assets/js/21.78399e86.js",
    "revision": "e3936fbc88cf9a5a449c65673bf58661"
  },
  {
    "url": "assets/js/4.cb940767.js",
    "revision": "1e6c0da88a44b994a39f4206420d3911"
  },
  {
    "url": "assets/js/5.3715fb8e.js",
    "revision": "0edcb99be36c39e36586278b8a2bdfae"
  },
  {
    "url": "assets/js/6.d99e57fe.js",
    "revision": "c6408e5f402ae14a7f454c86391a946c"
  },
  {
    "url": "assets/js/7.d4c14a53.js",
    "revision": "0534b68cf0f835e715ebe21aa1c2ce53"
  },
  {
    "url": "assets/js/8.33874e95.js",
    "revision": "29a452cfa0389cf7de277d94f9d9f6f4"
  },
  {
    "url": "assets/js/9.9e34ee76.js",
    "revision": "f3182e5e30e150a51ca187833a73f0ae"
  },
  {
    "url": "assets/js/app.128f7e5e.js",
    "revision": "9f6629944b371f2e2a67eac58a5057b3"
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
    "revision": "e7bbca5c31ff8d8ba276682b8134ba50"
  },
  {
    "url": "blogs/技术/vuepress-低调不失风格的在线文档(博客)框架.html",
    "revision": "59cb1a415dd30d2826a7f2e9d08372a1"
  },
  {
    "url": "blogs/面试/Java多态面试题(二).html",
    "revision": "f98ac34008870b45361eb95ac2679db1"
  },
  {
    "url": "blogs/面试/Java多态面试题(一).html",
    "revision": "69d200554a6f46efe61885f494c14519"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "73e9a99f32d9f38ed0e00b6ca2248d47"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "012cc289d97f98576437964c47893592"
  },
  {
    "url": "categories/index.html",
    "revision": "6eb8af738721ab91b23f6725ec03617c"
  },
  {
    "url": "docs/Java简史/index.html",
    "revision": "278d091519dfaae26c261a0ddedb1c14"
  },
  {
    "url": "docs/Java简史/Java-1_版本特性.html",
    "revision": "957ab109c77b25f14a427799be538133"
  },
  {
    "url": "docs/Java简史/Java-1.1_版本特性.html",
    "revision": "b385635a4fb6a939302da84a6d9e7c52"
  },
  {
    "url": "docs/Java简史/Java诞生史.html",
    "revision": "cd76b22eb396219e9c9cdbb6f6cac799"
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
    "url": "img/Java面试题(二)/class_method_table.png",
    "revision": "efc872bb512e55a7cecb461f0a5cdf55"
  },
  {
    "url": "index.html",
    "revision": "ea09a2c62b07c5738921f997e4bf3923"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "e262d14d5173cfdde02fa1a6bd7e1cb1"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "ad76ac3585a68f64243263509a4885fd"
  },
  {
    "url": "tag/index.html",
    "revision": "794512b74359bc8d78750055c3e30c0b"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "46253b8396aeabe3175a34b08cd7ac7e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c7029329de1510b56624c3232b50e31b"
  },
  {
    "url": "timeline/index.html",
    "revision": "22540e4c982d829d88576d8d4172bdef"
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
