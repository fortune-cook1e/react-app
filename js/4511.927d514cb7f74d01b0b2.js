(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[4511],{54511:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var t=r(28412),s=r(50959);const a=[{label:"单例",value:"Singleton"},{label:"Provider",value:"Provider"},{label:"ContainerPresentational",value:"ContainerPresentational"},{label:"Observer",value:"Observer"}];var i=r(11527);var l=()=>{const[e,n]=(0,s.useState)(a[0].value),l=(0,s.useMemo)((()=>e?(0,s.lazy)((()=>r(5329)(`./${e}/index.tsx`))):null),[e]);return(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{children:" this is patters"}),(0,i.jsxs)("div",{children:["Select Patterns：",(0,i.jsx)(t.Z,{value:e,style:{width:"200px"},onChange:e=>n(e),children:a.map((e=>(0,i.jsx)(t.Z.Option,{value:e.value,children:e.label},e.value)))})]}),(0,i.jsx)(s.Suspense,{fallback:"loading",children:(0,i.jsx)(l,{})})]})}},5329:function(e,n,r){var t={"./ContainerPresentational/index.tsx":[62078,2078],"./Observer/index.tsx":[66438,6438],"./Provider/components/List/index.tsx":[33277,3277],"./Provider/components/Toggle/index.tsx":[87053,7053],"./Provider/index.tsx":[98424,8424],"./Singleton/index.tsx":[57273,7273]};function s(e){if(!r.o(t,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],s=n[0];return r.e(n[1]).then((function(){return r(s)}))}s.keys=function(){return Object.keys(t)},s.id=5329,e.exports=s}}]);