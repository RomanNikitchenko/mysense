var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var l=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,l.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=l);var o=l("iQIUW");const s=document.querySelector(".step__wrap-form-1"),r=document.querySelector(".step__wrap-form-2"),i=document.querySelector(".step__wrap-form-3"),a=document.querySelector(".step__wrap-form-4"),y=document.querySelector(".form__prew-btn"),u=document.querySelector(".form__next-btn"),d=document.querySelector(".form__end-btn");document.querySelectorAll(".step__line");let c=!0,p=1;u.addEventListener("click",(()=>{(function(){if("none"!==s.style.display){const e=document.getElementById("email");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.trim()))return o.Notify.failure("Введіть правильний Email"),!1}else if("none"!==r.style.display){const e=document.getElementById("show2"),t=document.getElementById("show3");if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.value.trim()))return o.Notify.failure("Пароль повинен містити принаймні 8 символів, включаючи великі та малі літери"),!1;if(e.value!==t.value)return o.Notify.failure("Паролі не співпадають"),!1}else if("none"!==i.style.display){const e=document.getElementById("name"),t=document.getElementById("last-name");if(""===e.value.trim())return o.Notify.failure("Заповніть поле Імʼя"),!1;if(""===t.value.trim())return o.Notify.failure("Заповніть поле Прізвище"),!1}return!0})()&&("none"!==s.style.display?(s.style.display="none",r.style.display="block",y.style.display="flex",c=!1,p=2):"none"!==r.style.display?(r.style.display="none",i.style.display="block",p=3):"none"!==i.style.display&&(i.style.display="none",a.style.display="flex",u.style.display="none",d.style.display="block",p=4))})),document.querySelector(".form__prew-btn").addEventListener("click",(()=>{c||("none"!==r.style.display?(r.style.display="none",s.style.display="block",c=!0,y.style.display="none",p=1):"none"!==i.style.display?(i.style.display="none",r.style.display="block",p=2):"none"!==a.style.display&&(a.style.display="none",i.style.display="block",u.style.display="block",d.style.display="none",p=3))}));o=l("iQIUW");document.querySelector(".registration_client").addEventListener("submit",(function(e){e.preventDefault();const{elements:{login:t,password:n}}=e.currentTarget;!function(e,t,n){var l=JSON.parse(localStorage.getItem("users-psychologist"))||[];if(l.some((function(t){return t.username===e})))return void o.Notify.warning("Імя користувача вже зайняте.");var s={username:e,password:t};l.push(s),localStorage.setItem("users-psychologist",JSON.stringify(l)),o.Notify.success("психолог успішно зареєстрований."),n.currentTarget.reset(),function(e,t){var n=(JSON.parse(localStorage.getItem("users-psychologist"))||[]).find((function(t){return t.username===e}));n&&n.password===t?(localStorage.removeItem("currentUser-client"),localStorage.setItem("currentUser-psychologist",JSON.stringify(n)),o.Notify.success("Ви успішно увійшли до систем як психолог."),setTimeout((()=>{window.location.assign("private-office.html")}),500)):o.Notify.warning("Неправильне імя користувача або пароль.")}(e,t)}(t.value,n.value,e)})),l("9dr79");
//# sourceMappingURL=registration_form.5732c0b4.js.map