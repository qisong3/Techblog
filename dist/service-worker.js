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
    "revision": "e9c4249658d56f79e3ae4d95a8f85e1a"
  },
  {
    "url": "assets/css/0.styles.1adb1a52.css",
    "revision": "3c5f551ac839231de89b803849362e83"
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
    "url": "assets/js/13.0caca41c.js",
    "revision": "e545096c5f1c5f1a310f313304c9c372"
  },
  {
    "url": "assets/js/14.a29290ac.js",
    "revision": "6a4f409994789ca04bb9923f90537361"
  },
  {
    "url": "assets/js/15.0df6ec32.js",
    "revision": "cc0598b46f9e23ae92addb9252a92645"
  },
  {
    "url": "assets/js/16.a75a0ef0.js",
    "revision": "22ab49552c8aff60efaf6537a1d1bc15"
  },
  {
    "url": "assets/js/17.36f49663.js",
    "revision": "97e1586b05ede4e6823d18532d1bf81f"
  },
  {
    "url": "assets/js/18.151934f9.js",
    "revision": "3b40a1c3f6bde8a3224ab426ea6f2e0b"
  },
  {
    "url": "assets/js/19.6dec2d50.js",
    "revision": "a2586e81e4a6ab1e219dbd56054b9f12"
  },
  {
    "url": "assets/js/20.305be598.js",
    "revision": "67173ed53f0341fcbea86f65c3b91dfe"
  },
  {
    "url": "assets/js/21.7ff34967.js",
    "revision": "e51ed4bdb28d5e24230ccf627091f2f0"
  },
  {
    "url": "assets/js/22.569d6cdd.js",
    "revision": "00742305486ffe45c08b234719f8494b"
  },
  {
    "url": "assets/js/23.3b7ea9db.js",
    "revision": "387193b26f6556edd367943422dc9aa8"
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
    "url": "assets/js/app.39605647.js",
    "revision": "1e83eee893bba6d1f329485bf89a058f"
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
    "revision": "ec1c709cfebc744676304e1d3f4ee79c"
  },
  {
    "url": "blogs/框架/JavaSE 版本演进之路.html",
    "revision": "5532f6f982a338753ad09135abfeb002"
  },
  {
    "url": "blogs/源码/guide.html",
    "revision": "2bd4d8db868622ba6e7c9463337a68bf"
  },
  {
    "url": "blogs/Java/JavaSE 版本演进之路.html",
    "revision": "8a4f62f5145ae328cc0e8aaa3da61f40"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "65a15f7e9cd3bd5e39fb27534a29d884"
  },
  {
    "url": "categories/index.html",
    "revision": "3e48d954302d2fa7878fbf0e0f626c2c"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "3fe5117060671f8f9e0dd0e789b1eec5"
  },
  {
    "url": "docs/atittude/api.html",
    "revision": "d9c9850d638ea56ce35ba5afd60fad42"
  },
  {
    "url": "docs/atittude/index.html",
    "revision": "07d3bad118a5ee60dfabe42c8ed9bd68"
  },
  {
    "url": "docs/atittude/plugin.html",
    "revision": "e6058e8d78a4223f4f146508dec1387e"
  },
  {
    "url": "docs/atittude/theme.html",
    "revision": "27083ae11498ed180e11ec58dc768173"
  },
  {
    "url": "docs/blog-setting/api.html",
    "revision": "397fa07a992ce8ccc564e7de65b84f8a"
  },
  {
    "url": "docs/blog-setting/index.html",
    "revision": "740ff8466ec5861327c051858eba893e"
  },
  {
    "url": "docs/blog-setting/plugin.html",
    "revision": "d4e8b39ffafd329be3f0e9a534e3e5c1"
  },
  {
    "url": "docs/blog-setting/theme.html",
    "revision": "2a6086409bbed2d4300d9c617268082f"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "d57d5d5c2805120e7dabe7e529014782"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/index.html",
    "revision": "09538512766a228a0d711a8a8a931c79"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "5bd6f7cc51067286e75d5a3ea21f04c6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4c78e2425435defde1a370f35a429a77"
  },
  {
    "url": "timeline/index.html",
    "revision": "f8d3781ba837f59e04a1b45f7e461201"
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
