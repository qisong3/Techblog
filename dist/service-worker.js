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
    "revision": "4c01ed2f229f2d60cbb9a46857d5aa34"
  },
  {
    "url": "algorithm/array/index.html",
    "revision": "f0be733ba0f16ff237eb9643145beb00"
  },
  {
    "url": "algorithm/backtracking/index.html",
    "revision": "46e9866b12900f1d1b20cee80d3dcbc0"
  },
  {
    "url": "algorithm/graph/index.html",
    "revision": "b5a2563d1c8143450489a44280b29895"
  },
  {
    "url": "algorithm/greedy/index.html",
    "revision": "2cb42c3dc1378ec40a7e6afc724d737f"
  },
  {
    "url": "algorithm/hashtable/index.html",
    "revision": "996cf57dc2efb1186c4cfa7803a6bd50"
  },
  {
    "url": "algorithm/heap/index.html",
    "revision": "dcd901dad010a2a72e05726fc8e6a138"
  },
  {
    "url": "algorithm/stack/index.html",
    "revision": "6d67ee189203c0bc72b0590c10a8b1e0"
  },
  {
    "url": "algorithm/tree/index.html",
    "revision": "fc12c3e49d69ee4cec044c91a691a3d0"
  },
  {
    "url": "assets/css/0.styles.35789c7e.css",
    "revision": "86f96aec26838d8f4f75b6797aaeb109"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9a9dce90.js",
    "revision": "a6f6419529216a401a56ba77b272b869"
  },
  {
    "url": "assets/js/11.ef45adb9.js",
    "revision": "1cfb4b8cc6f7a44b52db7b242c008af5"
  },
  {
    "url": "assets/js/12.f66796c8.js",
    "revision": "57787385abe3ce1a6eb919ff2f61e14e"
  },
  {
    "url": "assets/js/13.6cee77b7.js",
    "revision": "b4117f9179df463b23178db0a7c2d170"
  },
  {
    "url": "assets/js/14.5966cbad.js",
    "revision": "420337d4251a4e04b4f99710e083f516"
  },
  {
    "url": "assets/js/15.f38fbfe0.js",
    "revision": "85d201319d02e0b64443139ba4fafd9d"
  },
  {
    "url": "assets/js/16.13edfc20.js",
    "revision": "7a490cec3e3851a96c59a64b26abb131"
  },
  {
    "url": "assets/js/17.65cdd27f.js",
    "revision": "1167035086a6e5a06291acf869be17e4"
  },
  {
    "url": "assets/js/18.f00e48dd.js",
    "revision": "a908b60d7a0c31a2b18a4dfd35028339"
  },
  {
    "url": "assets/js/19.2020e0d0.js",
    "revision": "4665cec31a940f0c9cdbb33fa12312c9"
  },
  {
    "url": "assets/js/20.a99ef63d.js",
    "revision": "8b37a98300a6797620898659f06d4090"
  },
  {
    "url": "assets/js/21.5ed00d6c.js",
    "revision": "20f389ad9f6af1f222a8d614c71b5d37"
  },
  {
    "url": "assets/js/22.52653906.js",
    "revision": "e49a1dd0262299647a7c03816b4ad68d"
  },
  {
    "url": "assets/js/23.e334a98c.js",
    "revision": "9564c4f8808b1381ea82fd1396f9e6b8"
  },
  {
    "url": "assets/js/24.7685fcf4.js",
    "revision": "7e20e87bd903108e990bdcac282fbe07"
  },
  {
    "url": "assets/js/25.4c24ecea.js",
    "revision": "f26af316496b86157f6b81a96783ff07"
  },
  {
    "url": "assets/js/26.548cfe65.js",
    "revision": "d4a1f0795d79b6e6f1805d7e34ac7911"
  },
  {
    "url": "assets/js/27.9ce8912f.js",
    "revision": "78bf7171281de8a6e38b97e3d9a58a07"
  },
  {
    "url": "assets/js/28.3ea3a4f0.js",
    "revision": "6ec6855e26f001b342275a88f489fb10"
  },
  {
    "url": "assets/js/29.a3f431f2.js",
    "revision": "c2199a03ca83940012e0a7c53b280f79"
  },
  {
    "url": "assets/js/3.1049711a.js",
    "revision": "71b6240a1aac9a39c0e414706588c143"
  },
  {
    "url": "assets/js/30.777d9ab8.js",
    "revision": "49a6e752b517efe5ca9e5df0e3da5dba"
  },
  {
    "url": "assets/js/31.95da91d0.js",
    "revision": "2f41ae1cf0be668e315eabe27c7c6d4e"
  },
  {
    "url": "assets/js/32.5cb646a1.js",
    "revision": "3de926b28736c2254ca02cc4fefc2a74"
  },
  {
    "url": "assets/js/4.efe81107.js",
    "revision": "fc5a87d7ce6930a963a738939e4fbb97"
  },
  {
    "url": "assets/js/5.61f83634.js",
    "revision": "bf50da344b205ad18499eaef88d02b74"
  },
  {
    "url": "assets/js/6.234cb12f.js",
    "revision": "1280efc15668a2a0b53ae36a5597d86a"
  },
  {
    "url": "assets/js/7.0a43722d.js",
    "revision": "f5c3ae7be437dceb8f5c77d329ad0614"
  },
  {
    "url": "assets/js/8.eff16149.js",
    "revision": "618c9dff583b5720e33df4f8352f68e2"
  },
  {
    "url": "assets/js/9.60338792.js",
    "revision": "d128f1f42b5e48ef1bbfc246faf3c841"
  },
  {
    "url": "assets/js/app.410f8ee1.js",
    "revision": "9791d2c7823682bf70f2fe79ac86ff20"
  },
  {
    "url": "assets/js/vendors~flowchart.1fdfa170.js",
    "revision": "dae53ebd013477df0df36f492f1ecce3"
  },
  {
    "url": "framework/index.html",
    "revision": "8c1a6e7389040d1636b78823a72e5cd8"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "images/从零开始搭建vuepress/default_full.png",
    "revision": "9c1ceb87a4ec5f2fb6ab33ccf6dab39a"
  },
  {
    "url": "images/从零开始搭建vuepress/empty_home.png",
    "revision": "0c9fb9b8e952c5d45bcea142ea47c937"
  },
  {
    "url": "images/Java-history/jdbc-architecture.jpg",
    "revision": "8d24aa15cc6569307c96e220ce20a80f"
  },
  {
    "url": "images/Java-history/swing-demo-mac.jpg",
    "revision": "dc6c0cc883f442e475f20be9f21e3856"
  },
  {
    "url": "images/Java-history/swing-demo-windows.png",
    "revision": "973dfb4119cc516765eafb50bddf40d4"
  },
  {
    "url": "images/java-source/arrayList-1.png",
    "revision": "a816c83bfffb38288c72cb5c06ad733f"
  },
  {
    "url": "images/java-source/collection-relation.gif",
    "revision": "2f459861d963c59dddd56d7466da4381"
  },
  {
    "url": "images/java-source/hashmap-1.jpg",
    "revision": "5b4135cdd2741688a297e44934c7c073"
  },
  {
    "url": "images/java-source/hashmap-2.jpg",
    "revision": "9efe454f72fe19077e0e1acfb9fb4bab"
  },
  {
    "url": "images/java-source/hashmap-3.jpg",
    "revision": "ca8dd9229389f705e6bc4e0e836f4977"
  },
  {
    "url": "images/java-source/hashmap-4.jpg",
    "revision": "d7e2594517683fb621b8b41693d1ddd2"
  },
  {
    "url": "images/java-source/linkedList-1.png",
    "revision": "83dfc30c02bf48d0e967adf192008d99"
  },
  {
    "url": "images/Java面试题(二)/class_method_table.png",
    "revision": "efc872bb512e55a7cecb461f0a5cdf55"
  },
  {
    "url": "index.html",
    "revision": "ba3d658ae4beac516814bbc89e1b28fd"
  },
  {
    "url": "java/history/index.html",
    "revision": "7ee21fdc1dc03821005b11458894fbf3"
  },
  {
    "url": "java/history/Java-1.1.html",
    "revision": "4739da2f0d843e6bd47082ea87412e01"
  },
  {
    "url": "java/history/Java-1.2.html",
    "revision": "a05b7ddb0eeba68be506c4812e95c9b9"
  },
  {
    "url": "java/history/Java-1.html",
    "revision": "00ff60b1d2a84e676bc03f532aa64df0"
  },
  {
    "url": "java/history/Java诞生史.html",
    "revision": "6ddc226910adcb608c493d9b78c91652"
  },
  {
    "url": "java/review/index.html",
    "revision": "a43336d4a496c0d6fc2e32983fb3eb37"
  },
  {
    "url": "java/review/Java多态面试题1.html",
    "revision": "45ca4bb2a4b938e2712d95a3bacd2797"
  },
  {
    "url": "java/review/Java多态面试题2.html",
    "revision": "e97b82933d91ea9fa4ad4642f3d9d1d6"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "share/technical/index.html",
    "revision": "7acaa41e84d9947462a47a6f3b327fd5"
  },
  {
    "url": "share/technical/vuepress简介&搭建.html",
    "revision": "c8c0e33deb281d9457d931628e8a7bc6"
  },
  {
    "url": "source/java-collections/index.html",
    "revision": "4d7321d87450fa6122972735be2a7fd7"
  },
  {
    "url": "source/java-collections/JDK8——ArrayList源码解读.html",
    "revision": "82778ef4bff5e96108b00ee13f3c6f95"
  },
  {
    "url": "source/java-collections/JDK8——HashMap源码解读.html",
    "revision": "aa67cb29bba2581ba51758f16b6bac5a"
  },
  {
    "url": "source/java-collections/JDK8——LinkedList源码解读.html",
    "revision": "a5825da55d26eaca6e0c95293d8dcca1"
  },
  {
    "url": "source/java-wrapper/index.html",
    "revision": "5973534b333605b0c0f09c84793ec409"
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
