(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{1143:function(e){"use strict";e.exports=function(e,t,n,r,o,i,a,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],l=0;(u=new Error(t.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},8336:function(){},1688:function(e,t,n){"use strict";n.d(t,{Z:function(){return ge}});var r=n(7294);var o=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=o(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var a=function(e,t){var n=(0,r.useRef)(!0);(0,r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)};function s(e){var t=function(e){var t=(0,r.useRef)(e);return t.current=e,t}(e);(0,r.useEffect)((function(){return function(){return t.current()}}),[])}var u=Math.pow(2,31)-1;function c(e,t,n){var r=n-Date.now();e.current=r<=u?setTimeout(t,r):setTimeout((function(){return c(e,t,n)}),u)}function l(){var e=function(){var e=(0,r.useRef)(!0),t=(0,r.useRef)((function(){return e.current}));return(0,r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=(0,r.useRef)();return s((function(){return clearTimeout(t.current)})),(0,r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(n(),o<=u?t.current=setTimeout(r,o):c(t,r,Date.now()+o))},clear:n}}),[])}var f=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};var d="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;"undefined"!==typeof document||d?r.useLayoutEffect:r.useEffect,new WeakMap;var p=n(5893);const v=["as","disabled"];function h({tagName:e,disabled:t,href:n,target:r,rel:o,onClick:i,tabIndex:a=0,type:s}){e||(e=null!=n||null!=r||null!=o?"a":"button");const u={tagName:e};if("button"===e)return[{type:s||"button",disabled:t},u];const c=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&r.preventDefault(),t?r.stopPropagation():null==i||i(r)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:a,href:"a"===e&&t?void 0:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?o:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},u]}const m=r.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,v);const[i,{tagName:a}]=h(Object.assign({tagName:n,disabled:r},o));return(0,p.jsx)(a,Object.assign({},o,i,{ref:t}))}));m.displayName="Button";const x=["onKeyDown"];const E=r.forwardRef(((e,t)=>{let{onKeyDown:n}=e,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,x);const[i]=h(Object.assign({tagName:"a"},o)),a=function(e){var t=f(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}((e=>{i.onKeyDown(e),null==n||n(e)}));return((s=o.href)&&"#"!==s.trim()||o.role)&&"button"!==o.role?(0,p.jsx)("a",Object.assign({ref:t},o,{onKeyDown:n})):(0,p.jsx)("a",Object.assign({ref:t},o,i,{onKeyDown:a}));var s}));E.displayName="Anchor";var b=E,g=n(4036),y=n.n(g);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n(1143);function N(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function S(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function w(e,t){return Object.keys(t).reduce((function(n,o){var i,a=n,s=a[N(o)],u=a[o],c=k(a,[N(o),o].map(S)),l=t[o],f=function(e,t,n){var o=(0,r.useRef)(void 0!==e),i=(0,r.useState)(t),a=i[0],s=i[1],u=void 0!==e,c=o.current;return o.current=u,!u&&c&&a!==t&&s(t),[u?e:a,(0,r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}(u,s,e[l]),d=f[0],p=f[1];return C({},c,((i={})[o]=d,i[l]=p,i))}),e)}function O(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function j(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function D(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}O.__suppressDeprecationWarning=!0,j.__suppressDeprecationWarning=!0,D.__suppressDeprecationWarning=!0;var R=/-(.)/g;const T=r.createContext({prefixes:{}}),{Consumer:_,Provider:L}=T;function P(e,t){const{prefixes:n}=(0,r.useContext)(T);return e||n[t]||t}const M=e=>{return e[0].toUpperCase()+(t=e,t.replace(R,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var I=function(e,{displayName:t=M(e),Component:n,defaultProps:o}={}){const i=r.forwardRef((({className:t,bsPrefix:r,as:o=n||"div",...i},a)=>{const s=P(r,e);return(0,p.jsx)(o,{ref:a,className:y()(t,s),...i})}));return i.defaultProps=o,i.displayName=t,i}("carousel-caption");const $=r.forwardRef((({as:e="div",bsPrefix:t,className:n,...r},o)=>{const i=y()(n,P(t,"carousel-item"));return(0,p.jsx)(e,{ref:o,...r,className:i})}));$.displayName="CarouselItem";var A=$;function K(e,t){let n=0;return r.Children.map(e,(e=>r.isValidElement(e)?t(e,n++):e))}function U(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var F=/([A-Z])/g;var V=/^ms-/;function X(e){return function(e){return e.replace(F,"-$1").toLowerCase()}(e).replace(V,"-ms-")}var W=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var H=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(X(t))||function(e,t){return U(e).getComputedStyle(e,t)}(e).getPropertyValue(X(t));Object.keys(t).forEach((function(o){var i=t[o];i||0===i?!function(e){return!(!e||!W.test(e))}(o)?n+=X(o)+": "+i+";":r+=o+"("+i+") ":e.style.removeProperty(X(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},Z=!("undefined"===typeof window||!window.document||!window.document.createElement),B=!1,G=!1;try{var Y={get passive(){return B=!0},get once(){return G=B=!0}};Z&&(window.addEventListener("test",Y,Y),window.removeEventListener("test",Y,!0))}catch(ye){}var q=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!G){var o=r.once,i=r.capture,a=n;!G&&o&&(a=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=a),e.addEventListener(t,a,B?r:i)}e.addEventListener(t,n,r)};var z=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var J=function(e,t,n,r){return q(e,t,n,r),function(){z(e,t,n,r)}};function Q(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),i=J(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function ee(e,t,n,r){null==n&&(n=function(e){var t=H(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=Q(e,n,r),i=J(e,"transitionend",t);return function(){o(),i()}}function te(e,t){const n=H(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function ne(e,t){const n=te(e,"transitionDuration"),r=te(e,"transitionDelay"),o=ee(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(5697);var oe=n(3935),ie=!1,ae=r.createContext(null),se="unmounted",ue="exited",ce="entering",le="entered",fe="exiting",de=function(e){var t,n;function o(t,n){var r;r=e.call(this,t,n)||this;var o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=ue,r.appearStatus=ce):o=le:o=t.unmountOnExit||t.mountOnEnter?se:ue,r.state={status:o},r.nextCallback=null,r}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,re(t,n),o.getDerivedStateFromProps=function(e,t){return e.in&&t.status===se?{status:ue}:null};var i=o.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==ce&&n!==le&&(t=ce):n!==ce&&n!==le||(t=fe)}this.updateStatus(!1,t)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},i.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===ce?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===ue&&this.setState({status:se})},i.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[oe.findDOMNode(this),r],i=o[0],a=o[1],s=this.getTimeouts(),u=r?s.appear:s.enter;!e&&!n||ie?this.safeSetState({status:le},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:ce},(function(){t.props.onEntering(i,a),t.onTransitionEnd(u,(function(){t.safeSetState({status:le},(function(){t.props.onEntered(i,a)}))}))})))},i.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:oe.findDOMNode(this);t&&!ie?(this.props.onExit(r),this.safeSetState({status:fe},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:ue},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:ue},(function(){e.props.onExited(r)}))},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},i.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:oe.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},i.render=function(){var e=this.state.status;if(e===se)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,k(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(ae.Provider,{value:null},"function"===typeof n?n(e,o):r.cloneElement(r.Children.only(n),o))},o}(r.Component);function pe(){}de.contextType=ae,de.propTypes={},de.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:pe,onEntering:pe,onEntered:pe,onExit:pe,onExiting:pe,onExited:pe},de.UNMOUNTED=se,de.EXITED=ue,de.ENTERING=ce,de.ENTERED=le,de.EXITING=fe;var ve=de,he=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var me=function(e,t){return(0,r.useMemo)((function(){return function(e,t){var n=he(e),r=he(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};var xe=r.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:o,onExiting:i,onExited:a,addEndListener:s,children:u,childRef:c,...l},f)=>{const d=(0,r.useRef)(null),v=me(d,c),h=e=>{var t;v((t=e)&&"setState"in t?oe.findDOMNode(t):null!=t?t:null)},m=e=>t=>{e&&d.current&&e(d.current,t)},x=(0,r.useCallback)(m(e),[e]),E=(0,r.useCallback)(m(t),[t]),b=(0,r.useCallback)(m(n),[n]),g=(0,r.useCallback)(m(o),[o]),y=(0,r.useCallback)(m(i),[i]),C=(0,r.useCallback)(m(a),[a]),k=(0,r.useCallback)(m(s),[s]);return(0,p.jsx)(ve,{ref:f,...l,onEnter:x,onEntered:b,onEntering:E,onExit:g,onExited:C,onExiting:y,addEndListener:k,nodeRef:d,children:"function"===typeof u?(e,t)=>u(e,{...t,ref:h}):r.cloneElement(u,{ref:h})})}));const Ee={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,p.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,p.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};const be=r.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:s,slide:u,fade:c,controls:f,indicators:d,indicatorLabels:v,activeIndex:h,onSelect:m,onSlide:x,onSlid:E,interval:g,keyboard:C,onKeyDown:k,pause:N,onMouseOver:S,onMouseOut:O,wrap:j,touch:D,onTouchStart:R,onTouchMove:_,onTouchEnd:L,prevIcon:M,prevLabel:I,nextIcon:$,nextLabel:A,variant:U,className:F,children:V,...X}=w(e,{activeIndex:"onSelect"}),W=P(s,"carousel"),H=function(){const{dir:e}=(0,r.useContext)(T);return"rtl"===e}(),Z=(0,r.useRef)(null),[B,G]=(0,r.useState)("next"),[Y,q]=(0,r.useState)(!1),[z,J]=(0,r.useState)(!1),[Q,ee]=(0,r.useState)(h||0);z||h===Q||(Z.current?G(Z.current):G((h||0)>Q?"next":"prev"),u&&J(!0),ee(h||0)),(0,r.useEffect)((()=>{Z.current&&(Z.current=null)}));let te,re=0;!function(e,t){let n=0;r.Children.forEach(e,(e=>{r.isValidElement(e)&&t(e,n++)}))}(V,((e,t)=>{++re,t===h&&(te=e.props.interval)}));const oe=o(te),ie=(0,r.useCallback)((e=>{if(z)return;let t=Q-1;if(t<0){if(!j)return;t=re-1}Z.current="prev",null==m||m(t,e)}),[z,Q,m,j,re]),ae=i((e=>{if(z)return;let t=Q+1;if(t>=re){if(!j)return;t=0}Z.current="next",null==m||m(t,e)})),se=(0,r.useRef)();(0,r.useImperativeHandle)(t,(()=>({element:se.current,prev:ie,next:ae})));const ue=i((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(se.current)&&(H?ie():ae())})),ce="next"===B?"start":"end";a((()=>{u||(null==x||x(Q,ce),null==E||E(Q,ce))}),[Q]);const le=`${W}-item-${B}`,fe=`${W}-item-${ce}`,de=(0,r.useCallback)((e=>{!function(e){e.offsetHeight}(e),null==x||x(Q,ce)}),[x,Q,ce]),pe=(0,r.useCallback)((()=>{J(!1),null==E||E(Q,ce)}),[E,Q,ce]),ve=(0,r.useCallback)((e=>{if(C&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(H?ae(e):ie(e));case"ArrowRight":return e.preventDefault(),void(H?ie(e):ae(e))}null==k||k(e)}),[C,k,ie,ae,H]),he=(0,r.useCallback)((e=>{"hover"===N&&q(!0),null==S||S(e)}),[N,S]),me=(0,r.useCallback)((e=>{q(!1),null==O||O(e)}),[O]),Ee=(0,r.useRef)(0),be=(0,r.useRef)(0),ge=l(),ye=(0,r.useCallback)((e=>{Ee.current=e.touches[0].clientX,be.current=0,"hover"===N&&q(!0),null==R||R(e)}),[N,R]),Ce=(0,r.useCallback)((e=>{e.touches&&e.touches.length>1?be.current=0:be.current=e.touches[0].clientX-Ee.current,null==_||_(e)}),[_]),ke=(0,r.useCallback)((e=>{if(D){const t=be.current;Math.abs(t)>40&&(t>0?ie(e):ae(e))}"hover"===N&&ge.set((()=>{q(!1)}),g||void 0),null==L||L(e)}),[D,N,ie,ae,ge,g,L]),Ne=null!=g&&!Y&&!z,Se=(0,r.useRef)();(0,r.useEffect)((()=>{var e,t;if(!Ne)return;const n=H?ie:ae;return Se.current=window.setInterval(document.visibilityState?ue:n,null!=(e=null!=(t=oe.current)?t:g)?e:void 0),()=>{null!==Se.current&&clearInterval(Se.current)}}),[Ne,ie,ae,oe,g,ue,H]);const we=(0,r.useMemo)((()=>d&&Array.from({length:re},((e,t)=>e=>{null==m||m(t,e)}))),[d,re,m]);return(0,p.jsxs)(n,{ref:se,...X,onKeyDown:ve,onMouseOver:he,onMouseOut:me,onTouchStart:ye,onTouchMove:Ce,onTouchEnd:ke,className:y()(F,W,u&&"slide",c&&`${W}-fade`,U&&`${W}-${U}`),children:[d&&(0,p.jsx)("div",{className:`${W}-indicators`,children:K(V,((e,t)=>(0,p.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=v&&v.length?v[t]:`Slide ${t+1}`,className:t===Q?"active":void 0,onClick:we?we[t]:void 0,"aria-current":t===Q},t)))}),(0,p.jsx)("div",{className:`${W}-inner`,children:K(V,((e,t)=>{const n=t===Q;return u?(0,p.jsx)(xe,{in:n,onEnter:n?de:void 0,onEntered:n?pe:void 0,addEndListener:ne,children:(t,o)=>r.cloneElement(e,{...o,className:y()(e.props.className,n&&"entered"!==t&&le,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&fe)})}):r.cloneElement(e,{className:y()(e.props.className,n&&"active")})}))}),f&&(0,p.jsxs)(p.Fragment,{children:[(j||0!==h)&&(0,p.jsxs)(b,{className:`${W}-control-prev`,onClick:ie,children:[M,I&&(0,p.jsx)("span",{className:"visually-hidden",children:I})]}),(j||h!==re-1)&&(0,p.jsxs)(b,{className:`${W}-control-next`,onClick:ae,children:[$,A&&(0,p.jsx)("span",{className:"visually-hidden",children:A})]})]})]})}));be.displayName="Carousel",be.defaultProps=Ee;var ge=Object.assign(be,{Caption:I,Item:A})},4036:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);