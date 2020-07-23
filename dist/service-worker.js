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
    "revision": "a6ca2e00bb365f354e558850a97e0cd8"
  },
  {
    "url": "assets/css/0.styles.c49c8c2f.css",
    "revision": "9c5c93030eedb0313dd5fa24545c1469"
  },
  {
    "url": "assets/img/home-bg.8e509a21.jpg",
    "revision": "8e509a21c7af5d61f2ff4895ef09c727"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.1a4cc3a9.js",
    "revision": "0798c456237c6b9cfbd5a621c9499d2b"
  },
  {
    "url": "assets/js/10.a66617ca.js",
    "revision": "5c8659f29e684a4b8757f72b0781604b"
  },
  {
    "url": "assets/js/11.53236375.js",
    "revision": "786eea4d363db24d71053adddbe82585"
  },
  {
    "url": "assets/js/12.14b750af.js",
    "revision": "a644659dc25a2f7a0257100d5a2b5f3a"
  },
  {
    "url": "assets/js/13.f146baa2.js",
    "revision": "242f01f099e06702683f1623a8e88add"
  },
  {
    "url": "assets/js/14.c6b98cbd.js",
    "revision": "03633e06b22f8985d83d559bb93f65be"
  },
  {
    "url": "assets/js/15.97fb97d3.js",
    "revision": "8d4f2705f59e87a6dffaecfd15e1e79c"
  },
  {
    "url": "assets/js/16.ccf3c064.js",
    "revision": "e67b1cbfbe2172034a8da70bc8d2fb64"
  },
  {
    "url": "assets/js/17.df47e65e.js",
    "revision": "45ed7f433bdcd661b073f21bc7ddc819"
  },
  {
    "url": "assets/js/18.c7ca0591.js",
    "revision": "6f2cb1a4f02f74187806004ddb45b52d"
  },
  {
    "url": "assets/js/3.882f8691.js",
    "revision": "806179d68f996204fc08b7421ca0b051"
  },
  {
    "url": "assets/js/4.f0bd6027.js",
    "revision": "3496023b4ec9363ad7167bdce82abc11"
  },
  {
    "url": "assets/js/5.a9f19d2a.js",
    "revision": "c5f86c0dddf708ed9191b1ed8dbc7744"
  },
  {
    "url": "assets/js/6.ee998bec.js",
    "revision": "9e026248fca10c3b4f7d7aa86549e596"
  },
  {
    "url": "assets/js/7.1cf6f5b4.js",
    "revision": "466090560da561240855bab6928f69c8"
  },
  {
    "url": "assets/js/8.a747b6dc.js",
    "revision": "3f12498a2e555cad2182dcd22a1f261b"
  },
  {
    "url": "assets/js/9.0ab4ec63.js",
    "revision": "ce3185239d8f9b3457c209f8cfc46d8a"
  },
  {
    "url": "assets/js/app.ad10dae5.js",
    "revision": "9cb5ed164567badedbcc51f5478f9c80"
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
    "revision": "317937d2d37007d01e44a1d52f8515d2"
  },
  {
    "url": "blogs/技术/vuepress-低调不失风格的在线文档(博客)框架.html",
    "revision": "7437d909d8a8fc252ff2601846ced43a"
  },
  {
    "url": "blogs/面试/Java多态面试题(二).html",
    "revision": "086831f48f0adc6b7fe1993338bfff63"
  },
  {
    "url": "blogs/面试/Java多态面试题(一).html",
    "revision": "25040512678e31b59402ec23438961f5"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "0582f9314b5b24c3ce0bf44af16c5604"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "6847fac717dfc5f54ad2db549e42aed1"
  },
  {
    "url": "categories/index.html",
    "revision": "337cb61b40b339998715470915406609"
  },
  {
    "url": "docs/Java版本演进之路/index.html",
    "revision": "ce6fb54dc8745bc09ae85e28932377fd"
  },
  {
    "url": "docs/Java版本演进之路/Java-1 版本特性.html",
    "revision": "edbbda0594a37b5577f6159ac351043e"
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
    "revision": "9acc15bb39aabe2dda07a1258aed715a"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "9c3195bdb1a6cd94a989c20983dbce8d"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "83cca724db30abb7cde49cddef1baa30"
  },
  {
    "url": "tag/index.html",
    "revision": "77508f0fba5acb7e98c7476d19d07a5d"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "49ffd16f981fb4c61b49f975390f84ac"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f01f2d032075c6414aa8bb4273540965"
  },
  {
    "url": "timeline/index.html",
    "revision": "b308a3ca72c879a8350107e2a5174b85"
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
