var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,s.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=s),s("cangy"),s("8FnLx"),(()=>{const e=document.querySelector(".card__img img"),t=document.querySelector(".card__info h3"),n=document.querySelector(".card__info p"),s=document.querySelector(".card__price"),o=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};if(!o("item"))return;const{name:r,experience:i,photoSrc:c,priceValue:l}=o("item");e.src=c,t.innerHTML=r,n.innerHTML=i,s.innerHTML=`${l}<span>грн/год</span>`})(),(()=>{const e=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};if(!e("items"))return;const t=document.querySelector(".psychologists-slider-section__list"),{data:n,itemId:s}=e("items"),o=n.map((({alt:e,photoSrc:t,id:n,name:o})=>`\n              <li class="psychologists-slider-section__item ${n===s?"psychologists-slider-section__item--active":""}" data-psychologist-id="${n}">\n                <div class="psychologists-slider-section__image-wrapper">\n                  <div class="psychologists-slider-section__image-wrapper-border">\n                      <img\n                      src=${t}\n                      class="psychologists-slider-section__image"\n                      alt=${e}\n                      />\n                  </div>\n                </div>\n  \n                <div class="psychologists-slider-section__info">\n                  <p>${o}</p>\n                </div>   \n                 \n              </li>\n          `)).join("");t.innerHTML=o;const r=document.querySelectorAll(".psychologists-slider-section__item");r.forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-psychologist-id"),s=(o=t,n.find((e=>e.id===o)));var o;localStorage.setItem("item",JSON.stringify(s)),localStorage.setItem("items",JSON.stringify({data:n,itemId:t})),i(e)}))}));const i=t=>{for(let e=0;e<r.length;e+=1)if(r[e].classList.contains("psychologists-slider-section__item--active")){r[e].classList.remove("psychologists-slider-section__item--active");break}t.classList.add("psychologists-slider-section__item--active");const n=document.querySelector(".card__img img"),s=document.querySelector(".card__info h3"),o=document.querySelector(".card__info p"),i=document.querySelector(".card__price"),{name:c,experience:l,photoSrc:d,priceValue:a}=e("item");n.src=d,s.innerHTML=c,o.innerHTML=l,i.innerHTML=`${a}<span>грн/год</span>`}})();const o=document.querySelector(".vebinars-btn"),r=document.querySelector(".posts"),i=document.querySelector(".platform__content");function c(){const e=document.querySelector(".psychologists-slider-section__list");let t,n=window.innerWidth;if(n>=1280)e.style.paddingRight="0px";else if(n>=744)e.style.paddingRight="0px";else if(n<=390)t=20;else{const e=n-390,s=.5*Math.floor(e/20);t=20+Math.floor(e/2)+s}e.style.paddingRight=`${t}px`}i.classList.remove("show-posts"),i.classList.add("show-webinars"),o.addEventListener("click",(()=>{i.classList.remove("show-posts"),i.classList.add("show-webinars")})),r.addEventListener("click",(()=>{i.classList.remove("show-webinars"),i.classList.add("show-posts")})),(()=>{const e=document.querySelector(".arrow-next"),t=document.querySelector(".arrow-prew"),n=document.querySelectorAll(".articles__item"),s=document.querySelector(".articles__list");let o=0,r=!1,i=0;e.addEventListener("click",(()=>{if(r)return;r=!0;const e=window.innerWidth;e>=1280?(i-=285,o===n.length-1?(o=0,i=0):o++):e>=744?(i-=228,o===n.length-1?(o=0,i=0):o++):(i-=300,o===n.length-1?(o=0,i=0):o++),s.style.transform=`translateX(${i}px)`,setTimeout((()=>{r=!1}),500)})),t.addEventListener("click",(()=>{if(r)return;r=!0;const e=window.innerWidth;i+=e>=1280?285:e>=744?228:300,0===o?e>=1280?(o=n.length-1,i=285*-(n.length-1)):e>=744?(o=n.length-1,i=228*-(n.length-1)):(o=n.length-1,i=300*-(n.length-1)):o--,s.style.transform=`translateX(${i}px)`,setTimeout((()=>{r=!1}),500)})),window.addEventListener("resize",(()=>{const e=window.innerWidth;i=e>=1280?285*-o:e>=744?228*-o:300*-o,s.style.transform=`translateX(${i}px)`}))})(),(()=>{const e=document.querySelector(".arrow-next-meeting"),t=document.querySelector(".arrow-prew-meeting"),n=document.querySelectorAll(".meeting__item"),s=document.querySelector(".meeting__list");let o=0,r=!1,i=0;e.addEventListener("click",(()=>{if(r)return;r=!0;const e=window.innerWidth;e>=1280?(i-=855,o===n.length-1?(o=0,i=0):o++):e>=744?(i-=450,o===n.length-1?(o=0,i=0):o++):(i-=300,o===n.length-1?(o=0,i=0):o++),s.style.transform=`translateX(${i}px)`,setTimeout((()=>{r=!1}),500)})),t.addEventListener("click",(()=>{if(r)return;r=!0;const e=window.innerWidth;i+=e>=1280?855:e>=744?450:300,0===o?e>=1280?(o=n.length-1,i=855*-(n.length-1)):e>=744?(o=n.length-1,i=450*-(n.length-1)):(o=n.length-1,i=300*-(n.length-1)):o--,s.style.transform=`translateX(${i}px)`,setTimeout((()=>{r=!1}),500)})),window.addEventListener("resize",(()=>{const e=window.innerWidth;i=e>=1280?855*-o:e>=744?450*-o:300*-o,s.style.transform=`translateX(${i}px)`}))})(),document.addEventListener("DOMContentLoaded",(function(){c()})),window.addEventListener("resize",c),(()=>{console.log("qwe");const e=document.querySelector("body"),t=document.querySelector(".js-menu-container-psycholog"),n=document.querySelector(".js-open-menu-psycholog"),s=document.querySelector(".js-close-menu-psycholog"),o=()=>{const s="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!s),t.classList.toggle("is-open"),e.classList.toggle("modal-is-open")};n.addEventListener("click",o),s.addEventListener("click",o)})();
//# sourceMappingURL=psycholog-exemple.b65264f6.js.map
