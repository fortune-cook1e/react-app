"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[796],{42772:function(a,e,n){n.d(e,{LI:function(){return i},_A:function(){return r},al:function(){return s},lj:function(){return d},yY:function(){return u}});var t=n(52726);const i=a=>(0,t.Z)({url:"/visual/add",data:a,method:"post"}),d=()=>(0,t.Z)({url:"/visual/list",method:"get"}),s=a=>(0,t.Z)({url:"/visual/info",method:"get",params:{id:a}}),u=a=>(0,t.Z)({url:"/visual/update",method:"post",data:a}),r=a=>(0,t.Z)({url:"/visual/delete",method:"post",data:{id:a}})},87796:function(a,e,n){n.r(e),n.d(e,{default:function(){return h}});var t=n(23822),i=n(62919),d=n(30530),s=n(83059),u=n(96987),r=n(22374),l=n(87518),c="src-pages-visual-management-index-module_B+oRh",o="src-pages-visual-management-index-module_KEuzj",m=n(42772),p=n(52454);var h=()=>{const a=(0,l.s0)(),[e,n]=(0,r.useState)(""),{loading:h,data:v,run:Z}=(0,t.Z)((async()=>(await(0,m.lj)()).data.list||[]),{debounceWait:300}),{loading:f,run:x}=(0,t.Z)(m._A,{manual:!0,onSuccess(){i.ZP.success("删除成功"),Z(),n("")}}),g=[{title:"id",key:"id",dataIndex:"id"},{title:"操作",key:"id",dataIndex:"id",render(n){return(0,p.jsxs)(d.Z,{children:[(0,p.jsx)(s.Z,{onClick:()=>{a(`/visual?id=${n}`)},children:"查看详情"}),(0,p.jsx)(s.Z,{onClick:()=>x(n),loading:f&&e===n,children:"删除"})]})}}];return(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("div",{className:o,children:(0,p.jsx)(d.Z,{children:(0,p.jsx)(s.Z,{type:"primary",onClick:()=>{a("/visual")},children:"创建"})})}),(0,p.jsx)(u.Z,{rowKey:"id",dataSource:v,loading:h,columns:g,pagination:!1})]})}}}]);