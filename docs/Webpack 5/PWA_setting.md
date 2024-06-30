# PWA

如果是用 CRA 創建專案的話，可以一開始就擁有 PWA 的設定

```
npx create-react-app my-app --template cra-template-pwa
```

但如果是用 Webpack 創建 React 專案的話，那就需要一些設定。

```
npm i workbox-webpack-plugin -D
```

要成為一個 PWA 必須擁有 _manifest.json、service-worker.js、serviceWorkerRegistration.js_

如果有引入檔案的需求，可以使用 copy-webpack-plugin。

```
npm i copy-webpack-plugin -D
```

記得它們都要在 build 完的資料夾裡，才可以順利讀取~

```js title="WorkboxPlugin"
// in your webpack.config.js

const WorkboxPlugin = require("workbox-webpack-plugin");

(中略)

  plugins: [

    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      cleanupOutdatedCaches: true,
      swDest: "../workboxServiceWorker.js",
      maximumFileSizeToCacheInBytes: 1024000 * 4, // cache 4M 以下的文件
      include: [/.*.(png|jpg|jpeg|svg|ico|webp)$/], // cache images
    }),
  ],

```

```js title="Manifest setting"

{
  "short_name": "YANYANGIRL_TW",
  "name": "YANYANGIRL_TW",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon",
      "purpose": "any maskable"
    },
    {
      "src": "apple-touch-icon.png",
      "type": "image/png",
      "sizes": "180x180",
      "purpose": "any maskable"
    },
    {
      "src": "android-chrome-192x192",
      "type": "image/png",
      "sizes": "192x192",
      "purpose": "any maskable"
    },

    {
      "src": "android-chrome-512x512",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "any maskable"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
  }
```

```js title="Register serviceWorker in your index.js"
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        // console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.error("SW registration failed: ", registrationError);
      });
  });
}
```
