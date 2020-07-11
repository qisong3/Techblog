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
    "revision": "6f820c28b4f667ee564ac975dd789e8a"
  },
  {
    "url": "assets/css/0.styles.55200f87.css",
    "revision": "f94ab72c7d7cd8b824b47510301ad05a"
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
    "url": "assets/js/12.e2e131d3.js",
    "revision": "68ea2055cc3f12e970ecdb1928fbd134"
  },
  {
    "url": "assets/js/13.7159b26b.js",
    "revision": "ae09b528f35fdaff442608dbc3aec7a3"
  },
  {
    "url": "assets/js/14.d99706db.js",
    "revision": "a367a13b80163242126115ad8b5666dd"
  },
  {
    "url": "assets/js/15.f6f8095b.js",
    "revision": "a2befea5b055731e51cd1b05bb4fa1db"
  },
  {
    "url": "assets/js/16.2a0d6214.js",
    "revision": "9b115abd5d79c68c9ea2d1b7f2fb1287"
  },
  {
    "url": "assets/js/17.03969b52.js",
    "revision": "3cc40e59b00e171926cb0d94439b3454"
  },
  {
    "url": "assets/js/18.eea6bad3.js",
    "revision": "52675d9f6e29d6ad654adbc6a0a13384"
  },
  {
    "url": "assets/js/19.72263513.js",
    "revision": "51ec432611bfa0c663ac605da12be8c5"
  },
  {
    "url": "assets/js/20.9830fce2.js",
    "revision": "5d7167b97bcc98981bbda117c7b5ec7f"
  },
  {
    "url": "assets/js/21.9b8c8c0c.js",
    "revision": "88b40449ad7621e8b2bef69cceb94da9"
  },
  {
    "url": "assets/js/22.2faf7d69.js",
    "revision": "2c3ca4424275b507a34459243169a0bb"
  },
  {
    "url": "assets/js/23.92017a29.js",
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
    "url": "assets/js/app.16963eaa.js",
    "revision": "30de4946461187fcaba1c2ff609e850f"
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
    "revision": "22193708bd495f9e5f9e5a0fd94a99e7"
  },
  {
    "url": "blogs/框架/JavaSE 版本演进之路.html",
    "revision": "2b589c3a8271f9578217dbc603094d6f"
  },
  {
    "url": "blogs/源码/guide.html",
    "revision": "cdacd165b46cebbc25ddb15bad59bd65"
  },
  {
    "url": "blogs/Java/JavaSE 版本演进之路.html",
    "revision": "a8a5f1de5abfea52edeb3c277c8c6196"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "ae20cf0c39ed6cc289f4d3c17581510c"
  },
  {
    "url": "categories/index.html",
    "revision": "85dd21d9c2b094ae87e5fe20ee5d74ae"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "42d05fca65a5fca81a1ebde6b58040c9"
  },
  {
    "url": "docs/atittude/api.html",
    "revision": "c89d40f8582535ae34bf400514349ab1"
  },
  {
    "url": "docs/atittude/index.html",
    "revision": "b03878e3e323e187d96ba3aec188185c"
  },
  {
    "url": "docs/atittude/plugin.html",
    "revision": "7e4f7453864ec753adf228d4fb8efa7c"
  },
  {
    "url": "docs/atittude/theme.html",
    "revision": "39245d50a171482689fea81cfc208f57"
  },
  {
    "url": "docs/blog-setting/api.html",
    "revision": "188d0647a65b2aa0c1adb9f0cb70b484"
  },
  {
    "url": "docs/blog-setting/index.html",
    "revision": "9e1fe572f672dd95789db5a7304f1f02"
  },
  {
    "url": "docs/blog-setting/plugin.html",
    "revision": "3459d8272c78acf50d6eefabdbcb1fdf"
  },
  {
    "url": "docs/blog-setting/theme.html",
    "revision": "bbd8807276ad685206226728b837f363"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "4d9b3cd2aacb6a8f0bc2ad1b6ba54347"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/index.html",
    "revision": "9653c36e233f16307abcda8410358837"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "62b82acab15d871a0061abcb8ed9d74f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "968295ab425676b89ac6a15eb9205cd0"
  },
  {
    "url": "timeline/index.html",
    "revision": "ac4bf26104b2dc570aef190f3a8393c8"
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
