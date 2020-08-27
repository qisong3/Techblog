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
    "revision": "b2d84e9592d5129a744fb06bee4f9af0"
  },
  {
    "url": "algorithm/array/index.html",
    "revision": "fb86967d2c6515fd0d2948ade700a273"
  },
  {
    "url": "algorithm/backtracking/index.html",
    "revision": "e26ed72e27bc3119997d1172c6ba81f1"
  },
  {
    "url": "algorithm/graph/index.html",
    "revision": "42529bc4926216156cd7012780dbaebe"
  },
  {
    "url": "algorithm/greedy/index.html",
    "revision": "2b0e7d9a170cc0371abda141128df3c5"
  },
  {
    "url": "algorithm/hashtable/index.html",
    "revision": "71e6897edf644d40dde0918c8ba16990"
  },
  {
    "url": "algorithm/heap/index.html",
    "revision": "f6c5ebd9fa7f71c86c12675e132ae5e7"
  },
  {
    "url": "algorithm/stack/index.html",
    "revision": "95abd2fec3f312e2726136c6b72b787e"
  },
  {
    "url": "algorithm/tree/index.html",
    "revision": "cc22b703e65845ff8c19de7e05ecd97b"
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
    "url": "assets/js/12.f49dc3e4.js",
    "revision": "47b7652e0e554144d8921562457ff1a4"
  },
  {
    "url": "assets/js/13.6bad91f0.js",
    "revision": "659f6fc4c70ad941286171790708f8c5"
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
    "url": "assets/js/16.ecdbb70c.js",
    "revision": "5e0cc80bff7c2e559fd7fd898be9c185"
  },
  {
    "url": "assets/js/17.d3a86cb8.js",
    "revision": "058466eb317cb8230f51982d08afd8b1"
  },
  {
    "url": "assets/js/18.231e85d8.js",
    "revision": "e8a3e50e1ed3d7a0f826b58597b87d55"
  },
  {
    "url": "assets/js/19.ea05d66d.js",
    "revision": "e2a1c2e4ce1f6505aa02c32f2c89424f"
  },
  {
    "url": "assets/js/20.6b23704d.js",
    "revision": "25f3986013cb8037cca37d134d93aa51"
  },
  {
    "url": "assets/js/21.13b02c03.js",
    "revision": "5f8b2a679d844ae6c1090675d3c7efc3"
  },
  {
    "url": "assets/js/22.be2e1a57.js",
    "revision": "aea6fb781db28c12006c3ecaed03f7d0"
  },
  {
    "url": "assets/js/23.552bb517.js",
    "revision": "cfd933e72dbdd9bc968e372bca61e01b"
  },
  {
    "url": "assets/js/24.1ad7ef1c.js",
    "revision": "0cb60520df296d4210544e2685d21058"
  },
  {
    "url": "assets/js/25.7179b089.js",
    "revision": "61eebc0a41e343621c70a0c1bf03d6f0"
  },
  {
    "url": "assets/js/26.ee74fd47.js",
    "revision": "db480b44ad95f7849e4563144d0bff09"
  },
  {
    "url": "assets/js/27.81de2c34.js",
    "revision": "544bbfc77e40bf3ee07c4f1968efadff"
  },
  {
    "url": "assets/js/28.b68db664.js",
    "revision": "bc1d0eb06091785e40214e8307566e2a"
  },
  {
    "url": "assets/js/29.ecd02026.js",
    "revision": "7baa44a43f0a28a1d0ce1d2256c30612"
  },
  {
    "url": "assets/js/3.3e98eff2.js",
    "revision": "71b6240a1aac9a39c0e414706588c143"
  },
  {
    "url": "assets/js/30.0d607131.js",
    "revision": "5d47127d812ee24d178dfd9a7f656b97"
  },
  {
    "url": "assets/js/31.a47d428b.js",
    "revision": "3e52aace1035a54ca31b78cf1d7460e7"
  },
  {
    "url": "assets/js/32.755b58a0.js",
    "revision": "8eebeea06d7f2c59255b2e51107327f9"
  },
  {
    "url": "assets/js/33.db9052b9.js",
    "revision": "2a6b2f8574f16f98d1198898ee7427cb"
  },
  {
    "url": "assets/js/34.d724c57c.js",
    "revision": "219e7678d8a66b46f937b2abdb623ec2"
  },
  {
    "url": "assets/js/35.8ee19499.js",
    "revision": "6402de27f8369d262ade700f45e2c4e6"
  },
  {
    "url": "assets/js/36.b8c48b41.js",
    "revision": "c9973d0f6c2930b0ef51f141ba0d581f"
  },
  {
    "url": "assets/js/4.e85b1cf5.js",
    "revision": "9375c0878cc9192a962d458b763e0e5b"
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
    "url": "assets/js/7.b5ab1750.js",
    "revision": "59228599430dc955dffe0e8918f1a420"
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
    "url": "assets/js/app.d63f8b87.js",
    "revision": "6a45e2280aa921f3f8f529c35876ef14"
  },
  {
    "url": "assets/js/vendors~flowchart.1fdfa170.js",
    "revision": "dae53ebd013477df0df36f492f1ecce3"
  },
  {
    "url": "framework/index.html",
    "revision": "6d3b25a34d35dfdeb15b5254f9cec390"
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
    "revision": "c3432001917ff10648420c6d7c8527e9"
  },
  {
    "url": "java/history/index.html",
    "revision": "90e38799346305ef3da0c967f0059729"
  },
  {
    "url": "java/history/Java-1.1.html",
    "revision": "0b8129b41c87433aaf26188bd2e61232"
  },
  {
    "url": "java/history/Java-1.2.html",
    "revision": "377fc53b5a7c53903fc1548e7ad73d9f"
  },
  {
    "url": "java/history/Java-1.3.html",
    "revision": "9906d912ac38068bec9340d764f2d22c"
  },
  {
    "url": "java/history/Java-1.4.html",
    "revision": "05ed5471357d5b66b787496430aa6476"
  },
  {
    "url": "java/history/Java-1.html",
    "revision": "e03dda586c33524ba1ebac6816ef0976"
  },
  {
    "url": "java/history/Java-5.html",
    "revision": "65669760049ce55cdbbb38c7b1db224b"
  },
  {
    "url": "java/history/Java诞生史.html",
    "revision": "d8c44b2b09ffc4a6cd116e9a06308ec0"
  },
  {
    "url": "java/review/index.html",
    "revision": "22c0a598c34de3fc8067450340347902"
  },
  {
    "url": "java/review/Java多态面试题1.html",
    "revision": "a6d7dc8ee222c3b519dfb9325b730a93"
  },
  {
    "url": "java/review/Java多态面试题2.html",
    "revision": "89decafbba22fa2dcbd5d612fa19c909"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "share/technical/index.html",
    "revision": "9e31929388e63c2ddf27443d2697bd22"
  },
  {
    "url": "share/technical/vuepress简介&搭建.html",
    "revision": "569decc51fcc095c62cd434e9c77b5e6"
  },
  {
    "url": "source/java-collections/index.html",
    "revision": "d9e8355c1b3e2dade2bd06c91ede80e5"
  },
  {
    "url": "source/java-collections/JDK8——ArrayList源码解读.html",
    "revision": "bde32fe86124d752108a381d7966b138"
  },
  {
    "url": "source/java-collections/JDK8——HashMap源码解读.html",
    "revision": "839fca9b7d15f852bb68f03b4c02909d"
  },
  {
    "url": "source/java-collections/JDK8——LinkedList源码解读.html",
    "revision": "15603fcba99385cbbaf86efb7fa651f9"
  },
  {
    "url": "source/java-collections/JDK8——Vector源码解读.html",
    "revision": "226a6acacca1b895872516c4077a6f07"
  },
  {
    "url": "source/java-wrapper/index.html",
    "revision": "247dc3d7b85ca1b099d632cdc669a363"
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
