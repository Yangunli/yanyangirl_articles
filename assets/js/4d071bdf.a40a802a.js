"use strict";(self.webpackChunkyanyangirl_dev=self.webpackChunkyanyangirl_dev||[]).push([[7155],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||g[d]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(8168),r=(n(6540),n(5680));const o={},l="[JS] math methods",i={unversionedId:"Vaniila JS/math",id:"Vaniila JS/math",title:"[JS] math methods",description:"\u53d6\u6700\u5c0f\u503c",source:"@site/docs/Vaniila JS/math.md",sourceDirName:"Vaniila JS",slug:"/Vaniila JS/math",permalink:"/yanyangirl_articles/Vaniila JS/math",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[JS] deep copy & shallow copy",permalink:"/yanyangirl_articles/Vaniila JS/copy"},next:{title:"[JS] null & undefined",permalink:"/yanyangirl_articles/Vaniila JS/null"}},c={},u=[{value:"\u53d6\u6700\u5c0f\u503c",id:"\u53d6\u6700\u5c0f\u503c",level:4},{value:"\u7121\u689d\u4ef6\u6368\u53bb",id:"\u7121\u689d\u4ef6\u6368\u53bb",level:4},{value:"\u7121\u689d\u4ef6\u9032\u4f4d",id:"\u7121\u689d\u4ef6\u9032\u4f4d",level:4},{value:"\u56db\u6368\u4e94\u5165",id:"\u56db\u6368\u4e94\u5165",level:4},{value:"\u4ecb\u65bc 0~1 \u96a8\u6a5f\u6578",id:"\u4ecb\u65bc-01-\u96a8\u6a5f\u6578",level:4},{value:"\u958b\u6839\u865f",id:"\u958b\u6839\u865f",level:4},{value:"\u6b21\u65b9",id:"\u6b21\u65b9",level:4}],p={toc:u},s="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"js-math-methods"},"[JS]"," math methods"),(0,r.yg)("h4",{id:"\u53d6\u6700\u5c0f\u503c"},"\u53d6\u6700\u5c0f\u503c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Math.min( )"',title:'"Math.min(',')"':!0},"console.log(Math.min(2, 3, 1));\n// Expected output: 1\n\nconsole.log(Math.min(-2, -3, -1));\n// Expected output: -3\n\nconst array1 = [2, 3, 1];\n\nconsole.log(Math.min(...array1));\n// Expected output: 1\n// \u6700\u5927\u503c\u5c31\u6539\u6210Math.max()\n")),(0,r.yg)("h4",{id:"\u7121\u689d\u4ef6\u6368\u53bb"},"\u7121\u689d\u4ef6\u6368\u53bb"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Math.floor( )"',title:'"Math.floor(',')"':!0},"// \u7121\u689d\u4ef6\u6368\u53bb\nconsole.log(Math.floor(5.95));\n// Expected output: 5\nconsole.log(Math.floor(5.05));\n// Expected output: 5\n")),(0,r.yg)("h4",{id:"\u7121\u689d\u4ef6\u9032\u4f4d"},"\u7121\u689d\u4ef6\u9032\u4f4d"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Math.ceil( )"',title:'"Math.ceil(',')"':!0},"console.log(Math.ceil(7.004));\n// Expected output: 8\nconsole.log(Math.ceil(-7.004));\n// Expected output: -7\n")),(0,r.yg)("h4",{id:"\u56db\u6368\u4e94\u5165"},"\u56db\u6368\u4e94\u5165"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Math.round( )"',title:'"Math.round(',')"':!0},"console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));\n// Expected output: 6 6 5\n")),(0,r.yg)("h4",{id:"\u4ecb\u65bc-01-\u96a8\u6a5f\u6578"},"\u4ecb\u65bc 0~1 \u96a8\u6a5f\u6578"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Math.random( )"',title:'"Math.random(',')"':!0},"function getRandomInt(max) {\n  return Math.floor(Math.random() * max);\n}\n\nconsole.log(getRandomInt(3));\n// Expected output: 0, 1 or 2\n\nconsole.log(getRandomInt(1));\n// Expected output: 0\n\nconsole.log(Math.random());\n// Expected output: a number from 0 to <1\n")),(0,r.yg)("h4",{id:"\u958b\u6839\u865f"},"\u958b\u6839\u865f"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Math.sqrt( )"',title:'"Math.sqrt(',')"':!0},"function calcHypotenuse(a, b) {\n  return Math.sqrt(a * a + b * b);\n}\n\nconsole.log(calcHypotenuse(3, 4));\n// Expected output: 5\n\nconsole.log(calcHypotenuse(5, 12));\n// Expected output: 13\n\nconsole.log(calcHypotenuse(0, 0));\n// Expected output: 0\n")),(0,r.yg)("h4",{id:"\u6b21\u65b9"},"\u6b21\u65b9"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Math.pow( )"',title:'"Math.pow(',')"':!0},"console.log(Math.pow(7, 3));\n// Expected output: 343\n\nconsole.log(Math.pow(4, 0.5));\n")))}g.isMDXComponent=!0}}]);