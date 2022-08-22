/*! For license information please see 540.ebde102a44b6e94b8c52.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[540],{98082:function(e,t,n){var r=n(29439),o=n(67294),a=n(31808);t.Z=function(){var e=o.useState(!1),t=(0,r.Z)(e,2),n=t[0],i=t[1];return o.useEffect((function(){i((0,a.fk)())}),[]),n}},31808:function(e,t,n){n.d(t,{fk:function(){return i},jD:function(){return a}});var r,o=n(98924),a=function(){return(0,o.Z)()&&window.document.documentElement},i=function(){if(!a())return!1;if(void 0!==r)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r}},19650:function(e,t,n){n.d(t,{u:function(){return p},Z:function(){return h}});var r=n(87462),o=n(4942),a=n(29439),i=n(94184),c=n.n(i),l=n(50344),s=n(67294),u=n(53124),d=n(98082);function f(e){var t=e.className,n=e.direction,a=e.index,i=e.marginDirection,c=e.children,l=e.split,u=e.wrap,d=s.useContext(p),f=d.horizontalSize,m=d.verticalSize,v=d.latestIndex,h={};return d.supportFlexGap||("vertical"===n?a<v&&(h={marginBottom:f/(l?2:1)}):h=(0,r.Z)((0,r.Z)({},a<v&&(0,o.Z)({},i,f/(l?2:1))),u&&{paddingBottom:m})),null==c?null:s.createElement(s.Fragment,null,s.createElement("div",{className:t,style:h},c),a<v&&l&&s.createElement("span",{className:"".concat(t,"-split"),style:h},l))}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},p=s.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),v={small:8,middle:16,large:24};var h=function(e){var t,n=s.useContext(u.E_),i=n.getPrefixCls,h=n.space,y=n.direction,g=e.size,x=void 0===g?(null==h?void 0:h.size)||"small":g,b=e.align,C=e.className,k=e.children,w=e.direction,Z=void 0===w?"horizontal":w,E=e.prefixCls,N=e.split,j=e.style,O=e.wrap,S=void 0!==O&&O,L=m(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),z=(0,d.Z)(),_=s.useMemo((function(){return(Array.isArray(x)?x:[x,x]).map((function(e){return function(e){return"string"==typeof e?v[e]:e||0}(e)}))}),[x]),P=(0,a.Z)(_,2),M=P[0],R=P[1],H=(0,l.Z)(k,{keepEmpty:!0}),T=void 0===b&&"horizontal"===Z?"center":b,I=i("space",E),D=c()(I,"".concat(I,"-").concat(Z),(t={},(0,o.Z)(t,"".concat(I,"-rtl"),"rtl"===y),(0,o.Z)(t,"".concat(I,"-align-").concat(T),T),t),C),W="".concat(I,"-item"),A="rtl"===y?"marginLeft":"marginRight",F=0,B=H.map((function(e,t){null!=e&&(F=t);var n=e&&e.key||"".concat(W,"-").concat(t);return s.createElement(f,{className:W,key:n,direction:Z,index:t,marginDirection:A,split:N,wrap:S},e)})),V=s.useMemo((function(){return{horizontalSize:M,verticalSize:R,latestIndex:F,supportFlexGap:z}}),[M,R,F,z]);if(0===H.length)return null;var G={};return S&&(G.flexWrap="wrap",z||(G.marginBottom=-R)),z&&(G.columnGap=M,G.rowGap=R),s.createElement("div",(0,r.Z)({className:D,style:(0,r.Z)((0,r.Z)({},G),j)},L),s.createElement(p.Provider,{value:V},B))}},47774:function(e,t,n){n.r(t),n.d(t,{default:function(){return Te}});var r=n(67294),o=n(96974),a=n(2897),i=n(14025),c=a.ZP;c.Header=a.h4,c.Footer=a.$_,c.Content=a.VY,c.Sider=i.Z;var l=c,s="src-Layout-index-module_3SD5m",u="src-Layout-index-module_3lYJk",d="src-Layout-index-module_2ta-1",f="src-Layout-index-module_3WFx0",m="src-Layout-index-module_3E7vg",p="src-Layout-index-module_XQLt9",v="src-Layout-index-module_1x6zM",h="src-Layout-index-module_evjM0",y="src-Layout-index-module_1oovK",g="src-Layout-index-module_2Kfb4",x="src-Layout-index-module_b0t3L",b="src-Layout-index-module_1Tz38",C="src-Layout-index-module_3Gn75",k="src-Layout-index-module_3du8w",w=n(29439),Z=n(22644),E=n(1413),N={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32zm-40 488H136V212h752v416z"}}]},name:"desktop",theme:"outlined"},j=n(30076),O=function(e,t){return r.createElement(j.Z,(0,E.Z)((0,E.Z)({},e),{},{ref:t,icon:N}))};O.displayName="DesktopOutlined";var S=r.forwardRef(O),L={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},z=function(e,t){return r.createElement(j.Z,(0,E.Z)((0,E.Z)({},e),{},{ref:t,icon:L}))};z.displayName="MenuUnfoldOutlined";var _=r.forwardRef(z),P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"},M=function(e,t){return r.createElement(j.Z,(0,E.Z)((0,E.Z)({},e),{},{ref:t,icon:P}))};M.displayName="MenuFoldOutlined";var R,H=r.forwardRef(M),T=n(39711),I=n(93433),D=n(31851),W=[{title:"首页",icon:"",path:"/dashboard",key:"dashboard"},{title:"学习",icon:"",key:"study",children:[].concat((0,I.Z)(D.y8),[{title:"编辑器",key:"editor",path:"/editor"},{title:"可视化",key:"visual",path:"/visual"}])},{title:"接口调用",icon:"",key:"apis",children:D.CT}],A=n(14494),F=n(79392),B=n(59468),V=n(8534),G=n(85893),U=Z.Z.SubMenu,Y=Z.Z.Item,K=l.Sider,X=function(){var e=(0,A.v9)(F.Wf).menuCollapsed,t=(0,B.TL)(),n=(0,B.tv)().location,o=(0,r.useState)((function(){var e=n.pathname,t=(0,V.Fc)(W,(function(t){return(null==t?void 0:t.path)===e})).reverse(),r=(0,w.Z)(t,2),o=(r[0],r[1]);return{selected:null!=o&&o.key?[o.key]:["dashboard"],open:[]}})),a=(0,w.Z)(o,1)[0],i=function(){var n=!e;t((0,F.E6)(n))},c=function e(t){var n=t.title,r=t.path,o=t.children,a=t.key;return o&&o.length?(0,G.jsx)(U,{title:n,icon:(0,G.jsx)(S,{}),children:o.map((function(t){return e(t)}))},a):(0,G.jsx)(Y,{children:(0,G.jsx)(T.rU,{to:r,children:n})},a)};return(0,G.jsxs)("div",{className:h,children:[(0,G.jsx)(K,{width:200,className:y,trigger:null,collapsible:!0,collapsed:e,children:(0,G.jsx)(Z.Z,{mode:"inline",theme:"light",style:{height:"100%"},defaultOpenKeys:a.open,defaultSelectedKeys:a.selected,children:function(e){return e.map((function(e){var t=e.children,n=void 0===t?[]:t,r=e.title,o=e.key;return n&&n.length?(0,G.jsx)(U,{title:r,icon:(0,G.jsx)(S,{}),children:n.map(c)},o):function(e){return(0,G.jsx)(Y,{icon:(0,G.jsx)(S,{}),children:(0,G.jsx)(T.rU,{to:e.path,children:e.title})},e.key)}(e)}))}(W)})}),(0,G.jsx)("div",{className:g,onClick:i,children:e?(0,G.jsx)(_,{onClick:i}):(0,G.jsx)(H,{onClick:i})})]})},q=function(){return(0,G.jsx)("div",{className:d,children:"L"})},$=n(15861),J=n(64687),Q=n.n(J),ee=n(55026),te=n(51530),ne=n(19650),re=n(74870);!function(e){e[e.Setting=0]="Setting",e[e.Logout=1]="Logout"}(R||(R={}));var oe=function(){var e=(0,A.v9)(re.np).user,t=(0,B.aC)().logout,n=(0,o.s0)(),r=function(){var e=(0,$.Z)(Q().mark((function e(r){var o;return Q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=r.key,e.t0=o,e.next="setting"===e.t0?4:"logout"===e.t0?5:9;break;case 4:return e.abrupt("return");case 5:return e.next=7,t();case 7:n("/login"),ee.ZP.success("注销成功");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=(0,G.jsx)(Z.Z,{onClick:r,items:[{label:"设置",key:"setting"},{label:"注销",key:"logout"}]});return(0,G.jsx)("div",{className:f,children:(0,G.jsx)(te.Z,{overlay:a,children:(0,G.jsx)("div",{className:m,children:(0,G.jsxs)(ne.Z,{children:[(0,G.jsx)(q,{}),(0,G.jsx)("span",{className:p,children:null==e?void 0:e.username})]})})})})},ae=n(26649),ie=n(87462),ce=n(4942),le=n(54549),se=n(94184),ue=n.n(se),de=n(2016),fe=n(63441);var me=function(e){var t=e.prefixCls,n=e.className,o=e.style,a=e.children,i=e.containerRef;return r.createElement(r.Fragment,null,r.createElement("div",{className:ue()("".concat(t,"-content"),n),style:(0,E.Z)({},o),"aria-modal":"true",role:"dialog",ref:i},a))},pe=r.createContext(null),ve=n(15105),he=n(80334);function ye(e){return"string"==typeof e&&String(Number(e))===e?((0,he.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var ge={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function xe(e){var t,n,o,a,i=e.prefixCls,c=e.open,l=e.placement,s=e.inline,u=e.push,d=e.forceRender,f=e.autoFocus,m=e.keyboard,p=e.scrollLocker,v=e.rootClassName,h=e.rootStyle,y=e.zIndex,g=e.className,x=e.style,b=e.motion,C=e.width,k=e.height,Z=e.children,N=e.contentWrapperStyle,j=e.mask,O=e.maskClosable,S=e.maskMotion,L=e.maskClassName,z=e.maskStyle,_=e.afterOpenChange,P=e.onClose,M=r.useRef(),R=r.useRef(),H=r.useRef();r.useEffect((function(){var e;c&&f&&(null===(e=M.current)||void 0===e||e.focus({preventScroll:!0}))}),[c,f]);var T=r.useState(!1),I=(0,w.Z)(T,2),D=I[0],W=I[1],A=r.useContext(pe),F=null!==(t=null!==(n=null===(o=!1===u?{distance:0}:!0===u?{}:u||{})||void 0===o?void 0:o.distance)&&void 0!==n?n:null==A?void 0:A.pushDistance)&&void 0!==t?t:180,B=r.useMemo((function(){return{pushDistance:F,push:function(){W(!0)},pull:function(){W(!1)}}}),[F]);r.useEffect((function(){var e,t;c?null==A||null===(e=A.push)||void 0===e||e.call(A):null==A||null===(t=A.pull)||void 0===t||t.call(A)}),[c]),r.useEffect((function(){c&&j&&(null==p||p.lock())}),[c,j]),r.useEffect((function(){return function(){var e;null==p||p.unLock(),null==A||null===(e=A.pull)||void 0===e||e.call(A)}}),[]);var V=j&&r.createElement(fe.Z,(0,ie.Z)({key:"mask"},S,{visible:c}),(function(e,t){var n=e.className,o=e.style;return r.createElement("div",{className:ue()("".concat(i,"-mask"),n,L),style:(0,E.Z)((0,E.Z)({},o),z),onClick:O?P:void 0,ref:t})})),G="function"==typeof b?b(l):b,U={};if(D&&F)switch(l){case"top":U.transform="translateY(".concat(F,"px)");break;case"bottom":U.transform="translateY(".concat(-F,"px)");break;case"left":U.transform="translateX(".concat(F,"px)");break;default:U.transform="translateX(".concat(-F,"px)")}"left"===l||"right"===l?U.width=ye(C):U.height=ye(k);var Y=r.createElement(fe.Z,(0,ie.Z)({key:"panel"},G,{visible:c,forceRender:d,onVisibleChanged:function(e){null==_||_(e),e||null==p||p.unLock()},removeOnLeave:!1,leavedClassName:"".concat(i,"-content-wrapper-hidden")}),(function(e,t){var n=e.className,o=e.style;return r.createElement("div",{className:ue()("".concat(i,"-content-wrapper"),n),style:(0,E.Z)((0,E.Z)((0,E.Z)({},U),o),N)},r.createElement(me,{containerRef:t,prefixCls:i,className:g,style:x},Z))})),K=(0,E.Z)({},h);return y&&(K.zIndex=y),r.createElement(pe.Provider,{value:B},r.createElement("div",{className:ue()(i,"".concat(i,"-").concat(l),v,(a={},(0,ce.Z)(a,"".concat(i,"-open"),c),(0,ce.Z)(a,"".concat(i,"-inline"),s),a)),style:K,tabIndex:-1,ref:M,onKeyDown:function(e){var t=e.keyCode,n=e.shiftKey;switch(t){case ve.Z.TAB:var r;if(t===ve.Z.TAB)if(n||document.activeElement!==H.current){if(n&&document.activeElement===R.current){var o;null===(o=H.current)||void 0===o||o.focus({preventScroll:!0})}}else null===(r=R.current)||void 0===r||r.focus({preventScroll:!0});break;case ve.Z.ESC:P&&m&&P(e)}}},V,r.createElement("div",{tabIndex:0,ref:R,style:ge,"aria-hidden":"true","data-sentinel":"start"}),Y,r.createElement("div",{tabIndex:0,ref:H,style:ge,"aria-hidden":"true","data-sentinel":"end"})))}var be=function(e){var t=e.open,n=e.getContainer,o=e.forceRender,a=e.wrapperClassName,i=e.prefixCls,c=e.afterOpenChange,l=e.destroyOnClose,s=r.useState(!1),u=(0,w.Z)(s,2),d=u[0],f=u[1];if(!o&&!d&&!t&&l)return null;var m=(0,E.Z)((0,E.Z)({},e),{},{prefixCls:i,afterOpenChange:function(e){f(e),null==c||c(e)}});return!1===n?r.createElement(xe,(0,ie.Z)({},m,{inline:!0})):r.createElement(de.Z,{visible:t,forceRender:o,getContainer:n,wrapperClassName:a},(function(e){var t=e.scrollLocker;return r.createElement(xe,(0,ie.Z)({},m,{scrollLocker:t}))}))};be.defaultProps={open:!1,getContainer:function(){return document.body},prefixCls:"rc-drawer",placement:"right",autoFocus:!0,keyboard:!0,width:378,mask:!0,maskClosable:!0};var Ce=be,ke=n(53124),we=n(65223),Ze=n(33603),Ee=n(93355),Ne=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},je=((0,Ee.b)("default","large"),{distance:180});var Oe=function(e){var t=e.width,n=e.height,o=e.size,a=void 0===o?"default":o,i=e.closable,c=void 0===i||i,l=e.mask,s=void 0===l||l,u=e.push,d=void 0===u?je:u,f=e.closeIcon,m=void 0===f?r.createElement(le.Z,null):f,p=e.bodyStyle,v=e.drawerStyle,h=e.className,y=e.visible,g=e.children,x=e.style,b=e.title,C=e.headerStyle,k=e.onClose,w=e.footer,Z=e.footerStyle,E=e.prefixCls,N=e.getContainer,j=e.extra,O=e.afterVisibleChange,S=Ne(e,["width","height","size","closable","mask","push","closeIcon","bodyStyle","drawerStyle","className","visible","children","style","title","headerStyle","onClose","footer","footerStyle","prefixCls","getContainer","extra","afterVisibleChange"]),L=r.useContext(ke.E_),z=L.getPopupContainer,_=L.getPrefixCls,P=L.direction,M=_("drawer",E),R=void 0===N&&z?function(){return z(document.body)}:N,H=c&&r.createElement("button",{type:"button",onClick:k,"aria-label":"Close",className:"".concat(M,"-close")},m),T=ue()((0,ce.Z)({"no-mask":!s},"".concat(M,"-rtl"),"rtl"===P),h),I=r.useMemo((function(){return null!=t?t:"large"===a?736:378}),[t,a]),D=r.useMemo((function(){return null!=n?n:"large"===a?736:378}),[n,a]),W={motionName:(0,Ze.mL)(M,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500};return r.createElement(we.Ux,{status:!0,override:!0},r.createElement(Ce,(0,ie.Z)({prefixCls:M,onClose:k},S,{open:y,mask:s,push:d,width:I,height:D,rootClassName:T,getContainer:R,afterOpenChange:function(e){null==O||O(e)},maskMotion:W,motion:function(e){return{motionName:(0,Ze.mL)(M,"panel-motion-".concat(e)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}},rootStyle:x}),r.createElement("div",{className:"".concat(M,"-wrapper-body"),style:(0,ie.Z)({},v)},b||c?r.createElement("div",{className:ue()("".concat(M,"-header"),(0,ce.Z)({},"".concat(M,"-header-close-only"),c&&!b&&!j)),style:C},r.createElement("div",{className:"".concat(M,"-header-title")},H,b&&r.createElement("div",{className:"".concat(M,"-title")},b)),j&&r.createElement("div",{className:"".concat(M,"-extra")},j)):null,r.createElement("div",{className:"".concat(M,"-body"),style:p},g),function(){if(!w)return null;var e="".concat(M,"-footer");return r.createElement("div",{className:e,style:Z},w)}())))},Se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"},Le=function(e,t){return r.createElement(j.Z,(0,E.Z)((0,E.Z)({},e),{},{ref:t,icon:Se}))};Le.displayName="SettingOutlined";var ze=r.forwardRef(Le),_e=["#1890ff","#faad14","#13c2c2"],Pe=function(){var e=(0,r.useState)(!1),t=(0,w.Z)(e,2),n=t[0],o=t[1];return(0,G.jsx)(Oe,{title:"全局配置",onClose:function(){return o(!1)},visible:n,width:300,closable:!1,style:{zIndex:999},handler:(0,G.jsx)("div",{className:x,onClick:function(){return o(!n)},children:n?(0,G.jsx)(le.Z,{style:{color:"#fff",fontSize:20}}):(0,G.jsx)(ze,{style:{color:"#fff",fontSize:20}})}),children:(0,G.jsxs)("div",{className:b,children:[(0,G.jsx)("h3",{children:"主题色"}),(0,G.jsx)("div",{className:C,children:_e.map((function(e){return(0,G.jsx)("span",{className:k,style:{backgroundColor:e},onClick:function(){return function(e){ae.ZP.config({theme:{primaryColor:e}})}(e)}},e)}))})]})})},Me=n(53869),Re=l.Header,He=l.Content,Te=function(){return(0,G.jsxs)("div",{className:s,children:[(0,G.jsxs)(Re,{className:u,children:[(0,G.jsx)(q,{}),(0,G.jsx)(oe,{})]}),(0,G.jsxs)(l,{className:v,children:[(0,G.jsx)(X,{}),(0,G.jsx)(Pe,{}),(0,G.jsx)(l,{style:{padding:"24px"},children:(0,G.jsx)(He,{className:"site-layout-background",style:{minHeight:280},children:(0,G.jsx)(Me.M,{children:(0,G.jsx)(o.j3,{})})})})]})]})}},9839:function(e,t,n){n.d(t,{qY:function(){return m},ZP:function(){return x},iW:function(){return p},$B:function(){return g}});var r=1/60*1e3,o="undefined"!=typeof performance?function(){return performance.now()}:function(){return Date.now()},a="undefined"!=typeof window?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout((function(){return e(o())}),r)};var i=!0,c=!1,l=!1,s={delta:0,timestamp:0},u=["read","update","preRender","render","postRender"],d=u.reduce((function(e,t){return e[t]=function(e){var t=[],n=[],r=0,o=!1,a=new WeakSet,i={schedule:function(e,i,c){void 0===i&&(i=!1),void 0===c&&(c=!1);var l=c&&o,s=l?t:n;return i&&a.add(e),-1===s.indexOf(e)&&(s.push(e),l&&o&&(r=t.length)),e},cancel:function(e){var t=n.indexOf(e);-1!==t&&n.splice(t,1),a.delete(e)},process:function(c){var l;if(o=!0,t=(l=[n,t])[0],(n=l[1]).length=0,r=t.length)for(var s=0;s<r;s++){var u=t[s];u(c),a.has(u)&&(i.schedule(u),e())}o=!1}};return i}((function(){return c=!0})),e}),{}),f=u.reduce((function(e,t){var n=d[t];return e[t]=function(e,t,r){return void 0===t&&(t=!1),void 0===r&&(r=!1),c||y(),n.schedule(e,t,r)},e}),{}),m=u.reduce((function(e,t){return e[t]=d[t].cancel,e}),{}),p=u.reduce((function(e,t){return e[t]=function(){return d[t].process(s)},e}),{}),v=function(e){return d[e].process(s)},h=function(e){c=!1,s.delta=i?r:Math.max(Math.min(e-s.timestamp,40),1),s.timestamp=e,l=!0,u.forEach(v),l=!1,c&&(i=!1,a(h))},y=function(){c=!0,i=!0,l||a(h)},g=function(){return s},x=f},2016:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(15671),o=n(43144),a=n(60136),i=n(98557),c=n(71002),l=n(67294),s=n(75164),u=n(59015),d=n(98924),f=n(74204);var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return{};var n=t.element,r=void 0===n?document.body:n,o={},a=Object.keys(e);return a.forEach((function(e){o[e]=r.style[e]})),a.forEach((function(t){r.style[t]=e[t]})),o};var p={},v=function(e){if(document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth||e){var t="ant-scrolling-effect",n=new RegExp("".concat(t),"g"),r=document.body.className;if(e){if(!n.test(r))return;return m(p),p={},void(document.body.className=r.replace(n,"").trim())}var o=(0,f.Z)();if(o&&(p=m({position:"relative",width:"calc(100% - ".concat(o,"px)")}),!n.test(r))){var a="".concat(r," ").concat(t);document.body.className=a.trim()}}},h=n(93433),y=[],g="ant-scrolling-effect",x=new RegExp("".concat(g),"g"),b=0,C=new Map,k=(0,o.Z)((function e(t){var n=this;(0,r.Z)(this,e),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var e;return null===(e=n.options)||void 0===e?void 0:e.container},this.reLock=function(e){var t=y.find((function(e){return e.target===n.lockTarget}));t&&n.unLock(),n.options=e,t&&(t.options=e,n.lock())},this.lock=function(){var e;if(!y.some((function(e){return e.target===n.lockTarget})))if(y.some((function(e){var t,r=e.options;return(null==r?void 0:r.container)===(null===(t=n.options)||void 0===t?void 0:t.container)})))y=[].concat((0,h.Z)(y),[{target:n.lockTarget,options:n.options}]);else{var t=0,r=(null===(e=n.options)||void 0===e?void 0:e.container)||document.body;(r===document.body&&window.innerWidth-document.documentElement.clientWidth>0||r.scrollHeight>r.clientHeight)&&(t=(0,f.Z)());var o=r.className;if(0===y.filter((function(e){var t,r=e.options;return(null==r?void 0:r.container)===(null===(t=n.options)||void 0===t?void 0:t.container)})).length&&C.set(r,m({width:0!==t?"calc(100% - ".concat(t,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:r})),!x.test(o)){var a="".concat(o," ").concat(g);r.className=a.trim()}y=[].concat((0,h.Z)(y),[{target:n.lockTarget,options:n.options}])}},this.unLock=function(){var e,t=y.find((function(e){return e.target===n.lockTarget}));if(y=y.filter((function(e){return e.target!==n.lockTarget})),t&&!y.some((function(e){var n,r=e.options;return(null==r?void 0:r.container)===(null===(n=t.options)||void 0===n?void 0:n.container)}))){var r=(null===(e=n.options)||void 0===e?void 0:e.container)||document.body,o=r.className;x.test(o)&&(m(C.get(r),{element:r}),C.delete(r),r.className=r.className.replace(x,"").trim())}},this.lockTarget=b++,this.options=t})),w=0,Z=(0,d.Z)();var E={},N=function(e){if(!Z)return null;if(e){if("string"==typeof e)return document.querySelectorAll(e)[0];if("function"==typeof e)return e();if("object"===(0,c.Z)(e)&&e instanceof window.HTMLElement)return e}return document.body},j=function(e){(0,a.Z)(n,e);var t=(0,i.Z)(n);function n(e){var o;return(0,r.Z)(this,n),(o=t.call(this,e)).container=void 0,o.componentRef=l.createRef(),o.rafId=void 0,o.scrollLocker=void 0,o.renderComponent=void 0,o.updateScrollLocker=function(e){var t=(e||{}).visible,n=o.props,r=n.getContainer,a=n.visible;a&&a!==t&&Z&&N(r)!==o.scrollLocker.getContainer()&&o.scrollLocker.reLock({container:N(r)})},o.updateOpenCount=function(e){var t=e||{},n=t.visible,r=t.getContainer,a=o.props,i=a.visible,c=a.getContainer;i!==n&&Z&&N(c)===document.body&&(i&&!n?w+=1:e&&(w-=1)),("function"==typeof c&&"function"==typeof r?c.toString()!==r.toString():c!==r)&&o.removeCurrentContainer()},o.attachToParent=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||o.container&&!o.container.parentNode){var t=N(o.props.getContainer);return!!t&&(t.appendChild(o.container),!0)}return!0},o.getContainer=function(){return Z?(o.container||(o.container=document.createElement("div"),o.attachToParent(!0)),o.setWrapperClassName(),o.container):null},o.setWrapperClassName=function(){var e=o.props.wrapperClassName;o.container&&e&&e!==o.container.className&&(o.container.className=e)},o.removeCurrentContainer=function(){var e,t;null===(e=o.container)||void 0===e||null===(t=e.parentNode)||void 0===t||t.removeChild(o.container)},o.switchScrollingEffect=function(){1!==w||Object.keys(E).length?w||(m(E),E={},v(!0)):(v(),E=m({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"}))},o.scrollLocker=new k({container:N(e.getContainer)}),o}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=(0,s.Z)((function(){e.forceUpdate()})))}},{key:"componentDidUpdate",value:function(e){this.updateOpenCount(e),this.updateScrollLocker(e),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.visible,n=e.getContainer;Z&&N(n)===document.body&&(w=t&&w?w-1:w),this.removeCurrentContainer(),s.Z.cancel(this.rafId)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.forceRender,r=e.visible,o=null,a={getOpenCount:function(){return w},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(n||r||this.componentRef.current)&&(o=l.createElement(u.Z,{getContainer:this.getContainer,ref:this.componentRef},t(a))),o}}]),n}(l.Component),O=j},70655:function(e,t,n){n.d(t,{CR:function(){return c},ZT:function(){return o},_T:function(){return i},ev:function(){return l},pi:function(){return a}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;function c(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function l(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e}Object.create}}]);