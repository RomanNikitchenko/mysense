var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},o=t.parcelRequired7c6;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in i){var o=i[t];delete i[t];var n={id:t,exports:{}};return e[t]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},t.parcelRequired7c6=o),o("8FnLx"),o("cangy");function n(t,e){return!t.length}function a(t,e,i){for(let e=0;e<t.length;e+=1)if(t[e].classList.contains("active")){t[e].classList.remove("active");break}e.classList.contains("visually-hidden")||t[i-1].classList.add("active")}document.querySelectorAll(".request-item__wrap").forEach((t=>{t.addEventListener("click",(()=>{t.classList.toggle("rotated");const e=t.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))}));var s,r,l={};s=void 0!==t?t:"undefined"!=typeof window?window:l,r=function(t){if(void 0===t&&void 0===t.document)return!1;var e,i="Success",o="Failure",n="Warning",a="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(r('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var o=function(i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e&&"[object Object]"===Object.prototype.toString.call(i[o])?t[o]=c(t[o],i[o]):t[o]=i[o])};i<arguments.length;i++)o(arguments[i]);return t},d=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,m=function(r,d,m,p){if(!l("body"))return!1;e||y.Notify.init({});var u=c(!0,e,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof p&&!Array.isArray(p)){var x={};"object"==typeof m?x=m:"object"==typeof p&&(x=p),e=c(!0,e,x)}var v,b,h=e[r.toLocaleLowerCase("en")];f++,"string"!=typeof d&&(d="Notiflix "+r),e.plainText&&(v=d,(b=t.document.createElement("div")).innerHTML=v,d=b.textContent||b.innerText||""),!e.plainText&&d.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),d='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),d.length>e.messageMaxLength&&(d=d.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(h.fontAwesomeIconColor=h.background),e.cssAnimation||(e.cssAnimationDuration=0);var g=t.document.getElementById(s.wrapID)||t.document.createElement("div");if(g.id=s.wrapID,g.style.width=e.width,g.style.zIndex=e.zindex,g.style.opacity=e.opacity,"center-center"===e.position?(g.style.left=e.distance,g.style.top=e.distance,g.style.right=e.distance,g.style.bottom=e.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):"center-top"===e.position?(g.style.left=e.distance,g.style.right=e.distance,g.style.top=e.distance,g.style.bottom="auto",g.style.margin="auto"):"center-bottom"===e.position?(g.style.left=e.distance,g.style.right=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.margin="auto"):"right-bottom"===e.position?(g.style.right=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.left="auto"):"left-top"===e.position?(g.style.left=e.distance,g.style.top=e.distance,g.style.right="auto",g.style.bottom="auto"):"left-bottom"===e.position?(g.style.left=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=e.distance,g.style.top=e.distance,g.style.left="auto",g.style.bottom="auto"),e.backOverlay){var w=t.document.getElementById(s.overlayID)||t.document.createElement("div");w.id=s.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=e.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=h.backOverlayColor||e.backOverlayColor,w.className=e.cssAnimation?"nx-with-animation":"",w.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(s.overlayID)||t.document.body.appendChild(w)}t.document.getElementById(s.wrapID)||t.document.body.appendChild(g);var k=t.document.createElement("div");k.id=e.ID+"-"+f,k.className=e.className+" "+h.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof m?"nx-with-close-button":"")+" "+("function"==typeof m?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=h.textColor,k.style.background=h.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var N="";if(e.closeButton&&"function"!=typeof m&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+h.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+h.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+h.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+d+"</span>"+(e.closeButton?N:"");else{var L="";r===i?L='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':r===o?L='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':r===n?L='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':r===a&&(L='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=L+'<span class="nx-message nx-with-icon">'+d+"</span>"+(e.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+d+"</span>"+(e.closeButton?N:"");if("left-bottom"===e.position||"right-bottom"===e.position){var C=t.document.getElementById(s.wrapID);C.insertBefore(k,C.firstChild)}else t.document.getElementById(s.wrapID).appendChild(k);var I=t.document.getElementById(k.id);if(I){var A,z,S=function(){I.classList.add("nx-remove");var e=t.document.getElementById(s.overlayID);e&&g.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(A)},E=function(){if(I&&null!==I.parentNode&&I.parentNode.removeChild(I),g.childElementCount<=0&&null!==g.parentNode){g.parentNode.removeChild(g);var e=t.document.getElementById(s.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(z)};if(e.closeButton&&"function"!=typeof m&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){S();var t=setTimeout((function(){E(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof m||e.clickToClose)&&I.addEventListener("click",(function(){"function"==typeof m&&m(),S();var t=setTimeout((function(){E(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof m){var W=function(){A=setTimeout((function(){S()}),e.timeout),z=setTimeout((function(){E()}),e.timeout+e.cssAnimationDuration)};W(),e.pauseOnHover&&(I.addEventListener("mouseenter",(function(){I.classList.add("nx-paused"),clearTimeout(A),clearTimeout(z)})),I.addEventListener("mouseleave",(function(){I.classList.remove("nx-paused"),W()})))}}if(e.showOnlyTheLastOne&&f>0)for(var T=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+f+"])"),_=0;_<T.length;_++){var q=T[_];null!==q.parentNode&&q.parentNode.removeChild(q)}e=c(!0,e,u)},y={Notify:{init:function(i){e=c(!0,s,i),function(e,i){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(i)){var o=t.document.createElement("style");o.id=i,o.innerHTML=e(),t.document.head.appendChild(o)}}(d,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return r("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,o){m(i,t,e,o)},failure:function(t,e,i){m(o,t,e,i)},warning:function(t,e,i){m(n,t,e,i)},info:function(t,e,i){m(a,t,e,i)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:y.Notify}):{Notify:y.Notify}},"function"==typeof define&&define.amd?define([],(function(){return r(s)})):"object"==typeof l?l=r(s):s.Notiflix=r(s),(()=>{const t=document.querySelectorAll(".test__line"),e=document.querySelector(".testpage__title"),i=document.querySelector(".testpage__cards"),o=document.querySelectorAll(".test__card-wrap"),s=document.querySelector(".fixed__box"),r=document.querySelector(".state"),c=document.querySelector(".requests"),d=document.querySelector(".consern"),f=document.querySelector(".category"),m=document.querySelector(".result"),y=document.querySelector(".fixed__button-load-more");let p=!1,u=!1,x=!1,v=[],b=[],h=[],g=[],w=!1,k=0;o.forEach((t=>{t.addEventListener("click",(e=>{for(let t=0;t<o.length;t+=1)if(o[t].classList.contains("is-active")){o[t].classList.remove("is-active");break}"myself"===e.currentTarget.dataset.for&&(p=!0,u=!1,x=!1),"family"===e.currentTarget.dataset.for&&(p=!1,u=!0,x=!1),"child"===e.currentTarget.dataset.for&&(p=!1,u=!1,x=!0),t.classList.add("is-active"),s.classList.remove("visually-hidden")}))}));const N=document.querySelector(".fixed__button-next");N.addEventListener("click",(()=>{if(!w){if(0===k){if(k+=1,e.classList.add("visually-hidden"),i.classList.add("visually-hidden"),p)return void r.classList.remove("visually-hidden");if(u)return d.classList.remove("visually-hidden"),void(w=n(h));if(x)return f.classList.remove("visually-hidden"),void(w=n(g))}if(1===k){if(p)return k+=1,r.classList.add("visually-hidden"),c.classList.remove("visually-hidden"),void(w=n(b));if(u)return k+=1,d.classList.add("visually-hidden"),N.classList.add("visually-hidden"),m.classList.remove("visually-hidden"),y.classList.remove("visually-hidden"),void a(t,m,2);if(x)return k+=1,f.classList.add("visually-hidden"),N.classList.add("visually-hidden"),m.classList.remove("visually-hidden"),y.classList.remove("visually-hidden"),void a(t,m,2)}return 2===k&&p?(k+=1,c.classList.add("visually-hidden"),N.classList.add("visually-hidden"),m.classList.remove("visually-hidden"),y.classList.remove("visually-hidden"),void a(t,m,2)):void 0}l.Notify.info("Зробіть свій вибір.")}));document.querySelector(".fixed__button-prew").addEventListener("click",(()=>{if(w=!1,1===k){if(k-=1,e.classList.remove("visually-hidden"),i.classList.remove("visually-hidden"),p)return void r.classList.add("visually-hidden");if(u)return void d.classList.add("visually-hidden");if(x)return void f.classList.add("visually-hidden")}if(2===k){if(p)return k-=1,c.classList.add("visually-hidden"),void r.classList.remove("visually-hidden");if(u)return k-=1,d.classList.remove("visually-hidden"),N.classList.remove("visually-hidden"),m.classList.add("visually-hidden"),y.classList.add("visually-hidden"),void a(t,d,1);if(x)return k-=1,f.classList.remove("visually-hidden"),N.classList.remove("visually-hidden"),m.classList.add("visually-hidden"),y.classList.add("visually-hidden"),void a(t,f,1)}if(3===k&&p)return k-=1,c.classList.remove("visually-hidden"),N.classList.remove("visually-hidden"),m.classList.add("visually-hidden"),y.classList.add("visually-hidden"),void a(t,c,1)}));const L=(t,e,i)=>{const o=t.firstElementChild.innerHTML;t.setAttribute(e,o),t.addEventListener("click",(async()=>{const o=t.getAttribute(e),a=i.indexOf(o);-1!==a?i.splice(a,1):i.push(o),t.classList.toggle("is-active"),console.log(i),"data-button-my-Requests"!==e&&"data-button-consern"!==e&&"data-button-category"!==e||(w=n(i))}))};document.querySelectorAll(".state .card__link-btn").forEach((t=>{L(t,"data-button-my-state",v)}));document.querySelectorAll(".requests .card__link-btn").forEach((t=>{L(t,"data-button-my-Requests",b)}));document.querySelectorAll(".consern .card__link-btn").forEach((t=>{L(t,"data-button-consern",h)}));document.querySelectorAll(".category .card__link-btn").forEach((t=>{L(t,"data-button-category",g)}))})(),(()=>{const t=document.querySelector(".fixed__button-load-more"),e=document.querySelectorAll(".user-manual__item"),i=document.querySelector(".user-manual__list");let o=0,n=!1,a=0;t.addEventListener("click",(t=>{if(!t.currentTarget.classList.contains("fixed__button-load-more"))return;if(n)return;n=!0;const s=window.innerWidth;a-=s>=1280?1220:s>=744?704:370,o===e.length-1?(o=0,a=0):o++,i.style.transform=`translateX(${a}px)`,setTimeout((()=>{n=!1}),500)})),window.addEventListener("resize",(()=>{const t=window.innerWidth;a=t>=1280?1220*-o:t>=744?704*-o:370*-o,i.style.transform=`translateX(${a}px)`}))})();
//# sourceMappingURL=testpage.2122c3c0.js.map
