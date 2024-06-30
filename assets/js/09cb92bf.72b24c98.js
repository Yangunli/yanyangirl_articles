"use strict";(self.webpackChunkyanyangirl_dev=self.webpackChunkyanyangirl_dev||[]).push([[4052],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),y=a,m=s["".concat(p,".").concat(y)]||s[y]||f[y]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const i={},o="[vue] ref",l={unversionedId:"Vue3/ref",id:"Vue3/ref",title:"[vue] ref",description:"- \u76f4\u63a5\u5f80 DOM \u4e0b\u624b\u7684\u5b58\u5728",source:"@site/docs/Vue3/ref.md",sourceDirName:"Vue3",slug:"/Vue3/ref",permalink:"/yanyangirl_articles/Vue3/ref",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[vue] Props",permalink:"/yanyangirl_articles/Vue3/props"},next:{title:"[vue] vue-router",permalink:"/yanyangirl_articles/Vue3/router"}},p={},u=[],c={toc:u},s="wrapper";function f(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"vue-ref"},"[vue]"," ref"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u76f4\u63a5\u5f80 DOM \u4e0b\u624b\u7684\u5b58\u5728")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'<template>\n  <h1>Example</h1>\n  <p>Click the button to put "Hello!" as the text in the green p element.</p>\n  <button @click="changeVal">Change Text</button>\n  <p ref="pEl">This is the initial text</p>\n</template>\n\n<script>\n  export default {\n    methods: {\n      changeVal() {\n        this.$refs.pEl.innerHTML = "Hello!";\n      }\n    }\n  }\n<\/script>\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'//\u628a\u67d0\u500bref\u6578\u503c\u6539\u6210\u53e6\u4e00\u500b\u7684input  value\n<template>\n  <h1>Example</h1>\n  <p>Start writing inside the input element, and the text will be copied into the last paragraph by the use of the \'$refs\' object.</p>\n  <input ref="inputEl" @input="getRefs" placeholder="Write something..">\n  <p ref="pEl"></p>\n</template>\n\n<script>\n  export default {\n    methods: {\n      getRefs() {\n        this.$refs.pEl.innerHTML = this.$refs.inputEl.value;\n      }\n    }\n  };\n<\/script>\n')))}f.isMDXComponent=!0}}]);