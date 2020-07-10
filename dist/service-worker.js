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
    "revision": "facb141b7c9cd8e08f5198946a6481a3"
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
    "url": "assets/js/12.7b62f019.js",
    "revision": "2e94b2c94edf398ff329b60e94a3eba8"
  },
  {
    "url": "assets/js/13.d4ebf8e9.js",
    "revision": "85664dd006670a1f82061aaf16b6d508"
  },
  {
    "url": "assets/js/14.51a9f01d.js",
    "revision": "7fe6b85e7901d6cb2b2cff03d9ade6e6"
  },
  {
    "url": "assets/js/15.90c88ecf.js",
    "revision": "c8afba6ac7de52628490b11a26e904ec"
  },
  {
    "url": "assets/js/16.d9e2cfe3.js",
    "revision": "194f2a826150ef47f045131c5e993be3"
  },
  {
    "url": "assets/js/17.a488ef53.js",
    "revision": "eee6034a958a558771b18a042b904551"
  },
  {
    "url": "assets/js/18.8ff0aa7f.js",
    "revision": "fad91de1bc35c83d492853c0b1e8b3a0"
  },
  {
    "url": "assets/js/19.3051135b.js",
    "revision": "1c95ffe34b9d60bad027aa05e3ae941a"
  },
  {
    "url": "assets/js/20.df4f0e99.js",
    "revision": "ec6342e4d25bb70b405518b35cd497d1"
  },
  {
    "url": "assets/js/21.01c0e1fe.js",
    "revision": "88b40449ad7621e8b2bef69cceb94da9"
  },
  {
    "url": "assets/js/22.a4d15de1.js",
    "revision": "67c16c06cbf9b249ecad3b78d9e70d0c"
  },
  {
    "url": "assets/js/23.a94ad221.js",
    "revision": "ec837340554001b2704159f426204127"
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
    "url": "assets/js/app.c2aaa32c.js",
    "revision": "84f8351656c109df848da990a9a5fba0"
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
    "revision": "36336ee6af324fe46f1d7fc862b6fff2"
  },
  {
    "url": "blogs/框架/JavaSE 版本演进之路.html",
    "revision": "15e63041244b0be9dd4f2e1283defa41"
  },
  {
    "url": "blogs/源码/guide.html",
    "revision": "2ec89c406683aff9e5eb473592ba4d4e"
  },
  {
    "url": "blogs/Java/JavaSE 版本演进之路.html",
    "revision": "e05c1565d2041a240c726b87401623df"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "86674cef86c8f4261e12aa19f794cffe"
  },
  {
    "url": "categories/index.html",
    "revision": "4df33df81213220e221fdc8fc25e1317"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "50f3a021922b4766ee1401a0d75a98fc"
  },
  {
    "url": "docs/atittude/api.html",
    "revision": "079401cbc36784187df5bf558e10d762"
  },
  {
    "url": "docs/atittude/index.html",
    "revision": "9985bb0c28f90662d6c22f89addd4149"
  },
  {
    "url": "docs/atittude/plugin.html",
    "revision": "f0f2d683771660d6bce66bcc288f88cc"
  },
  {
    "url": "docs/atittude/theme.html",
    "revision": "c35151b14696ed5e926c98446b509f43"
  },
  {
    "url": "docs/blog-setting/api.html",
    "revision": "a7ecc4b3fc8d02033abb91fd2b2b9014"
  },
  {
    "url": "docs/blog-setting/index.html",
    "revision": "d550368b4d199d7bce1d8b9a3f357c02"
  },
  {
    "url": "docs/blog-setting/plugin.html",
    "revision": "6c27d45aabd6aab5ffa18acbb7a36560"
  },
  {
    "url": "docs/blog-setting/theme.html",
    "revision": "4a06836df1a0f500806552588795881b"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "6af908ae58c008f203df547cd5a837e9"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/index.html",
    "revision": "6e80270c250a5c83e183de925790e265"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "6e25aa0c80e476e30639316e3f6b41ba"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0f2148ad73fdc15b98fa993236507029"
  },
  {
    "url": "timeline/index.html",
    "revision": "17beb21351e7bbbfff36477b7f5f5543"
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
