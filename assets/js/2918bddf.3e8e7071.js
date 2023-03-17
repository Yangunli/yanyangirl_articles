"use strict";(self.webpackChunkyanyangirl_dev=self.webpackChunkyanyangirl_dev||[]).push([[1277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i="\u4e00\u4e9b React \u984c\u76ee",c={unversionedId:"React/faq1",id:"React/faq1",title:"\u4e00\u4e9b React \u984c\u76ee",description:"\u5728 React \u88e1\u4f7f\u7528\u985e\u4f3c innerHTML \u7684\u65b9\u6cd5 =>dangerouslySetInnerHTML",source:"@site/docs/React/faq1.md",sourceDirName:"React",slug:"/React/faq1",permalink:"/yanyangirl_articles/React/faq1",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/yanyangirl_articles/category/react"},next:{title:"Docusaurus",permalink:"/yanyangirl_articles/category/docusaurus"}},l={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e00\u4e9b-react-\u984c\u76ee"},"\u4e00\u4e9b React \u984c\u76ee"),(0,a.kt)("p",null,"\u5728 React \u88e1\u4f7f\u7528\u985e\u4f3c innerHTML \u7684\u65b9\u6cd5 =>dangerouslySetInnerHTML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="dangerouslySetInnerHTML \u7a0b\u5f0f\u7bc4\u4f8b"',title:'"dangerouslySetInnerHTML','\u7a0b\u5f0f\u7bc4\u4f8b"':!0},'function createMarkup() {\n  return { __html: "First &middot; Second" };\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reconciliation is dependent on:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Virtual Dom"),(0,a.kt)("li",{parentName:"ul"},"Diffing Algorithm(\u7528 key \u5206\u8fa8\u662f\u4e0d\u540c\u7684 node)")),(0,a.kt)("p",null,"setState \u5728 event handler \u4e2d\u662f\u975e\u540c\u6b65"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Both props and state are plain JS objects\nBoth props and state changes trigger a render update\nBoth props and state are deterministic. If your Component generates different outputs for the same combination of props and state then you're doing something wrong.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"props (short for properties) are a Component's configuration, its options if you may. They are received from above and immutable as far as the Component receiving them is concerned.\nA Component cannot change its props, but it is responsible for putting together the props of its child Components.\nA Component manages its own state internally, but\u2014besides setting an initial state\u2014has no business fiddling with the state of its children. You could say the state is private.")),(0,a.kt)("p",null,"prop \u5728\u81ea\u5df1\u90a3\u5c64\u53ef\u80fd\u662f state\uff0c\u4f46\u5728 child \u6703\u9700\u8981\u4f7f\u7528\uff0c\u50b3\u905e\u5f8c\u88ab\u7a31\u70ba prop\u3002\u4e3b\u8981\u662f\u56e0\u70ba React \u662f single data flow\uff0c\u53ea\u80fd prentNode \u50b3\u7d66 childNode\uff0c\u6216\u662f\u4ef0\u8cf4 useContext \u5c07\u66f4\u9059\u9060\u7684\u7956\u5148\u5c64(?)\u50b3\u905e\u6578\u503c\u3002"))}d.isMDXComponent=!0}}]);