"use strict";(self.webpackChunkyanyangirl_dev=self.webpackChunkyanyangirl_dev||[]).push([[783],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>k});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||g[m]||i;return r?t.createElement(k,o(o({ref:n},s),{},{components:r})):t.createElement(k,o({ref:n},s))}));function k(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4793:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));const i={},o="PWA",c={unversionedId:"Webpack 5/PWA_setting",id:"Webpack 5/PWA_setting",title:"PWA",description:"\u5982\u679c\u662f\u7528 CRA \u5275\u5efa\u5c08\u6848\u7684\u8a71\uff0c\u53ef\u4ee5\u4e00\u958b\u59cb\u5c31\u64c1\u6709 PWA \u7684\u8a2d\u5b9a",source:"@site/docs/Webpack 5/PWA_setting.md",sourceDirName:"Webpack 5",slug:"/Webpack 5/PWA_setting",permalink:"/yanyangirl_articles/Webpack 5/PWA_setting",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Webpack 5",permalink:"/yanyangirl_articles/category/webpack-5"},next:{title:"Initial Install",permalink:"/yanyangirl_articles/Webpack 5/initial_install"}},p={},l=[],s={toc:l},u="wrapper";function g(e){let{components:n,...r}=e;return(0,a.kt)(u,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pwa"},"PWA"),(0,a.kt)("p",null,"\u5982\u679c\u662f\u7528 CRA \u5275\u5efa\u5c08\u6848\u7684\u8a71\uff0c\u53ef\u4ee5\u4e00\u958b\u59cb\u5c31\u64c1\u6709 PWA \u7684\u8a2d\u5b9a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx create-react-app my-app --template cra-template-pwa\n\n")),(0,a.kt)("p",null,"\u4f46\u5982\u679c\u662f\u7528 Webpack \u5275\u5efa React \u5c08\u6848\u7684\u8a71\uff0c\u90a3\u5c31\u9700\u8981\u4e00\u4e9b\u8a2d\u5b9a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i workbox-webpack-plugin -D\n")),(0,a.kt)("p",null,"\u8981\u6210\u70ba\u4e00\u500b PWA \u5fc5\u9808\u64c1\u6709 ",(0,a.kt)("em",{parentName:"p"},"manifest.json\u3001service-worker.js\u3001serviceWorkerRegistration.js")),(0,a.kt)("p",null,"\u5982\u679c\u6709\u5f15\u5165\u6a94\u6848\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u4f7f\u7528 copy-webpack-plugin\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i copy-webpack-plugin -D\n")),(0,a.kt)("p",null,"\u8a18\u5f97\u5b83\u5011\u90fd\u8981\u5728 build \u5b8c\u7684\u8cc7\u6599\u593e\u88e1\uff0c\u624d\u53ef\u4ee5\u9806\u5229\u8b80\u53d6~"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="WorkboxPlugin"',title:'"WorkboxPlugin"'},'// in your webpack.config.js\n\nconst WorkboxPlugin = require("workbox-webpack-plugin");\n\n(\u4e2d\u7565)\n\n  plugins: [\n\n    new WorkboxPlugin.GenerateSW({\n      clientsClaim: true,\n      skipWaiting: true,\n      cleanupOutdatedCaches: true,\n      swDest: "../workboxServiceWorker.js",\n      maximumFileSizeToCacheInBytes: 1024000 * 4, // cache 4M \u4ee5\u4e0b\u7684\u6587\u4ef6\n      include: [/.*.(png|jpg|jpeg|svg|ico|webp)$/], // cache images\n    }),\n  ],\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Manifest setting"',title:'"Manifest','setting"':!0},'\n{\n  "short_name": "YANYANGIRL_TW",\n  "name": "YANYANGIRL_TW",\n  "icons": [\n    {\n      "src": "favicon.ico",\n      "sizes": "64x64 32x32 24x24 16x16",\n      "type": "image/x-icon",\n      "purpose": "any maskable"\n    },\n    {\n      "src": "apple-touch-icon.png",\n      "type": "image/png",\n      "sizes": "180x180",\n      "purpose": "any maskable"\n    },\n    {\n      "src": "android-chrome-192x192",\n      "type": "image/png",\n      "sizes": "192x192",\n      "purpose": "any maskable"\n    },\n\n    {\n      "src": "android-chrome-512x512",\n      "type": "image/png",\n      "sizes": "512x512",\n      "purpose": "any maskable"\n    }\n  ],\n  "start_url": ".",\n  "display": "standalone",\n  "theme_color": "#000000",\n  "background_color": "#ffffff"\n  }\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Register serviceWorker in your index.js"',title:'"Register',serviceWorker:!0,in:!0,your:!0,'index.js"':!0},'if ("serviceWorker" in navigator) {\n  window.addEventListener("load", () => {\n    navigator.serviceWorker\n      .register("/service-worker.js")\n      .then((registration) => {\n        // console.log("SW registered: ", registration);\n      })\n      .catch((registrationError) => {\n        console.error("SW registration failed: ", registrationError);\n      });\n  });\n}\n')))}g.isMDXComponent=!0}}]);