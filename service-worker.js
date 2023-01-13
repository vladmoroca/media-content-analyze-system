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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "eeadf337f3d4c9a2a72b38cf8cce755a"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.c9f877a1.css",
    "revision": "d3e52a315b8cfcb77e2b5ab1d29f1a9c"
  },
  {
    "url": "assets/img/delete_after.7d1001d6.png",
    "revision": "7d1001d6f7e4cbe4b25f7987cb73037d"
  },
  {
    "url": "assets/img/delete_before.1ce796c3.png",
    "revision": "1ce796c3d7ab7369987e6239ad46694d"
  },
  {
    "url": "assets/img/delete.f7f48de8.png",
    "revision": "f7f48de844c22551365c793c31fef40d"
  },
  {
    "url": "assets/img/get_id.4fe39b09.png",
    "revision": "4fe39b09983113f97875638d43690dcc"
  },
  {
    "url": "assets/img/post_after.1672a88a.png",
    "revision": "1672a88ac319c2868ec94a87b041f773"
  },
  {
    "url": "assets/img/post_before.1cc11657.png",
    "revision": "1cc1165737b7ba2ea9d5264bd7b0de1d"
  },
  {
    "url": "assets/img/post.d9e52f23.png",
    "revision": "d9e52f23274a5eb30b1ee82f78383f21"
  },
  {
    "url": "assets/img/put_after.8e3b9c69.png",
    "revision": "8e3b9c69207b61eee320d1730d3e6c4b"
  },
  {
    "url": "assets/img/put.9d791fd4.png",
    "revision": "9d791fd4712cf92bac02cd7bc9ecfd44"
  },
  {
    "url": "assets/img/relschem.5f1506d9.png",
    "revision": "5f1506d9145e9c9e25de0207eb8e0df6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start.ffccf2c5.png",
    "revision": "ffccf2c5f8ae4cd92d137f2a4e0b7c9e"
  },
  {
    "url": "assets/js/10.3486928d.js",
    "revision": "e249ae60d5e28c11cb1c5dba7764ee7d"
  },
  {
    "url": "assets/js/11.09330980.js",
    "revision": "55549af1ed6d20ef0e1bef241c30de7b"
  },
  {
    "url": "assets/js/12.fe39fc48.js",
    "revision": "65bbc134c67a83aa434a5971b949b03f"
  },
  {
    "url": "assets/js/13.3b6a0c64.js",
    "revision": "defc0b0fa79f752adc80b94515b8acb7"
  },
  {
    "url": "assets/js/14.c77a2fa0.js",
    "revision": "88449c133cb4257cbf7c5d6d1da89fe9"
  },
  {
    "url": "assets/js/15.cb8ff6d3.js",
    "revision": "1b8869ed39373fa183c8762c28350b19"
  },
  {
    "url": "assets/js/16.4e6ff3b7.js",
    "revision": "29314a5ddc9764af5ce69985b66703f1"
  },
  {
    "url": "assets/js/17.f848374a.js",
    "revision": "09ac9298a8e7536d7171f0c807d0a1cd"
  },
  {
    "url": "assets/js/18.3934d47e.js",
    "revision": "a651b3ce37d74c8c69723e48c8d1e783"
  },
  {
    "url": "assets/js/19.e7a3afee.js",
    "revision": "470d76fad897ec0e3104a90074718c71"
  },
  {
    "url": "assets/js/2.0c14f4e8.js",
    "revision": "d6af43f31ea9c6cfc61e1083528e1b9c"
  },
  {
    "url": "assets/js/20.b41fdaa3.js",
    "revision": "a5e46ced8cb3c954fe4e2e9e0744fa30"
  },
  {
    "url": "assets/js/21.64af16c8.js",
    "revision": "5d43678888a635335cd671698393f50d"
  },
  {
    "url": "assets/js/22.44778fad.js",
    "revision": "c04434057576c40720a7d6d886863563"
  },
  {
    "url": "assets/js/23.8c92e99a.js",
    "revision": "de28ca24da536f9628a5616ff36ccff5"
  },
  {
    "url": "assets/js/24.aaa88a7c.js",
    "revision": "a2ec123eb63dedc6b65fa2bdbbf92633"
  },
  {
    "url": "assets/js/26.ddb41728.js",
    "revision": "8c81b1cd43d727680472e430d9f82d0a"
  },
  {
    "url": "assets/js/3.8cabc463.js",
    "revision": "29f7c4475b6bb17461c4a8023a3d2963"
  },
  {
    "url": "assets/js/4.dffa59b4.js",
    "revision": "5465594a7b83929dd4dc9617521b5e07"
  },
  {
    "url": "assets/js/5.d0c49000.js",
    "revision": "d7e8746984f00660b0e17a1d4dcfa499"
  },
  {
    "url": "assets/js/6.40aabc4e.js",
    "revision": "7bb241ac125317b33fb32367f8d8c065"
  },
  {
    "url": "assets/js/7.a7f18f7d.js",
    "revision": "93750c5294ab475e8a4c7ae614b1f93f"
  },
  {
    "url": "assets/js/8.79576de1.js",
    "revision": "b112806412e8ce7e52ac7d60d5f66571"
  },
  {
    "url": "assets/js/9.23f667ad.js",
    "revision": "f86e2e023afff7fc0d19d80acb82b269"
  },
  {
    "url": "assets/js/app.04d80e80.js",
    "revision": "4e4fa639b283f15b743816dc80477e44"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f7259c9d502c6b67a2d6c2cef57f11e7"
  },
  {
    "url": "design/index.html",
    "revision": "4adbfc19b8c663f602b14bf826818e00"
  },
  {
    "url": "index.html",
    "revision": "a0f9b1a7302e535dbbbce540bf21fec9"
  },
  {
    "url": "intro/index.html",
    "revision": "f86c49a2d7a593489a4f9dbfb5911f01"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "20fb27ca2d6d6d44b01df1b242fb29ac"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "76924071778ea9444a3d5442d0785ad7"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "1e2adb94545e18fa020855fc89c7111b"
  },
  {
    "url": "software/index.html",
    "revision": "a97911cdc88eb8a98eb05d69237ff0fe"
  },
  {
    "url": "test/index.html",
    "revision": "ba2c5e0cbe17dccca85eb397ca85820b"
  },
  {
    "url": "use cases/index.html",
    "revision": "e8cb4e8cd24ce1e6ae2ab505f9a40e85"
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
