function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},r.parcelRequired7c6=o),o.register("kyEFX",(function(t,r){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"7bk21":"index.f497bd40.js","kIIor":"our-team-mobil@2x.5b5f9fdf.jpg","5Cljq":"our-team-tablet@2x.98e227fc.jpg","ejQEY":"our-team-desktop@2x.8224c6f3.jpg","lG5Am":"ourTeam2Mobil2x.aa12037f.jpg","jjvQm":"ourTeam2Tablet2x.c16dd0ab.jpg","hHb5G":"ourTeam2Desktop2x.e53b9291.jpg","lVvja":"ourTeam3Mobil2x.05af7411.jpg","88zNe":"ourTeam3Tablet2x.2e378e61.jpg","9ik3G":"ourTeam3Desktop2x.cbb7655f.jpg","7hgjP":"ourTeam4Mobil2x.eb0c39fd.jpg","3D0jQ":"ourTeam4Tablet2x.0970d16e.jpg","idew3":"ourTeam4Desktop2x.93c110aa.jpg","iqSFM":"Hello.b4dc4863.png","Eiy8N":"psycholog-exemple.ae2d690f.js"}')),o("cangy"),(()=>{const e=document.querySelector(".user-manual__button"),t=document.querySelectorAll(".user-manual__item"),r=document.querySelector(".user-manual__list");let n=0,i=!1,o=0;e.addEventListener("click",(e=>{if(!e.currentTarget.classList.contains("user-manual__button"))return;if(i)return;i=!0;const a=window.innerWidth;o-=a>=1280?1140:a>=744?704:370,n===t.length-1?(n=0,o=0):n++,r.style.transform=`translateX(${o}px)`,setTimeout((()=>{i=!1}),500)})),window.addEventListener("resize",(()=>{const e=window.innerWidth;o=e>=1280?1140*-n:e>=744?704*-n:370*-n,r.style.transform=`translateX(${o}px)`}))})();document.querySelectorAll(".item__wrap").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("rotated");const t=e.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}))}));var a;a=new URL(o("kyEFX").resolve("kIIor"),import.meta.url).toString();var s;s=new URL(o("kyEFX").resolve("5Cljq"),import.meta.url).toString();var l;l=new URL(o("kyEFX").resolve("ejQEY"),import.meta.url).toString();var c;c=new URL(o("kyEFX").resolve("lG5Am"),import.meta.url).toString();var u;u=new URL(o("kyEFX").resolve("jjvQm"),import.meta.url).toString();var m;m=new URL(o("kyEFX").resolve("hHb5G"),import.meta.url).toString();var p;p=new URL(o("kyEFX").resolve("lVvja"),import.meta.url).toString();var d;d=new URL(o("kyEFX").resolve("88zNe"),import.meta.url).toString();var x;x=new URL(o("kyEFX").resolve("9ik3G"),import.meta.url).toString();var _;_=new URL(o("kyEFX").resolve("7hgjP"),import.meta.url).toString();var f;f=new URL(o("kyEFX").resolve("3D0jQ"),import.meta.url).toString();var g;g=new URL(o("kyEFX").resolve("idew3"),import.meta.url).toString();var S;const v=[{name:"Іван Виговський",experience:"3 роки практики",specialties:["Тривога","Страх","Мотивація","Вигорання","Стосунки"],priceValue:"300",priceUnit:"грн/час",iconSrc:t(S=new URL(o("kyEFX").resolve("iqSFM"),import.meta.url).toString()),status:!1,friendly:!1,photoSources:[{media:"(min-width: 1280px)",srcset:`${t(l)} 1x, ${t(l)} 2x`},{media:"(min-width: 744px)",srcset:`${t(s)} 1x, ${t(s)} 2x`},{media:"(max-width: 743px)",srcset:`${t(a)} 1x, ${t(a)} 2x`}],photoSrc:t(a),alt:"Фото Іван Виговський"},{name:"Марія Оса",experience:"12 років практикиx",specialties:["Тривога","Страх","Мотивація","Вигорання","Стосунки"],priceValue:"1200",priceUnit:"грн/час",iconSrc:t(S),status:!1,friendly:!1,photoSources:[{media:"(min-width: 1280px)",srcset:`${t(m)} 1x, ${t(m)} 2x`},{media:"(min-width: 744px)",srcset:`${t(u)} 1x, ${t(u)} 2x`},{media:"(max-width: 743px)",srcset:`${t(c)} 1x, ${t(c)} 2x`}],photoSrc:t(c),alt:"Фото Марія Оса"},{name:"Олег Марʼяненко",experience:"5 років практики",specialties:["Тривога","Страх","Мотивація","Вигорання","Стосунки"],priceValue:"450",priceUnit:"грн/час",iconSrc:t(S),status:!0,friendly:!0,photoSources:[{media:"(min-width: 1280px)",srcset:`${t(x)} 1x, ${t(x)} 2x`},{media:"(min-width: 744px)",srcset:`${t(d)} 1x, ${t(d)} 2x`},{media:"(max-width: 743px)",srcset:`${t(p)} 1x, ${t(p)} 2x`}],photoSrc:t(p),alt:"Фото Олег Марʼяненко"},{name:"Карина Вайн",experience:"10 років практикиx",specialties:["Тривога","Страх","Мотивація","Вигорання","Стосунки"],priceValue:"1000",priceUnit:"грн/час",iconSrc:t(S),status:!0,friendly:!1,photoSources:[{media:"(min-width: 1280px)",srcset:`${t(g)} 1x, ${t(g)} 2x`},{media:"(min-width: 744px)",srcset:`${t(f)} 1x, ${t(f)} 2x`},{media:"(max-width: 743px)",srcset:`${t(_)} 1x, ${t(_)} 2x`}],photoSrc:t(_),alt:"фото Карина Вайн"}],b=document.querySelector(".our-team__list"),h=v.map((({photoSources:e,photoSrc:t,alt:r,name:n,experience:i,specialties:o,priceValue:a,priceUnit:s,iconSrc:l,status:c,friendly:u})=>`\n                <li class="our-team__item">\n                    <figure class="our-team__photo">\n                        <picture>\n                            ${e.map((e=>`<source media="${e.media}" srcset="${e.srcset}" />`)).join("")}\n                            <img src="${t}" alt="${r}" />\n                        </picture>\n                        <figcaption class="our-team__caption">\n                            <h3 class="our-team__name">${n}<span class="our-team__status ${c?"online":"offline"}"></span></h3>\n                            <p class="our-team__experience">${i}</p>\n                        </figcaption>\n                    </figure>\n                    <ul class="our-team__specialties">\n                        ${o.map((e=>`<li class="our-team__specialty">${e}</li>`)).join("")}\n                    </ul>\n                    <div class="our-team__price">\n                        <span class="our-team__price-value">${a}</span><span class="our-team__price-unit">${s}</span>\n                    </div>\n                    <div class="our-team__buttons">\n                    \n                        <button type="button" class="our-team__session-button ${u?"":"not--friendly"}">Записатись на сессію</button>\n\n                        <button type="button" class="our-team__details-button ${u?"friendly":""}">\n                            <img class="our-team__icon-Hello" src="${l}" alt="icon Hello">\n                        </button>\n                    </div>\n                </li>`)).join("");b.insertAdjacentHTML("beforeend",h),o("8FnLx");
//# sourceMappingURL=index.f497bd40.js.map
