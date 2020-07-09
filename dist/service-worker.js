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
    "revision": "2d8eecde6de24add33f58c92fe6b71ad"
  },
  {
    "url": "assets/css/0.styles.4655d464.css",
    "revision": "8ccbe6e62ee16c6a7cd6758b3bdd3468"
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
    "url": "assets/js/1.0abe8931.js",
    "revision": "9464612632980d424526824672fc90b1"
  },
  {
    "url": "assets/js/10.8e85ae47.js",
    "revision": "620e56b00b897d42ad9c83678439534f"
  },
  {
    "url": "assets/js/11.4708cb20.js",
    "revision": "abdc64d0d02d84229dabbbc9547fc47e"
  },
  {
    "url": "assets/js/12.077fc224.js",
    "revision": "efd23e9e57c1e1ef4fd8fc43d62c1b47"
  },
  {
    "url": "assets/js/13.254dfe9e.js",
    "revision": "e636467ae9cf8df845ee37cd76766b83"
  },
  {
    "url": "assets/js/14.f6faf662.js",
    "revision": "8ce6b00c86a88080d2f0af2d4020df1f"
  },
  {
    "url": "assets/js/15.96d9b0bf.js",
    "revision": "c8afba6ac7de52628490b11a26e904ec"
  },
  {
    "url": "assets/js/16.319a1138.js",
    "revision": "c9620bf805c9e43ff5e159cca0aa4438"
  },
  {
    "url": "assets/js/17.f3c4e9f1.js",
    "revision": "e7b30d08d4f49a11b9123077f84152b3"
  },
  {
    "url": "assets/js/18.5f5873fe.js",
    "revision": "ff5f402da13feef7c7052048cdb0b1dc"
  },
  {
    "url": "assets/js/19.e9a24961.js",
    "revision": "6f2a83751af337ced79f78a1ec475721"
  },
  {
    "url": "assets/js/20.b07c83aa.js",
    "revision": "80c7533d88001ca4c44b20746e2c11d8"
  },
  {
    "url": "assets/js/21.c73c81ab.js",
    "revision": "6b9e2f6d6d006890161c4e974ee9521d"
  },
  {
    "url": "assets/js/22.1f7ca322.js",
    "revision": "67c16c06cbf9b249ecad3b78d9e70d0c"
  },
  {
    "url": "assets/js/23.05be3f03.js",
    "revision": "3388db2fe709a4c38baf7255bdeadfd1"
  },
  {
    "url": "assets/js/24.834741a9.js",
    "revision": "0893f0870208663c928c2dd38c7f3b94"
  },
  {
    "url": "assets/js/3.548706b6.js",
    "revision": "541300abadff7ea569ddc6b29e0e774f"
  },
  {
    "url": "assets/js/4.aabb685f.js",
    "revision": "37d935386171b622c3a80e3ae36c2502"
  },
  {
    "url": "assets/js/5.d995e7e2.js",
    "revision": "3d0b33d6b305a2d892e056f7c67ff5de"
  },
  {
    "url": "assets/js/6.459b298b.js",
    "revision": "9f497fa1b43b75fbdea79b52ab03c372"
  },
  {
    "url": "assets/js/7.7aa04633.js",
    "revision": "b3e2701de194d1de8ab523b02998adb5"
  },
  {
    "url": "assets/js/8.06ba7c5b.js",
    "revision": "4ed72380c0a292ff5ac3f8c40168705a"
  },
  {
    "url": "assets/js/9.fb0e0ce9.js",
    "revision": "b8eedc8bd8b7fc9abcd733f4b1245f63"
  },
  {
    "url": "assets/js/app.b39a86d2.js",
    "revision": "f51ea2734d1685c6cab5fc186e695e9c"
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
    "url": "blogs/框架/Mybatis/092101.html",
    "revision": "0a6f34208de7a398fce86fb0a6eb306c"
  },
  {
    "url": "blogs/框架/Spring/121501.html",
    "revision": "8a1b9df1d5c9e3445f52ecb80559bf17"
  },
  {
    "url": "blogs/源码/guide.html",
    "revision": "8e593938637e4647fdc407a894f89c8e"
  },
  {
    "url": "blogs/Java/JavaSE 版本演进之路.html",
    "revision": "e3957d0bf749fa9dc4b6fa7d7fa69744"
  },
  {
    "url": "categories/index.html",
    "revision": "f5aa6e64e5edb95f55182a09bd12b0b9"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "52947ea6740f0dce2bdd1cd7f4b9cd34"
  },
  {
    "url": "categories/Mybatis/index.html",
    "revision": "2c6bbda2624da361caa673489f21aabe"
  },
  {
    "url": "categories/Spring/index.html",
    "revision": "ec9d3e8218dcee560f875c266a8263ca"
  },
  {
    "url": "docs/atittude/api.html",
    "revision": "cc8b0a556b1eeaddf7f574bec858deba"
  },
  {
    "url": "docs/atittude/index.html",
    "revision": "c78f077acd77eda2bf2119b8e8f0bb8a"
  },
  {
    "url": "docs/atittude/plugin.html",
    "revision": "81595e5a474043bbe637eb9d942a5f4e"
  },
  {
    "url": "docs/atittude/theme.html",
    "revision": "e87bb21edc9ba9fd92044cbb1642274c"
  },
  {
    "url": "docs/blog-setting/api.html",
    "revision": "8f155183efea03212484912e183107d0"
  },
  {
    "url": "docs/blog-setting/index.html",
    "revision": "638de1680b3847e582c4c8bf1adb8b6b"
  },
  {
    "url": "docs/blog-setting/plugin.html",
    "revision": "70367734da76b91463e736212d6446af"
  },
  {
    "url": "docs/blog-setting/theme.html",
    "revision": "0f805ab5f2d4d9cd225552590660a469"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "9e3d4479d565ff3459bf8e61728d7c9f"
  },
  {
    "url": "logo.png",
    "revision": "12be3ce4ca5c35cf8aafbd986b4acfbd"
  },
  {
    "url": "tag/index.html",
    "revision": "914537b9a1e0bd94c89fcb02a5f76099"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "52552793759923a827fee1b7b6f4b41f"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "8ed4d35af9593d0ed2701dfa562e0681"
  },
  {
    "url": "tag/ORM/index.html",
    "revision": "13b8368396465054fb4cf87ff05802e3"
  },
  {
    "url": "tag/Spring/index.html",
    "revision": "fcc1069f63b6464dd64d58b1b8daa061"
  },
  {
    "url": "timeline/index.html",
    "revision": "1ad3dce688acd14b208664eb0af60021"
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
