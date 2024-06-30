"use strict";(self.webpackChunkyanyangirl_dev=self.webpackChunkyanyangirl_dev||[]).push([[2701],{5680:(e,n,t)=>{t.d(n,{xA:()=>N,yg:()=>p});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},N=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,N=u(e,["components","mdxType","originalType","parentName"]),c=o(t),f=a,p=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return t?r.createElement(p,l(l({ref:n},N),{},{components:t})):r.createElement(p,l({ref:n},N))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=f;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[c]="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var r=t(8168),a=(t(6540),t(5680));const i={},l="[JS] null & undefined",u={unversionedId:"Vaniila JS/null",id:"Vaniila JS/null",title:"[JS] null & undefined",description:"\u6240\u4ee5\u6211\u8aaa\u90a3\u500b null \u548c undefined",source:"@site/docs/Vaniila JS/null.md",sourceDirName:"Vaniila JS",slug:"/Vaniila JS/null",permalink:"/yanyangirl_articles/Vaniila JS/null",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[JS] math methods",permalink:"/yanyangirl_articles/Vaniila JS/math"},next:{title:"[JS] object methods",permalink:"/yanyangirl_articles/Vaniila JS/object"}},s={},o=[{value:"\u6240\u4ee5\u6211\u8aaa\u90a3\u500b null \u548c undefined",id:"\u6240\u4ee5\u6211\u8aaa\u90a3\u500b-null-\u548c-undefined",level:3},{value:"isNaN()",id:"isnan",level:2},{value:"Number.isNaN()",id:"numberisnan",level:2}],N={toc:o},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"js-null--undefined"},"[JS]"," null & undefined"),(0,a.yg)("h3",{id:"\u6240\u4ee5\u6211\u8aaa\u90a3\u500b-null-\u548c-undefined"},"\u6240\u4ee5\u6211\u8aaa\u90a3\u500b null \u548c undefined"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Diffrence with Null & Undefined"',title:'"Diffrence',with:!0,Null:!0,"&":!0,'Undefined"':!0},"typeof null; // object (bug in ECMAScript, should be null)\ntypeof undefined; // undefined\nnull === undefined; // false\nnull == undefined; // true\n")),(0,a.yg)("p",null,"\u6709\u6642\u6211\u5011\u6703\u4f7f\u7528 isNaN()\u53bb\u5224\u65b7\u662f\u4e0d\u662f NaN\uff0c\u9019\u4e5f\u6703\u767c\u73fe null \u548c undefined \u7684\u5dee\u5225\u3002"),(0,a.yg)("h2",{id:"isnan"},"isNaN()"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Is it not a number ?"',title:'"Is',it:!0,not:!0,a:!0,number:!0,'?"':!0},'isNaN(null); //false\nisNaN(undefined); //trur\nisNaN(123); //false\nisNaN("123"); //false\nisNaN("0"); //false\nisNaN("string"); //true\n')),(0,a.yg)("p",null,"\u56e0\u70ba\u662f\u865b\u7121\uff0c\u6240\u4ee5\u554f\u662f\u4e0d\u662f\u5c31\u8fd4\u56de\u5426\uff0c\u78ba\u5b9a\u4e0d\u662f NaN\u3002(\u4f46\u4e0d\u8868\u793a\u5b83\u4e00\u5b9a\u662f\u6578\u5b57)"),(0,a.yg)("h2",{id:"numberisnan"},"Number.isNaN()"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"The Number.isNaN() method determines whether the passed value is NaN and its type is Number.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Number.isNaN()"',title:'"Number.isNaN()"'},'Number.isNaN(NaN); // true\nNumber.isNaN(Number.NaN); // true\nNumber.isNaN(0 / 0); // true\n\nNumber.isNaN("NaN"); // false\nisNaN("NaN"); //true\nNumber.isNaN(undefined); // false\nisNaN(undefined); //true\nNumber.isNaN({}); // false\nisNaN({}); //true\nNumber.isNaN("string"); // false\nisNaN("string"); //true\n')))}d.isMDXComponent=!0}}]);