"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[731],{6731:function(e,n,s){s.r(n),s.d(n,{default:function(){return j}});var t=s(7294),a="src-pages-lazy-load-index-module_1ykyN",i="src-pages-lazy-load-index-module_8O_JK",r="src-pages-lazy-load-index-module_3oGHz",c=s(59),l=s(9439),o="src-components-ImageContainer-index-module_6jEgq",d="src-components-ImageContainer-index-module_2Sbb9",u="src-components-ImageContainer-index-module_22MkF",m="src-components-ImageContainer-index-module_kBPog",h=s(9935),g=s(4184),p=s.n(g),x=s(5893),f=function(e){var n=e.alt,s=e.thumb,a=e.src,i=(0,t.useState)(!1),r=(0,l.Z)(i,2),c=r[0],o=r[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("img",{className:p()(d,m),alt:n,src:s,style:{visibility:c?"hidden":"visible"}}),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("img",{onLoad:function(){o(!0)},className:p()(d,u),style:{opacity:c?1:0},alt:n,src:a})})]})},b=function(e){var n=e.src,s=e.thumb,a=e.height,i=e.width,r=e.alt,c=(0,t.useState)(!1),d=(0,l.Z)(c,2),u=d[0],m=d[1],g=(0,t.useRef)(null),p={paddingBottom:"".concat(a/i*100,"%")};return(0,h.S1)({target:g,onIntersect:function(e,n){var s=e[0].isIntersecting;void 0!==s&&s&&(m(!0),n.unobserve(g.current))}}),(0,x.jsx)("div",{ref:g,className:o,style:p,children:u&&(0,x.jsx)(f,{src:n,alt:r||"",thumb:s})})},j=function(){return(0,x.jsxs)("section",{className:a,children:[(0,x.jsx)("h3",{children:"this is lazy loading page"}),(0,x.jsx)("div",{className:i,children:c.N.map((function(e){return(0,x.jsx)("div",{className:r,children:(0,x.jsx)(b,{src:e.urls.regular,thumb:e.urls.thumb,height:e.height,width:e.width,alt:e.alt_description})},e.id)}))})]})}}}]);