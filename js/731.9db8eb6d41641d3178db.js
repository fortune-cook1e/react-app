"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[731],{36731:function(e,n,s){s.r(n),s.d(n,{default:function(){return v}});var t=s(67294),a="src-pages-lazy-load-index-module_kL8eq",i="src-pages-lazy-load-index-module_DepdE",r="src-pages-lazy-load-index-module_tEW3o",c=s(13584),l=s(93324),o=s(94184),d=s.n(o),u="src-components-ImageContainer-index-module_V9jNf",m="src-components-ImageContainer-index-module_obBxN",h="src-components-ImageContainer-index-module_wRSpH",g="src-components-ImageContainer-index-module_OPnrC",p=s(85893),x=function(e){var n=e.alt,s=e.thumb,a=e.src,i=(0,t.useState)(!1),r=(0,l.Z)(i,2),c=r[0],o=r[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("img",{className:d()(m,g),alt:n,src:s,style:{visibility:c?"hidden":"visible"}}),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("img",{onLoad:function(){o(!0)},className:d()(m,h),style:{opacity:c?1:0},alt:n,src:a})})]})},f=s(90153),j=function(e){var n=e.src,s=e.thumb,a=e.height,i=e.width,r=e.alt,c=(0,t.useState)(!1),o=(0,l.Z)(c,2),d=o[0],m=o[1],h=(0,t.useRef)(null),g={paddingBottom:"".concat(a/i*100,"%")};return(0,f.S1)({target:h,onIntersect:function(e,n){var s=e[0].isIntersecting;void 0!==s&&s&&(m(!0),n.unobserve(h.current))}}),(0,p.jsx)("div",{ref:h,className:u,style:g,children:d&&(0,p.jsx)(x,{src:n,alt:r||"",thumb:s})})},b=s(41256),v=function(){return(0,p.jsx)(c.Z,{children:(0,p.jsxs)("section",{className:a,children:[(0,p.jsx)("h3",{children:"this is lazy loading page"}),(0,p.jsx)("div",{className:i,children:b.Ng.map((function(e){return(0,p.jsx)("div",{className:r,children:(0,p.jsx)(j,{src:e.urls.regular,thumb:e.urls.thumb,height:e.height,width:e.width,alt:e.alt_description})},e.id)}))})]})})}}}]);