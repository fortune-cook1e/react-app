"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[1259],{21259:function(e,s,n){n.r(s);var t=n(50959),o=n(86171),a=n(97630),r=n(11527);const i="https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226065264-0-earth.jpg",c="https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226063598-0-sun.jpg",d="https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226074601-0-mars.jpg",h="https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/bff-basis-fe-sites/files/2022/12/05/1670226433498-0-stars.jpg";s.default=()=>{const e=(0,t.useRef)(null);return(0,t.useEffect)((()=>{if(e.current){const{innerWidth:s,innerHeight:n}=window,t=new o.WebGLRenderer;t.setSize(s,n);const r=new o.Scene,u=new o.PerspectiveCamera(45,s/n,.1,1e3);u.position.set(-90,140,140);new a.z(u,t.domElement).update();e.current.hasChildNodes()&&e.current.removeChild(e.current.firstChild),e.current.appendChild(t.domElement);const f=new o.AmbientLight(3355443);r.add(f);const p=new o.CubeTextureLoader;r.background=p.load([h,h,h,h,h,h]);const l=new o.TextureLoader,m=(e,s,n)=>{const t=new o.SphereGeometry(e,30,30),a=new o.MeshStandardMaterial({map:l.load(s)}),i=new o.Mesh(t,a),c=new o.Object3D;return c.add(i),r.add(c),i.position.x=n,{mesh:i,obj:c}},w=new o.SphereGeometry(16,30,30),b=new o.MeshBasicMaterial({map:l.load(c)}),g=new o.Mesh(w,b);r.add(g);m(3.2,i,28);const y=m(5.8,d,44),j=(m(6,i,62),m(4,d,78),m(12,d,100),new o.PointLight(16777215,2,300));r.add(j);const k=()=>{g.rotateY(.004),y.mesh.rotateY(.002),y.obj.rotateY(.005),t.render(r,u)};t.setAnimationLoop(k)}}),[]),(0,r.jsx)("div",{children:(0,r.jsx)("div",{ref:e})})}}}]);