"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[450],{8450:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(5861),o=n(7757),i=n.n(o),c=(n(7294),"src-pages-canvas-index-module_2nyRl"),s="src-pages-canvas-index-module_1i-pc",u="src-pages-canvas-index-module_iOD_R",a="src-pages-canvas-index-module_Cwpr8",l="src-pages-canvas-index-module_1-SK4",h=n(4880),f=n(5893),d=n(7696),p=function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("poster"),e.next=3,d.toPng(t);case 3:n=e.sent,console.log({url:n}),(0,h.w4)(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"h1 tihs is canvas"}),(0,f.jsx)("button",{onClick:e,children:" click me "}),(0,f.jsxs)("div",{className:c,id:"poster",children:[(0,f.jsx)("div",{className:s,children:"left"}),(0,f.jsx)("div",{className:u,children:"right"}),(0,f.jsx)("div",{className:a,children:"top"}),(0,f.jsx)("div",{className:l,children:"bottom"}),(0,f.jsx)("img",{src:"https://big-c.oss-cn-hangzhou.aliyuncs.com/cms/img/x2fhevy4hvqyv6nuxsre6qy52e0g6e54封?"+"time=".concat(Date.now()),alt:"",crossOrigin:"anonymous"})]})]})}},7696:function(e,t,n){n.r(t),n.d(t,{getWebFontEmbedCss:function(){return J},toBlob:function(){return X},toCanvas:function(){return q},toJpeg:function(){return G},toPixelData:function(){return z},toPng:function(){return W},toSvg:function(){return O},toSvgDataURL:function(){return V}});var r=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};const o="application/font-woff",i="image/jpeg",c={woff:o,woff2:o,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:i,jpeg:i,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"},s=function(){let e=0;return()=>(e+=1,`u${`0000${(Math.random()*Math.pow(36,4)<<0).toString(36)}`.slice(-4)}${e}`)}();function u(e){const t=function(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}(e).toLowerCase();return c[t]||""}function a(e){return-1!==e.search(/^(data:)/)}function l(e,t){return`data:${t};base64,${e}`}function h(e){return e.split(/,/)[1]}function f(e){return e.toBlob?new Promise((t=>e.toBlob(t))):function(e){return new Promise((t=>{const n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r);for(let e=0;e<r;e+=1)o[e]=n.charCodeAt(e);t(new Blob([o],{type:"image/png"}))}))}(e)}function d(e){const t=[];for(let n=0,r=e.length;n<r;n+=1)t.push(e[n]);return t}function p(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}function m(){let e,t;try{t=process}catch(e){}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}function g(e){return new Promise(((t,n)=>{const r=new Image;r.onload=()=>t(r),r.onerror=n,r.crossOrigin="anonymous",r.src=e}))}const v={};function w(e,t){let n=e.replace(/\?.*/,"");if(/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),v[n])return v[n];t.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());const r=(window.fetch?window.fetch(e).then((e=>e.blob().then((t=>({blob:t,contentType:e.headers.get("Content-Type")||""}))))).then((({blob:e,contentType:t})=>new Promise(((n,r)=>{const o=new FileReader;o.onloadend=()=>n({contentType:t,blob:o.result}),o.onerror=r,o.readAsDataURL(e)})))).then((({blob:e,contentType:t})=>({contentType:t,blob:h(e)}))):new Promise(((t,n)=>{const r=new XMLHttpRequest;r.onreadystatechange=()=>{if(4!==r.readyState)return;if(200!==r.status)return void n(new Error(`Failed to fetch resource: ${e}, status: ${r.status}`));const o=new FileReader;o.onloadend=()=>{t({blob:h(o.result),contentType:r.getResponseHeader("Content-Type")||""})},o.readAsDataURL(r.response)},r.ontimeout=()=>{n(new Error(`Timeout of 30000ms occured while fetching resource: ${e}`))},r.responseType="blob",r.timeout=3e4,r.open("GET",e,!0),r.send()}))).catch((n=>{let r="";if(t.imagePlaceholder){const e=t.imagePlaceholder.split(/,/);e&&e[1]&&(r=e[1])}let o=`Failed to fetch resource: ${e}`;return n&&(o="string"==typeof n?n:n.message),o&&console.error(o),r}));return v[n]=r,r}var y;!function(e){e.clonePseudoElement=function(e,t,n){const r=window.getComputedStyle(e,n),o=r.getPropertyValue("content");if(""===o||"none"===o)return;const i=s();try{t.className=`${t.className} ${i}`}catch(e){return}const c=document.createElement("style");c.appendChild(function(e,t,n){const r=`.${e}:${t}`,o=n.cssText?function(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}(n):function(e){return d(e).map((t=>`${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?" !important":""};`)).join(" ")}(n);return document.createTextNode(`${r}{${o}}`)}(i,n,r)),t.appendChild(c)}}(y||(y={}));var b=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};function x(e,t){return b(this,void 0,void 0,(function*(){return t instanceof Element?Promise.resolve().then((()=>function(e,t){const n=window.getComputedStyle(e),r=t.style;if(!r)return;n.cssText?r.cssText=n.cssText:d(n).forEach((e=>{r.setProperty(e,n.getPropertyValue(e),n.getPropertyPriority(e))}))}(e,t))).then((()=>function(e,t){[":before",":after"].forEach((n=>y.clonePseudoElement(e,t,n)))}(e,t))).then((()=>function(e,t){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value);e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}(e,t))).then((()=>t)):t}))}function P(e,t,n){return b(this,void 0,void 0,(function*(){return n||!t.filter||t.filter(e)?Promise.resolve(e).then((e=>function(e,t){return b(this,void 0,void 0,(function*(){if(e instanceof HTMLCanvasElement){const t=e.toDataURL();return"data:,"===t?Promise.resolve(e.cloneNode(!1)):g(t)}return e instanceof HTMLVideoElement&&e.poster?Promise.resolve(e.poster).then((e=>w(e,t))).then((t=>l(t.blob,u(e.poster)||t.contentType))).then((e=>g(e))):Promise.resolve(e.cloneNode(!1))}))}(e,t))).then((n=>function(e,t,n){var r;return b(this,void 0,void 0,(function*(){const o=d((null!==(r=e.shadowRoot)&&void 0!==r?r:e).childNodes);return 0===o.length?Promise.resolve(t):o.reduce(((e,r)=>e.then((()=>P(r,n))).then((e=>{e&&t.appendChild(e)}))),Promise.resolve()).then((()=>t))}))}(e,n,t))).then((t=>x(e,t))):Promise.resolve(null)}))}const S=/url\((['"]?)([^'"]+?)\1\)/g,E=/url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g,R=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function C(e){return-1!==e.search(S)}function $(e,t,n){if(!C(e))return Promise.resolve(e);const r=function(e,{preferredFontFormat:t}){return t?e.replace(R,(e=>{for(;;){const[n,,r]=E.exec(e)||[];if(!r)return"";if(r===t)return`src: ${n};`}})):e}(e,n);return Promise.resolve(r).then(T).then((e=>e.reduce(((e,r)=>e.then((e=>function(e,t,n,r,o){const i=n?function(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");n.head.appendChild(r),n.body.appendChild(o),t&&(r.href=t);return o.href=e,o.href}(t,n):t;return Promise.resolve(i).then((e=>o?o(e):w(e,r))).then((e=>"string"==typeof e?l(e,u(t)):l(e.blob,u(t)||e.contentType))).then((n=>e.replace(function(e){return new RegExp(`(url\\(['"]?)(${function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}(e)})(['"]?\\))`,"g")}(t),`$1${n}$3`))).then((e=>e),(()=>i))}(e,r,t,n)))),Promise.resolve(r))))}function T(e){const t=[];return e.replace(S,((e,n,r)=>(t.push(r),e))),t.filter((e=>!a(e)))}var N=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};function L(e,t){return N(this,void 0,void 0,(function*(){return e instanceof Element?Promise.resolve(e).then((e=>function(e,t){var n;return N(this,void 0,void 0,(function*(){const r=null===(n=e.style)||void 0===n?void 0:n.getPropertyValue("background");return r?Promise.resolve(r).then((e=>$(e,null,t))).then((t=>(e.style.setProperty("background",t,e.style.getPropertyPriority("background")),e))):Promise.resolve(e)}))}(e,t))).then((e=>function(e,t){if(!(e instanceof HTMLImageElement)||a(e.src))return Promise.resolve(e);const n=e.src;return Promise.resolve(n).then((e=>w(e,t))).then((e=>l(e.blob,u(n)||e.contentType))).then((t=>new Promise(((n,r)=>{e.onload=n,e.onerror=r,e.srcset="",e.src=t})))).then((()=>e),(()=>e))}(e,t))).then((e=>function(e,t){return N(this,void 0,void 0,(function*(){const n=d(e.childNodes).map((e=>L(e,t)));return Promise.all(n).then((()=>e))}))}(e,t))):Promise.resolve(e)}))}var j=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};const k={};function D(e){return j(this,void 0,void 0,(function*(){return new Promise(((t,n)=>{e.ownerDocument||n(new Error("Provided element is not within a Document")),t(d(e.ownerDocument.styleSheets))})).then((e=>function(e){return j(this,void 0,void 0,(function*(){const t=[],n=[];return e.forEach((t=>{if("cssRules"in t)try{d(t.cssRules).forEach(((e,r)=>{if(e.type===CSSRule.IMPORT_RULE){let o=r+1;n.push(F(e.href,t).then(H).then((e=>{U(e).forEach((e=>{try{t.insertRule(e,e.startsWith("@import")?o+=1:t.cssRules.length)}catch(t){console.log("Error inserting rule from remote css",{rule:e,error:t})}}))})).catch((e=>{console.log("Error loading remote css",e.toString())})))}}))}catch(r){const o=e.find((e=>null===e.href))||document.styleSheets[0];null!=t.href&&n.push(F(t.href,o).then(H).then((e=>{U(e).forEach((e=>{o.insertRule(e,t.cssRules.length)}))})).catch((e=>{console.log("Error loading remote stylesheet",e.toString())}))),console.log("Error inlining remote css file",r.toString())}})),Promise.all(n).then((()=>(e.forEach((e=>{if("cssRules"in e)try{d(e.cssRules).forEach((e=>{t.push(e)}))}catch(t){console.log(`Error while reading CSS rules from ${e.href}`,t.toString())}})),t)))}))}(e))).then(I)}))}function A(e,t){return j(this,void 0,void 0,(function*(){return D(e).then((e=>Promise.all(e.map((e=>{const n=e.parentStyleSheet?e.parentStyleSheet.href:null;return $(e.cssText,n,t)}))))).then((e=>e.join("\n")))}))}function I(e){return e.filter((e=>e.type===CSSRule.FONT_FACE_RULE)).filter((e=>C(e.style.getPropertyValue("src"))))}function U(e){if(void 0===e)return[];let t=e;const n=[],r=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;t=t.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");let i;for(;i=o.exec(t),null!==i;)n.push(i[0]);t=t.replace(o,"");const c=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){if(i=r.exec(t),null===i){if(i=c.exec(t),null===i)break;r.lastIndex=c.lastIndex}else c.lastIndex=r.lastIndex;n.push(i[0])}return n}function F(e,t){if(k[e])return k[e];const n=fetch(e).then((t=>({url:e,cssText:t.text()})),(e=>{console.log("ERROR FETCHING CSS: ",e.toString())}));return k[e]=n,n}function H(e){return j(this,void 0,void 0,(function*(){return e.cssText.then((t=>{let n=t;const r=/url\(["']?([^"')]+)["']?\)/g,o=(n.match(/url\([^)]+\)/g)||[]).map((t=>{let o=t.replace(r,"$1");if(!o.startsWith("https://")){const t=e.url;o=new URL(o,t).href}return new Promise(((e,r)=>{fetch(o).then((e=>e.blob())).then((r=>{const o=new FileReader;o.addEventListener("load",(r=>{n=n.replace(t,`url(${o.result})`),e([t,o.result])})),o.readAsDataURL(r)})).catch(r)}))}));return Promise.all(o).then((()=>n))}))}))}function M(e,t,n){const o="http://www.w3.org/2000/svg",i=document.createElementNS(o,"svg"),c=document.createElementNS(o,"foreignObject");return i.setAttributeNS("","width",`${t}`),i.setAttributeNS("","height",`${n}`),i.setAttributeNS("","viewBox",`0 0 ${t} ${n}`),c.setAttributeNS("","width","100%"),c.setAttributeNS("","height","100%"),c.setAttributeNS("","x","0"),c.setAttributeNS("","y","0"),c.setAttributeNS("","externalResourcesRequired","true"),i.appendChild(c),c.appendChild(e),function(e){return r(this,void 0,void 0,(function*(){return Promise.resolve().then((()=>(new XMLSerializer).serializeToString(e))).then(encodeURIComponent).then((e=>`data:image/svg+xml;charset=utf-8,${e}`))}))}(i)}var _=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};function B(e,t={}){return{width:t.width||function(e){const t=p(e,"border-left-width"),n=p(e,"border-right-width");return e.clientWidth+t+n}(e),height:t.height||function(e){const t=p(e,"border-top-width"),n=p(e,"border-bottom-width");return e.clientHeight+t+n}(e)}}function O(e,t={}){return _(this,void 0,void 0,(function*(){const{width:n,height:r}=B(e,t);return P(e,t,!0).then((e=>function(e,t){return j(this,void 0,void 0,(function*(){return(null!=t.fontEmbedCss?Promise.resolve(t.fontEmbedCss):A(e,t)).then((t=>{const n=document.createElement("style"),r=document.createTextNode(t);return n.appendChild(r),e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n),e}))}))}(e,t))).then((e=>L(e,t))).then((e=>function(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;return null!=r&&Object.keys(r).forEach((e=>{n[e]=r[e]})),e}(e,t))).then((e=>M(e,n,r)))}))}const V=O;function q(e,t={}){return _(this,void 0,void 0,(function*(){return O(e,t).then(g).then((n=100,e=>new Promise((t=>{setTimeout((()=>{t(e)}),n)})))).then((n=>{const r=document.createElement("canvas"),o=r.getContext("2d"),i=t.pixelRatio||m(),{width:c,height:s}=B(e,t),u=t.canvasWidth||c,a=t.canvasHeight||s;return r.width=u*i,r.height=a*i,r.style.width=`${u}`,r.style.height=`${a}`,t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(0,0,r.width,r.height)),o.drawImage(n,0,0,r.width,r.height),r}));var n}))}function z(e,t={}){return _(this,void 0,void 0,(function*(){const{width:n,height:r}=B(e,t);return q(e,t).then((e=>e.getContext("2d").getImageData(0,0,n,r).data))}))}function W(e,t={}){return _(this,void 0,void 0,(function*(){return q(e,t).then((e=>e.toDataURL()))}))}function G(e,t={}){return _(this,void 0,void 0,(function*(){return q(e,t).then((e=>e.toDataURL("image/jpeg",t.quality||1)))}))}function X(e,t={}){return _(this,void 0,void 0,(function*(){return q(e,t).then(f)}))}function J(e,t={}){return _(this,void 0,void 0,(function*(){return A(e,t)}))}}}]);