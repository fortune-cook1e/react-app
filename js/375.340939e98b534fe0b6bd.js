"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[375],{36375:function(e,s,a){a.r(s),a.d(s,{default:function(){return o}});var c=a(11527);const n="../../svgs/",l=n+"man.svg",r=n+"girl.svg",i=n+"car.svg",d=n+"bike.svg";var o=({person:e})=>{const s="male"===e.gender;return(0,c.jsxs)("div",{className:"flex-container person-node "+(s?"male":"female"),children:[(0,c.jsx)("div",{className:"name",children:e.name}),(0,c.jsxs)("div",{className:"flex-container fill-space flex-container-row",children:[(0,c.jsx)("div",{className:"fill-space",children:(0,c.jsx)("div",{className:"icon",style:{backgroundImage:`url('${s?l:r}')`}})}),(0,c.jsxs)("div",{className:"icon-bar",children:[e.hasBike&&(0,c.jsx)("div",{className:"icon",style:{backgroundImage:`url('${d}')`}}),e.hasCar&&(0,c.jsx)("div",{className:"icon",style:{backgroundImage:`url('${i}')`}})]})]})]})}}}]);