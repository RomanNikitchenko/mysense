var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},o=t.parcelRequired7c6;function a(t,e){return!t.length}function n(t,e,i){for(let e=0;e<t.length;e+=1)if(t[e].classList.contains("active")){t[e].classList.remove("active");break}e.classList.contains("visually-hidden")||t[i-1].classList.add("active")}null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in i){var o=i[t];delete i[t];var a={id:t,exports:{}};return e[t]=a,o.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){i[t]=e},t.parcelRequired7c6=o),o("8FnLx"),o("cangy"),document.querySelectorAll(".request-item__wrap").forEach((t=>{t.addEventListener("click",(()=>{t.classList.toggle("rotated");const e=t.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))}));var s=o("9wjVU");async function l({array:t,gender:e,lang:i,cost:o}){const a=await s.fakeAPI;if(a){const n=await function({response:t,array:e,gender:i,lang:o,cost:a}){return 0===e.length?[]:t.filter((t=>{const n=e.every((e=>t.specialties.includes(e)));let s=!1;(0===i.length||i.includes(t.gender))&&(s=!0);let l=!1;(0===a.length||a.includes(t.priceRange))&&(l=!0);const r=o.every((e=>t.languages.includes(e)));return n&&s&&l&&r}))}({response:a,array:t,gender:e,lang:i,cost:o});return{data:n.slice(0,8),hits:n.length}}console.log("Ошибка !response")}function r({data:t,hits:e}){const i=document.querySelector(".user-manual__list");document.querySelector(".right-block__subtitle").innerHTML=`${e} психологів`;const o=[],a=t.slice(0,8);for(let t=0;t<a.length;t+=4){const e=a.slice(t,t+4).map((t=>`<li class="result__card-wrap" data-result-id="${t.id}">\n        <div class="card__img">\n          <img src="${t.photoSrc}" alt="" />\n        </div>\n        <div class="card__info">\n          <h3>${t.name}</h3>\n          <p>${t.experience}</p>\n          <div class="card__price">${t.priceValue}<span>грн/год</span></div>\n        </div>\n      </li>`)).join("");o.push(`<li class="user-manual__item"><ul class="result__cards">${e}</ul></li>`)}i.innerHTML=o.join("");document.querySelectorAll(".result__card-wrap").forEach((e=>{e.addEventListener("click",(()=>{const i=e.getAttribute("data-result-id"),o=(a=i,t.find((t=>t.id===a)));var a;localStorage.setItem("item",JSON.stringify(o)),localStorage.setItem("items",JSON.stringify({data:t,itemId:i})),window.location.assign("psycholog-exemple.html")}))}))}var c,d,f=async(t=[],e=[],i=[],o=[])=>{console.log(t),console.log(e),console.log(i),console.log(o);try{const{data:a,hits:n}=await l({array:t,gender:e,lang:i,cost:o});r({data:a,hits:n})}catch(t){console.log("Ошибка",t)}},m={};c=void 0!==t?t:"undefined"!=typeof window?window:m,d=function(t){if(void 0===t&&void 0===t.document)return!1;var e,i="Success",o="Failure",a="Warning",n="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},l=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},r=function(e){return e||(e="head"),null!==t.document[e]||(l('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var o=function(i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e&&"[object Object]"===Object.prototype.toString.call(i[o])?t[o]=c(t[o],i[o]):t[o]=i[o])};i<arguments.length;i++)o(arguments[i]);return t},d=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,m=function(l,d,m,u){if(!r("body"))return!1;e||y.Notify.init({});var p=c(!0,e,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof u&&!Array.isArray(u)){var v={};"object"==typeof m?v=m:"object"==typeof u&&(v=u),e=c(!0,e,v)}var x,h,g=e[l.toLocaleLowerCase("en")];f++,"string"!=typeof d&&(d="Notiflix "+l),e.plainText&&(x=d,(h=t.document.createElement("div")).innerHTML=x,d=h.textContent||h.innerText||""),!e.plainText&&d.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),d='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),d.length>e.messageMaxLength&&(d=d.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(g.fontAwesomeIconColor=g.background),e.cssAnimation||(e.cssAnimationDuration=0);var b=t.document.getElementById(s.wrapID)||t.document.createElement("div");if(b.id=s.wrapID,b.style.width=e.width,b.style.zIndex=e.zindex,b.style.opacity=e.opacity,"center-center"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.top=e.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===e.position?(b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.left="auto"):"left-top"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===e.position?(b.style.left=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=e.distance,b.style.top=e.distance,b.style.left="auto",b.style.bottom="auto"),e.backOverlay){var w=t.document.getElementById(s.overlayID)||t.document.createElement("div");w.id=s.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=e.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=g.backOverlayColor||e.backOverlayColor,w.className=e.cssAnimation?"nx-with-animation":"",w.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(s.overlayID)||t.document.body.appendChild(w)}t.document.getElementById(s.wrapID)||t.document.body.appendChild(b);var k=t.document.createElement("div");k.id=e.ID+"-"+f,k.className=e.className+" "+g.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof m?"nx-with-close-button":"")+" "+("function"==typeof m?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=g.textColor,k.style.background=g.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var L="";if(e.closeButton&&"function"!=typeof m&&(L='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+g.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+g.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+g.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+d+"</span>"+(e.closeButton?L:"");else{var N="";l===i?N='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':l===o?N='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':l===a?N='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':l===n&&(N='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=N+'<span class="nx-message nx-with-icon">'+d+"</span>"+(e.closeButton?L:"")}else k.innerHTML='<span class="nx-message">'+d+"</span>"+(e.closeButton?L:"");if("left-bottom"===e.position||"right-bottom"===e.position){var _=t.document.getElementById(s.wrapID);_.insertBefore(k,_.firstChild)}else t.document.getElementById(s.wrapID).appendChild(k);var S=t.document.getElementById(k.id);if(S){var A,I,C=function(){S.classList.add("nx-remove");var e=t.document.getElementById(s.overlayID);e&&b.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(A)},E=function(){if(S&&null!==S.parentNode&&S.parentNode.removeChild(S),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var e=t.document.getElementById(s.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(I)};if(e.closeButton&&"function"!=typeof m&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){C();var t=setTimeout((function(){E(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof m||e.clickToClose)&&S.addEventListener("click",(function(){"function"==typeof m&&m(),C();var t=setTimeout((function(){E(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof m){var z=function(){A=setTimeout((function(){C()}),e.timeout),I=setTimeout((function(){E()}),e.timeout+e.cssAnimationDuration)};z(),e.pauseOnHover&&(S.addEventListener("mouseenter",(function(){S.classList.add("nx-paused"),clearTimeout(A),clearTimeout(I)})),S.addEventListener("mouseleave",(function(){S.classList.remove("nx-paused"),z()})))}}if(e.showOnlyTheLastOne&&f>0)for(var q=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+f+"])"),W=0;W<q.length;W++){var T=q[W];null!==T.parentNode&&T.parentNode.removeChild(T)}e=c(!0,e,p)},y={Notify:{init:function(i){e=c(!0,s,i),function(e,i){if(!r("head"))return!1;if(null!==e()&&!t.document.getElementById(i)){var o=t.document.createElement("style");o.id=i,o.innerHTML=e(),t.document.head.appendChild(o)}}(d,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return l("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,o){m(i,t,e,o)},failure:function(t,e,i){m(o,t,e,i)},warning:function(t,e,i){m(a,t,e,i)},info:function(t,e,i){m(n,t,e,i)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:y.Notify}):{Notify:y.Notify}},"function"==typeof define&&define.amd?define([],(function(){return d(c)})):"object"==typeof m?m=d(c):c.Notiflix=d(c),(()=>{const t=document.querySelectorAll(".test__line"),e=document.querySelector(".testpage__title"),i=document.querySelector(".testpage__cards"),o=document.querySelectorAll(".test__card-wrap"),s=document.querySelector(".fixed__box"),l=document.querySelector(".state"),r=document.querySelector(".requests"),c=document.querySelector(".consern"),d=document.querySelector(".category"),y=document.querySelector(".result"),u=document.querySelector(".fixed__button-load-more"),p=document.querySelector("section.gender"),v=document.querySelector("section.lang"),x=document.querySelector("section.cost");let h=[],g=!1,b=!1,w=!1,k=[],L=[],N=[],_=[],S=[],A=[],I=[],C=!1,E=0;o.forEach((t=>{t.addEventListener("click",(async e=>{for(let t=0;t<o.length;t+=1)if(o[t].classList.contains("is-active")){o[t].classList.remove("is-active");break}h=[],"myself"===e.currentTarget.dataset.for&&(g=!0,b=!1,w=!1,h.push("myself")),"family"===e.currentTarget.dataset.for&&(g=!1,b=!0,w=!1,h.push("family")),"child"===e.currentTarget.dataset.for&&(g=!1,b=!1,w=!0,h.push("child")),await f([...h]),t.classList.add("is-active"),s.classList.remove("visually-hidden")}))}));const z=document.querySelector(".fixed__button-next");z.addEventListener("click",(async()=>{if(!C){if(0===E){if(E+=1,e.classList.add("visually-hidden"),i.classList.add("visually-hidden"),g)return l.classList.remove("visually-hidden"),void await f([...h,...k]);if(b)return c.classList.remove("visually-hidden"),C=a(N),void await f([...h,...N]);if(w)return d.classList.remove("visually-hidden"),C=a(_),void await f([...h,..._])}if(1===E){if(g)return E+=1,l.classList.add("visually-hidden"),r.classList.remove("visually-hidden"),C=a(L),void await f([...h,...k,...L]);if(b)return E+=1,c.classList.add("visually-hidden"),p.classList.remove("visually-hidden"),v.classList.remove("visually-hidden"),x.classList.remove("visually-hidden"),void await f([...h,...N],S,A,I);if(w)return E+=1,d.classList.add("visually-hidden"),p.classList.remove("visually-hidden"),v.classList.remove("visually-hidden"),x.classList.remove("visually-hidden"),void await f([...h,..._],S,A,I)}if(2===E){if(g)return E+=1,r.classList.add("visually-hidden"),p.classList.remove("visually-hidden"),v.classList.remove("visually-hidden"),x.classList.remove("visually-hidden"),void await f([...h,...k,...L],S,A,I);if(b)return E+=1,z.classList.add("visually-hidden"),y.classList.remove("visually-hidden"),u.classList.remove("visually-hidden"),p.classList.add("visually-hidden"),v.classList.add("visually-hidden"),x.classList.add("visually-hidden"),void n(t,y,2);if(w)return E+=1,z.classList.add("visually-hidden"),y.classList.remove("visually-hidden"),u.classList.remove("visually-hidden"),p.classList.add("visually-hidden"),v.classList.add("visually-hidden"),x.classList.add("visually-hidden"),void n(t,y,2)}return 3===E&&g?(E+=1,z.classList.add("visually-hidden"),y.classList.remove("visually-hidden"),u.classList.remove("visually-hidden"),p.classList.add("visually-hidden"),v.classList.add("visually-hidden"),x.classList.add("visually-hidden"),void n(t,y,2)):void 0}m.Notify.info("Зробіть свій вибір.")}));document.querySelector(".fixed__button-prew").addEventListener("click",(async()=>{if(C=!1,1===E){if(E-=1,e.classList.remove("visually-hidden"),i.classList.remove("visually-hidden"),g)return l.classList.add("visually-hidden"),void await f([...h]);if(b)return c.classList.add("visually-hidden"),void await f([...h]);if(w)return d.classList.add("visually-hidden"),void await f([...h])}if(2===E){if(g)return E-=1,r.classList.add("visually-hidden"),l.classList.remove("visually-hidden"),void await f([...h,...k]);if(b)return E-=1,c.classList.remove("visually-hidden"),z.classList.remove("visually-hidden"),y.classList.add("visually-hidden"),u.classList.add("visually-hidden"),p.classList.add("visually-hidden"),v.classList.add("visually-hidden"),x.classList.add("visually-hidden"),n(t,c,1),void await f([...h,...N]);if(w)return E-=1,d.classList.remove("visually-hidden"),z.classList.remove("visually-hidden"),y.classList.add("visually-hidden"),u.classList.add("visually-hidden"),p.classList.add("visually-hidden"),v.classList.add("visually-hidden"),x.classList.add("visually-hidden"),n(t,d,1),void await f([...h,..._])}if(3===E){if(g)return E-=1,r.classList.remove("visually-hidden"),p.classList.add("visually-hidden"),v.classList.add("visually-hidden"),x.classList.add("visually-hidden"),void await f([...h,...k,...L]);if(b)return E-=1,p.classList.remove("visually-hidden"),v.classList.remove("visually-hidden"),x.classList.remove("visually-hidden"),y.classList.add("visually-hidden"),z.classList.remove("visually-hidden"),u.classList.add("visually-hidden"),n(t,p,1),void await f([...h,...N],S,A,I);if(w)return E-=1,p.classList.remove("visually-hidden"),v.classList.remove("visually-hidden"),x.classList.remove("visually-hidden"),y.classList.add("visually-hidden"),z.classList.remove("visually-hidden"),u.classList.add("visually-hidden"),n(t,p,1),void await f([...h,..._],S,A,I)}if(4===E&&g)return E-=1,p.classList.remove("visually-hidden"),v.classList.remove("visually-hidden"),x.classList.remove("visually-hidden"),y.classList.add("visually-hidden"),z.classList.remove("visually-hidden"),u.classList.add("visually-hidden"),n(t,p,1),void await f([...h,...k,...L],S,A,I)}));const q=(t,e,i)=>{const o=t.firstElementChild.innerHTML.trim();t.setAttribute(e,o),t.addEventListener("click",(async()=>{const o=t.getAttribute(e),n=i.indexOf(o);-1!==n?i.splice(n,1):i.push(o),t.classList.toggle("is-active"),"data-button-my-Requests"!==e&&"data-button-consern"!==e&&"data-button-category"!==e||(C=a(i)),"data-button-my-state"===e&&await f([...h,...k]),"data-button-my-Requests"===e&&await f([...h,...k,...L]),"data-button-consern"===e&&await f([...h,...N]),"data-button-category"===e&&await f([...h,..._])}))};document.querySelectorAll(".state .card__link-btn").forEach((t=>{q(t,"data-button-my-state",k)}));document.querySelectorAll(".requests .card__link-btn").forEach((t=>{q(t,"data-button-my-Requests",L)}));document.querySelectorAll(".consern .card__link-btn").forEach((t=>{q(t,"data-button-consern",N)}));document.querySelectorAll(".category .card__link-btn").forEach((t=>{q(t,"data-button-category",_)}));const W=document.querySelectorAll(".gender .card__link-btn");W.forEach((t=>{t.addEventListener("click",(async()=>{const e=t.getAttribute("data-button-gender"),i=S.indexOf(e);if(-1!==i?S.splice(i,1):(S=[],""!==e&&S.push(e)),g&&await f([...h,...k,...L],S,A,I),b&&await f([...h,...N],S,A,I),w&&await f([...h,..._],S,A,I),t.classList.contains("is-active"))t.classList.remove("is-active");else{for(let t=0;t<W.length;t+=1)if(W[t].classList.contains("is-active")){W[t].classList.remove("is-active");break}t.classList.add("is-active")}}))}));const T=document.querySelectorAll(".lang .card__link-btn");T.forEach((t=>{t.addEventListener("click",(async()=>{const e=t.getAttribute("data-button-lang"),i=A.indexOf(e);if(-1!==i?A.splice(i,1):(A=[],""!==e&&A.push(e)),g&&await f([...h,...k,...L],S,A,I),b&&await f([...h,...N],S,A,I),w&&await f([...h,..._],S,A,I),t.classList.contains("is-active"))t.classList.remove("is-active");else{for(let t=0;t<T.length;t+=1)if(T[t].classList.contains("is-active")){T[t].classList.remove("is-active");break}t.classList.add("is-active")}}))}));const O=document.querySelectorAll(".cost .card__link-btn");O.forEach((t=>{t.addEventListener("click",(async()=>{const e=t.getAttribute("data-button-cost"),i=I.indexOf(e);if(-1!==i?I.splice(i,1):(I=[],""!==e&&I.push(e)),g&&await f([...h,...k,...L],S,A,I),b&&await f([...h,...N],S,A,I),w&&await f([...h,..._],S,A,I),t.classList.contains("is-active"))t.classList.remove("is-active");else{for(let t=0;t<O.length;t+=1)if(O[t].classList.contains("is-active")){O[t].classList.remove("is-active");break}t.classList.add("is-active")}}))})),(async()=>{await f([...h])})()})(),(()=>{const t=document.querySelector(".fixed__button-load-more"),e=document.querySelector(".user-manual__list");let i=0,o=!1,a=0;t.addEventListener("click",(t=>{const n=document.querySelectorAll(".user-manual__item");if(!t.currentTarget.classList.contains("fixed__button-load-more"))return;if(o)return;o=!0;const s=window.innerWidth;a-=s>=1280?1220:s>=744?704:370,i===n.length-1?(i=0,a=0):i++,e.style.transform=`translateX(${a}px)`,setTimeout((()=>{o=!1}),500)})),window.addEventListener("resize",(()=>{const t=window.innerWidth;a=t>=1280?1220*-i:t>=744?704*-i:370*-i,e.style.transform=`translateX(${a}px)`}))})(),(()=>{const t=document.querySelector(".form__payment-method"),e=document.querySelector(".payment-card"),i=document.querySelector(".payment-card-list"),o=document.querySelector(".payment-card__value"),a=document.querySelectorAll(".payment-card-button");t.addEventListener("click",(()=>{e.classList.toggle("rotated"),i.style.maxHeight?i.style.maxHeight=null:i.style.maxHeight=i.scrollHeight+"px"})),i.addEventListener("click",(t=>{t.preventDefault(),t.target.classList.contains("payment-card-button")&&(e.classList.toggle("rotated"),a.forEach((t=>t.classList.remove("active"))),t.target.classList.add("active"),o.textContent=t.target.textContent,i.style.maxHeight=null)}))})();
//# sourceMappingURL=testpage.ab7699ac.js.map
