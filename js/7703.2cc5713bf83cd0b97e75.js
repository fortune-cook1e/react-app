(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[7703],{13382:function(e,t,n){"use strict";n.d(t,{Z:function(){return o},c:function(){return i}});var r=n(50959),s=n(74661);const i=["xxl","xl","lg","md","sm","xs"];function o(){const[,e]=(0,s.dQ)(),t=(e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}))((e=>{const t=e,n=[].concat(i).reverse();return n.forEach(((e,r)=>{const s=e.toUpperCase(),i=`screen${s}Min`,o=`screen${s}`;if(!(t[i]<=t[o]))throw new Error(`${i}<=${o} fails : !(${t[i]}<=${t[o]})`);if(r<n.length-1){const e=`screen${s}Max`;if(!(t[o]<=t[e]))throw new Error(`${o}<=${e} fails : !(${t[o]}<=${t[e]})`);const i=`screen${n[r+1].toUpperCase()}Min`;if(!(t[e]<=t[i]))throw new Error(`${e}<=${i} fails : !(${t[e]}<=${t[i]})`)}})),e})(e));return r.useMemo((()=>{const e=new Map;let n=-1,r={};return{matchHandlers:{},dispatch(t){return r=t,e.forEach((e=>e(r))),e.size>=1},subscribe(t){return e.size||this.register(),n+=1,e.set(n,t),t(r),n},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach((e=>{const n=t[e],r=this.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),e.clear()},register(){Object.keys(t).forEach((e=>{const n=t[e],s=t=>{let{matches:n}=t;this.dispatch(Object.assign(Object.assign({},r),{[e]:n}))},i=window.matchMedia(n);i.addListener(s),this.matchHandlers[n]={mql:i,listener:s},s(i)}))},responsiveMap:t}}),[e])}},61665:function(e,t,n){"use strict";var r=n(78766);t.Z=r.Z},72133:function(e,t,n){"use strict";const r=(0,n(50959).createContext)({});t.Z=r},78766:function(e,t,n){"use strict";var r=n(84875),s=n.n(r),i=n(50959),o=n(31478),c=n(72133),l=n(87976),a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};const u=["xs","sm","md","lg","xl","xxl"],f=i.forwardRef(((e,t)=>{const{getPrefixCls:n,direction:r}=i.useContext(o.E_),{gutter:f,wrap:p,supportFlexGap:d}=i.useContext(c.Z),{prefixCls:$,span:m,order:x,offset:h,push:g,pull:b,className:y,children:j,flex:w,style:O}=e,v=a(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),C=n("col",$),[E,M]=(0,l.c)(C);let S={};u.forEach((t=>{let n={};const s=e[t];"number"==typeof s?n.span=s:"object"==typeof s&&(n=s||{}),delete v[t],S=Object.assign(Object.assign({},S),{[`${C}-${t}-${n.span}`]:void 0!==n.span,[`${C}-${t}-order-${n.order}`]:n.order||0===n.order,[`${C}-${t}-offset-${n.offset}`]:n.offset||0===n.offset,[`${C}-${t}-push-${n.push}`]:n.push||0===n.push,[`${C}-${t}-pull-${n.pull}`]:n.pull||0===n.pull,[`${C}-rtl`]:"rtl"===r})}));const Z=s()(C,{[`${C}-${m}`]:void 0!==m,[`${C}-order-${x}`]:x,[`${C}-offset-${h}`]:h,[`${C}-push-${g}`]:g,[`${C}-pull-${b}`]:b},y,S,M),L={};if(f&&f[0]>0){const e=f[0]/2;L.paddingLeft=e,L.paddingRight=e}if(f&&f[1]>0&&!d){const e=f[1]/2;L.paddingTop=e,L.paddingBottom=e}return w&&(L.flex=function(e){return"number"==typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}(w),!1!==p||L.minWidth||(L.minWidth=0)),E(i.createElement("div",Object.assign({},v,{style:Object.assign(Object.assign({},L),O),className:Z,ref:t}),j))}));t.Z=f},81131:function(e,t,n){"use strict";var r=n(84875),s=n.n(r),i=n(50959),o=n(31478),c=n(35042),l=n(13382),a=n(72133),u=n(87976),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};function p(e,t){const[n,r]=i.useState("string"==typeof e?e:"");return i.useEffect((()=>{(()=>{if("string"==typeof e&&r(e),"object"==typeof e)for(let n=0;n<l.c.length;n++){const s=l.c[n];if(!t[s])continue;const i=e[s];if(void 0!==i)return void r(i)}})()}),[JSON.stringify(e),t]),n}const d=i.forwardRef(((e,t)=>{const{prefixCls:n,justify:r,align:d,className:$,style:m,children:x,gutter:h=0,wrap:g}=e,b=f(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:y,direction:j}=i.useContext(o.E_),[w,O]=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[v,C]=i.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),E=p(d,v),M=p(r,v),S=(0,c.Z)(),Z=i.useRef(h),L=(0,l.Z)();i.useEffect((()=>{const e=L.subscribe((e=>{C(e);const t=Z.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&O(e)}));return()=>L.unsubscribe(e)}),[]);const k=y("row",n),[D,I]=(0,u.V)(k),P=(()=>{const e=[void 0,void 0];return(Array.isArray(h)?h:[h,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let r=0;r<l.c.length;r++){const s=l.c[r];if(w[s]&&void 0!==t[s]){e[n]=t[s];break}}else e[n]=t})),e})(),N=s()(k,{[`${k}-no-wrap`]:!1===g,[`${k}-${M}`]:M,[`${k}-${E}`]:E,[`${k}-rtl`]:"rtl"===j},$,I),G={},R=null!=P[0]&&P[0]>0?P[0]/-2:void 0,X=null!=P[1]&&P[1]>0?P[1]/-2:void 0;R&&(G.marginLeft=R,G.marginRight=R),S?[,G.rowGap]=P:X&&(G.marginTop=X,G.marginBottom=X);const[A,W]=P,_=i.useMemo((()=>({gutter:[A,W],wrap:g,supportFlexGap:S})),[A,W,g,S]);return D(i.createElement(a.Z.Provider,{value:_},i.createElement("div",Object.assign({},b,{className:N,style:Object.assign(Object.assign({},G),m),ref:t}),x)))}));t.Z=d},87976:function(e,t,n){"use strict";n.d(t,{V:function(){return l},c:function(){return a}});var r=n(5562),s=n(99830);const i=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around ":{justifyContent:"space-around"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},o=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},c=(e,t)=>((e,t)=>{const{componentCls:n,gridColumns:r}=e,s={};for(let e=r;e>=0;e--)0===e?(s[`${n}${t}-${e}`]={display:"none"},s[`${n}-push-${e}`]={insetInlineStart:"auto"},s[`${n}-pull-${e}`]={insetInlineEnd:"auto"},s[`${n}${t}-push-${e}`]={insetInlineStart:"auto"},s[`${n}${t}-pull-${e}`]={insetInlineEnd:"auto"},s[`${n}${t}-offset-${e}`]={marginInlineEnd:0},s[`${n}${t}-order-${e}`]={order:0}):(s[`${n}${t}-${e}`]={display:"block",flex:`0 0 ${e/r*100}%`,maxWidth:e/r*100+"%"},s[`${n}${t}-push-${e}`]={insetInlineStart:e/r*100+"%"},s[`${n}${t}-pull-${e}`]={insetInlineEnd:e/r*100+"%"},s[`${n}${t}-offset-${e}`]={marginInlineStart:e/r*100+"%"},s[`${n}${t}-order-${e}`]={order:e});return s})(e,t),l=(0,r.Z)("Grid",(e=>[i(e)])),a=(0,r.Z)("Grid",(e=>{const t=(0,s.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[o(t),c(t,""),c(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${t}px)`]:Object.assign({},c(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}))},57524:function(e,t,n){"use strict";var r=n(81131);t.Z=r.Z},37703:function(e,t,n){"use strict";n.r(t);var r=n(97286),s=n(57524),i=n(61665),o=n(50959),c=n(11527);const l=["CubeDemo","LightCubeDemo","LineDemo","ModelDemo","RotateDemo"],{Option:a}=r.Z;t.default=()=>{const[e,t]=(0,o.useState)(l[4]),u=(0,o.useMemo)((()=>{if(!e)return null;return(0,o.lazy)((()=>n(40936)(`./${e}/index.tsx`)))}),[e]);return(0,c.jsxs)("div",{style:{background:"lightpink"},children:[(0,c.jsx)("h2",{children:"this origin three"}),(0,c.jsx)(r.Z,{style:{width:"200px"},value:e,onChange:e=>t(e),children:l.map((e=>(0,c.jsx)(a,{children:e},e)))}),(0,c.jsx)(s.Z,{children:(0,c.jsx)(i.Z,{span:24,children:(0,c.jsx)(o.Suspense,{fallback:"loading..",children:(0,c.jsx)(u,{})})})})]})}},40936:function(e,t,n){var r={"./CubeDemo/index.tsx":[8822,6171,7630,8822],"./LightCubeDemo/index.tsx":[82933,6171,7630,2933],"./LineDemo/index.tsx":[18331,6171,8331],"./ModelDemo/index.tsx":[47620,6171,7630,7620],"./RotateDemo/index.tsx":[21259,6171,7630,1259]};function s(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(s)}))}s.keys=function(){return Object.keys(r)},s.id=40936,e.exports=s}}]);