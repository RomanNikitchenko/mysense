var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in l){var s=l[e];delete l[e];var n={id:e,exports:{}};return t[e]=n,s.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){l[e]=t},e.parcelRequired7c6=s);var n=s("iQIUW");const i=document.querySelector(".step__wrap-form-1"),o=document.querySelector(".step__wrap-form-2"),r=document.querySelector(".step__wrap-form-3"),a=document.querySelector(".step__wrap-form-4"),d=document.querySelector(".form__prew-btn"),c=document.querySelector(".form__next-btn"),u=document.querySelector(".form__end-btn"),y=document.querySelectorAll(".step__line");let f=!0,p=1;c.addEventListener("click",(()=>{if(function(){if("none"!==i.style.display){const e=document.getElementById("email"),t=document.getElementById("phone"),l=/^\d+$/;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.trim()))return n.Notify.failure("Введіть правильний Email"),!1;if(!l.test(t.value.trim()))return n.Notify.failure("Введіть правильний номер телефону"),!1}else if("none"!==o.style.display){const e=document.getElementById("show2"),t=document.getElementById("show3");if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.value.trim()))return n.Notify.failure("Пароль повинен містити принаймні 8 символів, включаючи великі та малі літери"),!1;if(e.value!==t.value)return n.Notify.failure("Паролі не співпадають"),!1}else if("none"!==r.style.display){const e=document.getElementById("name"),t=document.getElementById("last-name");if(""===e.value.trim())return n.Notify.failure("Заповніть поле Імʼя"),!1;if(""===t.value.trim())return n.Notify.failure("Заповніть поле Прізвище"),!1}return!0}()){"none"!==i.style.display?(i.style.display="none",o.style.display="block",d.style.display="flex",f=!1,p=2):"none"!==o.style.display?(o.style.display="none",r.style.display="block",p=3):"none"!==r.style.display&&(r.style.display="none",a.style.display="flex",c.style.display="none",u.style.display="block",p=4);for(let e=0;e<y.length;e+=1)if(y[e].classList.contains("step__line-active")){y[e].classList.remove("step__line-active");break}y[p-1].classList.add("step__line-active")}})),document.querySelector(".form__prew-btn").addEventListener("click",(()=>{if(!f){"none"!==o.style.display?(o.style.display="none",i.style.display="block",f=!0,d.style.display="none",p=1,console.log("1")):"none"!==r.style.display?(r.style.display="none",o.style.display="block",p=2,console.log("2")):"none"!==a.style.display&&(a.style.display="none",r.style.display="block",c.style.display="block",u.style.display="none",p=3,console.log("3"));for(let e=0;e<y.length;e+=1)if(y[e].classList.contains("step__line-active")){y[e].classList.remove("step__line-active");break}y[p-1].classList.add("step__line-active")}}));n=s("iQIUW");document.querySelector(".registration_client").addEventListener("submit",(function(e){e.preventDefault();const{elements:{login:t,password:l}}=e.currentTarget;!function(e,t,l){var s=JSON.parse(localStorage.getItem("users"))||[];if(s.some((function(t){return t.username===e})))return void n.Notify.warning("Імя користувача вже зайняте.");var i={username:e,password:t};s.push(i),localStorage.setItem("users",JSON.stringify(s)),n.Notify.success("Користувач успішно зареєстрований."),l.currentTarget.reset(),function(e,t){var l=(JSON.parse(localStorage.getItem("users"))||[]).find((function(t){return t.username===e}));l&&l.password===t?(localStorage.setItem("currentUser",JSON.stringify(l)),n.Notify.success("Ви успішно увійшли до системи."),setTimeout((()=>{window.location.assign("private-office.html")}),500)):n.Notify.warning("Неправильне імя користувача або пароль.")}(e,t)}(t.value,l.value,e)}));const m=document.querySelector(".page-header__private-office-menu"),v=document.querySelector(".login"),g=document.querySelector(".choose-person");JSON.parse(localStorage.getItem("currentUser"))?(m&&m.classList.remove("visually-hidden"),v&&v.classList.add("visually-hidden"),g&&g.classList.add("visually-hidden")):(m&&m.classList.add("visually-hidden"),v&&v.classList.remove("visually-hidden"),g&&g.classList.remove("visually-hidden"));
//# sourceMappingURL=registration_form.3fa4bd32.js.map
