/*!
 * headroom.js v0.9.4 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.Headroom=b()}(this,function(){"use strict";function a(a){this.callback=a,this.ticking=!1}function b(a){return a&&"undefined"!=typeof window&&(a===window||a.nodeType)}function c(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var d,e,f=a||{};for(e=1;e<arguments.length;e++){var g=arguments[e]||{};for(d in g)"object"!=typeof f[d]||b(f[d])?f[d]=f[d]||g[d]:f[d]=c(f[d],g[d])}return f}function d(a){return a===Object(a)?a:{down:a,up:a}}function e(a,b){b=c(b,e.options),this.lastKnownScrollY=0,this.elem=a,this.tolerance=d(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop,this.onBottom=b.onBottom,this.onNotBottom=b.onNotBottom}var f={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,a.prototype={constructor:a,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},e.prototype={constructor:e,init:function(){if(e.cutsTheMustard)return this.debouncer=new a(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var a=this.classes;this.initialised=!1;for(var b in a)a.hasOwnProperty(b)&&this.elem.classList.remove(a[b]);this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;!a.contains(b.pinned)&&a.contains(b.unpinned)||(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.bottom)||(a.add(b.bottom),a.remove(b.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notBottom)||(a.add(b.notBottom),a.remove(b.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(a){return Math.max(a.offsetHeight,a.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var a=document.body,b=document.documentElement;return Math.max(a.scrollHeight,b.scrollHeight,a.offsetHeight,b.offsetHeight,a.clientHeight,b.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=a<0,c=a+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),a+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},e.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},e.cutsTheMustard="undefined"!=typeof f&&f.rAF&&f.bind&&f.classList,e});

/*!
 * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.inView=t():e.inView=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var i=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(i);e.exports=o.default},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(9),r=i(o),s=n(3),a=i(s),u=n(4);t.default=function(){if("undefined"!=typeof window){var e=["scroll","resize","load"],t={history:[]},n={offset:{},threshold:0,test:u.inViewport},i=(0,r.default)(function(){t.history.forEach(function(e){t[e].check()})},100);e.forEach(function(e){return addEventListener(e,i)}),window.MutationObserver&&addEventListener("DOMContentLoaded",function(){new MutationObserver(i).observe(document.body,{attributes:!0,childList:!0,subtree:!0})});var o=function(e){if("string"==typeof e){var i=[].slice.call(document.querySelectorAll(e));return t.history.indexOf(e)>-1?t[e].elements=i:(t[e]=(0,a.default)(i,n),t.history.push(e)),t[e]}};return o.offset=function(e){if(void 0===e)return n.offset;var t=function(e){return"number"==typeof e};return["top","right","bottom","left"].forEach(t(e)?function(t){return n.offset[t]=e}:function(i){return t(e[i])?n.offset[i]=e[i]:null}),n.offset},o.threshold=function(e){return"number"==typeof e&&e>=0&&e<=1?n.threshold=e:n.threshold},o.test=function(e){return"function"==typeof e?n.test=e:n.test},o.is=function(e){return n.test(e,n)},o.offset(0),o}}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,i){n(this,e),this.options=i,this.elements=t,this.current=[],this.handlers={enter:[],exit:[]},this.singles={enter:[],exit:[]}}return i(e,[{key:"check",value:function(){var e=this;return this.elements.forEach(function(t){var n=e.options.test(t,e.options),i=e.current.indexOf(t),o=i>-1,r=n&&!o,s=!n&&o;r&&(e.current.push(t),e.emit("enter",t)),s&&(e.current.splice(i,1),e.emit("exit",t))}),this}},{key:"on",value:function(e,t){return this.handlers[e].push(t),this}},{key:"once",value:function(e,t){return this.singles[e].unshift(t),this}},{key:"emit",value:function(e,t){for(;this.singles[e].length;)this.singles[e].pop()(t);for(var n=this.handlers[e].length;--n>-1;)this.handlers[e][n](t);return this}}]),e}();t.default=function(e,t){return new o(e,t)}},function(e,t){"use strict";function n(e,t){var n=e.getBoundingClientRect(),i=n.top,o=n.right,r=n.bottom,s=n.left,a=n.width,u=n.height,c={t:r,r:window.innerWidth-s,b:window.innerHeight-i,l:o},l={x:t.threshold*a,y:t.threshold*u};return c.t>t.offset.top+l.y&&c.r>t.offset.right+l.x&&c.b>t.offset.bottom+l.y&&c.l>t.offset.left+l.x}Object.defineProperty(t,"__esModule",{value:!0}),t.inViewport=n},function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},function(e,t,n){var i=n(5),o="object"==typeof self&&self&&self.Object===Object&&self,r=i||o||Function("return this")();e.exports=r},function(e,t,n){function i(e,t,n){function i(t){var n=g,i=b;return g=b=void 0,C=t,w=e.apply(i,n)}function l(e){return C=e,E=setTimeout(y,t),L?i(e):w}function f(e){var n=e-x,i=e-C,o=t-n;return j?c(o,z-i):o}function d(e){var n=e-x,i=e-C;return void 0===x||n>=t||n<0||j&&i>=z}function y(){var e=r();return d(e)?v(e):void(E=setTimeout(y,f(e)))}function v(e){return E=void 0,A&&g?i(e):(g=b=void 0,w)}function h(){void 0!==E&&clearTimeout(E),C=0,g=x=b=E=void 0}function m(){return void 0===E?w:v(r())}function p(){var e=r(),n=d(e);if(g=arguments,b=this,x=e,n){if(void 0===E)return l(x);if(j)return E=setTimeout(y,t),i(x)}return void 0===E&&(E=setTimeout(y,t)),w}var g,b,z,w,E,x,C=0,L=!1,j=!1,A=!0;if("function"!=typeof e)throw new TypeError(a);return t=s(t)||0,o(n)&&(L=!!n.leading,j="maxWait"in n,z=j?u(s(n.maxWait)||0,t):z,A="trailing"in n?!!n.trailing:A),p.cancel=h,p.flush=m,p}var o=n(1),r=n(8),s=n(10),a="Expected a function",u=Math.max,c=Math.min;e.exports=i},function(e,t,n){var i=n(6),o=function(){return i.Date.now()};e.exports=o},function(e,t,n){function i(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return r(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),o(e,t,{leading:i,maxWait:t,trailing:a})}var o=n(7),r=n(1),s="Expected a function";e.exports=i},function(e,t){function n(e){return e}e.exports=n}])}),function(e,t){var n=function(e,t){"use strict";if(t.getElementsByClassName){var n,i,o=t.documentElement,r=e.Date,s=e.HTMLPictureElement,a="addEventListener",u="getAttribute",c=e[a],l=e.setTimeout,f=e.requestAnimationFrame||l,d=e.requestIdleCallback,y=/^picture$/i,v=["load","error","lazyincluded","_lazyloaded"],h={},m=Array.prototype.forEach,p=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[u]("class")||"")&&h[t]},g=function(e,t){p(e,t)||e.setAttribute("class",(e[u]("class")||"").trim()+" "+t)},b=function(e,t){var n;(n=p(e,t))&&e.setAttribute("class",(e[u]("class")||"").replace(n," "))},z=function(e,t,n){var i=n?a:"removeEventListener";n&&z(e,t),v.forEach(function(n){e[i](n,t)})},w=function(e,i,o,r,s){var a=t.createEvent("CustomEvent");return o||(o={}),o.instance=n,a.initCustomEvent(i,!r,!s,o),e.dispatchEvent(a),a},E=function(t,n){var o;!s&&(o=e.picturefill||i.pf)?o({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},x=function(e,t){return(getComputedStyle(e,null)||{})[t]},C=function(e,t,n){for(n=n||e.offsetWidth;n<i.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},L=function(){var e,n,i=[],o=[],r=i,s=function(){var t=r;for(r=i.length?o:i,e=!0,n=!1;t.length;)t.shift()();e=!1},a=function(i,o){e&&!o?i.apply(this,arguments):(r.push(i),n||(n=!0,(t.hidden?l:f)(s)))};return a._lsFlush=s,a}(),j=function(e,t){return t?function(){L(e)}:function(){var t=this,n=arguments;L(function(){e.apply(t,n)})}},A=function(e){var t,n=0,o=i.ricTimeout,s=function(){t=!1,n=r.now(),e()},a=d&&i.ricTimeout?function(){d(s,{timeout:o}),o!==i.ricTimeout&&(o=i.ricTimeout)}:j(function(){l(s)},!0);return function(e){var i;(e=!0===e)&&(o=33),t||(t=!0,i=125-(r.now()-n),0>i&&(i=0),e||9>i&&d?a():l(a,i))}},M=function(e){var t,n,i=function(){t=null,e()},o=function(){var e=r.now()-n;99>e?l(o,99-e):(d||i)(i)};return function(){n=r.now(),t||(t=l(o,99))}};!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};i=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in i||(i[t]=n[t]);e.lazySizesConfig=i,l(function(){i.init&&_()})}();var k=function(){var s,f,d,v,h,C,k,_,T,O,N,W,B,S,P=/^img$/i,D=/^iframe$/i,F="onscroll"in e&&!/glebot/.test(navigator.userAgent),H=0,R=0,V=-1,I=function(e){R--,e&&e.target&&z(e.target,I),(!e||0>R||!e.target)&&(R=0)},$=function(e,n){var i,r=e,s="hidden"==x(t.body,"visibility")||"hidden"!=x(e,"visibility");for(_-=n,N+=n,T-=n,O+=n;s&&(r=r.offsetParent)&&r!=t.body&&r!=o;)(s=(x(r,"opacity")||1)>0)&&"visible"!=x(r,"overflow")&&(i=r.getBoundingClientRect(),s=O>i.left&&T<i.right&&N>i.top-1&&_<i.bottom+1);return s},U=function(){var e,r,a,c,l,d,y,h,m,p=n.elements;if((v=i.loadMode)&&8>R&&(e=p.length)){r=0,V++,null==B&&("expand"in i||(i.expand=o.clientHeight>500&&o.clientWidth>500?500:370),W=i.expand,B=W*i.expFactor),B>H&&1>R&&V>2&&v>2&&!t.hidden?(H=B,V=0):H=v>1&&V>1&&6>R?W:0;for(;e>r;r++)if(p[r]&&!p[r]._lazyRace)if(F)if((h=p[r][u]("data-expand"))&&(d=1*h)||(d=H),m!==d&&(C=innerWidth+d*S,k=innerHeight+d,y=-1*d,m=d),a=p[r].getBoundingClientRect(),(N=a.bottom)>=y&&(_=a.top)<=k&&(O=a.right)>=y*S&&(T=a.left)<=C&&(N||O||T||_)&&(i.loadHidden||"hidden"!=x(p[r],"visibility"))&&(f&&3>R&&!h&&(3>v||4>V)||$(p[r],d))){if(ee(p[r]),l=!0,R>9)break}else!l&&f&&!c&&4>R&&4>V&&v>2&&(s[0]||i.preloadAfterLoad)&&(s[0]||!h&&(N||O||T||_||"auto"!=p[r][u](i.sizesAttr)))&&(c=s[0]||p[r]);else ee(p[r]);c&&!l&&ee(c)}},G=A(U),J=function(e){g(e.target,i.loadedClass),b(e.target,i.loadingClass),z(e.target,Q),w(e.target,"lazyloaded")},K=j(J),Q=function(e){K({target:e.target})},X=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},Y=function(e){var t,n=e[u](i.srcsetAttr);(t=i.customMedia[e[u]("data-media")||e[u]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},Z=j(function(e,t,n,o,r){var s,a,c,f,v,h;(v=w(e,"lazybeforeunveil",t)).defaultPrevented||(o&&(n?g(e,i.autosizesClass):e.setAttribute("sizes",o)),a=e[u](i.srcsetAttr),s=e[u](i.srcAttr),r&&(c=e.parentNode,f=c&&y.test(c.nodeName||"")),h=t.firesLoad||"src"in e&&(a||s||f),v={target:e},h&&(z(e,I,!0),clearTimeout(d),d=l(I,2500),g(e,i.loadingClass),z(e,Q,!0)),f&&m.call(c.getElementsByTagName("source"),Y),a?e.setAttribute("srcset",a):s&&!f&&(D.test(e.nodeName)?X(e,s):e.src=s),r&&(a||f)&&E(e,{src:s})),e._lazyRace&&delete e._lazyRace,b(e,i.lazyClass),L(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?I(v):R--,J(v))},!0)}),ee=function(e){var t,n=P.test(e.nodeName),o=n&&(e[u](i.sizesAttr)||e[u]("sizes")),r="auto"==o;(!r&&f||!n||!e[u]("src")&&!e.srcset||e.complete||p(e,i.errorClass)||!p(e,i.lazyClass))&&(t=w(e,"lazyunveilread").detail,r&&q.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,R++,Z(e,t,r,o,n))},te=function(){if(!f){if(r.now()-h<999)return void l(te,999);var e=M(function(){i.loadMode=3,G()});f=!0,i.loadMode=3,G(),c("scroll",function(){3==i.loadMode&&(i.loadMode=2),e()},!0)}};return{_:function(){h=r.now(),n.elements=t.getElementsByClassName(i.lazyClass),s=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),S=i.hFac,c("scroll",G,!0),c("resize",G,!0),e.MutationObserver?new MutationObserver(G).observe(o,{childList:!0,subtree:!0,attributes:!0}):(o[a]("DOMNodeInserted",G,!0),o[a]("DOMAttrModified",G,!0),setInterval(G,999)),c("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[a](e,G,!0)}),/d$|^c/.test(t.readyState)?te():(c("load",te),t[a]("DOMContentLoaded",G),l(te,2e4)),n.elements.length?(U(),L._lsFlush()):G()},checkElems:G,unveil:ee}}(),q=function(){var e,n=j(function(e,t,n,i){var o,r,s;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),y.test(t.nodeName||""))for(o=t.getElementsByTagName("source"),r=0,s=o.length;s>r;r++)o[r].setAttribute("sizes",i);n.detail.dataAttr||E(e,n.detail)}),o=function(e,t,i){var o,r=e.parentNode;r&&(i=C(e,r,i),o=w(e,"lazybeforesizes",{width:i,dataAttr:!!t}),o.defaultPrevented||(i=o.detail.width)&&i!==e._lazysizesWidth&&n(e,r,o,i))},r=function(){var t,n=e.length;if(n)for(t=0;n>t;t++)o(e[t])},s=M(r);return{_:function(){e=t.getElementsByClassName(i.autosizesClass),c("resize",s)},checkElems:s,updateElem:o}}(),_=function(){_.i||(_.i=!0,q._(),k._())};return n={cfg:i,autoSizer:q,loader:k,init:_,uP:E,aC:g,rC:b,hC:p,fire:w,gW:C,rAF:L}}}(e,e.document);e.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}(window);

var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);
var fromId = document.getElementById.bind(document);
var fromClass = document.getElementsByClassName.bind(document);
var fromTag = document.getElementsByTagName.bind(document);

function $(sel, context) { // select query, target
  var c = context || document;
  return Array.apply(null, c.querySelectorAll(sel));
};

function hasClass(el, c) { // check for class in element, class
  var reg = new RegExp('\\b' + c + '\\b');
  return reg.test(el.className);
}

function addClass(el, c) { // add class in element, class
  if (!hasClass(el, c)) {
    el.className = el.className + ' ' + c;
  }
}

function removeClass(el, c) { // remove class in element, class
  if (el.className) {
    var reg = new RegExp('\\b' + c + '\\b');
    el.className = el.className.replace(reg, '').replace(/\s*$/, '');
  }
}

function toggleClass(el, c) { // toggle class in element, class
  var reg = new RegExp('\\b' + c + '\\b');
  if (reg.test(el.className)) {
    el.className = el.className.replace(reg, '').replace(/\s*$/, '');
  } else {
    el.className = el.className + ' ' + c;
  }
}

// #### Escape button close ####

function escClose(closeFunction) {

   document.onkeydown = function(evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
         isEscape = (evt.key == "Escape" || evt.key == "Esc");
      } else {
         isEscape = (evt.keyCode == 27);
      }
      if (isEscape) {
         closeFunction();
      }
   }
}

// ##### SIDEMENY: #####

function sideMenu() {
   function openMenu() {
      if(!hasClass($(".body")[0], "js--menu")) {
        console.log("ooopen");
        addClass($(".body")[0], "js--menu");
      }
   }

   function closeMenu() {
      if(hasClass($(".body")[0], "js--menu")) {
        removeClass($(".body")[0], "js--menu");
        console.log("clooose");
      }
   }

   $(".header--menu")[0].addEventListener("click", function(e) {
    if(hasClass($(".body")[0], "js--menu")) {
      closeMenu();
    } else {
      openMenu();
    }
    e.preventDefault();
   });

   $(".sidemenu--overlay")[0].addEventListener("click", function(e) {
      if(hasClass($(".body")[0], "js--menu")) {
        closeMenu();
      }
   });

   escClose(function(){ closeMenu() });
}

sideMenu();

// ##### ÅPNINGSTIDER #####

/*function hours() {
   var date = new Date();
   var day = date.getDay();
   var today = query(".hours--day-" + day);
   if(today.innerHTML.indexOf("Stengt") != -1) {
      var closed = queryAll(".hours--closed");
      for (var i = 0; i < closed.length; i++) {
         closed[i].style.display = "inline";
      }
   } else {
      query(".hours--open").style.display = "inline";
      query(".hours--today").innerHTML = today.innerHTML;
   }
}

if (query('.hours')) {
  hours();
}

function hoursPopUp() {
   var hours = query(".hours--link");
   var hoursPopUp = query(".hours--popup--box");
   var close = query(".hours--popup--box-close");

   function openPopUp() {
      hours.classList.add("js--active");
      close.classList.add("js--active");
      hoursPopUp.style.display = "block";
   }
   function closePopUp() {
      hours.classList.remove("js--active");
      close.classList.remove("js--active");
      hoursPopUp.style.display = "none";
   }

   hours.addEventListener("click", function(e) {
      if(hours.classList.contains("js--active")) {
         closePopUp();
      } else {
         openPopUp();
      }
      e.preventDefault();
   });
   close.addEventListener("click", function(e) {
      if(hours.classList.contains("js--active")) {
         closePopUp();
      }
   });
   hours.addEventListener("mouseover", function() {
      hoursPopUp.style.display = "block";
   });
   hours.addEventListener("mouseout", function() {
      if(!hours.classList.contains("js--active")) {
         hoursPopUp.style.display = "none";
      }
   });
   escClose(function(){ closePopUp() });
}

if (query('.hours')) {
  hoursPopUp();
} */


/* Inview */

inView('.js--in-view').on('enter', function(el){
  el.classList.add('js--active');
});

inView('.js--in-view--opacity').on('enter', function(el){
  el.classList.add('js--active');
});

$('.overlay-hours-open')[0].addEventListener('click', function(e) {
  
  var $content = $('.overlay-hours-box-collapse')[0];
  
  if(hasClass(this, 'active')) {
    $content.style.maxHeight = null;
    $content.style.opacity = "0";
    removeClass(this, 'active');
  } else {
    $content.style.maxHeight = $content.scrollHeight + "px";
    $content.style.opacity = "1";
    addClass(this, 'active');
  }
  e.preventDefault();
});

var headroom  = new Headroom($(".booking")[0]);

headroom.init()