!function(){var e,t,n,r,i,o,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},u={},s=l.parcelRequired7c6;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in u){var t=u[e];delete u[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){u[e]=t},l.parcelRequired7c6=s),s("4olzt"),e=document.querySelector(".user-manual__button"),t=document.querySelectorAll(".user-manual__item"),n=document.querySelector(".user-manual__list"),r=0,i=!1,o=0,e.addEventListener("click",(function(e){if(e.currentTarget.classList.contains("user-manual__button")&&!i){i=!0;var l=window.innerWidth;o-=l>=1280?1140:l>=744?704:370,r===t.length-1?(r=0,o=0):r++,n.style.transform="translateX(".concat(o,"px)"),setTimeout((function(){i=!1}),500)}})),window.addEventListener("resize",(function(){var e=window.innerWidth;o=e>=1280?1140*-r:e>=744?704*-r:370*-r,n.style.transform="translateX(".concat(o,"px)")})),s("cs7FV"),document.querySelectorAll(".item__wrap").forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("rotated");var t=e.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}))}))}();
//# sourceMappingURL=cooperation.5253d75e.js.map
