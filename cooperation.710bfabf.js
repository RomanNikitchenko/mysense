!function(){var e=document.querySelector(".language-menu"),t=e.querySelector(".language-toggle"),n=t.querySelector(".language"),a=e.querySelector(".language-list"),o=t.querySelector(".icon-arrow");t.addEventListener("click",(function(){e.classList.toggle("open"),o.classList.toggle("rotate")})),a.addEventListener("click",(function(t){t.preventDefault();var a=t.target.getAttribute("lang");document.documentElement.lang=a,n.textContent=t.target.textContent,e.classList.remove("open"),o.classList.remove("rotate")}))}();
//# sourceMappingURL=cooperation.710bfabf.js.map