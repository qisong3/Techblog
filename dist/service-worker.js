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
    "revision": "c04de4055ed1bc27877e2e794e5209d6"
  },
  {
    "url": "assets/css/0.styles.ee4e86c5.css",
    "revision": "20bcfdbd3cbd3004f4739ac4e3dd29d1"
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
    "url": "assets/js/11.6cf5dd2c.js",
    "revision": "e48d548884b8b57abbf18cbe5736a160"
  },
  {
    "url": "assets/js/12.536c657e.js",
    "revision": "a42af210847ef0c21163823f9b341be3"
  },
  {
    "url": "assets/js/12.7b62f019.js",
    "revision": "2e94b2c94edf398ff329b60e94a3eba8"
  },
  {
    "url": "assets/js/13.d4ebf8e9.js",
    "revision": "85664dd006670a1f82061aaf16b6d508"
  },
  {
    "url": "assets/js/14.a29290ac.js",
    "revision": "6a4f409994789ca04bb9923f90537361"
  },
  {
    "url": "assets/js/15.b6bf78d0.js",
    "revision": "de3d036bfbe3bb6b313a13a77e61890a"
  },
  {
    "url": "assets/js/16.cf97999e.js",
    "revision": "9b115abd5d79c68c9ea2d1b7f2fb1287"
  },
  {
    "url": "assets/js/17.248ad87b.js",
    "revision": "40c25ee994981433c9a2ead87a5b1e04"
  },
  {
    "url": "assets/js/18.a14cad29.js",
    "revision": "52675d9f6e29d6ad654adbc6a0a13384"
  },
  {
    "url": "assets/js/19.03cf862d.js",
    "revision": "e07cd8f673e9b891afc353fd8706f26f"
  },
  {
    "url": "assets/js/20.ee52621f.js",
    "revision": "80c7533d88001ca4c44b20746e2c11d8"
  },
  {
    "url": "assets/js/21.f855d73c.js",
    "revision": "e38e2f73bfecb253d05a5a0d42539e9d"
  },
  {
    "url": "assets/js/22.d81283ef.js",
    "revision": "2c3ca4424275b507a34459243169a0bb"
  },
  {
    "url": "assets/js/23.e8b9ec17.js",
    "revision": "3388db2fe709a4c38baf7255bdeadfd1"
  },
  {
    "url": "assets/js/24.834741a9.js",
    "revision": "0893f0870208663c928c2dd38c7f3b94"
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
    "url": "assets/js/9.fb0e0ce9.js",
    "revision": "b8eedc8bd8b7fc9abcd733f4b1245f63"
  },
  {
    "url": "assets/js/app.f5b0c2aa.js",
    "revision": "38abe944b664038a49e7102f4adba7e8"
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
    "url": "blogs/技术/Vuepress中的markdown扩展.html",
    "revision": "4be71ba7c4b81d5efac1348bca2234ed"
  },
  {
    "url": "blogs/框架/JavaSE 版本演进之路.html",
    "revision": "d00bd4f2abe9647de4ac20c1fb369485"
  },
  {
    "url": "blogs/源码/guide.html",
    "revision": "3bdd05800022ed34c9b1aff3478ad585"
  },
  {
    "url": "blogs/Java/JavaSE 版本演进之路.html",
    "revision": "2b5305bdd2842bdf6589485e1dc0b5a2"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "c3d7dfb79c0ed736aeb50388d87ab575"
  },
  {
    "url": "categories/index.html",
    "revision": "cf9e877b8470d0901b9c25998e8f0140"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "c49c802001276c69b57fb55e16f0e29e"
  },
  {
    "url": "docs/atittude/api.html",
    "revision": "97c79322351e449fdc826112c01106f4"
  },
  {
    "url": "docs/atittude/index.html",
    "revision": "2f80080014c95e050faaef8beadf699d"
  },
  {
    "url": "docs/atittude/plugin.html",
    "revision": "07935060fa0e38622609c1877677cd86"
  },
  {
    "url": "docs/atittude/theme.html",
    "revision": "a0e804c2c82e21c76094ea28c612f670"
  },
  {
    "url": "docs/blog-setting/api.html",
    "revision": "b779fbfe67b4b0381539765119fc2e3b"
  },
  {
    "url": "docs/blog-setting/index.html",
    "revision": "602942aa1e132dd16de0b43ee2f4b91e"
  },
  {
    "url": "docs/blog-setting/plugin.html",
    "revision": "7737cdb41f866ab9408b5c73a869bd6a"
  },
  {
    "url": "docs/blog-setting/theme.html",
    "revision": "79309a0750a00adcca9900e66b6b039b"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "d187e7abd9d802fb5e0d56925312a962"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/index.html",
    "revision": "5dccaf60f6e19653f40f873d2d1e6066"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "7e6d28b8c519a27b1df7adc42a160cfa"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "01f21206d9f9a998cfbf6a3ddaa0f45d"
  },
  {
    "url": "timeline/index.html",
    "revision": "0b72905b753102f9c0030a5575b0376c"
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
