"use strict";(self.webpackChunkyanyangirl_dev=self.webpackChunkyanyangirl_dev||[]).push([[3497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),y=a,m=p["".concat(u,".").concat(y)]||p[y]||d[y]||c;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const c={},o="[react] Hooks: useReducer",i={unversionedId:"React/useReducer",id:"React/useReducer",title:"[react] Hooks: useReducer",description:"useReducer is a React Hook that lets you add a reducer to your component.",source:"@site/docs/React/useReducer.md",sourceDirName:"React",slug:"/React/useReducer",permalink:"/yanyangirl_articles/React/useReducer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[react] Props",permalink:"/yanyangirl_articles/React/props"},next:{title:"NextJs",permalink:"/yanyangirl_articles/category/nextjs"}},u={},l=[],s={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-hooks-usereducer"},"[react]"," Hooks: useReducer"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"useReducer is a React Hook that lets you add a reducer to your component.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const [state, dispatch] = useReducer(reducer, initialArg, init?)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Simple state"',title:'"Simple','state"':!0},'const reducer = (state, action) => {\n  switch (action.type) {\n    //case \u6700\u591a5\u500b\n    case "email":\n      return {\n        ...state,\n        email: action.payload,\n      };\n    case "reset":\n      return initialValue;\n    default:\n      throw new Error(`Unknown action type: ${action.type}`);\n  }\n};\n\nconst [state, dispatch] = useReducer(reducer, initialValue);\n\n<input\n  onChange={(e) => dispatch({ type: "email", payload: e.target, value })}\n/>;\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Complex state"',title:'"Complex','state"':!0},'const reducer = (state, action) => {\n  switch (action.type) {\n    //case \u6700\u591a5\u500b\n    case "data":\n      return {\n        ...state,\n        [action.payload.key]: action.payload.value,\n      };\n    case "reset":\n      return initialValue;\n    default:\n      throw new Error(`Unknown action type: ${action.type}`);\n  }\n};\n\ndispatch({\n  type: "data",\n  payload: { key: event.target.name, value: event.target.value },\n});\n\nconst [state, dispatch] = useReducer(reducer, initialValue);\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/useReducer",title:"\u6e38\u6a19\u986f\u793a"},"\u53c3\u8003\u8cc7\u6599 1: React.dev "))))}d.isMDXComponent=!0}}]);