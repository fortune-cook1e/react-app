"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[61],{23964:function(e,t,n){n.d(t,{z:function(){return r}});var r={mockData:"mockData",mockData2:"mockData2"}},32061:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(76647),a=n(69483),c=n.n(a),u=n(67294),o=n(15861),i=n(93324),s=n(64687),f=n.n(s),m=n(23964),d=n(79038),l=n(94880),p=function(){return new Promise((function(e){setTimeout((function(){console.log("fetch data...");var t=(0,l.c4)({name:d.dM.String,age:d.dM.Number,isMale:d.dM.Boolean},1e3);e(t)}),1500)}))},h=function(){return{setItem:function(e,t){return c().setItem(e,t)},getItem:function(e){return c().getItem(e)},removeItem:function(e){return c().removeItem(e)},clear:function(){return c().clear()}}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.cache,n=void 0===t||t,r=h(),a=r.getItem,c=r.setItem,s=(0,u.useState)([]),d=(0,i.Z)(s,2),l=d[0],v=d[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,o.Z)(f().mark((function e(){var t,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(m.z.mockData);case 2:if(t=e.sent,!n||!t){e.next=7;break}v(t),e.next=12;break;case 7:return e.next=9,p();case 9:r=e.sent,v(r),c(m.z.mockData,r);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),{data:l}},k=n(13584),x=n(85893),g=function(){var e=v().data;return(0,u.useEffect)((function(){return function(){console.log("index db page unmount"),c().clear()}}),[]),(0,x.jsx)(k.Z,{children:(0,x.jsxs)("div",{children:["this is page",(0,x.jsx)(r.Z,{style:{width:"200px"},children:e.map((function(e){return(0,x.jsx)(r.Z.Option,{children:e.name},e.name)}))})]})})}}}]);