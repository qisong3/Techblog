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
    "revision": "c31bfcda7408e64abac08b975393cb5e"
  },
  {
    "url": "assets/css/0.styles.3c665e37.css",
    "revision": "908adad372d3dba99a2d028a7e73da79"
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
    "url": "assets/js/12.7a292653.js",
    "revision": "25352be656b5b887da0a227038631c26"
  },
  {
    "url": "assets/js/13.7a53c6c4.js",
    "revision": "dce20f361e972b581f6510596ae583a5"
  },
  {
    "url": "assets/js/14.51a9f01d.js",
    "revision": "7fe6b85e7901d6cb2b2cff03d9ade6e6"
  },
  {
    "url": "assets/js/15.ce702f76.js",
    "revision": "2a4ac697fb3a3550866437e1f92d3221"
  },
  {
    "url": "assets/js/16.a75a0ef0.js",
    "revision": "22ab49552c8aff60efaf6537a1d1bc15"
  },
  {
    "url": "assets/js/17.730b4534.js",
    "revision": "3cc40e59b00e171926cb0d94439b3454"
  },
  {
    "url": "assets/js/18.8ff0aa7f.js",
    "revision": "fad91de1bc35c83d492853c0b1e8b3a0"
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
    "url": "assets/js/21.b99cff88.js",
    "revision": "da6bc7340f7901196b066bc705bca9ca"
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
    "url": "assets/js/app.2654c261.js",
    "revision": "2a2800372798762ed21d86a08a4c08b8"
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
    "revision": "98b34f39d66d51eba1f0128b737f1b8e"
  },
  {
    "url": "blogs/框架/JavaSE 版本演进之路.html",
    "revision": "d57bca2cf025d902b72b30030badac41"
  },
  {
    "url": "blogs/源码/guide.html",
    "revision": "7aabc5b9316db65524d6cb63f0bb124c"
  },
  {
    "url": "blogs/Java/JavaSE 版本演进之路.html",
    "revision": "9530f54e80cce93c28576d2f64d44169"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "99d907c22fcbd6c823165a3cd148ad68"
  },
  {
    "url": "categories/index.html",
    "revision": "5a4f2b7244244e82632e007204bb4bbb"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "626b2a1091b9017017741035a63b0a34"
  },
  {
    "url": "docs/atittude/api.html",
    "revision": "17d0a95ea66144da07d1710135bbde92"
  },
  {
    "url": "docs/atittude/index.html",
    "revision": "6c41a2ab426f5ae6a06af81fbb9308d8"
  },
  {
    "url": "docs/atittude/plugin.html",
    "revision": "776cbc86b7b626cf4d02f2aeaf35b59a"
  },
  {
    "url": "docs/atittude/theme.html",
    "revision": "292e38cb05777648fe6237e83201b5f0"
  },
  {
    "url": "docs/blog-setting/api.html",
    "revision": "9c326c5fdf204457f2c99d9017a86659"
  },
  {
    "url": "docs/blog-setting/index.html",
    "revision": "abfcdd1f52086c8063236f3d1fa1cc7a"
  },
  {
    "url": "docs/blog-setting/plugin.html",
    "revision": "e0ffcd27891ec51861e863664797f68c"
  },
  {
    "url": "docs/blog-setting/theme.html",
    "revision": "bd9bf41eb45739b84f9b16787bed92ab"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "e9cf93078d21bafa90685e38ddd3ad4d"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/index.html",
    "revision": "008a31635ac72648964aae2da0c160ac"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "6148e3c71c09b588ebe0792aaec4f54e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0eb0932901192239e4ac4f02b7d44b70"
  },
  {
    "url": "timeline/index.html",
    "revision": "df1f9ae6b8840b06bfe3197ed8c72adc"
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
