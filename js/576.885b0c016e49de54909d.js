"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[576],{98082:function(t,e,n){var r=n(93324),c=n(67294),o=n(31808);e.Z=function(){var t=c.useState(!1),e=(0,r.Z)(t,2),n=e[0],i=e[1];return c.useEffect((function(){i((0,o.fk)())}),[]),n}},24308:function(t,e,n){n.d(e,{c4:function(){return o}});var r=n(4942),c=n(87462),o=["xxl","xl","lg","md","sm","xs"],i={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},a=new Map,s=-1,l={},u={matchHandlers:{},dispatch:function(t){return l=t,a.forEach((function(t){return t(l)})),a.size>=1},subscribe:function(t){return a.size||this.register(),s+=1,a.set(s,t),t(l),s},unsubscribe:function(t){a.delete(t),a.size||this.unregister()},unregister:function(){var t=this;Object.keys(i).forEach((function(e){var n=i[e],r=t.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),a.clear()},register:function(){var t=this;Object.keys(i).forEach((function(e){var n=i[e],o=function(n){var o=n.matches;t.dispatch((0,c.Z)((0,c.Z)({},l),(0,r.Z)({},e,o)))},a=window.matchMedia(n);a.addListener(o),t.matchHandlers[n]={mql:a,listener:o},o(a)}))}};e.ZP=u},31808:function(t,e,n){n.d(e,{fk:function(){return i},jD:function(){return o}});var r,c=n(98924),o=function(){return(0,c.Z)()&&window.document.documentElement},i=function(){if(!o())return!1;if(void 0!==r)return r;var t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.rowGap="1px",t.appendChild(document.createElement("div")),t.appendChild(document.createElement("div")),document.body.appendChild(t),r=1===t.scrollHeight,document.body.removeChild(t),r}},15746:function(t,e,n){var r=n(21584);e.Z=r.Z},99134:function(t,e,n){var r=(0,n(67294).createContext)({});e.Z=r},21584:function(t,e,n){var r=n(4942),c=n(87462),o=n(71002),i=n(94184),a=n.n(i),s=n(67294),l=n(53124),u=n(99134),f=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(t);c<r.length;c++)e.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]])}return n};var d=["xs","sm","md","lg","xl","xxl"],p=s.forwardRef((function(t,e){var n,i=s.useContext(l.E_),p=i.getPrefixCls,m=i.direction,v=s.useContext(u.Z),h=v.gutter,x=v.wrap,Z=v.supportFlexGap,y=t.prefixCls,b=t.span,g=t.order,w=t.offset,j=t.push,O=t.pull,E=t.className,C=t.children,k=t.flex,P=t.style,N=f(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=p("col",y),A={};d.forEach((function(e){var n,i={},a=t[e];"number"==typeof a?i.span=a:"object"===(0,o.Z)(a)&&(i=a||{}),delete N[e],A=(0,c.Z)((0,c.Z)({},A),(n={},(0,r.Z)(n,"".concat(S,"-").concat(e,"-").concat(i.span),void 0!==i.span),(0,r.Z)(n,"".concat(S,"-").concat(e,"-order-").concat(i.order),i.order||0===i.order),(0,r.Z)(n,"".concat(S,"-").concat(e,"-offset-").concat(i.offset),i.offset||0===i.offset),(0,r.Z)(n,"".concat(S,"-").concat(e,"-push-").concat(i.push),i.push||0===i.push),(0,r.Z)(n,"".concat(S,"-").concat(e,"-pull-").concat(i.pull),i.pull||0===i.pull),(0,r.Z)(n,"".concat(S,"-rtl"),"rtl"===m),n))}));var H=a()(S,(n={},(0,r.Z)(n,"".concat(S,"-").concat(b),void 0!==b),(0,r.Z)(n,"".concat(S,"-order-").concat(g),g),(0,r.Z)(n,"".concat(S,"-offset-").concat(w),w),(0,r.Z)(n,"".concat(S,"-push-").concat(j),j),(0,r.Z)(n,"".concat(S,"-pull-").concat(O),O),n),E,A),R={};if(h&&h[0]>0){var G=h[0]/2;R.paddingLeft=G,R.paddingRight=G}if(h&&h[1]>0&&!Z){var L=h[1]/2;R.paddingTop=L,R.paddingBottom=L}return k&&(R.flex=function(t){return"number"==typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(k),!1!==x||R.minWidth||(R.minWidth=0)),s.createElement("div",(0,c.Z)({},N,{style:(0,c.Z)((0,c.Z)({},R),P),className:H,ref:e}),C)}));e.Z=p},92820:function(t,e,n){var r=n(87462),c=n(4942),o=n(71002),i=n(93324),a=n(94184),s=n.n(a),l=n(67294),u=n(53124),f=n(98082),d=n(24308),p=n(93355),m=n(99134),v=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(t);c<r.length;c++)e.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]])}return n};(0,p.b)("top","middle","bottom","stretch"),(0,p.b)("start","end","center","space-around","space-between","space-evenly");function h(t,e){var n=l.useState("string"==typeof t?t:""),r=(0,i.Z)(n,2),c=r[0],a=r[1];return l.useEffect((function(){!function(){if("object"===(0,o.Z)(t))for(var n=0;n<d.c4.length;n++){var r=d.c4[n];if(e[r]){var c=t[r];if(void 0!==c)return void a(c)}}}()}),[JSON.stringify(t),e]),c}var x=l.forwardRef((function(t,e){var n,a=t.prefixCls,p=t.justify,x=t.align,Z=t.className,y=t.style,b=t.children,g=t.gutter,w=void 0===g?0:g,j=t.wrap,O=v(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),E=l.useContext(u.E_),C=E.getPrefixCls,k=E.direction,P=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),N=(0,i.Z)(P,2),S=N[0],A=N[1],H=l.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),R=(0,i.Z)(H,2),G=R[0],L=R[1],_=h(x,G),z=h(p,G),M=(0,f.Z)(),q=l.useRef(w);l.useEffect((function(){var t=d.ZP.subscribe((function(t){L(t);var e=q.current||0;(!Array.isArray(e)&&"object"===(0,o.Z)(e)||Array.isArray(e)&&("object"===(0,o.Z)(e[0])||"object"===(0,o.Z)(e[1])))&&A(t)}));return function(){return d.ZP.unsubscribe(t)}}),[]);var B,D=C("row",a),F=(B=[void 0,void 0],(Array.isArray(w)?w:[w,void 0]).forEach((function(t,e){if("object"===(0,o.Z)(t))for(var n=0;n<d.c4.length;n++){var r=d.c4[n];if(S[r]&&void 0!==t[r]){B[e]=t[r];break}}else B[e]=t})),B),I=s()(D,(n={},(0,c.Z)(n,"".concat(D,"-no-wrap"),!1===j),(0,c.Z)(n,"".concat(D,"-").concat(z),z),(0,c.Z)(n,"".concat(D,"-").concat(_),_),(0,c.Z)(n,"".concat(D,"-rtl"),"rtl"===k),n),Z),T={},W=null!=F[0]&&F[0]>0?F[0]/-2:void 0,J=null!=F[1]&&F[1]>0?F[1]/-2:void 0;if(W&&(T.marginLeft=W,T.marginRight=W),M){var $=(0,i.Z)(F,2);T.rowGap=$[1]}else J&&(T.marginTop=J,T.marginBottom=J);var K=(0,i.Z)(F,2),Q=K[0],U=K[1],V=l.useMemo((function(){return{gutter:[Q,U],wrap:j,supportFlexGap:M}}),[Q,U,j,M]);return l.createElement(m.Z.Provider,{value:V},l.createElement("div",(0,r.Z)({},O,{className:I,style:(0,r.Z)((0,r.Z)({},T),y),ref:e}),b))}));e.Z=x},71230:function(t,e,n){var r=n(92820);e.Z=r.Z},5576:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var r=n(71230),c=n(15746),o=(n(67294),n(71577)),i=n(85893),a=function(){return(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{children:"this is notification"}),(0,i.jsx)(o.Z,{onClick:function(){if("granted"==Notification.permission){var t=new Notification("Hi，帅哥：",{body:"可以加你为好友吗？"});t.onclick=function(){t.close()}}},children:"Open the notification"})]})},s=function(){return(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{children:"this is desktop page"}),(0,i.jsx)(r.Z,{children:(0,i.jsx)(c.Z,{span:24,children:(0,i.jsx)(a,{})})})]})}}}]);