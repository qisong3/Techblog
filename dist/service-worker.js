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
    "revision": "cdcc5da703f3c9df97b55da9310c1b4e"
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
    "url": "assets/js/12.16184919.js",
    "revision": "5b5a5ea293eaca2981eaac6f799d64fe"
  },
  {
    "url": "assets/js/13.1a9c7120.js",
    "revision": "4b4ca833cd10a447a2665179c369419f"
  },
  {
    "url": "assets/js/14.231159b5.js",
    "revision": "7fe6b85e7901d6cb2b2cff03d9ade6e6"
  },
  {
    "url": "assets/js/15.898b378c.js",
    "revision": "0d4aab68b5e4705918c31eedb70b2b56"
  },
  {
    "url": "assets/js/16.7e0c3206.js",
    "revision": "d918ce5f6f0b5ef72d5601040985f2cc"
  },
  {
    "url": "assets/js/17.752d2f00.js",
    "revision": "52c0c534a9b7d667f9b87565b41bc96f"
  },
  {
    "url": "assets/js/18.a659c591.js",
    "revision": "76ad9c2666109d90f0df4564a33f8b6c"
  },
  {
    "url": "assets/js/19.eef63dd4.js",
    "revision": "a48e349f79a3c9fa9003840cfe3398ab"
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
    "url": "assets/js/9.6ac2f6f6.js",
    "revision": "4ae69a93d588950e573dd7e7e902e6a9"
  },
  {
    "url": "assets/js/app.c9467fdf.js",
    "revision": "366daebadcbed82da3675a5e297b57f7"
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
    "url": "blogs/技术/2020-07-13-从零开始搭建vuepress.html",
    "revision": "2bfda252c7103a6f6d68a23d468a517e"
  },
  {
    "url": "blogs/技术/vuepress-低调不失风格的在线文档(博客)框架.html",
    "revision": "d6472e3216f75366e6cc9379fec9f60d"
  },
  {
    "url": "blogs/框架/JavaSE 版本演进之路.html",
    "revision": "9cb3f75d5c745db84e64f08375ff422a"
  },
  {
    "url": "blogs/源码/guide.html",
    "revision": "2662924b1863d1759582ce8a40ae6cea"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "b092ef7cd3d8f228ad3d779272b97da3"
  },
  {
    "url": "categories/index.html",
    "revision": "51483ca2230beab1ffc313d58d27a8f6"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "5b6697acf289bf460fe52582d09f6352"
  },
  {
    "url": "docs/Java/api.html",
    "revision": "ec45cf264357cb8f262878be9e41c070"
  },
  {
    "url": "docs/Java/index.html",
    "revision": "9b0269fb426c9f22e398d7c17116559b"
  },
  {
    "url": "docs/Java/JavaSE 版本演进之路.html",
    "revision": "3f4e652f2ef88bb95eb0562cec02bec4"
  },
  {
    "url": "docs/Java/plugin.html",
    "revision": "47589757a6826053f3e6f6a8c2227730"
  },
  {
    "url": "docs/Java/theme.html",
    "revision": "12cfa95b784c39369e232000b0ef21c5"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "1fe2f4bd74b11c97d0242c557d02fc10"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/index.html",
    "revision": "dc30d6ecd7df27a0d0ab302fc677ce70"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "68880a5af7bf3589e11da43c1af209dc"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f103c89e8596d019135f5ac50040434d"
  },
  {
    "url": "timeline/index.html",
    "revision": "c73bb85799b235161eb97f6b87dec578"
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
