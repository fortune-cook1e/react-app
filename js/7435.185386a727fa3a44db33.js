"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[7435],{3849:function(t,e,r){r.d(e,{Qf:function(){return o},Xk:function(){return s},jK:function(){return a},nS:function(){return l},sT:function(){return i}});var n=r(52726);const i=t=>(0,n.Z)({url:"/staff/list",method:"get",params:t}),a=t=>(0,n.Z)({url:"/staff/add",method:"post",data:t}),o=t=>(0,n.Z)({url:"/staff/update",method:"post",data:t}),l=t=>(0,n.Z)({url:"/staff/delete",method:"post",data:t}),s=t=>(0,n.Z)({url:"/staff/info",method:"get",params:{id:t}})},27435:function(t,e,r){r.r(e),r.d(e,{default:function(){return O}});var n=r(86043),i=r(97286),a=r(84875),o=r.n(a),l=r(50959),s=r(31478),d=r(5562),c=r(99830),h=r(26134);const u=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:r,colorSplit:n,lineWidth:i}=t;return{[e]:Object.assign(Object.assign({},(0,h.Wf)(t)),{borderBlockStart:`${i}px solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${t.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${t.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${t.dividerHorizontalWithTextGutterMargin}px 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${e}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStart:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:r}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:r}}})}};var p=(0,d.Z)("Divider",(t=>{const e=(0,c.TS)(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[u(e)]}),{sizePaddingEdgeHorizontal:0}),g=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r};var f=t=>{const{getPrefixCls:e,direction:r}=l.useContext(s.E_),{prefixCls:n,type:i="horizontal",orientation:a="center",orientationMargin:d,className:c,children:h,dashed:u,plain:f}=t,x=g(t,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),m=e("divider",n),[b,v]=p(m),j=a.length>0?`-${a}`:a,$=!!h,S="left"===a&&null!=d,w="right"===a&&null!=d,y=o()(m,v,`${m}-${i}`,{[`${m}-with-text`]:$,[`${m}-with-text${j}`]:$,[`${m}-dashed`]:!!u,[`${m}-plain`]:!!f,[`${m}-rtl`]:"rtl"===r,[`${m}-no-default-orientation-margin-left`]:S,[`${m}-no-default-orientation-margin-right`]:w},c),z=Object.assign(Object.assign({},S&&{marginLeft:d}),w&&{marginRight:d});return b(l.createElement("div",Object.assign({className:y},x,{role:"separator"}),h&&"vertical"!==i&&l.createElement("span",{className:`${m}-inner-text`,style:z},h)))},x=r(11527);const m=()=>new Promise((t=>{setTimeout((()=>{t({data:{list:[{id:"123",name:"123"}]}})}),1e3)}));var b=()=>{const{data:t,loading:e}=(0,n.Z)(m,{onSuccess(t){console.log({data:t})}});return(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:"this is axios test"}),e&&(0,x.jsx)("span",{children:"loading"}),t?.data.list.map((t=>(0,x.jsx)("div",{children:t.name},t.id)))]})},v=r(6329);var j=({children:t,...e})=>(0,x.jsx)(v.ZP,{...e,children:t}),$=r(32567),S=r(3406),w=r(3849);const{Item:y}=$.Z;var z=()=>{const[t,e]=(0,l.useState)(""),[r,i]=(0,l.useState)(""),{data:a,run:o,loading:s}=(0,n.Z)(w.sT,{manual:!0,onSuccess(){console.log("scuc")}});return(0,x.jsxs)("div",{children:[(0,x.jsxs)($.Z,{children:[(0,x.jsx)(y,{label:"用户名",children:(0,x.jsx)(S.Z,{placeholder:"username",value:t,onChange:t=>e(t.target.value)})}),(0,x.jsx)(y,{label:"密码",children:(0,x.jsx)(S.Z,{type:"password",placeholder:"password",value:r,onChange:t=>i(t.target.value)})}),(0,x.jsx)(v.ZP,{onClick:()=>o({page:1,page_size:10}),loading:s,children:s?"loading":"click"})]}),a?.data.list.map((t=>(0,x.jsx)("div",{role:"list-item",children:t.name},t.id)))]})};var k=({title:t})=>(0,x.jsxs)("div",{children:["this is NestedCmp",(0,x.jsx)(j,{children:"test button"}),(0,x.jsxs)("div",{children:["user title:",(0,x.jsx)("span",{children:t})]})]});var Z=({onSubmitSuccess:t})=>(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{type:"text",placeholder:"user form placeholder"}),(0,x.jsx)("button",{onClick:t,children:"user form click"})]});const C=[{label:"FormTest",value:"FormTest"}];var O=()=>{const[t,e]=(0,l.useState)(C[0].value),{data:r,run:a,loading:o}=(0,n.Z)(w.sT,{manual:!0,onSuccess(){console.log("scuc")}});return(0,x.jsxs)("div",{children:[(0,x.jsx)(i.Z,{value:t,onChange:t=>e(t),style:{width:"200px"},options:C}),(0,x.jsx)(j,{}),(0,x.jsx)(f,{}),(0,x.jsx)(z,{}),(0,x.jsx)(f,{}),(0,x.jsx)(k,{title:"user"}),(0,x.jsx)(f,{}),(0,x.jsx)(Z,{onSubmitSuccess:()=>console.log("ok")}),(0,x.jsx)(f,{}),(0,x.jsx)(b,{})]})}}}]);