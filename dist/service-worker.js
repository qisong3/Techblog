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
    "revision": "c43d3891912e143b91701487760a9ffa"
  },
  {
    "url": "algorithm/array/index.html",
    "revision": "f1adcee7051c0822d8dc3785f85acf1d"
  },
  {
    "url": "algorithm/backtracking/index.html",
    "revision": "b00e80d4b82f4396b126e2e97250fd74"
  },
  {
    "url": "algorithm/graph/index.html",
    "revision": "d8bb8fc01184911b35a26888850ec983"
  },
  {
    "url": "algorithm/greedy/index.html",
    "revision": "740e62fe95820f770e9e33cde1a8dbc3"
  },
  {
    "url": "algorithm/hashtable/index.html",
    "revision": "74bffa69738ce55a0eabf311d2206afb"
  },
  {
    "url": "algorithm/heap/index.html",
    "revision": "d973d7966640ed66d4cf4529656636db"
  },
  {
    "url": "algorithm/stack/index.html",
    "revision": "98b06c0abea59f5bcb0cd1778ad5edec"
  },
  {
    "url": "algorithm/tree/index.html",
    "revision": "eab5b85e358cc77f1a9fbbb7fc6358fe"
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
    "url": "assets/js/10.c381b211.js",
    "revision": "331050f1d97062ce5480bde0bfe2a4b7"
  },
  {
    "url": "assets/js/11.430b31b1.js",
    "revision": "17c9e4fbab4e27a2bb8bb7b9f2959f6b"
  },
  {
    "url": "assets/js/12.d7a66493.js",
    "revision": "6924d8ffabd259fef8ff54595bb1482d"
  },
  {
    "url": "assets/js/13.6bad91f0.js",
    "revision": "659f6fc4c70ad941286171790708f8c5"
  },
  {
    "url": "assets/js/14.da6b6d22.js",
    "revision": "e98226cb01efbf4989b2fc338b2021d7"
  },
  {
    "url": "assets/js/15.80d730ab.js",
    "revision": "db7490ab4a3f5658c1a7bfa411c9a83b"
  },
  {
    "url": "assets/js/16.efab06a2.js",
    "revision": "7a490cec3e3851a96c59a64b26abb131"
  },
  {
    "url": "assets/js/17.165ac5ad.js",
    "revision": "8ed8885ec1c46daa38073e7aa4f2f9f3"
  },
  {
    "url": "assets/js/18.9204c5bb.js",
    "revision": "a42db92b60eb9ea2d1308a00f78dc5ea"
  },
  {
    "url": "assets/js/19.8bdc14f3.js",
    "revision": "27a9f83b35190cc8aa4a8725d2d106d3"
  },
  {
    "url": "assets/js/20.4937d942.js",
    "revision": "629163ac61a2bcecc6ebe3a6cbc6c583"
  },
  {
    "url": "assets/js/21.521ac5d4.js",
    "revision": "87b7b5b78444a17df31102c3068de314"
  },
  {
    "url": "assets/js/22.613ef228.js",
    "revision": "7b7cf7b06a347fa33fa353674e50af65"
  },
  {
    "url": "assets/js/23.9a43fcf3.js",
    "revision": "58ac016d72d09647bb0ff53092f42e1b"
  },
  {
    "url": "assets/js/24.0d8d45b6.js",
    "revision": "74fb59bc3fbe0950156e6d09d09272f6"
  },
  {
    "url": "assets/js/25.78d05b57.js",
    "revision": "2795bd761ed5e3f1b27b94171b55da43"
  },
  {
    "url": "assets/js/26.79cf9c40.js",
    "revision": "a326b5087d0988261c794b5f5b6c88bb"
  },
  {
    "url": "assets/js/27.48969eff.js",
    "revision": "90be167f1d0bffebfb48a00afeb270b5"
  },
  {
    "url": "assets/js/28.249fc46d.js",
    "revision": "531c91f14a38e9dc7710d3dc8afa3b14"
  },
  {
    "url": "assets/js/29.15f78e4f.js",
    "revision": "b366187545d87123c0f1efa8166c9da2"
  },
  {
    "url": "assets/js/3.d06486b1.js",
    "revision": "71b6240a1aac9a39c0e414706588c143"
  },
  {
    "url": "assets/js/30.9eaccadb.js",
    "revision": "1c1e89475582feeb0bcf284e22dd5b49"
  },
  {
    "url": "assets/js/31.8100ef66.js",
    "revision": "2f41ae1cf0be668e315eabe27c7c6d4e"
  },
  {
    "url": "assets/js/32.a9033038.js",
    "revision": "81cd14c6aafacfea4e6dc3aa4da71e83"
  },
  {
    "url": "assets/js/33.46ee9b6f.js",
    "revision": "75aaa315c157d472a8972851c261519d"
  },
  {
    "url": "assets/js/34.0f1e0f83.js",
    "revision": "73bee57ba21d98c7b51901ac622cda2f"
  },
  {
    "url": "assets/js/35.3619ab8d.js",
    "revision": "df3f1e57406d555115dae7837a373243"
  },
  {
    "url": "assets/js/36.6f2f8041.js",
    "revision": "8d898433586fa3dcf4a28cfe3d9e4af5"
  },
  {
    "url": "assets/js/37.9abb0c44.js",
    "revision": "11c8d8d7955b2b129fcf7fd2df8e197c"
  },
  {
    "url": "assets/js/38.49371cf8.js",
    "revision": "d634512e4bdc5ce49862407e568cad6d"
  },
  {
    "url": "assets/js/39.8f2a6e25.js",
    "revision": "3e96eead9b401210c5f67ae791c2db83"
  },
  {
    "url": "assets/js/4.baf1dfb8.js",
    "revision": "fbe1469196a826b23d84025316f613b6"
  },
  {
    "url": "assets/js/5.83a396a2.js",
    "revision": "bf50da344b205ad18499eaef88d02b74"
  },
  {
    "url": "assets/js/6.8fb5b480.js",
    "revision": "556cc9186f83a61ae940d1d11cdb6d6d"
  },
  {
    "url": "assets/js/7.3e1a5283.js",
    "revision": "db6348825f9f72fd8bf53c91cfe0a8d8"
  },
  {
    "url": "assets/js/8.52ad8f25.js",
    "revision": "a241b46ce2e63ee089b37ecbd7e67be5"
  },
  {
    "url": "assets/js/9.c1752616.js",
    "revision": "49f5d32be8651395d1c8cc76cb9bb064"
  },
  {
    "url": "assets/js/app.f289e29f.js",
    "revision": "301175a0bf98d5f6ed7418dbbb89dd1f"
  },
  {
    "url": "assets/js/vendors~flowchart.1fdfa170.js",
    "revision": "dae53ebd013477df0df36f492f1ecce3"
  },
  {
    "url": "blockchain/tutorial/index.html",
    "revision": "870e60295725b40aa9a6c44c6756529b"
  },
  {
    "url": "framework/index.html",
    "revision": "cd7ad90cff2e5db16ad0e63c82ac056b"
  },
  {
    "url": "go/tutorial/index.html",
    "revision": "bf9b3b06c7f81f281b287d8fb61d10a3"
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
    "url": "images/Java-history/exception-chain.png",
    "revision": "5c3ae14e087a7c14ed520b4ee54baecb"
  },
  {
    "url": "images/Java-history/j2se5.gif",
    "revision": "630408af67c413344c08f77f9bcaac79"
  },
  {
    "url": "images/Java-history/java-io.png",
    "revision": "16518742de44cb0652d91c7cd553a5e5"
  },
  {
    "url": "images/Java-history/java-nio-buffer-classes.png",
    "revision": "a24c767cabbd857bca2b7cd7e4053aa3"
  },
  {
    "url": "images/Java-history/java-nio.png",
    "revision": "00a8e9e567a516679677d3a4e50790e9"
  },
  {
    "url": "images/Java-history/java-proxy.png",
    "revision": "f4fb88f0738bea101ca252320865a33b"
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
    "url": "images/java-source/vector-1.png",
    "revision": "6829c5eb08ca2df280a695b9b896a819"
  },
  {
    "url": "images/Java面试题(二)/class_method_table.png",
    "revision": "efc872bb512e55a7cecb461f0a5cdf55"
  },
  {
    "url": "index.html",
    "revision": "cd6f540fae1807310b6e73eb104ce09f"
  },
  {
    "url": "java/history/index.html",
    "revision": "c473bf4e25d96f80df6e9667449003f1"
  },
  {
    "url": "java/history/Java-1.1.html",
    "revision": "bebe03e6dc98a6d86d11d68405f43c08"
  },
  {
    "url": "java/history/Java-1.2.html",
    "revision": "b51da69b604bce36e0342397c49aa375"
  },
  {
    "url": "java/history/Java-1.3.html",
    "revision": "e2f782268716a8f0c7ebff67e03a2a3c"
  },
  {
    "url": "java/history/Java-1.4.html",
    "revision": "623b139e72384e9542d7ccf470e070e1"
  },
  {
    "url": "java/history/Java-1.html",
    "revision": "742b9e71bf6b63cd20a9e973074b32a6"
  },
  {
    "url": "java/history/Java-5.html",
    "revision": "84db78e29316839c6a0c5c2df6a41042"
  },
  {
    "url": "java/history/Java-6.html",
    "revision": "ea1f2ef81e299482934c3be1e17e80ee"
  },
  {
    "url": "java/history/Java诞生史.html",
    "revision": "dd848d3977b8e5d437a42c96cbb083e9"
  },
  {
    "url": "java/review/index.html",
    "revision": "0fd7dfbfb28861912dc98e93fbdbdfe6"
  },
  {
    "url": "java/review/Java多态面试题1.html",
    "revision": "32a451a015383c51be6034b040719493"
  },
  {
    "url": "java/review/Java多态面试题2.html",
    "revision": "5b7cd2ff9c338ea71ee60bd3f9477bbd"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "share/technical/index.html",
    "revision": "c67ad3709d88ad29aeca8944454a3a24"
  },
  {
    "url": "share/technical/vuepress简介&搭建.html",
    "revision": "65896725bd91a0613419b94b38c3cc6e"
  },
  {
    "url": "source/java-collections/index.html",
    "revision": "86ee6f51a754ff958950209a446546de"
  },
  {
    "url": "source/java-collections/JDK8——ArrayList源码解读.html",
    "revision": "ed8487f6dd79406e242419ca908e8ec0"
  },
  {
    "url": "source/java-collections/JDK8——HashMap源码解读.html",
    "revision": "cda1477b7c8bfda1f165d5a4a025566c"
  },
  {
    "url": "source/java-collections/JDK8——LinkedList源码解读.html",
    "revision": "7efc3bb56bb82933d617d63f5be3e99e"
  },
  {
    "url": "source/java-collections/JDK8——Vector源码解读.html",
    "revision": "fd342905ce66433dcacc3859fd5f8599"
  },
  {
    "url": "source/java-wrapper/index.html",
    "revision": "79da8d8b717ce790d7b5656bd04980a1"
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
