"use strict";(self.webpackChunkyanyangirl_dev=self.webpackChunkyanyangirl_dev||[]).push([[5735],{5680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>g});var t=n(6540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=i,g=u["".concat(l,".").concat(b)]||u[b]||f[b]||a;return n?t.createElement(g,o(o({ref:r},p),{},{components:n})):t.createElement(g,o({ref:r},p))}));function g(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=n(8168),i=(n(6540),n(5680));const a={},o="Firebase Hosting",s={unversionedId:"Firebase v9/firebase",id:"Firebase v9/firebase",title:"Firebase Hosting",description:"\u9019\u7bc7\u6587\u7ae0\u9700\u8981\u6709\u57fa\u790e\u7684 Firebase \u77e5\u8b58",source:"@site/docs/Firebase v9/firebase.md",sourceDirName:"Firebase v9",slug:"/Firebase v9/firebase",permalink:"/yanyangirl_articles/Firebase v9/firebase",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Firebase v9",permalink:"/yanyangirl_articles/category/firebase-v9"},next:{title:"Accessibility",permalink:"/yanyangirl_articles/category/accessibility"}},l={},c=[{value:"Configure Hosting behavior",id:"configure-hosting-behavior",level:3}],p={toc:c},u="wrapper";function f(e){let{components:r,...n}=e;return(0,i.yg)(u,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"firebase-hosting"},"Firebase Hosting"),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"\u9019\u7bc7\u6587\u7ae0\u9700\u8981\u6709\u57fa\u790e\u7684 Firebase \u77e5\u8b58")),(0,i.yg)("h3",{id:"configure-hosting-behavior"},"Configure Hosting behavior"),(0,i.yg)("p",null,"\u5728 firebase init \u7684\u968e\u6bb5\u6642\uff0c\u6703\u8a2d\u5b9a\u8b93 firebase \u652f\u6301 SPA\u3002\u5be6\u73fe\u5728\u4f7f\u7528 BrowserRouter \u7684\u60c5\u6cc1\u4e0b\uff0c\u652f\u6301\u4efb\u4f55\u5916\u9023\u5b50\u9801\u9762\u9700\u6c42\u3002\n\u4f46 init \u7684 SPA \u8a2d\u5b9a\u53ea\u6709\u652f\u63f4\u5230\u7b2c\u4e00\u5c64\u3002\u5018\u82e5 router \u6709\u5f88\u591a\u5c64\u7684\u8a71\uff0c\u4f9d\u820a\u662f\u6703\u5831\u932f\u7684\u3002\u8981\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u5fc5\u9808\u9032 ",(0,i.yg)("strong",{parentName:"p"},"firebase.json")," \uff0c\u6539\u8b8a rewrites rule \u7684\u8a2d\u5b9a\u3002"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("a",{parentName:"p",href:"https://firebase.google.com/docs/hosting/full-config",title:"\u6e38\u6a19\u986f\u793a"},"\u5b98\u65b9\u6587\u4ef6\u88e1\u7684\u76f8\u95dc\u5167\u5bb9"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="firebase.json"',title:'"firebase.json"'},'\n{\n  "hosting": {\n    "public": "public",\n    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],\n    "rewrites": [\n\n      {\n        "source": "**",\n        "destination": "/index.html"\n      },\n\n//\u65b0\u589e\u7684\u8a2d\u5b9a\n\n      {\n        "source": "/taipei{,/**}",\n        "destination": "/index.html"\n      },\n\n    ]\n  }\n}\n')))}f.isMDXComponent=!0}}]);