"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[774],{8082:function(e,t,n){var r=n(9439),o=n(7294),a=n(1808);t.Z=function(){var e=o.useState(!1),t=(0,r.Z)(e,2),n=t[0],i=t[1];return o.useEffect((function(){i((0,a.fk)())}),[]),n}},1808:function(e,t,n){n.d(t,{fk:function(){return i},jD:function(){return a}});var r,o=n(8924),a=function(){return(0,o.Z)()&&window.document.documentElement},i=function(){if(!a())return!1;if(void 0!==r)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r}},9650:function(e,t,n){n.d(t,{u:function(){return v},Z:function(){return h}});var r=n(7462),o=n(4942),a=n(9439),i=n(4184),c=n.n(i),l=n(344),s=n(7294),u=n(3124),d=n(8082);function f(e){var t=e.className,n=e.direction,a=e.index,i=e.marginDirection,c=e.children,l=e.split,u=e.wrap,d=s.useContext(v),f=d.horizontalSize,m=d.verticalSize,p=d.latestIndex,h={};return d.supportFlexGap||("vertical"===n?a<p&&(h={marginBottom:f/(l?2:1)}):h=(0,r.Z)((0,r.Z)({},a<p&&(0,o.Z)({},i,f/(l?2:1))),u&&{paddingBottom:m})),null==c?null:s.createElement(s.Fragment,null,s.createElement("div",{className:t,style:h},c),a<p&&l&&s.createElement("span",{className:"".concat(t,"-split"),style:h},l))}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},v=s.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),p={small:8,middle:16,large:24};var h=function(e){var t,n=s.useContext(u.E_),i=n.getPrefixCls,h=n.space,y=n.direction,g=e.size,x=void 0===g?(null==h?void 0:h.size)||"small":g,C=e.align,b=e.className,k=e.children,Z=e.direction,w=void 0===Z?"horizontal":Z,N=e.prefixCls,E=e.split,j=e.style,L=e.wrap,S=void 0!==L&&L,z=m(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),O=(0,d.Z)(),M=s.useMemo((function(){return(Array.isArray(x)?x:[x,x]).map((function(e){return function(e){return"string"==typeof e?p[e]:e||0}(e)}))}),[x]),H=(0,a.Z)(M,2),R=H[0],I=H[1],P=(0,l.Z)(k,{keepEmpty:!0}),_=void 0===C&&"horizontal"===w?"center":C,T=i("space",N),W=c()(T,"".concat(T,"-").concat(w),(t={},(0,o.Z)(t,"".concat(T,"-rtl"),"rtl"===y),(0,o.Z)(t,"".concat(T,"-align-").concat(_),_),t),b),D="".concat(T,"-item"),F="rtl"===y?"marginLeft":"marginRight",A=0,B=P.map((function(e,t){null!=e&&(A=t);var n=e&&e.key||"".concat(D,"-").concat(t);return s.createElement(f,{className:D,key:n,direction:w,index:t,marginDirection:F,split:E,wrap:S},e)})),V=s.useMemo((function(){return{horizontalSize:R,verticalSize:I,latestIndex:A,supportFlexGap:O}}),[R,I,A,O]);if(0===P.length)return null;var G={};return S&&(G.flexWrap="wrap",O||(G.marginBottom=-I)),O&&(G.columnGap=R,G.rowGap=I),s.createElement("div",(0,r.Z)({className:W,style:(0,r.Z)((0,r.Z)({},G),j)},z),s.createElement(v.Provider,{value:V},B))}},7774:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ie}});var r=n(7294),o=n(6974),a=n(2897),i=n(4025),c=a.ZP;c.Header=a.h4,c.Footer=a.$_,c.Content=a.VY,c.Sider=i.Z;var l=c,s="src-Layout-index-module_3SD5m",u="src-Layout-index-module_3lYJk",d="src-Layout-index-module_2ta-1",f="src-Layout-index-module_3WFx0",m="src-Layout-index-module_3E7vg",v="src-Layout-index-module_XQLt9",p="src-Layout-index-module_1x6zM",h="src-Layout-index-module_evjM0",y="src-Layout-index-module_1oovK",g="src-Layout-index-module_2Kfb4",x="src-Layout-index-module_b0t3L",C="src-Layout-index-module_1Tz38",b="src-Layout-index-module_3Gn75",k="src-Layout-index-module_3du8w",Z=n(9439),w=n(2644),N=n(1413),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32zm-40 488H136V212h752v416z"}}]},name:"desktop",theme:"outlined"},j=n(76),L=function(e,t){return r.createElement(j.Z,(0,N.Z)((0,N.Z)({},e),{},{ref:t,icon:E}))};L.displayName="DesktopOutlined";var S=r.forwardRef(L),z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},O=function(e,t){return r.createElement(j.Z,(0,N.Z)((0,N.Z)({},e),{},{ref:t,icon:z}))};O.displayName="MenuUnfoldOutlined";var M=r.forwardRef(O),H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"},R=function(e,t){return r.createElement(j.Z,(0,N.Z)((0,N.Z)({},e),{},{ref:t,icon:H}))};R.displayName="MenuFoldOutlined";var I,P=r.forwardRef(R),_=n(9711),T=n(1851),W=[{title:"首页",icon:"",path:"/dashboard",key:"dashboard"},{title:"学习",icon:"",key:"study",children:T.y8},{title:"接口调用",icon:"",key:"apis",children:T.CT}],D=n(9226),F=n(9392),A=n(9468),B=n(4880),V=n(5893),G=w.Z.SubMenu,U=w.Z.Item,K=l.Sider,Y=function(){var e=(0,D.v9)(F.Wf).menuCollapsed,t=(0,A.TL)(),n=(0,A.tv)().location,o=(0,r.useState)((function(){var e=n.pathname,t=(0,B.Fc)(W,(function(t){return(null==t?void 0:t.path)===e})).reverse(),r=(0,Z.Z)(t,2),o=(r[0],r[1]);return{selected:null!=o&&o.key?[o.key]:["dashboard"],open:[]}})),a=(0,Z.Z)(o,1)[0],i=function(){var n=!e;t((0,F.E6)(n))},c=function e(t){var n=t.title,r=t.path,o=t.children,a=t.key;return o&&o.length?(0,V.jsx)(G,{title:n,icon:(0,V.jsx)(S,{}),children:o.map((function(t){return e(t)}))},a):(0,V.jsx)(U,{children:(0,V.jsx)(_.rU,{to:r,children:n})},a)};return(0,V.jsxs)("div",{className:h,children:[(0,V.jsx)(K,{width:200,className:y,trigger:null,collapsible:!0,collapsed:e,children:(0,V.jsx)(w.Z,{mode:"inline",theme:"light",style:{height:"100%"},defaultOpenKeys:a.open,defaultSelectedKeys:a.selected,children:function(e){return e.map((function(e){var t=e.children,n=void 0===t?[]:t,r=e.title,o=e.key;return n&&n.length?(0,V.jsx)(G,{title:r,icon:(0,V.jsx)(S,{}),children:n.map(c)},o):function(e){return(0,V.jsx)(U,{icon:(0,V.jsx)(S,{}),children:(0,V.jsx)(_.rU,{to:e.path,children:e.title})},e.key)}(e)}))}(W)})}),(0,V.jsx)("div",{className:g,onClick:i,children:e?(0,V.jsx)(M,{onClick:i}):(0,V.jsx)(P,{onClick:i})})]})},X=function(){return(0,V.jsx)("div",{className:d,children:"L"})},q=n(5861),J=n(4687),Q=n.n(J),$=n(5026),ee=n(1530),te=n(9650),ne=n(4870);!function(e){e[e.Setting=0]="Setting",e[e.Logout=1]="Logout"}(I||(I={}));var re=function(){var e=(0,D.v9)(ne.np).user,t=(0,A.aC)().logout,n=(0,o.s0)(),r=function(){var e=(0,q.Z)(Q().mark((function e(r){var o;return Q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=r.key,e.t0=o,e.next="setting"===e.t0?4:"logout"===e.t0?5:9;break;case 4:return e.abrupt("return");case 5:return e.next=7,t();case 7:n("/login"),$.ZP.success("注销成功");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=(0,V.jsx)(w.Z,{onClick:r,items:[{label:"设置",key:"setting"},{label:"注销",key:"logout"}]});return(0,V.jsx)("div",{className:f,children:(0,V.jsx)(ee.Z,{overlay:a,children:(0,V.jsx)("div",{className:m,children:(0,V.jsxs)(te.Z,{children:[(0,V.jsx)(X,{}),(0,V.jsx)("span",{className:v,children:null==e?void 0:e.username})]})})})})},oe=n(6649),ae=n(7462),ie=n(4942),ce=n(4549),le=n(4184),se=n.n(le),ue=n(2016),de=n(3441);var fe=function(e){var t=e.prefixCls,n=e.className,o=e.style,a=e.children,i=e.containerRef;return r.createElement(r.Fragment,null,r.createElement("div",{className:se()("".concat(t,"-content"),n),style:(0,N.Z)({},o),"aria-modal":"true",role:"dialog",ref:i},a))},me=r.createContext(null),ve=n(5105),pe=n(334);function he(e){return"string"==typeof e&&String(Number(e))===e?((0,pe.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var ye={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function ge(e){var t,n,o,a,i=e.prefixCls,c=e.open,l=e.placement,s=e.inline,u=e.push,d=e.forceRender,f=e.autoFocus,m=e.keyboard,v=e.scrollLocker,p=e.rootClassName,h=e.rootStyle,y=e.zIndex,g=e.className,x=e.style,C=e.motion,b=e.width,k=e.height,w=e.children,E=e.contentWrapperStyle,j=e.mask,L=e.maskClosable,S=e.maskMotion,z=e.maskClassName,O=e.maskStyle,M=e.afterOpenChange,H=e.onClose,R=r.useRef(),I=r.useRef(),P=r.useRef();r.useEffect((function(){var e;c&&f&&(null===(e=R.current)||void 0===e||e.focus({preventScroll:!0}))}),[c,f]);var _=r.useState(!1),T=(0,Z.Z)(_,2),W=T[0],D=T[1],F=r.useContext(me),A=null!==(t=null!==(n=null===(o=!1===u?{distance:0}:!0===u?{}:u||{})||void 0===o?void 0:o.distance)&&void 0!==n?n:null==F?void 0:F.pushDistance)&&void 0!==t?t:180,B=r.useMemo((function(){return{pushDistance:A,push:function(){D(!0)},pull:function(){D(!1)}}}),[A]);r.useEffect((function(){var e,t;c?null==F||null===(e=F.push)||void 0===e||e.call(F):null==F||null===(t=F.pull)||void 0===t||t.call(F)}),[c]),r.useEffect((function(){c&&j&&(null==v||v.lock())}),[c,j]),r.useEffect((function(){return function(){var e;null==v||v.unLock(),null==F||null===(e=F.pull)||void 0===e||e.call(F)}}),[]);var V={};y&&(V.zIndex=y);var G=j&&r.createElement(de.Z,(0,ae.Z)({key:"mask"},S,{visible:c}),(function(e,t){var n=e.className,o=e.style;return r.createElement("div",{className:se()("".concat(i,"-mask"),n,z),style:(0,N.Z)((0,N.Z)((0,N.Z)({},o),O),V),onClick:L?H:void 0,ref:t})})),U="function"==typeof C?C(l):C,K={};if(W&&A)switch(l){case"top":K.transform="translateY(".concat(A,"px)");break;case"bottom":K.transform="translateY(".concat(-A,"px)");break;case"left":K.transform="translateX(".concat(A,"px)");break;default:K.transform="translateX(".concat(-A,"px)")}"left"===l||"right"===l?K.width=he(b):K.height=he(k);var Y=r.createElement(de.Z,(0,ae.Z)({key:"panel"},U,{visible:c,forceRender:d,onVisibleChanged:function(e){null==M||M(e),e||null==v||v.unLock()},removeOnLeave:!1,leavedClassName:"".concat(i,"-content-wrapper-hidden")}),(function(e,t){var n=e.className,o=e.style;return r.createElement("div",{className:se()("".concat(i,"-content-wrapper"),n),style:(0,N.Z)((0,N.Z)((0,N.Z)((0,N.Z)({},K),o),E),V)},r.createElement(fe,{containerRef:t,prefixCls:i,className:g,style:x},w))}));return r.createElement(me.Provider,{value:B},r.createElement("div",{className:se()(i,"".concat(i,"-").concat(l),p,(a={},(0,ie.Z)(a,"".concat(i,"-open"),c),(0,ie.Z)(a,"".concat(i,"-inline"),s),a)),style:h,tabIndex:-1,ref:R,onKeyDown:function(e){var t=e.keyCode,n=e.shiftKey;switch(t){case ve.Z.TAB:var r;if(t===ve.Z.TAB)if(n||document.activeElement!==P.current){if(n&&document.activeElement===I.current){var o;null===(o=P.current)||void 0===o||o.focus({preventScroll:!0})}}else null===(r=I.current)||void 0===r||r.focus({preventScroll:!0});break;case ve.Z.ESC:H&&m&&H(e)}}},G,r.createElement("div",{tabIndex:0,ref:I,style:ye,"aria-hidden":"true","data-sentinel":"start"}),Y,r.createElement("div",{tabIndex:0,ref:P,style:ye,"aria-hidden":"true","data-sentinel":"end"})))}var xe=function(e){var t=e.open,n=e.getContainer,o=e.forceRender,a=e.wrapperClassName,i=e.prefixCls,c=e.afterOpenChange,l=e.destroyOnClose,s=r.useState(!1),u=(0,Z.Z)(s,2),d=u[0],f=u[1];if(!o&&!d&&!t&&l)return null;var m=(0,N.Z)((0,N.Z)({},e),{},{prefixCls:i,afterOpenChange:function(e){f(e),null==c||c(e)}});return!1===n?r.createElement(ge,(0,ae.Z)({},m,{inline:!0})):r.createElement(ue.Z,{visible:t,forceRender:o,getContainer:n,wrapperClassName:a},(function(e){var t=e.scrollLocker;return r.createElement(ge,(0,ae.Z)({},m,{scrollLocker:t}))}))};xe.defaultProps={open:!1,getContainer:function(){return document.body},prefixCls:"rc-drawer",placement:"right",autoFocus:!0,keyboard:!0,width:378,mask:!0,maskClosable:!0};var Ce=xe,be=n(3124),ke=n(5223),Ze=n(3603),we=n(3355),Ne=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Ee=((0,we.b)("top","right","bottom","left"),(0,we.b)("default","large"),{distance:180});var je=function(e){var t=e.width,n=e.height,o=e.size,a=void 0===o?"default":o,i=e.closable,c=void 0===i||i,l=e.mask,s=void 0===l||l,u=e.push,d=void 0===u?Ee:u,f=e.closeIcon,m=void 0===f?r.createElement(ce.Z,null):f,v=e.bodyStyle,p=e.drawerStyle,h=e.className,y=e.visible,g=e.children,x=(e.zIndex,e.style),C=e.title,b=e.headerStyle,k=e.onClose,Z=e.footer,w=e.footerStyle,N=e.prefixCls,E=e.getContainer,j=e.extra,L=e.afterVisibleChange,S=Ne(e,["width","height","size","closable","mask","push","closeIcon","bodyStyle","drawerStyle","className","visible","children","zIndex","style","title","headerStyle","onClose","footer","footerStyle","prefixCls","getContainer","extra","afterVisibleChange"]),z=r.useContext(be.E_),O=z.getPopupContainer,M=z.getPrefixCls,H=z.direction,R=M("drawer",N),I=void 0===E&&O?function(){return O(document.body)}:E,P=c&&r.createElement("button",{type:"button",onClick:k,"aria-label":"Close",className:"".concat(R,"-close")},m),_=se()((0,ie.Z)({"no-mask":!s},"".concat(R,"-rtl"),"rtl"===H),h),T=r.useMemo((function(){return null!=t?t:"large"===a?736:378}),[t,a]),W=r.useMemo((function(){return null!=n?n:"large"===a?736:378}),[n,a]),D={motionName:(0,Ze.mL)(R,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0};return r.createElement(ke.Ux,{status:!0,override:!0},r.createElement(Ce,(0,ae.Z)({prefixCls:R,onClose:k},S,{open:y,mask:s,push:d,width:T,height:W,rootClassName:_,getContainer:I,afterOpenChange:function(e){null==L||L(e)},maskMotion:D,motion:function(e){return{motionName:(0,Ze.mL)(R,"panel-motion-".concat(e)),motionAppear:!0,motionEnter:!0,motionLeave:!0}},rootStyle:x}),r.createElement("div",{className:"".concat(R,"-wrapper-body"),style:(0,ae.Z)({},p)},C||c?r.createElement("div",{className:se()("".concat(R,"-header"),(0,ie.Z)({},"".concat(R,"-header-close-only"),c&&!C&&!j)),style:b},r.createElement("div",{className:"".concat(R,"-header-title")},P,C&&r.createElement("div",{className:"".concat(R,"-title")},C)),j&&r.createElement("div",{className:"".concat(R,"-extra")},j)):null,r.createElement("div",{className:"".concat(R,"-body"),style:v},g),function(){if(!Z)return null;var e="".concat(R,"-footer");return r.createElement("div",{className:e,style:w},Z)}())))},Le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"},Se=function(e,t){return r.createElement(j.Z,(0,N.Z)((0,N.Z)({},e),{},{ref:t,icon:Le}))};Se.displayName="SettingOutlined";var ze=r.forwardRef(Se),Oe=["#1890ff","#faad14","#13c2c2"],Me=function(){var e=(0,r.useState)(!1),t=(0,Z.Z)(e,2),n=t[0],o=t[1];return(0,V.jsx)(je,{title:"全局配置",onClose:function(){return o(!1)},visible:n,width:300,closable:!1,style:{zIndex:999},handler:(0,V.jsx)("div",{className:x,onClick:function(){return o(!n)},children:n?(0,V.jsx)(ce.Z,{style:{color:"#fff",fontSize:20}}):(0,V.jsx)(ze,{style:{color:"#fff",fontSize:20}})}),children:(0,V.jsxs)("div",{className:C,children:[(0,V.jsx)("h3",{children:"主题色"}),(0,V.jsx)("div",{className:b,children:Oe.map((function(e){return(0,V.jsx)("span",{className:k,style:{backgroundColor:e},onClick:function(){return function(e){oe.ZP.config({theme:{primaryColor:e}})}(e)}},e)}))})]})})},He=l.Header,Re=l.Content,Ie=function(){return(0,V.jsxs)("div",{className:s,children:[(0,V.jsxs)(He,{className:u,children:[(0,V.jsx)(X,{}),(0,V.jsx)(re,{})]}),(0,V.jsxs)(l,{className:p,children:[(0,V.jsx)(Y,{}),(0,V.jsx)(Me,{}),(0,V.jsx)(l,{style:{padding:"24px"},children:(0,V.jsx)(Re,{className:"site-layout-background",style:{minHeight:280},children:(0,V.jsx)(o.j3,{})})})]})]})}},2016:function(e,t,n){n.d(t,{Z:function(){return L}});var r=n(5671),o=n(3144),a=n(136),i=n(8557),c=n(1002),l=n(7294),s=n(5164),u=n(9015),d=n(8924),f=n(4204);var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return{};var n=t.element,r=void 0===n?document.body:n,o={},a=Object.keys(e);return a.forEach((function(e){o[e]=r.style[e]})),a.forEach((function(t){r.style[t]=e[t]})),o};var v={},p=function(e){if(document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth||e){var t="ant-scrolling-effect",n=new RegExp("".concat(t),"g"),r=document.body.className;if(e){if(!n.test(r))return;return m(v),v={},void(document.body.className=r.replace(n,"").trim())}var o=(0,f.Z)();if(o&&(v=m({position:"relative",width:"calc(100% - ".concat(o,"px)")}),!n.test(r))){var a="".concat(r," ").concat(t);document.body.className=a.trim()}}},h=n(3433),y=[],g="ant-scrolling-effect",x=new RegExp("".concat(g),"g"),C=0,b=new Map,k=(0,o.Z)((function e(t){var n=this;(0,r.Z)(this,e),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var e;return null===(e=n.options)||void 0===e?void 0:e.container},this.reLock=function(e){var t=y.find((function(e){return e.target===n.lockTarget}));t&&n.unLock(),n.options=e,t&&(t.options=e,n.lock())},this.lock=function(){var e;if(!y.some((function(e){return e.target===n.lockTarget})))if(y.some((function(e){var t,r=e.options;return(null==r?void 0:r.container)===(null===(t=n.options)||void 0===t?void 0:t.container)})))y=[].concat((0,h.Z)(y),[{target:n.lockTarget,options:n.options}]);else{var t=0,r=(null===(e=n.options)||void 0===e?void 0:e.container)||document.body;(r===document.body&&window.innerWidth-document.documentElement.clientWidth>0||r.scrollHeight>r.clientHeight)&&(t=(0,f.Z)());var o=r.className;if(0===y.filter((function(e){var t,r=e.options;return(null==r?void 0:r.container)===(null===(t=n.options)||void 0===t?void 0:t.container)})).length&&b.set(r,m({width:0!==t?"calc(100% - ".concat(t,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:r})),!x.test(o)){var a="".concat(o," ").concat(g);r.className=a.trim()}y=[].concat((0,h.Z)(y),[{target:n.lockTarget,options:n.options}])}},this.unLock=function(){var e,t=y.find((function(e){return e.target===n.lockTarget}));if(y=y.filter((function(e){return e.target!==n.lockTarget})),t&&!y.some((function(e){var n,r=e.options;return(null==r?void 0:r.container)===(null===(n=t.options)||void 0===n?void 0:n.container)}))){var r=(null===(e=n.options)||void 0===e?void 0:e.container)||document.body,o=r.className;x.test(o)&&(m(b.get(r),{element:r}),b.delete(r),r.className=r.className.replace(x,"").trim())}},this.lockTarget=C++,this.options=t})),Z=0,w=(0,d.Z)();var N={},E=function(e){if(!w)return null;if(e){if("string"==typeof e)return document.querySelectorAll(e)[0];if("function"==typeof e)return e();if("object"===(0,c.Z)(e)&&e instanceof window.HTMLElement)return e}return document.body},j=function(e){(0,a.Z)(n,e);var t=(0,i.Z)(n);function n(e){var o;return(0,r.Z)(this,n),(o=t.call(this,e)).container=void 0,o.componentRef=l.createRef(),o.rafId=void 0,o.scrollLocker=void 0,o.renderComponent=void 0,o.updateScrollLocker=function(e){var t=(e||{}).visible,n=o.props,r=n.getContainer,a=n.visible;a&&a!==t&&w&&E(r)!==o.scrollLocker.getContainer()&&o.scrollLocker.reLock({container:E(r)})},o.updateOpenCount=function(e){var t=e||{},n=t.visible,r=t.getContainer,a=o.props,i=a.visible,c=a.getContainer;i!==n&&w&&E(c)===document.body&&(i&&!n?Z+=1:e&&(Z-=1)),("function"==typeof c&&"function"==typeof r?c.toString()!==r.toString():c!==r)&&o.removeCurrentContainer()},o.attachToParent=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||o.container&&!o.container.parentNode){var t=E(o.props.getContainer);return!!t&&(t.appendChild(o.container),!0)}return!0},o.getContainer=function(){return w?(o.container||(o.container=document.createElement("div"),o.attachToParent(!0)),o.setWrapperClassName(),o.container):null},o.setWrapperClassName=function(){var e=o.props.wrapperClassName;o.container&&e&&e!==o.container.className&&(o.container.className=e)},o.removeCurrentContainer=function(){var e,t;null===(e=o.container)||void 0===e||null===(t=e.parentNode)||void 0===t||t.removeChild(o.container)},o.switchScrollingEffect=function(){1!==Z||Object.keys(N).length?Z||(m(N),N={},p(!0)):(p(),N=m({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"}))},o.scrollLocker=new k({container:E(e.getContainer)}),o}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=(0,s.Z)((function(){e.forceUpdate()})))}},{key:"componentDidUpdate",value:function(e){this.updateOpenCount(e),this.updateScrollLocker(e),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.visible,n=e.getContainer;w&&E(n)===document.body&&(Z=t&&Z?Z-1:Z),this.removeCurrentContainer(),s.Z.cancel(this.rafId)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.forceRender,r=e.visible,o=null,a={getOpenCount:function(){return Z},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(n||r||this.componentRef.current)&&(o=l.createElement(u.Z,{getContainer:this.getContainer,ref:this.componentRef},t(a))),o}}]),n}(l.Component),L=j}}]);