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
    "revision": "bc5faed2e121e854dc010af3f4fac44f"
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
    "url": "assets/js/12.3d26289f.js",
    "revision": "79a50daeb6ea4c7198096252e804e2c8"
  },
  {
    "url": "assets/js/13.b28f118d.js",
    "revision": "babce3ea234e206ac8d4fa6edb63e2c0"
  },
  {
    "url": "assets/js/14.ff2f7b66.js",
    "revision": "c4238e4dab215aa947e0124a3b791302"
  },
  {
    "url": "assets/js/15.f529319d.js",
    "revision": "11d241be73a6b302c6cfc02ccfb33783"
  },
  {
    "url": "assets/js/16.7d420c81.js",
    "revision": "c40c7eac37a6c12fbcbfa1f45464789e"
  },
  {
    "url": "assets/js/17.fc1e398c.js",
    "revision": "c7ac20372a8009e240b4129613eaab01"
  },
  {
    "url": "assets/js/18.659e44e9.js",
    "revision": "de0ba7358fcc86bf02db1a3afbedbec3"
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
    "url": "assets/js/9.2bd651ad.js",
    "revision": "c718e44fc52704df2d50b78661d8d6c7"
  },
  {
    "url": "assets/js/app.34446dd7.js",
    "revision": "9892e1a8736fc6a6f3574d5ca81dd119"
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
    "revision": "d7efcfbd6d2af3f1fd4444dc6acd8aed"
  },
  {
    "url": "blogs/技术/vuepress-低调不失风格的在线文档(博客)框架.html",
    "revision": "4ca055de60752ce685a00f6dc5d391c4"
  },
  {
    "url": "blogs/面试/Java面试题(一).html",
    "revision": "8c408c753bd6ab5319f43d0096d08302"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "0b93b46156d940dd3d778722f9519fd3"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "fcb105c9d33f564b135fc3f85382f056"
  },
  {
    "url": "categories/index.html",
    "revision": "00ced8491147b00607e113e6c556fed1"
  },
  {
    "url": "docs/Java/index.html",
    "revision": "9bad4dbac5f117baf57e421d267e0d08"
  },
  {
    "url": "docs/Java/Java版本演进之路.html",
    "revision": "dcec9d6f418a846bd6bf8207086f3bc9"
  },
  {
    "url": "docs/Java/Java虚拟机演进之路.html",
    "revision": "2fb21fa2ddc722e939b5ef7548d8569a"
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
    "revision": "3ab36aa666f0333f6f744c60658adf5e"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "2a5416021aeb1659b88bd9f8bc197879"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "dadcd93e5f1bd17c9fc92bcea535eee3"
  },
  {
    "url": "tag/index.html",
    "revision": "172ef0546092ffdd61f8d7231ee96584"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "9ff67302793326c41011dceffd791622"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6dd56ba998eafbfab3ef82305e10b377"
  },
  {
    "url": "timeline/index.html",
    "revision": "9dbc87f2fddf92bd0a25217dfe399dd0"
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
