function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r.register("cangy",(function(e,t){const o=document.querySelector(".language-menu"),n=o.querySelector(".language-toggle"),r=n.querySelector(".language"),i=o.querySelector(".language-list"),l=n.querySelector(".icon-arrow");n.addEventListener("click",(function(){o.classList.toggle("open"),l.classList.toggle("rotate")})),i.addEventListener("click",(function(e){e.preventDefault();const t=e.target.getAttribute("lang");document.documentElement.lang=t,r.textContent=e.target.textContent,o.classList.remove("open"),l.classList.remove("rotate")}))})),r.register("8FnLx",(function(e,t){var o=r("jQ7WT");const n=document.querySelector(".js-menu-container"),i=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),d=()=>{const e="true"===i.getAttribute("aria-expanded")||!1;i.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");o[e?"enableBodyScroll":"disableBodyScroll"](document.body)};i.addEventListener("click",d),l.addEventListener("click",d),window.matchMedia("(min-width: 1280px)").addEventListener("change",(e=>{e.matches&&(n.classList.remove("is-open"),i.setAttribute("aria-expanded",!1),o.enableBodyScroll(document.body))}))})),r.register("jQ7WT",(function(t,o){e(t.exports,"disableBodyScroll",(function(){return y})),e(t.exports,"clearAllBodyScrollLocks",(function(){return p})),e(t.exports,"enableBodyScroll",(function(){return w}));var n=!1;if("undefined"!=typeof window){var r={get passive(){n=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),l=[],d=!1,c=-1,u=void 0,a=void 0,s=void 0,f=function(e){return l.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},v=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},m=function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==u&&(document.body.style.overflow=u,u=void 0)},g=function(){if(void 0!==a){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=a.position,document.body.style.top=a.top,document.body.style.left=a.left,window.scrollTo(t,e),a=void 0}},y=function(e,t){if(e){if(!l.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};l=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(l),[o]),i?window.requestAnimationFrame((function(){if(void 0===a){a={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===s){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);s=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===u&&(u=document.body.style.overflow,document.body.style.overflow="hidden")}(t),i&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-c;!f(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?v(e):e.stopPropagation())}(t,e)},d||(document.addEventListener("touchmove",v,n?{passive:!1}:void 0),d=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},p=function(){i&&(l.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),d&&(document.removeEventListener("touchmove",v,n?{passive:!1}:void 0),d=!1),c=-1),i?g():m(),l=[]},w=function(e){e?(l=l.filter((function(t){return t.targetElement!==e})),i&&(e.ontouchstart=null,e.ontouchmove=null,d&&0===l.length&&(document.removeEventListener("touchmove",v,n?{passive:!1}:void 0),d=!1)),i?g():m()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}}));
//# sourceMappingURL=index.21b3c699.js.map
