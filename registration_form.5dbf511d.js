!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,s.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=s);var l=s("h6c0i"),i=document.querySelector(".step__wrap-form-1"),o=document.querySelector(".step__wrap-form-2"),r=document.querySelector(".step__wrap-form-3"),a=document.querySelector(".step__wrap-form-4"),d=document.querySelector(".form__next-btn"),c=document.querySelector(".form__end-btn"),u=document.querySelectorAll(".step__line"),y=!0,f=1;d.addEventListener("click",(function(){if(function(){if("none"!==i.style.display){var e=document.getElementById("email"),t=document.getElementById("phone"),n=/^\d+$/;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.trim()))return l.Notify.info("Введіть правильний Email"),!1;if(!n.test(t.value.trim()))return l.Notify.info("Введіть правильний номер телефону"),!1}else if("none"!==o.style.display){var s=document.getElementById("show2"),a=document.getElementById("show3");if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(s.value.trim()))return l.Notify.info("Пароль повинен містити принаймні 8 символів, включаючи великі та малі літери"),!1;if(s.value!==a.value)return l.Notify.info("Паролі не співпадають"),!1}else if("none"!==r.style.display){var d=document.getElementById("name"),c=document.getElementById("last-name");if(""===d.value.trim())return l.Notify.info("Заповніть поле Імʼя"),!1;if(""===c.value.trim())return l.Notify.info("Заповніть поле Прізвище"),!1}return!0}()){"none"!==i.style.display?(i.style.display="none",o.style.display="block",y=!1,f=2):"none"!==o.style.display?(o.style.display="none",r.style.display="block",f=3):"none"!==r.style.display&&(r.style.display="none",a.style.display="flex",d.style.display="none",c.style.display="block",f=4);for(var e=0;e<u.length;e+=1)if(u[e].classList.contains("step__line-active")){u[e].classList.remove("step__line-active");break}u[f-1].classList.add("step__line-active")}})),document.querySelector(".form__prew-btn").addEventListener("click",(function(){if(!y){"none"!==o.style.display?(o.style.display="none",i.style.display="block",y=!0,f=1):"none"!==r.style.display?(r.style.display="none",o.style.display="block",f=2):"none"!==a.style.display&&(a.style.display="none",r.style.display="block",d.style.display="block",c.style.display="none",f=3);for(var e=0;e<u.length;e+=1)if(u[e].classList.contains("step__line-active")){u[e].classList.remove("step__line-active");break}u[f-1].classList.add("step__line-active")}}));l=s("h6c0i");document.querySelector(".registration_client").addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.login,s=t.password;!function(e,t,n){var s=JSON.parse(localStorage.getItem("users"))||[];if(s.some((function(t){return t.username===e})))return void l.Notify.info("Имя пользователя уже занято.");var i={username:e,password:t};s.push(i),localStorage.setItem("users",JSON.stringify(s)),l.Notify.info("Пользователь успешно зарегистрирован."),n.currentTarget.reset(),function(e,t){var n=(JSON.parse(localStorage.getItem("users"))||[]).find((function(t){return t.username===e}));n&&n.password===t?(localStorage.setItem("currentUser",JSON.stringify(n)),l.Notify.info("Вы успешно вошли в систему."),window.location.assign("private-office.html")):l.Notify.info("Неверное имя пользователя или пароль.")}(e,t)}(n.value,s.value,e)}));var p=document.querySelector(".page-header__private-office-menu"),m=document.querySelector(".login"),v=document.querySelector(".choose-person");JSON.parse(localStorage.getItem("currentUser"))?(p.classList.remove("visually-hidden"),m.classList.add("visually-hidden"),v.classList.add("visually-hidden")):(p&&p.classList.add("visually-hidden"),m&&m.classList.remove("visually-hidden"),v&&v.classList.remove("visually-hidden"))}();
//# sourceMappingURL=registration_form.5dbf511d.js.map
