!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in l){var n=l[e];delete l[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){l[e]=t},e.parcelRequired7c6=n);var s=n("h6c0i"),i=document.querySelector(".step__wrap-form-1"),r=document.querySelector(".step__wrap-form-2"),o=document.querySelector(".step__wrap-form-3"),a=document.querySelector(".step__wrap-form-4"),d=document.querySelector(".form__prew-btn"),c=document.querySelector(".form__next-btn"),u=document.querySelector(".form__end-btn"),y=document.querySelectorAll(".step__line"),f=!0,p=1;c.addEventListener("click",(function(){if(function(){if("none"!==i.style.display){var e=document.getElementById("email"),t=document.getElementById("phone"),l=/^\d+$/;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.trim()))return s.Notify.failure("Введіть правильний Email"),!1;if(!l.test(t.value.trim()))return s.Notify.failure("Введіть правильний номер телефону"),!1}else if("none"!==r.style.display){var n=document.getElementById("show2"),a=document.getElementById("show3");if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(n.value.trim()))return s.Notify.failure("Пароль повинен містити принаймні 8 символів, включаючи великі та малі літери"),!1;if(n.value!==a.value)return s.Notify.failure("Паролі не співпадають"),!1}else if("none"!==o.style.display){var d=document.getElementById("name"),c=document.getElementById("last-name");if(""===d.value.trim())return s.Notify.failure("Заповніть поле Імʼя"),!1;if(""===c.value.trim())return s.Notify.failure("Заповніть поле Прізвище"),!1}return!0}()){"none"!==i.style.display?(i.style.display="none",r.style.display="block",d.style.display="flex",f=!1,p=2):"none"!==r.style.display?(r.style.display="none",o.style.display="block",p=3):"none"!==o.style.display&&(o.style.display="none",a.style.display="flex",c.style.display="none",u.style.display="block",p=4);for(var e=0;e<y.length;e+=1)if(y[e].classList.contains("step__line-active")){y[e].classList.remove("step__line-active");break}y[p-1].classList.add("step__line-active")}})),document.querySelector(".form__prew-btn").addEventListener("click",(function(){if(!f){"none"!==r.style.display?(r.style.display="none",i.style.display="block",f=!0,d.style.display="none",p=1,console.log("1")):"none"!==o.style.display?(o.style.display="none",r.style.display="block",p=2,console.log("2")):"none"!==a.style.display&&(a.style.display="none",o.style.display="block",c.style.display="block",u.style.display="none",p=3,console.log("3"));for(var e=0;e<y.length;e+=1)if(y[e].classList.contains("step__line-active")){y[e].classList.remove("step__line-active");break}y[p-1].classList.add("step__line-active")}}));s=n("h6c0i");document.querySelector(".registration_client").addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,l=t.login,n=t.password;!function(e,t,l){var n=JSON.parse(localStorage.getItem("users"))||[];if(n.some((function(t){return t.username===e})))return void s.Notify.warning("Імя користувача вже зайняте.");var i={username:e,password:t};n.push(i),localStorage.setItem("users",JSON.stringify(n)),s.Notify.success("Користувач успішно зареєстрований."),l.currentTarget.reset(),function(e,t){var l=(JSON.parse(localStorage.getItem("users"))||[]).find((function(t){return t.username===e}));l&&l.password===t?(localStorage.setItem("currentUser",JSON.stringify(l)),s.Notify.success("Ви успішно увійшли до системи."),setTimeout((function(){window.location.assign("private-office.html")}),500)):s.Notify.warning("Неправильне імя користувача або пароль.")}(e,t)}(l.value,n.value,e)}));var m=document.querySelector(".page-header__private-office-menu"),v=document.querySelector(".login"),g=document.querySelector(".choose-person"),_=document.querySelector(".page-header__img-user-client");JSON.parse(localStorage.getItem("currentUser"))?(m&&m.classList.remove("visually-hidden"),v&&v.classList.add("visually-hidden"),g&&g.classList.add("visually-hidden"),_&&(_.style.display="none")):(m&&m.classList.add("visually-hidden"),v&&v.classList.remove("visually-hidden"),g&&g.classList.remove("visually-hidden"))}();
//# sourceMappingURL=registration_form.cf78188d.js.map