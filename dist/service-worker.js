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
    "revision": "9c3614440d0d644843128cb509ef5926"
  },
  {
    "url": "assets/css/0.styles.55200f87.css",
    "revision": "f94ab72c7d7cd8b824b47510301ad05a"
  },
  {
    "url": "assets/css/0.styles.ee4e86c5.css",
    "revision": "2b8b318762198836910b17d3ea6b7184"
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
    "url": "assets/js/12.dd681b24.js",
    "revision": "68ea2055cc3f12e970ecdb1928fbd134"
  },
  {
    "url": "assets/js/13.d4ebf8e9.js",
    "revision": "85664dd006670a1f82061aaf16b6d508"
  },
  {
    "url": "assets/js/13.d5675644.js",
    "revision": "a68b7a88437141067d823227ba3b1964"
  },
  {
    "url": "assets/js/14.bee699de.js",
    "revision": "a367a13b80163242126115ad8b5666dd"
  },
  {
    "url": "assets/js/15.0df6ec32.js",
    "revision": "cc0598b46f9e23ae92addb9252a92645"
  },
  {
    "url": "assets/js/16.7ee54831.js",
    "revision": "c9854d071b781787a1c047a97fa6670d"
  },
  {
    "url": "assets/js/17.248ad87b.js",
    "revision": "40c25ee994981433c9a2ead87a5b1e04"
  },
  {
    "url": "assets/js/18.535d63b4.js",
    "revision": "0d1fd85e646cf13e1d497cf07d63e177"
  },
  {
    "url": "assets/js/19.03cf862d.js",
    "revision": "e07cd8f673e9b891afc353fd8706f26f"
  },
  {
    "url": "assets/js/20.df4f0e99.js",
    "revision": "ec6342e4d25bb70b405518b35cd497d1"
  },
  {
    "url": "assets/js/21.b99cff88.js",
    "revision": "da6bc7340f7901196b066bc705bca9ca"
  },
  {
    "url": "assets/js/22.d81283ef.js",
    "revision": "2c3ca4424275b507a34459243169a0bb"
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
    "url": "assets/js/app.dd1e946d.js",
    "revision": "2b61499e1d60c2e5c6a2070343fe47fc"
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
    "revision": "48ea9ddfdf3290a457814c9bc27a0d59"
  },
  {
    "url": "blogs/框架/JavaSE 版本演进之路.html",
    "revision": "3838295cc06878414c06675058d11e31"
  },
  {
    "url": "blogs/源码/guide.html",
    "revision": "9e23433d419fb2caa4d452e740eb8fce"
  },
  {
    "url": "blogs/Java/JavaSE 版本演进之路.html",
    "revision": "9189420fac0f4cdb4ba02712d5d149e8"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "bbafc7533121db082fbcd66f8effed59"
  },
  {
    "url": "categories/index.html",
    "revision": "b331683e8f42ae57827acecccfcd4e56"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "6c9f9d61fd9ebe7acef59166e7c6f84a"
  },
  {
    "url": "docs/atittude/api.html",
    "revision": "69c4e03c4156eebcc3947c27fb75778e"
  },
  {
    "url": "docs/atittude/index.html",
    "revision": "459f5eb0fbfb9703e6363f412cd5f3e4"
  },
  {
    "url": "docs/atittude/plugin.html",
    "revision": "efa1f7c2bd912e76d4817d4751a894df"
  },
  {
    "url": "docs/atittude/theme.html",
    "revision": "0e47f3e71b1aedd4e8e9c2fd676a96b3"
  },
  {
    "url": "docs/blog-setting/api.html",
    "revision": "7e06e049b282f84a20b769725452ee73"
  },
  {
    "url": "docs/blog-setting/index.html",
    "revision": "2533e34338a206c625c180ed4c9ec03c"
  },
  {
    "url": "docs/blog-setting/plugin.html",
    "revision": "0754bcd4a993d49610ca46a62c480387"
  },
  {
    "url": "docs/blog-setting/theme.html",
    "revision": "8c8a1b3177a4b5625eb1ad9707d36ee1"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "67b6b40818014862745fc5de273ce863"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/index.html",
    "revision": "ab3d4716e5ec273d971ba9a4c40e34de"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "aa7d5c68fb090072aa2e186db2c4a625"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "61b10b7efc565a1149d3ec6ec7c9db2f"
  },
  {
    "url": "timeline/index.html",
    "revision": "6ed8271c7e2c5c595e1f3f9dd2efc52a"
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
