!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequired7c6=n);var o=n("h6c0i"),r=document.getElementById("email"),s=document.querySelector(".form-restore-password__button-submit"),d=!1,l=!1;function u(){d?s.setAttribute("type","submit"):s.setAttribute("type","button")}r.addEventListener("input",(function(){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.value.trim()))return d=!1,l&&r.classList.add("is-not-valid"),void u();d=!0,r.classList.remove("is-not-valid"),u()})),s.addEventListener("click",(function(){!1===d&&(o.Notify.failure("Введіть правильний Email"),r.classList.add("is-not-valid"),l=!0)}))}();
//# sourceMappingURL=restore-password-form.03ac9c3f.js.map