var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},i=e.parcelRequired7c6;function a(e,t){return!e.length}function l(e,t,s){for(let t=0;t<e.length;t+=1)if(e[t].classList.contains("active")){e[t].classList.remove("active");break}t.classList.contains("visually-hidden")||e[s-1].classList.add("active")}null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in s){var i=s[e];delete s[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){s[e]=t},e.parcelRequired7c6=i),i("8FnLx"),i("cangy"),document.querySelectorAll(".request-item__wrap").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("rotated");const t=e.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}))}));var d=i("9wjVU");async function n({array:e,gender:t,lang:s,cost:i}){const a=await d.fakeAPI;if(a){const l=await function({response:e,array:t,gender:s,lang:i,cost:a}){return 0===t.length?[]:e.filter((e=>{const l=t.every((t=>e.specialties.includes(t)));let d=!1;(0===s.length||s.includes(e.gender))&&(d=!0);let n=!1;(0===a.length||a.includes(e.priceRange))&&(n=!0);const c=i.every((t=>e.languages.includes(t)));return l&&d&&n&&c}))}({response:a,array:e,gender:t,lang:s,cost:i});return{data:l.slice(0,8),hits:l.length}}console.log("Ошибка !response")}function c({data:e,hits:t}){const s=document.querySelector(".user-manual__list");document.querySelector(".right-block__subtitle").innerHTML=`${t} психологів`;const i=[],a=e.slice(0,8);for(let e=0;e<a.length;e+=4){const t=a.slice(e,e+4).map((e=>`<li class="result__card-wrap" data-result-id="${e.id}">\n        <div class="card__img">\n          <img src="${e.photoSrc}" alt="" />\n        </div>\n        <div class="card__info">\n          <h3>${e.name}</h3>\n          <p>${e.experience}</p>\n          <div class="card__price">${e.priceValue}<span>грн/год</span></div>\n        </div>\n      </li>`)).join("");i.push(`<li class="user-manual__item"><ul class="result__cards">${t}</ul></li>`)}s.innerHTML=i.join("");document.querySelectorAll(".result__card-wrap").forEach((t=>{t.addEventListener("click",(()=>{const s=t.getAttribute("data-result-id"),i=(a=s,e.find((e=>e.id===a)));var a;localStorage.setItem("item",JSON.stringify(i)),localStorage.setItem("items",JSON.stringify({data:e,itemId:s})),window.location.assign("psycholog-exemple.html")}))}))}var r=async(e=[],t=[],s=[],i=[])=>{console.log(e),console.log(t),console.log(s),console.log(i);try{const{data:a,hits:l}=await n({array:e,gender:t,lang:s,cost:i});c({data:a,hits:l})}catch(e){console.log("Ошибка",e)}},o=i("iQIUW");(()=>{const e=document.querySelectorAll(".test__line"),t=document.querySelector(".testpage__title"),s=document.querySelector(".testpage__cards"),i=document.querySelectorAll(".test__card-wrap"),d=document.querySelector(".fixed__box"),n=document.querySelector(".state"),c=document.querySelector(".requests"),u=document.querySelector(".consern"),v=document.querySelector(".category"),y=document.querySelector(".result"),m=document.querySelector(".fixed__button-load-more"),h=document.querySelector("section.gender"),L=document.querySelector("section.lang"),f=document.querySelector("section.cost");let g=[],p=!1,_=!1,w=!1,q=[],S=[],b=[],x=[],E=[],k=[],A=[],H=!1,T=0;i.forEach((e=>{e.addEventListener("click",(async t=>{for(let e=0;e<i.length;e+=1)if(i[e].classList.contains("is-active")){i[e].classList.remove("is-active");break}g=[],"myself"===t.currentTarget.dataset.for&&(p=!0,_=!1,w=!1,g.push("myself")),"family"===t.currentTarget.dataset.for&&(p=!1,_=!0,w=!1,g.push("family")),"child"===t.currentTarget.dataset.for&&(p=!1,_=!1,w=!0,g.push("child")),await r([...g]),e.classList.add("is-active"),d.classList.remove("visually-hidden")}))}));const O=document.querySelector(".fixed__button-next");O.addEventListener("click",(async()=>{if(!H){if(0===T){if(T+=1,t.classList.add("visually-hidden"),s.classList.add("visually-hidden"),p)return n.classList.remove("visually-hidden"),void await r([...g,...q]);if(_)return u.classList.remove("visually-hidden"),H=a(b),void await r([...g,...b]);if(w)return v.classList.remove("visually-hidden"),H=a(x),void await r([...g,...x])}if(1===T){if(p)return T+=1,n.classList.add("visually-hidden"),c.classList.remove("visually-hidden"),H=a(S),void await r([...g,...q,...S]);if(_)return T+=1,u.classList.add("visually-hidden"),h.classList.remove("visually-hidden"),L.classList.remove("visually-hidden"),f.classList.remove("visually-hidden"),void await r([...g,...b],E,k,A);if(w)return T+=1,v.classList.add("visually-hidden"),h.classList.remove("visually-hidden"),L.classList.remove("visually-hidden"),f.classList.remove("visually-hidden"),void await r([...g,...x],E,k,A)}if(2===T){if(p)return T+=1,c.classList.add("visually-hidden"),h.classList.remove("visually-hidden"),L.classList.remove("visually-hidden"),f.classList.remove("visually-hidden"),void await r([...g,...q,...S],E,k,A);if(_)return T+=1,O.classList.add("visually-hidden"),y.classList.remove("visually-hidden"),m.classList.remove("visually-hidden"),h.classList.add("visually-hidden"),L.classList.add("visually-hidden"),f.classList.add("visually-hidden"),void l(e,y,2);if(w)return T+=1,O.classList.add("visually-hidden"),y.classList.remove("visually-hidden"),m.classList.remove("visually-hidden"),h.classList.add("visually-hidden"),L.classList.add("visually-hidden"),f.classList.add("visually-hidden"),void l(e,y,2)}return 3===T&&p?(T+=1,O.classList.add("visually-hidden"),y.classList.remove("visually-hidden"),m.classList.remove("visually-hidden"),h.classList.add("visually-hidden"),L.classList.add("visually-hidden"),f.classList.add("visually-hidden"),void l(e,y,2)):void 0}o.Notify.info("Зробіть свій вибір.")}));document.querySelector(".fixed__button-prew").addEventListener("click",(async()=>{if(H=!1,1===T){if(T-=1,t.classList.remove("visually-hidden"),s.classList.remove("visually-hidden"),p)return n.classList.add("visually-hidden"),void await r([...g]);if(_)return u.classList.add("visually-hidden"),void await r([...g]);if(w)return v.classList.add("visually-hidden"),void await r([...g])}if(2===T){if(p)return T-=1,c.classList.add("visually-hidden"),n.classList.remove("visually-hidden"),void await r([...g,...q]);if(_)return T-=1,u.classList.remove("visually-hidden"),O.classList.remove("visually-hidden"),y.classList.add("visually-hidden"),m.classList.add("visually-hidden"),h.classList.add("visually-hidden"),L.classList.add("visually-hidden"),f.classList.add("visually-hidden"),l(e,u,1),void await r([...g,...b]);if(w)return T-=1,v.classList.remove("visually-hidden"),O.classList.remove("visually-hidden"),y.classList.add("visually-hidden"),m.classList.add("visually-hidden"),h.classList.add("visually-hidden"),L.classList.add("visually-hidden"),f.classList.add("visually-hidden"),l(e,v,1),void await r([...g,...x])}if(3===T){if(p)return T-=1,c.classList.remove("visually-hidden"),h.classList.add("visually-hidden"),L.classList.add("visually-hidden"),f.classList.add("visually-hidden"),void await r([...g,...q,...S]);if(_)return T-=1,h.classList.remove("visually-hidden"),L.classList.remove("visually-hidden"),f.classList.remove("visually-hidden"),y.classList.add("visually-hidden"),O.classList.remove("visually-hidden"),m.classList.add("visually-hidden"),l(e,h,1),void await r([...g,...b],E,k,A);if(w)return T-=1,h.classList.remove("visually-hidden"),L.classList.remove("visually-hidden"),f.classList.remove("visually-hidden"),y.classList.add("visually-hidden"),O.classList.remove("visually-hidden"),m.classList.add("visually-hidden"),l(e,h,1),void await r([...g,...x],E,k,A)}if(4===T&&p)return T-=1,h.classList.remove("visually-hidden"),L.classList.remove("visually-hidden"),f.classList.remove("visually-hidden"),y.classList.add("visually-hidden"),O.classList.remove("visually-hidden"),m.classList.add("visually-hidden"),l(e,h,1),void await r([...g,...q,...S],E,k,A)}));const $=(e,t,s)=>{const i=e.firstElementChild.innerHTML.trim();e.setAttribute(t,i),e.addEventListener("click",(async()=>{const i=e.getAttribute(t),l=s.indexOf(i);-1!==l?s.splice(l,1):s.push(i),e.classList.toggle("is-active"),"data-button-my-Requests"!==t&&"data-button-consern"!==t&&"data-button-category"!==t||(H=a(s)),"data-button-my-state"===t&&await r([...g,...q]),"data-button-my-Requests"===t&&await r([...g,...q,...S]),"data-button-consern"===t&&await r([...g,...b]),"data-button-category"===t&&await r([...g,...x])}))};document.querySelectorAll(".state .card__link-btn").forEach((e=>{$(e,"data-button-my-state",q)}));document.querySelectorAll(".requests .card__link-btn").forEach((e=>{$(e,"data-button-my-Requests",S)}));document.querySelectorAll(".consern .card__link-btn").forEach((e=>{$(e,"data-button-consern",b)}));document.querySelectorAll(".category .card__link-btn").forEach((e=>{$(e,"data-button-category",x)}));const j=document.querySelectorAll(".gender .card__link-btn");j.forEach((e=>{e.addEventListener("click",(async()=>{const t=e.getAttribute("data-button-gender"),s=E.indexOf(t);if(-1!==s?E.splice(s,1):(E=[],""!==t&&E.push(t)),p&&await r([...g,...q,...S],E,k,A),_&&await r([...g,...b],E,k,A),w&&await r([...g,...x],E,k,A),e.classList.contains("is-active"))e.classList.remove("is-active");else{for(let e=0;e<j.length;e+=1)if(j[e].classList.contains("is-active")){j[e].classList.remove("is-active");break}e.classList.add("is-active")}}))}));const I=document.querySelectorAll(".lang .card__link-btn");I.forEach((e=>{e.addEventListener("click",(async()=>{const t=e.getAttribute("data-button-lang"),s=k.indexOf(t);if(-1!==s?k.splice(s,1):(k=[],""!==t&&k.push(t)),p&&await r([...g,...q,...S],E,k,A),_&&await r([...g,...b],E,k,A),w&&await r([...g,...x],E,k,A),e.classList.contains("is-active"))e.classList.remove("is-active");else{for(let e=0;e<I.length;e+=1)if(I[e].classList.contains("is-active")){I[e].classList.remove("is-active");break}e.classList.add("is-active")}}))}));const N=document.querySelectorAll(".cost .card__link-btn");N.forEach((e=>{e.addEventListener("click",(async()=>{const t=e.getAttribute("data-button-cost"),s=A.indexOf(t);if(-1!==s?A.splice(s,1):(A=[],""!==t&&A.push(t)),p&&await r([...g,...q,...S],E,k,A),_&&await r([...g,...b],E,k,A),w&&await r([...g,...x],E,k,A),e.classList.contains("is-active"))e.classList.remove("is-active");else{for(let e=0;e<N.length;e+=1)if(N[e].classList.contains("is-active")){N[e].classList.remove("is-active");break}e.classList.add("is-active")}}))})),(async()=>{await r([...g])})()})(),(()=>{const e=document.querySelector(".fixed__button-load-more"),t=document.querySelector(".user-manual__list");let s=0,i=!1,a=0;e.addEventListener("click",(e=>{const l=document.querySelectorAll(".user-manual__item");if(!e.currentTarget.classList.contains("fixed__button-load-more"))return;if(i)return;i=!0;const d=window.innerWidth;a-=d>=1280?1220:d>=744?704:370,s===l.length-1?(s=0,a=0):s++,t.style.transform=`translateX(${a}px)`,setTimeout((()=>{i=!1}),500)})),window.addEventListener("resize",(()=>{const e=window.innerWidth;a=e>=1280?1220*-s:e>=744?704*-s:370*-s,t.style.transform=`translateX(${a}px)`}))})(),(()=>{const e=document.querySelector(".form__payment-method"),t=document.querySelector(".payment-card"),s=document.querySelector(".payment-card-list"),i=document.querySelector(".payment-card__value"),a=document.querySelectorAll(".payment-card-button");e.addEventListener("click",(()=>{t.classList.toggle("rotated"),s.style.maxHeight?s.style.maxHeight=null:s.style.maxHeight=s.scrollHeight+"px"})),s.addEventListener("click",(e=>{e.preventDefault(),e.target.classList.contains("payment-card-button")&&(t.classList.toggle("rotated"),a.forEach((e=>e.classList.remove("active"))),e.target.classList.add("active"),i.textContent=e.target.textContent,s.style.maxHeight=null)}))})(),(()=>{const e=document.querySelector(".modal-information-department"),t=document.querySelector(".js-open-modal-information"),s=document.querySelector(".js-close-modal-information"),i=()=>{const s="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!s),t.classList.toggle("active"),e.classList.toggle("visually-hidden")};t.addEventListener("click",i),s.addEventListener("click",i)})(),(()=>{const e=document.querySelector(".modal-reminder"),t=document.querySelector(".js-open-modal-reminder"),s=document.querySelector(".js-close-modal-reminder"),i=()=>{const s="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!s),t.classList.toggle("active"),e.classList.toggle("visually-hidden")};t.addEventListener("click",i),s.addEventListener("click",i)})();const u=document.querySelector(".page-header__private-office-menu"),v=document.querySelector(".login"),y=document.querySelector(".choose-person"),m=document.querySelector(".page-header__img-user-client");JSON.parse(localStorage.getItem("currentUser"))?(u&&u.classList.remove("visually-hidden"),v&&v.classList.add("visually-hidden"),y&&y.classList.add("visually-hidden"),m&&(m.style.display="none")):(u&&u.classList.add("visually-hidden"),v&&v.classList.remove("visually-hidden"),y&&y.classList.remove("visually-hidden")),i("gIdQD"),i("2D58v"),i("9vaTE");
//# sourceMappingURL=testpage.46b8feaa.js.map