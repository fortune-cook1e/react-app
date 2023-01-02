"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[7630],{97630:function(e,t,n){n.d(t,{z:function(){return r}});var o=n(86171);const a={type:"change"},i={type:"start"},c={type:"end"};class r extends o.EventDispatcher{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.MOUSE.ROTATE,MIDDLE:o.MOUSE.DOLLY,RIGHT:o.MOUSE.PAN},this.touches={ONE:o.TOUCH.ROTATE,TWO:o.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return p.phi},this.getAzimuthalAngle=function(){return p.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",G),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(a),n.update(),s=r.NONE},this.update=function(){const t=new o.Vector3,i=(new o.Quaternion).setFromUnitVectors(e.up,new o.Vector3(0,1,0)),c=i.clone().invert(),b=new o.Vector3,E=new o.Quaternion,f=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(i),p.setFromVector3(t),n.autoRotate&&s===r.NONE&&M(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(p.theta+=m.theta*n.dampingFactor,p.phi+=m.phi*n.dampingFactor):(p.theta+=m.theta,p.phi+=m.phi);let o=n.minAzimuthAngle,g=n.maxAzimuthAngle;return isFinite(o)&&isFinite(g)&&(o<-Math.PI?o+=f:o>Math.PI&&(o-=f),g<-Math.PI?g+=f:g>Math.PI&&(g-=f),p.theta=o<=g?Math.max(o,Math.min(g,p.theta)):p.theta>(o+g)/2?Math.max(o,p.theta):Math.min(g,p.theta)),p.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,p.phi)),p.makeSafe(),p.radius*=u,p.radius=Math.max(n.minDistance,Math.min(n.maxDistance,p.radius)),!0===n.enableDamping?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),t.setFromSpherical(p),t.applyQuaternion(c),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(m.theta*=1-n.dampingFactor,m.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(m.set(0,0,0),h.set(0,0,0)),u=1,!!(d||b.distanceToSquared(n.object.position)>l||8*(1-E.dot(n.object.quaternion))>l)&&(n.dispatchEvent(a),b.copy(n.object.position),E.copy(n.object.quaternion),d=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",B),n.domElement.removeEventListener("pointerdown",z),n.domElement.removeEventListener("pointercancel",Z),n.domElement.removeEventListener("wheel",F),n.domElement.removeEventListener("pointermove",K),n.domElement.removeEventListener("pointerup",X),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",G)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const l=1e-6,p=new o.Spherical,m=new o.Spherical;let u=1;const h=new o.Vector3;let d=!1;const b=new o.Vector2,E=new o.Vector2,f=new o.Vector2,g=new o.Vector2,y=new o.Vector2,O=new o.Vector2,T=new o.Vector2,P=new o.Vector2,v=new o.Vector2,A=[],w={};function L(){return Math.pow(.95,n.zoomSpeed)}function M(e){m.theta-=e}function N(e){m.phi-=e}const j=function(){const e=new o.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),h.add(e)}}(),k=function(){const e=new o.Vector3;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),h.add(e)}}(),S=function(){const e=new o.Vector3;return function(t,o){const a=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let c=e.length();c*=Math.tan(n.object.fov/2*Math.PI/180),j(2*t*c/a.clientHeight,n.object.matrix),k(2*o*c/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(j(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),k(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(e){n.object.isPerspectiveCamera?u/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(e){n.object.isPerspectiveCamera?u*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function x(e){b.set(e.clientX,e.clientY)}function I(e){g.set(e.clientX,e.clientY)}function C(){if(1===A.length)b.set(A[0].pageX,A[0].pageY);else{const e=.5*(A[0].pageX+A[1].pageX),t=.5*(A[0].pageY+A[1].pageY);b.set(e,t)}}function H(){if(1===A.length)g.set(A[0].pageX,A[0].pageY);else{const e=.5*(A[0].pageX+A[1].pageX),t=.5*(A[0].pageY+A[1].pageY);g.set(e,t)}}function D(){const e=A[0].pageX-A[1].pageX,t=A[0].pageY-A[1].pageY,n=Math.sqrt(e*e+t*t);T.set(0,n)}function U(e){if(1==A.length)E.set(e.pageX,e.pageY);else{const t=Q(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);E.set(n,o)}f.subVectors(E,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;M(2*Math.PI*f.x/t.clientHeight),N(2*Math.PI*f.y/t.clientHeight),b.copy(E)}function V(e){if(1===A.length)y.set(e.pageX,e.pageY);else{const t=Q(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);y.set(n,o)}O.subVectors(y,g).multiplyScalar(n.panSpeed),S(O.x,O.y),g.copy(y)}function _(e){const t=Q(e),o=e.pageX-t.x,a=e.pageY-t.y,i=Math.sqrt(o*o+a*a);P.set(0,i),v.set(0,Math.pow(P.y/T.y,n.zoomSpeed)),R(v.y),T.copy(P)}function z(e){!1!==n.enabled&&(0===A.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",K),n.domElement.addEventListener("pointerup",X)),function(e){A.push(e)}(e),"touch"===e.pointerType?function(e){switch(q(e),A.length){case 1:switch(n.touches.ONE){case o.TOUCH.ROTATE:if(!1===n.enableRotate)return;C(),s=r.TOUCH_ROTATE;break;case o.TOUCH.PAN:if(!1===n.enablePan)return;H(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case o.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&D(),n.enablePan&&H(),s=r.TOUCH_DOLLY_PAN;break;case o.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&D(),n.enableRotate&&C(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(i)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.MOUSE.DOLLY:if(!1===n.enableZoom)return;!function(e){T.set(e.clientX,e.clientY)}(e),s=r.DOLLY;break;case o.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;I(e),s=r.PAN}else{if(!1===n.enableRotate)return;x(e),s=r.ROTATE}break;case o.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;x(e),s=r.ROTATE}else{if(!1===n.enablePan)return;I(e),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(i)}(e))}function K(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(q(e),s){case r.TOUCH_ROTATE:if(!1===n.enableRotate)return;U(e),n.update();break;case r.TOUCH_PAN:if(!1===n.enablePan)return;V(e),n.update();break;case r.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&_(e),n.enablePan&&V(e)}(e),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&_(e),n.enableRotate&&U(e)}(e),n.update();break;default:s=r.NONE}}(e):function(e){switch(s){case r.ROTATE:if(!1===n.enableRotate)return;!function(e){E.set(e.clientX,e.clientY),f.subVectors(E,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;M(2*Math.PI*f.x/t.clientHeight),N(2*Math.PI*f.y/t.clientHeight),b.copy(E),n.update()}(e);break;case r.DOLLY:if(!1===n.enableZoom)return;!function(e){P.set(e.clientX,e.clientY),v.subVectors(P,T),v.y>0?R(L()):v.y<0&&Y(L()),T.copy(P),n.update()}(e);break;case r.PAN:if(!1===n.enablePan)return;!function(e){y.set(e.clientX,e.clientY),O.subVectors(y,g).multiplyScalar(n.panSpeed),S(O.x,O.y),g.copy(y),n.update()}(e)}}(e))}function X(e){W(e),0===A.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",K),n.domElement.removeEventListener("pointerup",X)),n.dispatchEvent(c),s=r.NONE}function Z(e){W(e)}function F(e){!1!==n.enabled&&!1!==n.enableZoom&&s===r.NONE&&(e.preventDefault(),n.dispatchEvent(i),function(e){e.deltaY<0?Y(L()):e.deltaY>0&&R(L()),n.update()}(e),n.dispatchEvent(c))}function G(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function B(e){!1!==n.enabled&&e.preventDefault()}function W(e){delete w[e.pointerId];for(let t=0;t<A.length;t++)if(A[t].pointerId==e.pointerId)return void A.splice(t,1)}function q(e){let t=w[e.pointerId];void 0===t&&(t=new o.Vector2,w[e.pointerId]=t),t.set(e.pageX,e.pageY)}function Q(e){const t=e.pointerId===A[0].pointerId?A[1]:A[0];return w[t.pointerId]}n.domElement.addEventListener("contextmenu",B),n.domElement.addEventListener("pointerdown",z),n.domElement.addEventListener("pointercancel",Z),n.domElement.addEventListener("wheel",F,{passive:!1}),this.update()}}}}]);