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
    "revision": "9e5c965112c04021fe682856ec675031"
  },
  {
    "url": "algorithm/array/index.html",
    "revision": "f12d2d69bef7d9bca05d36e9f7106825"
  },
  {
    "url": "algorithm/backtracking/index.html",
    "revision": "1ff5c66da27b9da4861a1a432423f676"
  },
  {
    "url": "algorithm/graph/index.html",
    "revision": "1ca64fc740af3fe49dfe95622fb14e2d"
  },
  {
    "url": "algorithm/greedy/index.html",
    "revision": "207da8b94ba04cfb607879e4808a7fdb"
  },
  {
    "url": "algorithm/hashtable/index.html",
    "revision": "66efe930f00474c3c68f1b00f042c344"
  },
  {
    "url": "algorithm/heap/index.html",
    "revision": "4c205d09e6f662c7e0b1a2455eae0609"
  },
  {
    "url": "algorithm/stack/index.html",
    "revision": "dff6c655a9025b80a2aa31c10c6923b4"
  },
  {
    "url": "algorithm/tree/index.html",
    "revision": "1249f55f152ef68e7e3a8027c7e5ceb8"
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
    "url": "assets/js/10.d80d54bd.js",
    "revision": "81d128431f73742246fa198f83965688"
  },
  {
    "url": "assets/js/11.430b31b1.js",
    "revision": "17c9e4fbab4e27a2bb8bb7b9f2959f6b"
  },
  {
    "url": "assets/js/12.67232347.js",
    "revision": "57787385abe3ce1a6eb919ff2f61e14e"
  },
  {
    "url": "assets/js/13.dc37efd6.js",
    "revision": "b4117f9179df463b23178db0a7c2d170"
  },
  {
    "url": "assets/js/14.402a84c0.js",
    "revision": "420337d4251a4e04b4f99710e083f516"
  },
  {
    "url": "assets/js/15.a6704a02.js",
    "revision": "2806d47a32cb4e21a2e14e949d63096f"
  },
  {
    "url": "assets/js/16.eccb204d.js",
    "revision": "5e0cc80bff7c2e559fd7fd898be9c185"
  },
  {
    "url": "assets/js/17.7c0e42de.js",
    "revision": "3e50270dbfc0f43423c72319e0bac4de"
  },
  {
    "url": "assets/js/18.9a2eb3e1.js",
    "revision": "c8a2f08ec9021c1c7fcbd1f130cf0de3"
  },
  {
    "url": "assets/js/19.8b3806ed.js",
    "revision": "cf1fbcf7939e13e2792ce9386ed6daea"
  },
  {
    "url": "assets/js/20.78b75c99.js",
    "revision": "2fcd86f485ee8b9d0543b2b8847bd42c"
  },
  {
    "url": "assets/js/21.275389a5.js",
    "revision": "b37d8b047c4b72d254e2c53b4d07003f"
  },
  {
    "url": "assets/js/22.25dd88ca.js",
    "revision": "c584c6ce534a4b635bbd76c614173699"
  },
  {
    "url": "assets/js/23.fa103022.js",
    "revision": "366139c011370a8af2ee441c4d8a9c67"
  },
  {
    "url": "assets/js/24.8159298d.js",
    "revision": "4261ce18b6b923b5a501a40f24a6e6d4"
  },
  {
    "url": "assets/js/25.2cf99bef.js",
    "revision": "edad1841fd47bc093f5ebe4b41c366ab"
  },
  {
    "url": "assets/js/26.00393696.js",
    "revision": "e2c338bea9b03da4362254324cfdf7ba"
  },
  {
    "url": "assets/js/27.b145028f.js",
    "revision": "23c843242f4ec8dbc54710a63599ca20"
  },
  {
    "url": "assets/js/28.cf32ff74.js",
    "revision": "71c266b489ec54c4727d6b7dfe5a6ee0"
  },
  {
    "url": "assets/js/29.dd3c5312.js",
    "revision": "6e47ac9044571525cd71bec2c2ab5d59"
  },
  {
    "url": "assets/js/3.3e98eff2.js",
    "revision": "71b6240a1aac9a39c0e414706588c143"
  },
  {
    "url": "assets/js/30.6c1168f3.js",
    "revision": "ab0120dda792926da5651c120b1b5228"
  },
  {
    "url": "assets/js/31.5cfd6985.js",
    "revision": "ae3aec26f7e8793a25c671d78f45f489"
  },
  {
    "url": "assets/js/32.719366ed.js",
    "revision": "46b5be7be3f4aa380f3e0ebbc417f666"
  },
  {
    "url": "assets/js/33.5a01936f.js",
    "revision": "57e3a29a6a4efcd8da77175910cd2596"
  },
  {
    "url": "assets/js/34.ddef2eb2.js",
    "revision": "bf107a76413aa3c86630ded31f72b6c0"
  },
  {
    "url": "assets/js/35.7326d1cb.js",
    "revision": "760b9c69fa115c6fb86eea61bad1cb5e"
  },
  {
    "url": "assets/js/36.af3e015c.js",
    "revision": "46045ff0386b474e816ec456def25aa6"
  },
  {
    "url": "assets/js/37.def3f1ff.js",
    "revision": "439c7ebd08342acf63992763484d42d3"
  },
  {
    "url": "assets/js/38.b0e59632.js",
    "revision": "470e16783c64a04d355f761049a7e082"
  },
  {
    "url": "assets/js/39.d85445bf.js",
    "revision": "aa821ffca85d3bd03e7fb41e4e93c508"
  },
  {
    "url": "assets/js/4.569d079a.js",
    "revision": "4e55e0dc29d53f56fc69f85547a812e8"
  },
  {
    "url": "assets/js/40.438c2aea.js",
    "revision": "79ef4a5ea092ee3119422d8e3aaad9cd"
  },
  {
    "url": "assets/js/41.67378f99.js",
    "revision": "5051008a9c5922265ca23c46fd3cd220"
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
    "url": "assets/js/7.87e7db29.js",
    "revision": "9c8b4c2ff9dd785107a8d23021579f57"
  },
  {
    "url": "assets/js/8.836e5e20.js",
    "revision": "618c9dff583b5720e33df4f8352f68e2"
  },
  {
    "url": "assets/js/9.49026b22.js",
    "revision": "22392d6fbd752fc8403422a76c7230e1"
  },
  {
    "url": "assets/js/app.56e32108.js",
    "revision": "9ccc0cff8b18b4e7f547233ae968c36f"
  },
  {
    "url": "assets/js/vendors~flowchart.1fdfa170.js",
    "revision": "dae53ebd013477df0df36f492f1ecce3"
  },
  {
    "url": "blockchain/tutorial/index.html",
    "revision": "6b69fafb7f4de8b945348a016a07b5b8"
  },
  {
    "url": "framework/index.html",
    "revision": "e7dfa883e90be82e4a6a76ebb6a0eec2"
  },
  {
    "url": "go/tutorial/数据类型.html",
    "revision": "6720cddeaf300fb1f0da01f29b6d67c2"
  },
  {
    "url": "go/tutorial/index.html",
    "revision": "9b04961462d1c1d24349d7225e1340b4"
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
    "revision": "bad3c9c7d9e85730ae2976340219f073"
  },
  {
    "url": "java/deep/Java中的时间处理.html",
    "revision": "032d73da5680a39da04b444f8eca3f25"
  },
  {
    "url": "java/history/index.html",
    "revision": "37f8ed86f4c2a5f9d483454ab55fda77"
  },
  {
    "url": "java/history/Java-1.1.html",
    "revision": "49111aa03aec80a1b2b1b78e070e6c67"
  },
  {
    "url": "java/history/Java-1.2.html",
    "revision": "a7c2d694ff3ff58635988078da03bb87"
  },
  {
    "url": "java/history/Java-1.3.html",
    "revision": "5bf5f401a262d120ed1c634886d77bdc"
  },
  {
    "url": "java/history/Java-1.4.html",
    "revision": "4833f45ee58160ea0ee4c13cc1d23837"
  },
  {
    "url": "java/history/Java-1.html",
    "revision": "bbab5cbf13011a82fecb44c718b51f31"
  },
  {
    "url": "java/history/Java-5.html",
    "revision": "17095eb2e1aad02879abe324a59243f1"
  },
  {
    "url": "java/history/Java-6.html",
    "revision": "d9ab0487a717a9e275be3b2bce17b7b4"
  },
  {
    "url": "java/history/Java诞生史.html",
    "revision": "55b41ea3a0e8d7d34a57bb777ed5de12"
  },
  {
    "url": "java/review/index.html",
    "revision": "bfe0ab6f9e3177f866f4fe10eb097527"
  },
  {
    "url": "java/review/Java多态面试题1.html",
    "revision": "f22d6ea190209e69ec54553c0a336f21"
  },
  {
    "url": "java/review/Java多态面试题2.html",
    "revision": "a5d0679d12d212f42f2666510a3bded7"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "share/technical/index.html",
    "revision": "4bcf980c20215bb64bb097ec37c000d8"
  },
  {
    "url": "share/technical/vuepress简介&搭建.html",
    "revision": "bbff3849f0f37c534efd80e532ee006b"
  },
  {
    "url": "source/java-collections/index.html",
    "revision": "cca1066d0657c9467ce0e4fa4361fc34"
  },
  {
    "url": "source/java-collections/JDK8——ArrayList源码解读.html",
    "revision": "ad9dd9edf37ca2eb1f1ed142f8f3223f"
  },
  {
    "url": "source/java-collections/JDK8——HashMap源码解读.html",
    "revision": "380147cd4f117528ebada77cba2c4fea"
  },
  {
    "url": "source/java-collections/JDK8——LinkedList源码解读.html",
    "revision": "a3e595f411032a9816f1a764d847c7f3"
  },
  {
    "url": "source/java-collections/JDK8——Vector源码解读.html",
    "revision": "8fe1a8bc9b8504e953e8812faeea6cf2"
  },
  {
    "url": "source/java-wrapper/index.html",
    "revision": "67894475b3ebe75caeca8aa76afb0692"
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
