var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,o.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("cangy"),o("8FnLx"),(()=>{const e=document.querySelector(".card__img img"),t=document.querySelector(".card__info h3"),n=document.querySelector(".card__info p"),o=document.querySelector(".card__price"),s=document.querySelector(".psycholog__video img"),r=document.querySelector(".name-doc"),i=document.querySelector(".year-work"),c=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};if(!c("item"))return;const{name:l,experience:a,photoSrc:d,priceValue:u}=c("item"),m=l.split(" ");e.src=d,t.innerHTML=l,n.innerHTML=a,o.innerHTML=`${u}<span>грн/год</span>`,s.src=d,r.innerHTML=`${m[0]} <br>${m[1]}`,i.textContent=a,console.log("при загрузки")})(),(()=>{const e=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};if(!e("items"))return;const t=document.querySelector(".psychologists-slider-section__list"),{data:n,itemId:o}=e("items"),s=n.map((({alt:e,photoSrc:t,id:n,name:s})=>`\n              <li class="psychologists-slider-section__item ${n===o?"psychologists-slider-section__item--active":""}" data-psychologist-id="${n}">\n                <div class="psychologists-slider-section__image-wrapper">\n                  <div class="psychologists-slider-section__image-wrapper-border">\n                      <img\n                      src=${t}\n                      class="psychologists-slider-section__image"\n                      alt=${e}\n                      />\n                  </div>\n                </div>\n  \n                <div class="psychologists-slider-section__info">\n                  <p>${s}</p>\n                </div>   \n                 \n              </li>\n          `)).join("");t.innerHTML=s;const r=document.querySelectorAll(".psychologists-slider-section__item");r.forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-psychologist-id"),o=(s=t,n.find((e=>e.id===s)));var s;localStorage.setItem("item",JSON.stringify(o)),localStorage.setItem("items",JSON.stringify({data:n,itemId:t})),i(e)}))}));const i=t=>{for(let e=0;e<r.length;e+=1)if(r[e].classList.contains("psychologists-slider-section__item--active")){r[e].classList.remove("psychologists-slider-section__item--active");break}t.classList.add("psychologists-slider-section__item--active");const n=document.querySelector(".card__img img"),o=document.querySelector(".card__info h3"),s=document.querySelector(".card__info p"),i=document.querySelector(".card__price"),c=document.querySelector(".psycholog__video img"),l=document.querySelector(".name-doc"),a=document.querySelector(".year-work"),{name:d,experience:u,photoSrc:m,priceValue:h}=e("item"),g=d.split(" ");n.src=m,o.innerHTML=d,s.innerHTML=u,i.innerHTML=`${h}<span>грн/год</span>`,c.src=m,l.innerHTML=`${g[0]} <br>${g[1]}`,a.textContent=u,console.log("по перключению")}})();const s=document.querySelector(".vebinars-btn"),r=document.querySelector(".posts"),i=document.querySelector(".platform__content");function c(){const e=document.querySelector(".psychologists-slider-section__list");let t,n=window.innerWidth;if(n>=1280)e.style.paddingRight="0px";else if(n>=744)e.style.paddingRight="0px";else if(n<=390)t=20;else{const e=n-390,o=.5*Math.floor(e/20);t=20+Math.floor(e/2)+o}e.style.paddingRight=`${t}px`}i.classList.remove("show-posts"),i.classList.add("show-webinars"),s.addEventListener("click",(()=>{i.classList.remove("show-posts"),i.classList.add("show-webinars")})),r.addEventListener("click",(()=>{i.classList.remove("show-webinars"),i.classList.add("show-posts")})),(()=>{const e=document.querySelector(".arrow-next"),t=document.querySelector(".arrow-prew"),n=document.querySelectorAll(".articles__item"),o=document.querySelector(".articles__list");let s=0,r=!1,i=0;e.addEventListener("click",(()=>{if(r)return;r=!0;const e=window.innerWidth;e>=1280?(i-=285,s===n.length-1?(s=0,i=0):s++):e>=744?(i-=228,s===n.length-1?(s=0,i=0):s++):(i-=300,s===n.length-1?(s=0,i=0):s++),o.style.transform=`translateX(${i}px)`,setTimeout((()=>{r=!1}),500)})),t.addEventListener("click",(()=>{if(r)return;r=!0;const e=window.innerWidth;i+=e>=1280?285:e>=744?228:300,0===s?e>=1280?(s=n.length-1,i=285*-(n.length-1)):e>=744?(s=n.length-1,i=228*-(n.length-1)):(s=n.length-1,i=300*-(n.length-1)):s--,o.style.transform=`translateX(${i}px)`,setTimeout((()=>{r=!1}),500)})),window.addEventListener("resize",(()=>{const e=window.innerWidth;i=e>=1280?285*-s:e>=744?228*-s:300*-s,o.style.transform=`translateX(${i}px)`}))})(),(()=>{const e=document.querySelector(".arrow-next-meeting"),t=document.querySelector(".arrow-prew-meeting"),n=document.querySelectorAll(".meeting__item"),o=document.querySelector(".meeting__list");let s=0,r=!1,i=0;e.addEventListener("click",(()=>{if(r)return;r=!0;const e=window.innerWidth;e>=1280?(i-=855,s===n.length-1?(s=0,i=0):s++):e>=744?(i-=450,s===n.length-1?(s=0,i=0):s++):(i-=300,s===n.length-1?(s=0,i=0):s++),o.style.transform=`translateX(${i}px)`,setTimeout((()=>{r=!1}),500)})),t.addEventListener("click",(()=>{if(r)return;r=!0;const e=window.innerWidth;i+=e>=1280?855:e>=744?450:300,0===s?e>=1280?(s=n.length-1,i=855*-(n.length-1)):e>=744?(s=n.length-1,i=450*-(n.length-1)):(s=n.length-1,i=300*-(n.length-1)):s--,o.style.transform=`translateX(${i}px)`,setTimeout((()=>{r=!1}),500)})),window.addEventListener("resize",(()=>{const e=window.innerWidth;i=e>=1280?855*-s:e>=744?450*-s:300*-s,o.style.transform=`translateX(${i}px)`}))})(),document.addEventListener("DOMContentLoaded",(function(){c()})),window.addEventListener("resize",c),(()=>{const e=document.querySelector("body"),t=document.querySelector(".js-menu-container-psycholog"),n=document.querySelector(".js-open-menu-psycholog"),o=document.querySelector(".js-close-menu-psycholog"),s=()=>{const o="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!o),t.classList.toggle("is-open"),e.classList.toggle("modal-is-open")};n.addEventListener("click",s),o.addEventListener("click",s)})(),(()=>{const e=document.querySelector(".modal-information-department"),t=document.querySelector(".js-open-modal-information"),n=document.querySelector(".js-close-modal-information"),o=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),t.classList.toggle("active"),e.classList.toggle("visually-hidden")};t.addEventListener("click",o),n.addEventListener("click",o)})(),(()=>{const e=document.querySelector(".modal-reminder"),t=document.querySelector(".js-open-modal-reminder"),n=document.querySelector(".js-close-modal-reminder"),o=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),t.classList.toggle("active"),e.classList.toggle("visually-hidden")};t.addEventListener("click",o),n.addEventListener("click",o)})(),o("hBBjI"),o("gIdQD"),o("2D58v"),o("cQx4H"),o("530Cw");document.querySelector(".work__schedule-date");const l=document.querySelector(".work__schedule-weeks"),a=["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];function d(e){return new Intl.DateTimeFormat("uk-UA",{day:"numeric",month:"long"}).format(e)}function u(e,t=!1){const n=document.createElement("button");n.classList.add("days"),t&&n.classList.add("active");const o=`${d(e)}, ${e.getFullYear()}`;return n.setAttribute("aria-label",o),n.innerHTML=`\n    <span class="day__week">${a[0===e.getDay()?6:e.getDay()-1]}</span>\n    <div class="num__day">\n      <p class="day">${e.getDate()}</p>\n      <span class="show-month">${d(e)}</span>\n    </div>\n  `,n}!function(){l.innerHTML="";const e=new Date,t=new Date(e);t.setDate(t.getDate()-(t.getDay()+6)%7-28);const n=new Date(e);n.setDate(n.getDate()+28-(n.getDay()+6)%7);let o,s=new Date(t);for(;s<=n;){const t=[];for(let e=0;e<7;e++)t.push(new Date(s)),s.setDate(s.getDate()+1);const n=document.createElement("div");n.classList.add("week"),t.forEach((t=>{const s=t.toDateString()===e.toDateString(),r=u(t,s);s&&(o=r),n.appendChild(r)})),l.appendChild(n)}o.classList.add("active")}(),(()=>{const e=document.querySelector(".btn__schedule:last-child"),t=document.querySelector(".btn__schedule:first-child"),n=document.querySelector(".work__schedule-weeks"),o=n.querySelectorAll(".week"),s=document.querySelector(".work__schedule-date span:last-child"),r=document.querySelector(".work__schedule-date span:first-child");let i=4,c=window.innerWidth,l=0;const a={desktop:-808,tablet:-468,mobile:-382},d=o.length;function u(){i=4,l=m(),n.style.transform=`translateX(${l}px)`,h()}function m(){return a[c>=1280?"desktop":c>=744?"tablet":"mobile"]*i}function h(){const e=o[i].querySelectorAll(".days")[0].querySelector(".show-month").textContent,t=o[i].querySelectorAll(".days")[6].querySelector(".show-month").textContent;r.textContent=e,s.textContent=t}e.addEventListener("click",(()=>{i<d-1&&(i+=1,l=m(),n.style.transform=`translateX(${l}px)`,h())})),t.addEventListener("click",(()=>{i>0&&(i-=1,l=m(),n.style.transform=`translateX(${l}px)`,h())})),u(),window.matchMedia("(min-width: 1280px)").addEventListener("change",(e=>{e.matches&&(c=window.innerWidth,u())})),window.matchMedia("(min-width: 744px) and (max-width: 1279px)").addEventListener("change",(e=>{e.matches&&(c=window.innerWidth,u())})),window.matchMedia("(max-width: 743px)").addEventListener("change",(e=>{e.matches&&(c=window.innerWidth,u())}))})(),(()=>{const e=document.querySelectorAll(".days");e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")})),t.classList.add("active")}))}))})();
//# sourceMappingURL=post-exemple.27e6205a.js.map