!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return i[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("3Ua4Q",(function(e,t){var i,n,a,r,o;i=document.querySelector("body"),n=document.querySelector(".js-menu-container-outside-private-office"),a=document.querySelector(".private-office__open-menu"),r=document.querySelector(".outside-private-office__close-menu"),o=function(){var e=window.innerWidth,t="true"===a.getAttribute("aria-expanded")||!1;a.setAttribute("aria-expanded",!t),n.classList.toggle("visually-hidden"),a.classList.toggle("active"),e<=744&&i.classList.toggle("modal-is-open")},a.addEventListener("click",o),r.addEventListener("click",o),window.matchMedia("(min-width: 1280px)").addEventListener("change",(function(e){e.matches&&(n.classList.add("visually-hidden"),a.classList.remove("active"),a.setAttribute("aria-expanded",!1),i.classList.remove("modal-is-open"))})),window.matchMedia("(min-width: 744px) and (max-width: 1279px)").addEventListener("change",(function(e){e.matches&&(n.classList.add("visually-hidden"),a.classList.remove("active"),a.setAttribute("aria-expanded",!1),i.classList.remove("modal-is-open"))})),window.matchMedia("(max-width: 743px)").addEventListener("change",(function(e){e.matches&&(n.classList.add("visually-hidden"),a.classList.remove("active"),a.setAttribute("aria-expanded",!1),i.classList.remove("modal-is-open"))}))})),a.register("lu78u",(function(t,i){var n=a("bpxeT"),r=a("2TvXO");!function(){var t=document.querySelectorAll(".outside-private-office__list-button"),i=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};i("valuePersonalAccountMenuItem")&&function(e){for(var i=0;i<t.length;i+=1)if(t[i].classList.contains("is-active")){t[i].classList.remove("is-active");break}for(var n=0;n<t.length;n+=1)if(t[n].getAttribute("data-button-menu-navigation")===e){t[n].classList.add("is-active");break}}(i("valuePersonalAccountMenuItem"));t.forEach((function(i){!function(i,a){var o=i.innerHTML.trim();i.setAttribute(a,o),i.addEventListener("click",e(n)(e(r).mark((function n(){var o,s,c;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=0;case 1:if(!(o<t.length)){e.next=8;break}if(!t[o].classList.contains("is-active")){e.next=5;break}return t[o].classList.remove("is-active"),e.abrupt("break",8);case 5:o+=1,e.next=1;break;case 8:i.classList.toggle("is-active"),s=i.getAttribute(a),c=function(){var e=document.querySelector("body"),t=document.querySelector(".js-menu-container-outside-private-office"),i=document.querySelector(".private-office__open-menu"),n="true"===i.getAttribute("aria-expanded")||!1;i.setAttribute("aria-expanded",!n),t.classList.toggle("visually-hidden"),i.classList.toggle("active"),e.classList.remove("modal-is-open")},localStorage.setItem("valuePersonalAccountMenuItem",JSON.stringify(s)),window.location.assign("private-office.html"),c();case 14:case"end":return e.stop()}}),n)}))))}(i,"data-button-menu-navigation")}))}()})),a.register("2rvMN",(function(e,t){var i=a("h6c0i");document.querySelector(".outside-private-office__exit-button").addEventListener("click",(function(){localStorage.removeItem("currentUser"),i.Notify.info("Вы успешно вышли из системы."),setTimeout((function(){window.location.assign("index.html")}),500)}))}))}();
//# sourceMappingURL=psycholog-exemple.a9703432.js.map