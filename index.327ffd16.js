const e=document.querySelector(".language-menu"),t=e.querySelector(".language-toggle"),n=t.querySelector(".language"),r=e.querySelector(".language-list"),l=t.querySelector(".icon-arrow");t.addEventListener("click",(function(){e.classList.toggle("open"),l.classList.toggle("rotate")})),r.addEventListener("click",(function(t){t.preventDefault();const r=t.target.getAttribute("lang");document.documentElement.lang=r,n.textContent=t.target.textContent,e.classList.remove("open"),l.classList.remove("rotate")})),(()=>{const e=document.querySelector(".user-manual__button"),t=document.querySelectorAll(".user-manual__item"),n=document.querySelector(".user-manual__list");let r=0,l=!1,o=0;e.addEventListener("click",(e=>{if(!e.currentTarget.classList.contains("user-manual__button"))return;if(l)return;l=!0;const a=window.innerWidth;o-=a>=1280?1140:a>=744?704:370,r===t.length-1?(r=0,o=0):r++,n.style.transform=`translateX(${o}px)`,setTimeout((()=>{l=!1}),500)})),window.addEventListener("resize",(()=>{const e=window.innerWidth;o=e>=1280?1140*-r:e>=744?704*-r:370*-r,n.style.transform=`translateX(${o}px)`}))})();document.querySelectorAll(".item__wrap").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("rotated");const t=e.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}))}));
//# sourceMappingURL=index.327ffd16.js.map
