function e(e,t,i,s){Object.defineProperty(e,t,{get:i,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},a=i.parcelRequired7c6;null==a&&((a=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return s[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},i.parcelRequired7c6=a),a.register("kyEFX",(function(t,i){var s,n;e(t.exports,"register",(function(){return s}),(function(e){return s=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var a={};s=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)a[t[i]]=e[t[i]]},n=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"fhkV7":"private-office.d3931ea0.js","jXqbo":"purple-arrow.f08913c5.svg","eHOAa":"restore-password-form.30588b38.js","hmdXN":"webinars.e92b6b06.js"}')),a("cangy"),a("8FnLx"),document.querySelector(".page-header__private-office-menu"),(()=>{const e=document.querySelector("body"),t=document.querySelector(".js-menu-container-private-office"),i=document.querySelector(".private-office__open-menu"),s=document.querySelector(".private-office__close-menu");window.innerWidth>1280?i.classList.add("active"):t.classList.add("visually-hidden");const n=()=>{const s=window.innerWidth;if(s>1280)return;const n="true"===i.getAttribute("aria-expanded")||!1;i.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),t.classList.toggle("visually-hidden"),i.classList.toggle("active"),s<=744&&e.classList.toggle("modal-is-open")};i.addEventListener("click",n),s.addEventListener("click",n),window.matchMedia("(min-width: 1280px)").addEventListener("change",(s=>{s.matches&&(t.classList.remove("is-open"),t.classList.remove("visually-hidden"),i.classList.add("active"),i.setAttribute("aria-expanded",!1),e.classList.remove("modal-is-open"))})),window.matchMedia("(min-width: 744px) and (max-width: 1279px)").addEventListener("change",(s=>{s.matches&&(t.classList.remove("is-open"),t.classList.add("visually-hidden"),i.classList.remove("active"),i.setAttribute("aria-expanded",!1),e.classList.remove("modal-is-open"))})),window.matchMedia("(max-width: 743px)").addEventListener("change",(s=>{s.matches&&(t.classList.remove("is-open"),t.classList.add("visually-hidden"),i.classList.remove("active"),i.setAttribute("aria-expanded",!1),e.classList.remove("modal-is-open"))}))})(),(()=>{const e=document.querySelector(".mysession__wrap"),t=document.querySelector(".schedule-block_wrap"),i=document.querySelector(".switch__box-calendar-button"),s=document.querySelector(".list__btn"),n=()=>{e.classList.toggle("visually-hidden"),t.classList.toggle("visually-hidden")};i.addEventListener("click",n),s.addEventListener("click",n)})(),(()=>{const e=document.querySelector("body"),t=document.querySelectorAll(".person-info-button"),i=document.querySelector(".info-card__client-wrapper"),s=document.querySelector(".close"),n=t=>{i.classList.toggle("visually-hidden"),e.classList.toggle("modal-is-open")};t.forEach((e=>{e.addEventListener("click",n)})),s.addEventListener("click",n)})(),(()=>{const e=document.querySelector(".modal-information-department"),t=document.querySelector(".js-open-modal-information"),i=document.querySelector(".js-close-modal-information"),s=()=>{const i="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!i),t.classList.toggle("active"),e.classList.toggle("visually-hidden")};t.addEventListener("click",s),i.addEventListener("click",s)})(),(()=>{const e=document.querySelector(".modal-reminder"),t=document.querySelector(".js-open-modal-reminder"),i=document.querySelector(".js-close-modal-reminder"),s=()=>{const i="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!i),t.classList.toggle("active"),e.classList.toggle("visually-hidden")};t.addEventListener("click",s),i.addEventListener("click",s)})(),(()=>{const e=document.querySelectorAll(".private-office__list-button");var t=document.querySelectorAll("div[data-navigation-content]");const i=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};if(i("valuePersonalAccountMenuItem")){!function(i){t.forEach((e=>{const t=e.getAttribute("data-navigation-content");e.classList.add("visually-hidden"),t===i&&e.classList.remove("visually-hidden")}));for(let t=0;t<e.length;t+=1)if(e[t].classList.contains("is-active")){e[t].classList.remove("is-active");break}for(let t=0;t<e.length;t+=1)if(e[t].getAttribute("data-button-menu-navigation")===i){e[t].classList.add("is-active");break}}(i("valuePersonalAccountMenuItem"))}e.forEach((i=>{var s,n;n="data-button-menu-navigation",(s=i).addEventListener("click",(async()=>{for(let t=0;t<e.length;t+=1)if(e[t].classList.contains("is-active")){e[t].classList.remove("is-active");break}s.classList.toggle("is-active");const i=s.getAttribute(n);localStorage.setItem("valuePersonalAccountMenuItem",JSON.stringify(i)),t.forEach((e=>{const t=e.getAttribute("data-navigation-content");e.classList.add("visually-hidden"),t===i&&e.classList.remove("visually-hidden")})),(()=>{const e=document.querySelector("body"),t=document.querySelector(".js-menu-container-private-office"),i=document.querySelector(".private-office__open-menu"),s=window.innerWidth;if(s>1280)return;const n="true"===i.getAttribute("aria-expanded")||!1;i.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),t.classList.toggle("visually-hidden"),i.classList.toggle("active"),s<=744&&e.classList.toggle("modal-is-open")})()}))}))})(),(()=>{const e=document.querySelectorAll("button[data-switch-button]");var t=document.querySelectorAll("div[data-switch-content]");e.forEach((i=>{var s,n;n="data-switch-button",(s=i).addEventListener("click",(async()=>{for(let t=0;t<e.length;t+=1)if(e[t].classList.contains("btn_active-chat")){e[t].classList.remove("btn_active-chat");break}s.classList.toggle("btn_active-chat");const i=s.getAttribute(n);t.forEach((e=>{const t=e.getAttribute("data-switch-content");e.classList.add("visually-hidden"),t===i&&e.classList.remove("visually-hidden")}))}))}))})(),(()=>{const e=document.querySelector(".switch_btns"),t=document.querySelectorAll(".switch_btns button"),i=document.querySelectorAll("div[data-content]");e.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;for(let e=0;e<t.length;e+=1)if(t[e].classList.contains("is-active")){t[e].classList.remove("is-active");break}e.target.classList.add("is-active");const s=e.target.dataset.switch;i.forEach((e=>{const t=e.getAttribute("data-content");e.classList.add("visually-hidden"),t===s&&e.classList.remove("visually-hidden")}))}))})();var o;o=new URL(a("kyEFX").resolve("jXqbo"),import.meta.url).toString(),(()=>{const e=document.querySelectorAll(".clients__list button"),i=document.querySelector(".left-block__clients"),s=document.querySelector(".right-block__content"),n=document.querySelector(".right-block__content .back");let a=window.innerWidth;a<744&&s.classList.add("visually-hidden"),e.forEach((e=>{e.addEventListener("click",(e=>{if(a>744)return;i.classList.add("visually-hidden"),s.classList.remove("visually-hidden");const c=e.currentTarget.textContent;n.innerHTML=`<img src="${t(o)}" alt="">${c}`}))})),n.addEventListener("click",(()=>{a>744||(i.classList.remove("visually-hidden"),s.classList.add("visually-hidden"))})),window.matchMedia("(min-width: 744px)").addEventListener("change",(e=>{e.matches&&(i.classList.remove("visually-hidden"),s.classList.remove("visually-hidden"),a=window.innerWidth)})),window.matchMedia("(max-width: 743px)").addEventListener("change",(e=>{e.matches&&(i.classList.remove("visually-hidden"),s.classList.add("visually-hidden"),a=window.innerWidth)}))})();var c=a("iQIUW");document.querySelector(".private-office__exit-button").addEventListener("click",(function(){localStorage.removeItem("currentUser"),c.Notify.info("Ви успішно вийшли із системи."),setTimeout((()=>{window.location.assign("index.html")}),500)}));const r=document.querySelector(".private-office-section"),l=document.querySelector(".page-header__private-office-menu"),d=document.querySelector(".login"),u=document.querySelector(".choose-person"),v=document.querySelector(".page-header__img-user-client");JSON.parse(localStorage.getItem("currentUser"))?(l.classList.remove("visually-hidden"),d.classList.add("visually-hidden"),u.classList.add("visually-hidden"),r.classList.remove("visually-hidden"),v.style.display="none"):(l.classList.add("visually-hidden"),d.classList.remove("visually-hidden"),u.classList.remove("visually-hidden"),r.classList.add("visually-hidden"),window.location.assign("registration_form.html"));
//# sourceMappingURL=private-office.d3931ea0.js.map
