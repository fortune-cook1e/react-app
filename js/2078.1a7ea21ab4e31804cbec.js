"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[2078],{62078:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(50959);var s=()=>{const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{fetch("https://dog.ceo/api/breed/labrador/images/random/6").then((e=>e.json())).then((({message:e})=>t(e)))}),[]),{dogs:e}},n=a(11527);var c=()=>{const{dogs:e}=s();return(0,n.jsx)(n.Fragment,{children:e.map(((e,t)=>(0,n.jsx)("img",{src:e,alt:"Dog"},t)))})};var o=()=>(0,n.jsx)(c,{})}}]);