var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var l=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,l.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=l);var s=l("iQIUW");const o=document.querySelector(".step__wrap-form-1"),i=document.querySelector(".step__wrap-form-2"),r=document.querySelector(".step__wrap-form-3"),a=document.querySelector(".step__wrap-form-4"),d=document.querySelector(".form__next-btn"),y=document.querySelector(".form__end-btn"),c=document.querySelectorAll(".step__line");let u=!0,f=1;d.addEventListener("click",(()=>{if(function(){if("none"!==o.style.display){const e=document.getElementById("email"),t=document.getElementById("phone"),n=/^\d+$/;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.trim()))return s.Notify.info("Введіть правильний Email"),!1;if(!n.test(t.value.trim()))return s.Notify.info("Введіть правильний номер телефону"),!1}else if("none"!==i.style.display){const e=document.getElementById("show2"),t=document.getElementById("show3");if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.value.trim()))return s.Notify.info("Пароль повинен містити принаймні 8 символів, включаючи великі та малі літери"),!1;if(e.value!==t.value)return s.Notify.info("Паролі не співпадають"),!1}else if("none"!==r.style.display){const e=document.getElementById("name"),t=document.getElementById("last-name");if(""===e.value.trim())return s.Notify.info("Заповніть поле Імʼя"),!1;if(""===t.value.trim())return s.Notify.info("Заповніть поле Прізвище"),!1}return!0}()){"none"!==o.style.display?(o.style.display="none",i.style.display="block",u=!1,f=2):"none"!==i.style.display?(i.style.display="none",r.style.display="block",f=3):"none"!==r.style.display&&(r.style.display="none",a.style.display="flex",d.style.display="none",y.style.display="block",f=4);for(let e=0;e<c.length;e+=1)if(c[e].classList.contains("step__line-active")){c[e].classList.remove("step__line-active");break}c[f-1].classList.add("step__line-active")}})),document.querySelector(".form__prew-btn").addEventListener("click",(()=>{if(!u){"none"!==i.style.display?(i.style.display="none",o.style.display="block",u=!0,f=1):"none"!==r.style.display?(r.style.display="none",i.style.display="block",f=2):"none"!==a.style.display&&(a.style.display="none",r.style.display="block",d.style.display="block",y.style.display="none",f=3);for(let e=0;e<c.length;e+=1)if(c[e].classList.contains("step__line-active")){c[e].classList.remove("step__line-active");break}c[f-1].classList.add("step__line-active")}}));s=l("iQIUW");document.querySelector(".registration_client").addEventListener("submit",(function(e){e.preventDefault();const{elements:{login:t,password:n}}=e.currentTarget;(function(e,t){var n=JSON.parse(localStorage.getItem("users"))||[];if(n.some((function(t){return t.username===e})))return void s.Notify.info("Имя пользователя уже занято.");var l={username:e,password:t};n.push(l),localStorage.setItem("users",JSON.stringify(n)),s.Notify.info("Пользователь успешно зарегистрирован."),function(e,t){var n=(JSON.parse(localStorage.getItem("users"))||[]).find((function(t){return t.username===e}));n&&n.password===t?(localStorage.setItem("currentUser",JSON.stringify(n)),s.Notify.info("Вы успешно вошли в систему."),window.location.assign("private-office.html")):s.Notify.info("Неверное имя пользователя или пароль.")}(e,t)})(t.value,n.value),e.currentTarget.reset()}));
//# sourceMappingURL=registration_form.2e176018.js.map