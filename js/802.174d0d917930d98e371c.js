"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[802,6798],{36120:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(50959),o=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,s=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=s.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=s.return)&&t.call(s)}finally{if(o)throw o.error}}return a};var s=function(e,n){void 0===e&&(e=!1);var t=o((0,r.useState)(e),2),s=t[0],a=t[1];return[s,(0,r.useMemo)((function(){var t=void 0===n?!e:n;return{toggle:function(){return a((function(n){return n===e?t:e}))},set:function(e){return a(e)},setLeft:function(){return a(e)},setRight:function(){return a(t)}}}),[])]},a=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,s=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=s.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=s.return)&&t.call(s)}finally{if(o)throw o.error}}return a};var i=t(24068),c=t(34746),u=t(35794);var l=function(e,n,t){void 0===t&&(t={});var r=(0,i.Z)(n);(0,u.Z)((function(){var n=(0,c.n)(t.target,window);if(null==n?void 0:n.addEventListener){var o=function(e){return r.current(e)};return n.addEventListener(e,o,{capture:t.capture,once:t.once,passive:t.passive}),function(){n.removeEventListener(e,o,{capture:t.capture})}}}),[e,t.capture,t.once,t.passive],t.target)},p=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,s=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=s.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=s.return)&&t.call(s)}finally{if(o)throw o.error}}return a},d=function(e,n){var t=n||{},o=t.onEnter,i=t.onLeave,c=t.onChange,u=p(function(e){void 0===e&&(e=!1);var n=a(s(e),2),t=n[0],o=n[1],i=o.toggle,c=o.set;return[t,(0,r.useMemo)((function(){return{toggle:i,set:function(e){return c(!!e)},setTrue:function(){return c(!0)},setFalse:function(){return c(!1)}}}),[])]}(!1),2),d=u[0],f=u[1],m=f.setTrue,h=f.setFalse;return l("mouseenter",(function(){null==o||o(),m(),null==c||c(!0)}),{target:e}),l("mouseleave",(function(){null==i||i(),h(),null==c||c(!1)}),{target:e}),d}},43107:function(e,n,t){var r=t(50959),o=t(42449),s=t(66284),a=t(34746);n.Z=function(e){return function(n,t,i){var c=(0,r.useRef)(!1),u=(0,r.useRef)([]),l=(0,r.useRef)([]),p=(0,r.useRef)();e((function(){var e,r=(Array.isArray(i)?i:[i]).map((function(e){return(0,a.n)(e)}));if(!c.current)return c.current=!0,u.current=r,l.current=t,void(p.current=n());r.length===u.current.length&&(0,s.Z)(r,u.current)&&(0,s.Z)(t,l.current)||(null===(e=p.current)||void 0===e||e.call(p),u.current=r,l.current=t,p.current=n())})),(0,o.Z)((function(){var e;null===(e=p.current)||void 0===e||e.call(p),c.current=!1}))}}},34746:function(e,n,t){t.d(n,{n:function(){return s}});var r=t(28564),o=t(6862);function s(e,n){if(o.Z)return e?(0,r.mf)(e)?e():"current"in e?e.current:e:n}},35794:function(e,n,t){var r=t(50959),o=(0,t(43107).Z)(r.useEffect);n.Z=o},80802:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(36120),o=t(68591),s=t.n(o),a=t(50959),i=t(66798),c="src-pages-charts-components-Relationship-components-PersonNode-index-module_0pdxW",u="src-pages-charts-components-Relationship-components-PersonNode-index-module_Y0jjw",l="src-pages-charts-components-Relationship-components-PersonNode-index-module_V53lY",p="src-pages-charts-components-Relationship-components-PersonNode-index-module_wfyWx",d="src-pages-charts-components-Relationship-components-PersonNode-index-module_xpXXB",f="src-pages-charts-components-Relationship-components-PersonNode-index-module_g+xzI",m="src-pages-charts-components-Relationship-components-PersonNode-index-module_JBk6G",h="src-pages-charts-components-Relationship-components-PersonNode-index-module_SjmRb",v="src-pages-charts-components-Relationship-components-PersonNode-index-module_E5b4Y",g="src-pages-charts-components-Relationship-components-PersonNode-index-module_ZsSyJ",x=t(11527);var y=({node:e,isRoot:n})=>{const{properties:{avatar:t="",name:o="",count:y=0,role:R=""},id:_=""}=e,[N,S]=(0,a.useState)(!1),j=(0,a.useRef)(null),P=(0,r.Z)(j);return(0,x.jsxs)("div",{className:c,children:[(0,x.jsx)(i.default,{visible:N,cstId:_,onCancel:()=>S(!1)}),(0,x.jsx)("div",{className:s()(u,{[p]:n}),children:n?"当前客户":R}),(0,x.jsxs)("div",{className:s()(l,{[d]:n}),onClick:e=>{e.stopPropagation(),S(!0)},children:[y,"+"]}),(0,x.jsx)("div",{ref:j,className:s()(f,{[m]:n,[h]:P}),children:(0,x.jsx)("img",{src:t,alt:"avatar"})}),(0,x.jsx)("span",{className:s()(v,{[g]:n}),children:o})]})}},66798:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(86043),o=t(85574),s=t(26140),a=t(50959),i="src-pages-charts-components-Relationship-components-PersonRelationshipModal-index-module_o9Yda",c="src-pages-charts-components-Relationship-components-PersonRelationshipModal-index-module_3LEFO",u="src-pages-charts-components-Relationship-components-PersonRelationshipModal-index-module_2uWOp",l="src-pages-charts-components-Relationship-components-PersonRelationshipModal-index-module_vRi8a",p=t(71079),d=t(11527);var f=({cstId:e,visible:n,onCancel:t})=>{const[f,m]=(0,a.useState)({page:1,page_size:10}),[h,v]=(0,a.useState)(0),{loading:g,data:x,run:y}=(0,r.Z)((()=>(({page:e,pageSize:n,total:t})=>new Promise(((r,o)=>{setTimeout((()=>{const o=new Array(t).fill(0).map((e=>({id:(0,p.O1)(),name:(0,p.O1)(6),role:(0,p.O1)(9),relationship:(0,p.O1)(20)})));r({list:o,pager:{page:e,page_size:n,total_rows:t}})}),1e3)})))({page:f.page,pageSize:f.page_size,total:20})),{manual:!0,onSuccess(e){e&&v(+e.pager.total_rows)},refreshDeps:[f,e]});(0,a.useEffect)((()=>{n&&y()}),[n]);const R=[{title:"姓名",dataIndex:"name",render(e){return(0,d.jsx)("span",{className:l,children:e})}},{title:"角色",dataIndex:"role"},{title:"关系",dataIndex:"relationship"}];return(0,d.jsx)(o.Z,{open:n,width:658,onCancel:t,footer:null,mask:!1,closable:!1,children:(0,d.jsxs)("section",{className:i,children:[(0,d.jsxs)("h3",{className:c,children:["更多关系",(0,d.jsx)("span",{className:u,children:"(128)"})]}),(0,d.jsx)(s.Z,{columns:R,loading:g,dataSource:x?.list,rowKey:"id",size:"small",pagination:{current:f.page,pageSize:f.page_size,total:h,simple:!0,onChange:(e,n)=>{m({page:e,page_size:n})}}})]})})}}}]);