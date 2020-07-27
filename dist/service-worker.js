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
    "revision": "df38fd78260e2352d00013f5246bbff3"
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
    "url": "assets/js/13.45e40d50.js",
    "revision": "a0bb31b8720e954483ef4210689fcc3e"
  },
  {
    "url": "assets/js/14.b7fb668b.js",
    "revision": "3697c9079ec542b1d23df1b304c751b3"
  },
  {
    "url": "assets/js/15.9aa44eb3.js",
    "revision": "f169e1bd68b0233a5261873c862b1526"
  },
  {
    "url": "assets/js/16.fc5a1cdd.js",
    "revision": "a8040a1a0fae794c5c65e39ae758c40a"
  },
  {
    "url": "assets/js/17.4dd53384.js",
    "revision": "0d0a5e7dbb17e28227511477287ff151"
  },
  {
    "url": "assets/js/18.9e3e97a0.js",
    "revision": "010eb4917f86aef7caea52595c478b0b"
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
    "url": "assets/js/app.a7e10dac.js",
    "revision": "127b703e22a7769c23c0324fd31b0909"
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
    "revision": "9adfc396a7d4a9b51e3aaec5328ccdbf"
  },
  {
    "url": "blogs/技术/vuepress-低调不失风格的在线文档(博客)框架.html",
    "revision": "a821eb8cd436ed033cf88c5ec9d4bb59"
  },
  {
    "url": "blogs/面试/Java多态面试题(二).html",
    "revision": "9ac0cc15d7450665f63d8d211a495eca"
  },
  {
    "url": "blogs/面试/Java多态面试题(一).html",
    "revision": "726d45c0da94ba49ecf6267a4d8d4bc2"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "8f726d0e45b37b09aae089091bdf57c3"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "e56ac84fcfbfa29bbb38b56f0e4a54ae"
  },
  {
    "url": "categories/index.html",
    "revision": "67c0b87ed994faeabd09fdf1c17e9985"
  },
  {
    "url": "docs/Java简史/index.html",
    "revision": "209afe06ba3c02555f4fc7c99d35eaae"
  },
  {
    "url": "docs/Java简史/Java-1_版本特性.html",
    "revision": "8f1529d33e96677d20ea3778523ded0f"
  },
  {
    "url": "docs/Java简史/Java-1.1_版本特性.html",
    "revision": "1f953927feafd13a7a16c0d76b94cb5e"
  },
  {
    "url": "docs/Java简史/Java诞生史.html",
    "revision": "285123f11b689e55905dd5ddfe0f2373"
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
    "revision": "23a928c92a458d4f26728b943a74a6a4"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "2f6f0dee0b3c623f71081df5e36d32be"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "1cfb4de64d29d7346a2f470e7f8e22c8"
  },
  {
    "url": "tag/index.html",
    "revision": "534ee5e7b3879b07cae1db986227ce12"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "7b5b82c204bb11ff702f1854057b4f4b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e1e4e2016b9add812d422ba3c1ed150b"
  },
  {
    "url": "timeline/index.html",
    "revision": "8bf78ac8c9400bdee74116ad73c7dde5"
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
