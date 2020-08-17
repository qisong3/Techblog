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
    "revision": "cf1fb39d05ed04dd3c96fadf9a876464"
  },
  {
    "url": "algorithm/array/index.html",
    "revision": "df6c5bb6a39bd0a6e05bce7c2f498fa6"
  },
  {
    "url": "algorithm/backtracking/index.html",
    "revision": "0c258dc20407b5e50b57b8d3a3d57133"
  },
  {
    "url": "algorithm/graph/index.html",
    "revision": "8851b8fcdfeb93b60432eaafe8cb50d4"
  },
  {
    "url": "algorithm/greedy/index.html",
    "revision": "c96349437972adf34bd7a2c772a2e877"
  },
  {
    "url": "algorithm/hashtable/index.html",
    "revision": "c1c49bf4ec1ea6c80156b7f8fdc1d3e1"
  },
  {
    "url": "algorithm/heap/index.html",
    "revision": "4e7ec87f7beff494c9a34f35f90b41ad"
  },
  {
    "url": "algorithm/stack/index.html",
    "revision": "3417a3b72437efe6dae0fa45c9927dd5"
  },
  {
    "url": "algorithm/tree/index.html",
    "revision": "2ecd2276497a46019617c6820e1e5a93"
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
    "url": "assets/js/10.0c54d29f.js",
    "revision": "331050f1d97062ce5480bde0bfe2a4b7"
  },
  {
    "url": "assets/js/11.776f5d34.js",
    "revision": "32a87d641d52fd372c014985cd128add"
  },
  {
    "url": "assets/js/12.16d8ef39.js",
    "revision": "4fad17c90df3b738cbc57d0b68a0fc82"
  },
  {
    "url": "assets/js/13.6cee77b7.js",
    "revision": "b4117f9179df463b23178db0a7c2d170"
  },
  {
    "url": "assets/js/14.5e7de1d6.js",
    "revision": "924127e933583a0b6a54706c779a8e94"
  },
  {
    "url": "assets/js/15.19f4cf11.js",
    "revision": "db7490ab4a3f5658c1a7bfa411c9a83b"
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
    "url": "assets/js/18.ce3aca46.js",
    "revision": "a92538469853474b40ce6f8e978cd275"
  },
  {
    "url": "assets/js/19.789cb3f0.js",
    "revision": "ac713782324d9138b8fc8c682b19b84e"
  },
  {
    "url": "assets/js/20.0f72b9e6.js",
    "revision": "686caf1b76dcf00be0d9024409c901f1"
  },
  {
    "url": "assets/js/21.7b772f8a.js",
    "revision": "1b60ba4b9fcbab906777ecb7047eca15"
  },
  {
    "url": "assets/js/22.f3ad599b.js",
    "revision": "50b63eacdca812424afc9cb9a6dcfd5e"
  },
  {
    "url": "assets/js/23.a46444b4.js",
    "revision": "ac2553f70e0844501919366d7fec9333"
  },
  {
    "url": "assets/js/24.f6bf4b27.js",
    "revision": "d1ad381d6b83f144bc9b520d84f3869b"
  },
  {
    "url": "assets/js/25.74def86d.js",
    "revision": "31a916db2a68a770edb3e292599e032c"
  },
  {
    "url": "assets/js/26.0e9dd2ea.js",
    "revision": "e9c7795e56d8a3f354952f48c271b6ed"
  },
  {
    "url": "assets/js/27.2137c49b.js",
    "revision": "b5c43430eb7f24df9057b0c91745d038"
  },
  {
    "url": "assets/js/28.f05b9f90.js",
    "revision": "397101257aa15bdb08bd3451a903fa5e"
  },
  {
    "url": "assets/js/29.aa43f301.js",
    "revision": "7693cc6f4d188a86ddf475c461103bce"
  },
  {
    "url": "assets/js/3.1049711a.js",
    "revision": "71b6240a1aac9a39c0e414706588c143"
  },
  {
    "url": "assets/js/30.477f7e1d.js",
    "revision": "2a3b41236c30456de4e52b905ba11ad0"
  },
  {
    "url": "assets/js/31.11009a6a.js",
    "revision": "cccd88f0025d3d5a24b15e7e44b3c41a"
  },
  {
    "url": "assets/js/32.054351dc.js",
    "revision": "6ea6379aca37d064539c7679ee7e80bf"
  },
  {
    "url": "assets/js/33.096e51bc.js",
    "revision": "717b05623678073f369a1a1646480cff"
  },
  {
    "url": "assets/js/4.86490ba9.js",
    "revision": "6f0c74a0ac6fafd3d51b43c884d8fe82"
  },
  {
    "url": "assets/js/5.61f83634.js",
    "revision": "bf50da344b205ad18499eaef88d02b74"
  },
  {
    "url": "assets/js/6.3c01b286.js",
    "revision": "556cc9186f83a61ae940d1d11cdb6d6d"
  },
  {
    "url": "assets/js/7.9fe6fa42.js",
    "revision": "d76a214ea4626ee3f206a0b442e90852"
  },
  {
    "url": "assets/js/8.6992c8a0.js",
    "revision": "a241b46ce2e63ee089b37ecbd7e67be5"
  },
  {
    "url": "assets/js/9.fc472b79.js",
    "revision": "49f5d32be8651395d1c8cc76cb9bb064"
  },
  {
    "url": "assets/js/app.d10e6133.js",
    "revision": "7287b69ed3cfb1f0bcb14298e3478305"
  },
  {
    "url": "assets/js/vendors~flowchart.1fdfa170.js",
    "revision": "dae53ebd013477df0df36f492f1ecce3"
  },
  {
    "url": "framework/index.html",
    "revision": "86d47aa8e36ad05367f0be3a3a49eb1d"
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
    "url": "images/Java-history/JNDI-architecture.jpg",
    "revision": "8d821790bf04ceac492e810ba2a6aa03"
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
    "revision": "ecd5de4aacfd9af870603891b587f2b7"
  },
  {
    "url": "java/history/index.html",
    "revision": "91ebb694233594a660d489f952f4b960"
  },
  {
    "url": "java/history/Java-1.1.html",
    "revision": "8ec8d3122dd8fde7c3a7a0d2e9a79df9"
  },
  {
    "url": "java/history/Java-1.2.html",
    "revision": "70739151a590a69a40aa207ab7e82ef1"
  },
  {
    "url": "java/history/Java-1.3.html",
    "revision": "b44757f4351b0fab17e5ab3bca668afd"
  },
  {
    "url": "java/history/Java-1.html",
    "revision": "5ae75605a4b9fbcf052a153fac115d50"
  },
  {
    "url": "java/history/Java诞生史.html",
    "revision": "9a18ebb32f9ab1288bb67a4dd5f499e0"
  },
  {
    "url": "java/review/index.html",
    "revision": "13f5315061d7086ad58e073d06df5cfb"
  },
  {
    "url": "java/review/Java多态面试题1.html",
    "revision": "8db0903df82e9e4c93458ccf76f4b612"
  },
  {
    "url": "java/review/Java多态面试题2.html",
    "revision": "d9c91f31501ac57c88a44b940286a03d"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "share/technical/index.html",
    "revision": "e792579c55216688cb663e5bbbfb7de0"
  },
  {
    "url": "share/technical/vuepress简介&搭建.html",
    "revision": "21244c745f8a133bf7479b981b52a64e"
  },
  {
    "url": "source/java-collections/index.html",
    "revision": "e40ad06fbc535889f719ea8d86d9ef9a"
  },
  {
    "url": "source/java-collections/JDK8——ArrayList源码解读.html",
    "revision": "0b4f2118d34a8d58a83302833d049417"
  },
  {
    "url": "source/java-collections/JDK8——HashMap源码解读.html",
    "revision": "263737af0c580382ea7a193400e9df4a"
  },
  {
    "url": "source/java-collections/JDK8——LinkedList源码解读.html",
    "revision": "55862a28738caad8f84e14a86efb54b0"
  },
  {
    "url": "source/java-wrapper/index.html",
    "revision": "116d5b46b372aeb39fc5f5c188fa6332"
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
