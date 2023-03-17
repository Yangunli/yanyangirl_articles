"use strict";(self.webpackChunkyanyangirl_dev=self.webpackChunkyanyangirl_dev||[]).push([[737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=o(n),d=r,m=b["".concat(p,".").concat(d)]||b[d]||u[d]||l;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[b]="string"==typeof e?e:r,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={},i="Initial Install",c={unversionedId:"Webpack 5/initial_install",id:"Webpack 5/initial_install",title:"Initial Install",description:"How to build a project with webpack and react ?",source:"@site/docs/Webpack 5/initial_install.md",sourceDirName:"Webpack 5",slug:"/Webpack 5/initial_install",permalink:"/yanyangirl_articles/Webpack 5/initial_install",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PWA",permalink:"/yanyangirl_articles/Webpack 5/PWA_setting"},next:{title:"Firebase v9",permalink:"/yanyangirl_articles/category/firebase-v9"}},p={},o=[{value:"How to build a project with webpack and react ?",id:"how-to-build-a-project-with-webpack-and-react-",level:3}],s={toc:o},b="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"initial-install"},"Initial Install"),(0,r.kt)("h3",{id:"how-to-build-a-project-with-webpack-and-react-"},"How to build a project with webpack and react ?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="devDependencies / about babel & webpack"',title:'"devDependencies',"/":!0,about:!0,babel:!0,"&":!0,'webpack"':!0},'    "@babel/core": "^7.20.12",\n    "@babel/eslint-parser": "^7.19.1",\n    "@babel/plugin-transform-runtime": "^7.19.6",\n    "@babel/preset-env": "^7.20.2",\n    "@babel/preset-react": "^7.18.6",\n    "@babel/runtime": "^7.20.7",\n    "babel-eslint": "^10.1.0",\n    "babel-loader": "^9.1.2",\n    "webpack": "^5.75.0",\n    "webpack-bundle-analyzer": "^4.8.0",\n    "webpack-cli": "^5.0.1",\n    "webpack-dev-server": "^4.11.1",\n    "webpack-server": "^0.1.2",\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="devDependencies/ about css & html"',title:'"devDependencies/',about:!0,css:!0,"&":!0,'html"':!0},' "css-loader": "^6.7.3",\n "html-webpack-plugin": "^5.5.0",\n "mini-css-extract-plugin": "^2.7.2",\n "style-loader": "^3.3.1",\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"save \u662f\u9810\u8a2d\uff0c\u53ef\u4ee5\u5ffd\u7565\u4e0d\u5beb\u3002")),(0,r.kt)("p",null,"devDependencies\uff0c\u5728\u958b\u767c(dev)\u6216\u6e2c\u8a66\u6642\u6703\u7528\u5230\u7684\uff0c\u50cf\u662f babel \u548c webpack\u3002build \u5b8c\u5f8c\uff0c\u4e0d\u6703\u9700\u8981\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i <package name> --save-dev\n# or\nnpm i <package name> -D\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="dependencies"',title:'"dependencies"'},'    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "react-router-dom": "^6.7.0",\n')),(0,r.kt)("p",null,"dependencies\uff0c\u76f4\u63a5\u7528\u5230\u7684\u90a3\u4e9b\u5957\u4ef6\u3002build \u5b8c\u5f8c\uff0c\u9084\u6703\u9700\u8981\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i <package name> --save\n# or\nnpm i <package name>\n")))}u.isMDXComponent=!0}}]);