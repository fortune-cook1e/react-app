(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[399],{98082:function(e,t,n){"use strict";var r=n(29439),i=n(67294),o=n(31808);t.Z=function(){var e=i.useState(!1),t=(0,r.Z)(e,2),n=t[0],c=t[1];return i.useEffect((function(){c((0,o.fk)())}),[]),n}},31808:function(e,t,n){"use strict";n.d(t,{fk:function(){return c},jD:function(){return o}});var r,i=n(98924),o=function(){return(0,i.Z)()&&window.document.documentElement},c=function(){if(!o())return!1;if(void 0!==r)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r}},19650:function(e,t,n){"use strict";n.d(t,{u:function(){return f},Z:function(){return x}});var r=n(87462),i=n(4942),o=n(29439),c=n(94184),a=n.n(c),u=n(50344),l=n(67294),s=n(53124),d=n(98082);function p(e){var t=e.className,n=e.direction,o=e.index,c=e.marginDirection,a=e.children,u=e.split,s=e.wrap,d=l.useContext(f),p=d.horizontalSize,m=d.verticalSize,v=d.latestIndex,x={};return d.supportFlexGap||("vertical"===n?o<v&&(x={marginBottom:p/(u?2:1)}):x=(0,r.Z)((0,r.Z)({},o<v&&(0,i.Z)({},c,p/(u?2:1))),s&&{paddingBottom:m})),null==a?null:l.createElement(l.Fragment,null,l.createElement("div",{className:t,style:x},a),o<v&&u&&l.createElement("span",{className:"".concat(t,"-split"),style:x},u))}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},f=l.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),v={small:8,middle:16,large:24};var x=function(e){var t,n=l.useContext(s.E_),c=n.getPrefixCls,x=n.space,g=n.direction,y=e.size,h=void 0===y?(null==x?void 0:x.size)||"small":y,O=e.align,j=e.className,b=e.children,P=e.direction,D=void 0===P?"horizontal":P,w=e.prefixCls,Z=e.split,E=e.style,z=e.wrap,k=void 0!==z&&z,S=m(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),C=(0,d.Z)(),N=l.useMemo((function(){return(Array.isArray(h)?h:[h,h]).map((function(e){return function(e){return"string"==typeof e?v[e]:e||0}(e)}))}),[h]),I=(0,o.Z)(N,2),B=I[0],_=I[1],F=(0,u.Z)(b,{keepEmpty:!0}),G=void 0===O&&"horizontal"===D?"center":O,q=c("space",w),L=a()(q,"".concat(q,"-").concat(D),(t={},(0,i.Z)(t,"".concat(q,"-rtl"),"rtl"===g),(0,i.Z)(t,"".concat(q,"-align-").concat(G),G),t),j),M="".concat(q,"-item"),W="rtl"===g?"marginLeft":"marginRight",A=0,Q=F.map((function(e,t){null!=e&&(A=t);var n=e&&e.key||"".concat(M,"-").concat(t);return l.createElement(p,{className:M,key:n,direction:D,index:t,marginDirection:W,split:Z,wrap:k},e)})),T=l.useMemo((function(){return{horizontalSize:B,verticalSize:_,latestIndex:A,supportFlexGap:C}}),[B,_,A,C]);if(0===F.length)return null;var U={};return k&&(U.flexWrap="wrap",C||(U.marginBottom=-_)),C&&(U.columnGap=B,U.rowGap=_),l.createElement("div",(0,r.Z)({className:L,style:(0,r.Z)((0,r.Z)({},U),E)},S),l.createElement(f.Provider,{value:T},Q))}},79399:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(67294),i=n(12405),o=n(27384),c=n(19650),a=n(71577),u="src-pages-editor-index-module_2W2sO",l="src-pages-editor-index-module_35qzQ",s="src-pages-editor-index-module_DeT0c",d="src-pages-editor-index-module_zS3fQ",p=n(29439),m=n(86487),f=n(85893),v=function(e){var t=e.componentData,n=e.children,r=(0,m.c)((function(){return{type:t.id,item:{componentData:t},collect:function(e){return{isDragging:!!e.isDragging()}}}})),i=(0,p.Z)(r,2),o=(i[0].isDragging,i[1]);return(0,f.jsx)("div",{ref:o,children:n})},x=function(){var e={componentData:[{id:"button",componentId:"Button",name:"按钮组件"},{id:"Picture",componentId:"Picture",name:"图像组件"}]}.componentData;return(0,f.jsx)("div",{className:l,children:(0,f.jsx)(c.Z,{children:e.map((function(e){return(0,f.jsx)(v,{componentData:e,children:(0,f.jsx)(a.Z,{children:e.name})},e.id)}))})})},g=n(4942),y=n(93433),h=n(60994),O=n(94880);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,g.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(){var e={componentData:[{id:"button",componentId:"Button",name:"按钮组件"},{id:"Picture",componentId:"Picture",name:"图像组件"}]}.componentData,t=(0,r.useState)([]),i=(0,p.Z)(t,2),o=i[0],c=i[1],a=(0,h.L)((function(){return{accept:e.map((function(e){return e.id})),collect:function(e){return{isOver:!!e.isOver()}},drop:function(e){var t=e.componentData;d(t)}}})),u=(0,p.Z)(a,2),l=(u[0].isOver,u[1]),d=function(e){c((function(t){return[].concat((0,y.Z)(t),[b(b({},e),{},{uniqueId:(0,O.Ki)()})])}))};return(0,f.jsx)("div",{ref:l,className:s,children:(0,f.jsx)(r.Suspense,{fallback:(0,f.jsx)(f.Fragment,{children:"加载.."}),children:o.map((function(e){var t=(0,r.lazy)((function(){return n(90074)("./".concat(e.componentId))}));return(0,f.jsx)(t,{},e.uniqueId)}))})})},D=function(){return(0,f.jsx)("div",{className:d,children:"this is page"})},w=function(){return(0,f.jsx)(i.W,{backend:o.PD,children:(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)(x,{}),(0,f.jsx)(P,{}),(0,f.jsx)(D,{})]})})}},90074:function(e,t,n){var r={"./Button":[1344,344],"./Button/":[1344,344],"./Button/index":[1344,344],"./Button/index.module.less":[28671,671],"./Button/index.tsx":[1344,344],"./Picture":[58095,95],"./Picture/":[58095,95],"./Picture/index":[58095,95],"./Picture/index.module.less":[66468,468],"./Picture/index.tsx":[58095,95]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=90074,e.exports=i}}]);