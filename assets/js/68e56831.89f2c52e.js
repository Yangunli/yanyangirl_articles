"use strict";(self.webpackChunkyanyangirl_dev=self.webpackChunkyanyangirl_dev||[]).push([[521],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>m});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=i,m=s["".concat(p,".").concat(d)]||s[d]||y[d]||a;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(8168),i=(r(6540),r(5680));const a={},o="[TS] Discriminated type",c={unversionedId:"about_ts/discriminated",id:"about_ts/discriminated",title:"[TS] Discriminated type",description:"",source:"@site/docs/about_ts/discriminated.md",sourceDirName:"about_ts",slug:"/about_ts/discriminated",permalink:"/yanyangirl_articles/about_ts/discriminated",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Typescript",permalink:"/yanyangirl_articles/category/typescript"},next:{title:"React",permalink:"/yanyangirl_articles/category/react"}},p={},u=[],l={toc:u},s="wrapper";function y(e){let{components:t,...r}=e;return(0,i.yg)(s,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"ts-discriminated-type"},"[TS]"," Discriminated type"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'//Discriminated type\n\ntype Shape =\n  | { kind: "circle"; radius: number }\n  | { kind: "rectangle"; width: number; height: number }\n  | { kind: "square"; size: number };\n\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"//\u4e00\u822c\u7684\u5beb\u6cd5\n\ntype Shape ={\n    radius?: number;\n    width?: number;\n    height?: number;\n    size?: number }\n")))}y.isMDXComponent=!0}}]);