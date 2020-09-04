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
    "revision": "a46c022983a3809b1ff138c0aab02aee"
  },
  {
    "url": "algorithm/array/index.html",
    "revision": "69b44ce61e5e58f8e3eb6444620c50da"
  },
  {
    "url": "algorithm/backtracking/index.html",
    "revision": "1088bc8f2ed93f3d55db30b9b3e76d68"
  },
  {
    "url": "algorithm/graph/index.html",
    "revision": "16d425a996838335507163211b814cd8"
  },
  {
    "url": "algorithm/greedy/index.html",
    "revision": "cfc0c871438d2f1362eaa2f024c6e96f"
  },
  {
    "url": "algorithm/hashtable/index.html",
    "revision": "7a43f37c397069aa0bf178df0a4e2a94"
  },
  {
    "url": "algorithm/heap/index.html",
    "revision": "73b2c1cebfcb96ec76e264745796cf72"
  },
  {
    "url": "algorithm/stack/index.html",
    "revision": "2f339138374ce1af87e82d51d6e701a7"
  },
  {
    "url": "algorithm/tree/index.html",
    "revision": "ef6c3c3e8a0f682e0c43613bb9b0547f"
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
    "url": "assets/js/19.8bdc14f3.js",
    "revision": "27a9f83b35190cc8aa4a8725d2d106d3"
  },
  {
    "url": "assets/js/20.5925f156.js",
    "revision": "bc3d0d0341a60fb0c7b5dc324175422e"
  },
  {
    "url": "assets/js/21.d1ea27a8.js",
    "revision": "aac5508ba6d4aa6264aacdcc08c5c91f"
  },
  {
    "url": "assets/js/22.b253010f.js",
    "revision": "6f04126b7042bce2f00cda85d7274e80"
  },
  {
    "url": "assets/js/23.aff9d716.js",
    "revision": "334a167f75c6106b546690161537acad"
  },
  {
    "url": "assets/js/24.9f8a7b32.js",
    "revision": "161b03f7d8eefe76246c674d9e0624e2"
  },
  {
    "url": "assets/js/25.4e03a5ad.js",
    "revision": "c65b3fac8b998ffc9839efed6bee32e0"
  },
  {
    "url": "assets/js/26.e38430ca.js",
    "revision": "f2ec3ed0eeeacd876cb6854e3879ca1d"
  },
  {
    "url": "assets/js/27.55f9a767.js",
    "revision": "b401bd71bcf0c3b4a0256cf7aa864f17"
  },
  {
    "url": "assets/js/28.e5d66455.js",
    "revision": "5724c375544392ceb47b16c83e6b6ce0"
  },
  {
    "url": "assets/js/29.f3b000fa.js",
    "revision": "3a78a1d4bdcfba1f9e72e86f99017026"
  },
  {
    "url": "assets/js/3.3e98eff2.js",
    "revision": "71b6240a1aac9a39c0e414706588c143"
  },
  {
    "url": "assets/js/30.0026707f.js",
    "revision": "1f34fb2ac33b13d389fbbf8ccad08ba3"
  },
  {
    "url": "assets/js/31.68854853.js",
    "revision": "f7df4acf205f2a1d99b65ee98c9bd16c"
  },
  {
    "url": "assets/js/32.95cb5ad0.js",
    "revision": "eff04e7d3d5737017797295ffa17db8b"
  },
  {
    "url": "assets/js/33.1ce51903.js",
    "revision": "61491fe923db525ecd4669c2305bfe7f"
  },
  {
    "url": "assets/js/34.37cf721f.js",
    "revision": "1f6fcb7c076c8ca165b4309d4238775f"
  },
  {
    "url": "assets/js/35.38b2af1f.js",
    "revision": "cd5ceea547890b6881eef1664780aa07"
  },
  {
    "url": "assets/js/36.5e62f35b.js",
    "revision": "32d2d4eccfa3e65a8957d7d74970c585"
  },
  {
    "url": "assets/js/37.506c13e0.js",
    "revision": "789230f1c643361d2972db44aadb23c3"
  },
  {
    "url": "assets/js/38.8d398a2b.js",
    "revision": "8b490737dfef283cd0c150ccf8f7d50b"
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
    "url": "assets/js/app.3e6fdcbd.js",
    "revision": "df521e55ce426f88fe75064365a43b3c"
  },
  {
    "url": "assets/js/vendors~flowchart.1fdfa170.js",
    "revision": "dae53ebd013477df0df36f492f1ecce3"
  },
  {
    "url": "blockchain/tutorial/index.html",
    "revision": "7f1ba2565e86e250a93ae348112ade5c"
  },
  {
    "url": "framework/index.html",
    "revision": "cd4939fc052d529f718ca3b26e5443b8"
  },
  {
    "url": "go/tutorial/index.html",
    "revision": "ac8e8021cdb719b45c5cd3642e52a254"
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
    "revision": "32dad728147249fc547f3e37d2c27729"
  },
  {
    "url": "java/history/index.html",
    "revision": "294bb38ac5ef1854d6ffb7fad49cc7c3"
  },
  {
    "url": "java/history/Java-1.1.html",
    "revision": "ed11813b9566baa0444c4af1ff9a0465"
  },
  {
    "url": "java/history/Java-1.2.html",
    "revision": "77fe42536c68a0279158b3901047c3a8"
  },
  {
    "url": "java/history/Java-1.3.html",
    "revision": "2df7b26ac9bbb56ebb67988631a2be05"
  },
  {
    "url": "java/history/Java-1.4.html",
    "revision": "75f97ce0358ddad7c1efe9ea9993026d"
  },
  {
    "url": "java/history/Java-1.html",
    "revision": "873696aa1c71e4756e8540c68e1b6cbb"
  },
  {
    "url": "java/history/Java-5.html",
    "revision": "e37d9d3e67dfd9ad281dfeb646a70661"
  },
  {
    "url": "java/history/Java-6.html",
    "revision": "3a895fd9535c670c6b44eec51a117cf2"
  },
  {
    "url": "java/history/Java诞生史.html",
    "revision": "4174492ae3b2a4daa555b8324d45f8ce"
  },
  {
    "url": "java/review/index.html",
    "revision": "9eaf92ce548d5c53a1ef490483249226"
  },
  {
    "url": "java/review/Java多态面试题1.html",
    "revision": "05ee184d836fb6e31bfed3b8b8c4e92c"
  },
  {
    "url": "java/review/Java多态面试题2.html",
    "revision": "1c96f2c1811cc89211549ee7f141850b"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "share/technical/index.html",
    "revision": "04f385a12a743eaa45bafebe4acb173f"
  },
  {
    "url": "share/technical/vuepress简介&搭建.html",
    "revision": "6e609f0cfe4dfbc1b73652eab25026aa"
  },
  {
    "url": "source/java-collections/index.html",
    "revision": "e43413e9fefbf0c234c110fb106e2c54"
  },
  {
    "url": "source/java-collections/JDK8——ArrayList源码解读.html",
    "revision": "d138e2315ca364c54071c5e0cdc8d0c0"
  },
  {
    "url": "source/java-collections/JDK8——HashMap源码解读.html",
    "revision": "5e52b4248448017c61a3a97c4bd1ca3f"
  },
  {
    "url": "source/java-collections/JDK8——LinkedList源码解读.html",
    "revision": "2024cdbe292c25ba6afc16ad31c07c83"
  },
  {
    "url": "source/java-collections/JDK8——Vector源码解读.html",
    "revision": "6079f7d8d8180932b322ccae08e8bb6e"
  },
  {
    "url": "source/java-wrapper/index.html",
    "revision": "b062d7a342aadbb128985bc4dc8d8a7c"
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
