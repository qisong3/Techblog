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
    "revision": "e1f875954152133f33628937e969481c"
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
    "url": "assets/js/12.ceac1513.js",
    "revision": "95e8d73b81b4f2a1ab3479158823af52"
  },
  {
    "url": "assets/js/13.7020a9b2.js",
    "revision": "b689ebbd70af54496dc1e55ff8144d02"
  },
  {
    "url": "assets/js/14.ff2f7b66.js",
    "revision": "c4238e4dab215aa947e0124a3b791302"
  },
  {
    "url": "assets/js/15.b07d80a3.js",
    "revision": "3a90e89143c8a2acf9c7e12b6aa3a126"
  },
  {
    "url": "assets/js/16.7d420c81.js",
    "revision": "c40c7eac37a6c12fbcbfa1f45464789e"
  },
  {
    "url": "assets/js/17.5ea8ba8d.js",
    "revision": "245d76080ab6524ca6b8b7d328854ea4"
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
    "url": "assets/js/app.0562945c.js",
    "revision": "fc5cbd477acf889e1478dae512fb32f4"
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
    "revision": "03ee8df6968d0f4ee479565bfc69183c"
  },
  {
    "url": "blogs/技术/vuepress-低调不失风格的在线文档(博客)框架.html",
    "revision": "26ceea701648e3031f137f19b132ac33"
  },
  {
    "url": "blogs/面试/Java面试题(一).html",
    "revision": "3a671ce75c0716a334c90bbed281c297"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "b25c595d7fa5bc32bf748169c010b387"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "f47828c27ecef77649f20c4afb4d9efa"
  },
  {
    "url": "categories/index.html",
    "revision": "efac64958799c357c88a30de307eb6e9"
  },
  {
    "url": "docs/Java/index.html",
    "revision": "09e818e3b5fda0b4e7c736e31bced64e"
  },
  {
    "url": "docs/Java/Java版本演进之路.html",
    "revision": "a50bf9c3a46a8c6302cca2e5d7a91c32"
  },
  {
    "url": "docs/Java/Java虚拟机演进之路.html",
    "revision": "3235bb60474997c53bbe9cb8e6d0b4b8"
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
    "revision": "163842f0d98514c318c8bb4754364338"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "1f4f8e1ee2b171a1b4401252ba308fa8"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "08f6fd46a95742826f079856f06854c3"
  },
  {
    "url": "tag/index.html",
    "revision": "a46ee8f5ce28eebe1a5c57bf3fbeb643"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "a89687d47e62fec5fd1b67f7c13c9e1c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "790b225b341b33d9b5970790c8ff9c31"
  },
  {
    "url": "timeline/index.html",
    "revision": "6c5baedc706af25fafcb9a4b0bb41de7"
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
