!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i);var l=i("h6c0i"),s=document.querySelector(".step__wrap-form-1"),o=document.querySelector(".step__wrap-form-2"),r=document.querySelector(".step__wrap-form-3"),a=document.querySelector(".step__wrap-form-4"),d=document.querySelector(".form__next-btn"),y=document.querySelector(".form__end-btn"),c=document.querySelectorAll(".step__line"),u=!0,f=1;d.addEventListener("click",(function(){if(function(){if("none"!==s.style.display){var e=document.getElementById("email"),t=document.getElementById("phone"),n=/^\d+$/;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.trim()))return l.Notify.info("Введіть правильний Email"),!1;if(!n.test(t.value.trim()))return l.Notify.info("Введіть правильний номер телефону"),!1}else if("none"!==o.style.display){var i=document.getElementById("show2"),a=document.getElementById("show3");if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(i.value.trim()))return l.Notify.info("Пароль повинен містити принаймні 8 символів, включаючи великі та малі літери"),!1;if(i.value!==a.value)return l.Notify.info("Паролі не співпадають"),!1}else if("none"!==r.style.display){var d=document.getElementById("name"),y=document.getElementById("last-name");if(""===d.value.trim())return l.Notify.info("Заповніть поле Імʼя"),!1;if(""===y.value.trim())return l.Notify.info("Заповніть поле Прізвище"),!1}return!0}()){"none"!==s.style.display?(s.style.display="none",o.style.display="block",u=!1,f=2):"none"!==o.style.display?(o.style.display="none",r.style.display="block",f=3):"none"!==r.style.display&&(r.style.display="none",a.style.display="flex",d.style.display="none",y.style.display="block",f=4);for(var e=0;e<c.length;e+=1)if(c[e].classList.contains("step__line-active")){c[e].classList.remove("step__line-active");break}c[f-1].classList.add("step__line-active")}})),document.querySelector(".form__prew-btn").addEventListener("click",(function(){if(!u){"none"!==o.style.display?(o.style.display="none",s.style.display="block",u=!0,f=1):"none"!==r.style.display?(r.style.display="none",o.style.display="block",f=2):"none"!==a.style.display&&(a.style.display="none",r.style.display="block",d.style.display="block",y.style.display="none",f=3);for(var e=0;e<c.length;e+=1)if(c[e].classList.contains("step__line-active")){c[e].classList.remove("step__line-active");break}c[f-1].classList.add("step__line-active")}}));l=i("h6c0i");document.querySelector(".registration_client").addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.login,i=t.password;(function(e,t){var n=JSON.parse(localStorage.getItem("users"))||[];if(n.some((function(t){return t.username===e})))return void l.Notify.info("Имя пользователя уже занято.");var i={username:e,password:t};n.push(i),localStorage.setItem("users",JSON.stringify(n)),l.Notify.info("Пользователь успешно зарегистрирован."),function(e,t){var n=(JSON.parse(localStorage.getItem("users"))||[]).find((function(t){return t.username===e}));n&&n.password===t?(localStorage.setItem("currentUser",JSON.stringify(n)),l.Notify.info("Вы успешно вошли в систему."),window.location.assign("private-office.html")):l.Notify.info("Неверное имя пользователя или пароль.")}(e,t)})(n.value,i.value),e.currentTarget.reset()}))}();
//# sourceMappingURL=registration_form.12ff2567.js.map