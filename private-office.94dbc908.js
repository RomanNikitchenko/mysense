function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},a=i.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},i.parcelRequired7c6=a),a.register("kyEFX",(function(t,i){var n,s;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var a={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)a[t[i]]=e[t[i]]},s=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"fhkV7":"private-office.94dbc908.js","jXqbo":"purple-arrow.f08913c5.svg","g1GCi":"private-office.323b2594.js"}')),a("cangy"),a("8FnLx"),document.querySelector(".page-header__private-office-menu").style.display="flex",(()=>{const e=document.querySelector("body"),t=document.querySelector(".js-menu-container-private-office"),i=document.querySelector(".private-office__open-menu"),n=document.querySelector(".private-office__close-menu");window.innerWidth>1280?i.classList.add("active"):t.classList.add("visually-hidden");const s=()=>{const n=window.innerWidth;if(n>1280)return;const s="true"===i.getAttribute("aria-expanded")||!1;i.setAttribute("aria-expanded",!s),t.classList.toggle("is-open"),t.classList.toggle("visually-hidden"),i.classList.toggle("active"),n<=744&&e.classList.toggle("modal-is-open")};i.addEventListener("click",s),n.addEventListener("click",s),window.matchMedia("(min-width: 1280px)").addEventListener("change",(n=>{n.matches&&(t.classList.remove("is-open"),t.classList.remove("visually-hidden"),i.classList.add("active"),i.setAttribute("aria-expanded",!1),e.classList.remove("modal-is-open"))})),window.matchMedia("(min-width: 744px) and (max-width: 1279px)").addEventListener("change",(n=>{n.matches&&(t.classList.remove("is-open"),t.classList.add("visually-hidden"),i.classList.remove("active"),i.setAttribute("aria-expanded",!1),e.classList.remove("modal-is-open"))})),window.matchMedia("(max-width: 743px)").addEventListener("change",(n=>{n.matches&&(t.classList.remove("is-open"),t.classList.add("visually-hidden"),i.classList.remove("active"),i.setAttribute("aria-expanded",!1),e.classList.remove("modal-is-open"))}))})(),(()=>{const e=document.querySelector(".mysession__wrap"),t=document.querySelector(".schedule-block_wrap"),i=document.querySelector(".switch__box-calendar-button"),n=document.querySelector(".list__btn"),s=()=>{e.classList.toggle("visually-hidden"),t.classList.toggle("visually-hidden")};i.addEventListener("click",s),n.addEventListener("click",s)})(),(()=>{const e=document.querySelector("body"),t=document.querySelectorAll(".person-info-button"),i=document.querySelector(".info-card__client-wrapper"),n=document.querySelector(".close"),s=t=>{i.classList.toggle("visually-hidden"),e.classList.toggle("modal-is-open")};t.forEach((e=>{e.addEventListener("click",s)})),n.addEventListener("click",s)})(),(()=>{const e=document.querySelector(".modal-information-department"),t=document.querySelector(".js-open-modal-information"),i=document.querySelector(".js-close-modal-information"),n=()=>{const i="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!i),t.classList.toggle("active"),e.classList.toggle("visually-hidden")};t.addEventListener("click",n),i.addEventListener("click",n)})(),(()=>{const e=document.querySelector(".modal-reminder"),t=document.querySelector(".js-open-modal-reminder"),i=document.querySelector(".js-close-modal-reminder"),n=()=>{const i="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!i),t.classList.toggle("active"),e.classList.toggle("visually-hidden")};t.addEventListener("click",n),i.addEventListener("click",n)})(),(()=>{const e=document.querySelectorAll(".private-office__list-button");var t=document.querySelectorAll("div[data-navigation-content]");e.forEach((i=>{((i,n)=>{const s=i.innerHTML.trim();i.setAttribute(n,s),i.addEventListener("click",(async()=>{for(let t=0;t<e.length;t+=1)if(e[t].classList.contains("is-active")){e[t].classList.remove("is-active");break}i.classList.toggle("is-active");const s=i.getAttribute(n);t.forEach((e=>{const t=e.getAttribute("data-navigation-content");e.classList.add("visually-hidden"),t===s&&e.classList.remove("visually-hidden")})),(()=>{const e=document.querySelector("body"),t=document.querySelector(".js-menu-container-private-office"),i=document.querySelector(".private-office__open-menu"),n=window.innerWidth;if(n>1280)return;const s="true"===i.getAttribute("aria-expanded")||!1;i.setAttribute("aria-expanded",!s),t.classList.toggle("is-open"),t.classList.toggle("visually-hidden"),i.classList.toggle("active"),n<=744&&e.classList.toggle("modal-is-open")})()}))})(i,"data-button-menu-navigation")}))})(),(()=>{const e=document.querySelectorAll("button[data-switch-button]");var t=document.querySelectorAll("div[data-switch-content]");e.forEach((i=>{var n,s;s="data-switch-button",(n=i).addEventListener("click",(async()=>{for(let t=0;t<e.length;t+=1)if(e[t].classList.contains("btn_active-chat")){e[t].classList.remove("btn_active-chat");break}n.classList.toggle("btn_active-chat");const i=n.getAttribute(s);t.forEach((e=>{const t=e.getAttribute("data-switch-content");e.classList.add("visually-hidden"),t===i&&e.classList.remove("visually-hidden")}))}))}))})(),(()=>{const e=document.querySelector(".switch_btns"),t=document.querySelectorAll(".switch_btns button"),i=document.querySelectorAll("div[data-content]");e.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;for(let e=0;e<t.length;e+=1)if(t[e].classList.contains("is-active")){t[e].classList.remove("is-active");break}e.target.classList.add("is-active");const n=e.target.dataset.switch;i.forEach((e=>{const t=e.getAttribute("data-content");e.classList.add("visually-hidden"),t===n&&e.classList.remove("visually-hidden")}))}))})();var c;c=new URL(a("kyEFX").resolve("jXqbo"),import.meta.url).toString(),(()=>{const e=document.querySelectorAll(".clients__list button"),i=document.querySelector(".left-block__clients"),n=document.querySelector(".right-block__content"),s=document.querySelector(".right-block__content .back");let a=window.innerWidth;a<744&&n.classList.add("visually-hidden"),e.forEach((e=>{e.addEventListener("click",(e=>{if(a>744)return;i.classList.add("visually-hidden"),n.classList.remove("visually-hidden");const o=e.currentTarget.textContent;s.innerHTML=`<img src="${t(c)}" alt="">${o}`}))})),s.addEventListener("click",(()=>{a>744||(i.classList.remove("visually-hidden"),n.classList.add("visually-hidden"))})),window.matchMedia("(min-width: 744px)").addEventListener("change",(e=>{e.matches&&(i.classList.remove("visually-hidden"),n.classList.remove("visually-hidden"),a=window.innerWidth)})),window.matchMedia("(max-width: 743px)").addEventListener("change",(e=>{e.matches&&(i.classList.remove("visually-hidden"),n.classList.add("visually-hidden"),a=window.innerWidth)}))})();
//# sourceMappingURL=private-office.94dbc908.js.map
