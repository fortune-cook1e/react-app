(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[3188],{33188:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var r=t(50959),i=t(83425),c=t(98457),o="src-pages-editor-index-module_bElrl",a="src-pages-editor-index-module_i+Tog",s="src-pages-editor-index-module_pksqy",d="src-pages-editor-index-module_ywr5a",u=t(81527);var l=t(71079),m=t(11527);var p=()=>{const{componentData:e}={componentData:[{id:"button",componentId:"Button",name:"按钮组件"},{id:"Picture",componentId:"Picture",name:"图像组件"}]},[n,i]=(0,r.useState)([]),[{isOver:c},o]=(0,u.L)((()=>({accept:e.map((e=>e.id)),collect:e=>({isOver:!!e.isOver()}),drop:({componentData:e})=>{a(e)}}))),a=e=>{i((n=>[...n,{...e,uniqueId:(0,l.Ki)()}]))};return(0,m.jsx)("div",{ref:o,className:s,children:(0,m.jsx)(r.Suspense,{fallback:(0,m.jsx)(m.Fragment,{children:"加载.."}),children:n.map((e=>{const n=(0,r.lazy)((()=>t(90074)(`./${e.componentId}`)));return(0,m.jsx)(n,{},e.uniqueId)}))})})},x=t(91441),h=t(70224),v=t(1131);var g=({componentData:e,children:n})=>{const[{isDragging:t},r]=(0,v.c)((()=>({type:e.id,item:{componentData:e},collect:e=>({isDragging:!!e.isDragging()})})));return(0,m.jsx)("div",{ref:r,children:n})};var j=()=>{const{componentData:e}={componentData:[{id:"button",componentId:"Button",name:"按钮组件"},{id:"Picture",componentId:"Picture",name:"图像组件"}]};return(0,m.jsx)("div",{className:a,children:(0,m.jsx)(x.Z,{children:e.map((e=>(0,m.jsx)(g,{componentData:e,children:(0,m.jsx)(h.Z,{children:e.name})},e.id)))})})};var f=()=>(0,m.jsx)("div",{className:d,children:"this is page"});var D=()=>(0,m.jsx)(i.W,{backend:c.PD,children:(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)(j,{}),(0,m.jsx)(p,{}),(0,m.jsx)(f,{})]})})},90074:function(e,n,t){var r={"./Button":[52631,2631],"./Button/":[52631,2631],"./Button/index":[52631,2631],"./Button/index.module.less":[33745,3745],"./Button/index.tsx":[52631,2631],"./Picture":[91571,1571],"./Picture/":[91571,1571],"./Picture/index":[91571,1571],"./Picture/index.module.less":[91651,1651],"./Picture/index.tsx":[91571,1571]};function i(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],i=n[0];return t.e(n[1]).then((function(){return t(i)}))}i.keys=function(){return Object.keys(r)},i.id=90074,e.exports=i}}]);