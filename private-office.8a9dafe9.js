const t={getInstance:t=>{const e=t.getAttribute("data-intl-tel-input-id");return window.intlTelInputGlobals.instances[e]},instances:{},documentReady:()=>"complete"===document.readyState};"object"==typeof window&&(window.intlTelInputGlobals=t);const e={allowDropdown:!0,autoInsertDialCode:!1,autoPlaceholder:"polite",customContainer:"",customPlaceholder:null,dropdownContainer:null,excludeCountries:[],formatOnDisplay:!0,geoIpLookup:null,hiddenInput:"",initialCountry:"",localizedCountries:null,nationalMode:!0,onlyCountries:[],placeholderNumberType:"MOBILE",preferredCountries:["us","gb"],separateDialCode:!1,showFlags:!0,utilsScript:""},n=(t,e)=>{const n=Object.keys(t);for(let l=0;l<n.length;l++)e(n[l],t[n[l]])},l=t=>{n(window.intlTelInputGlobals.instances,(e=>{window.intlTelInputGlobals.instances[e][t]()}))};t.getCountryData=()=>allCountries;const o=(t,e,n)=>{const o=document.createElement("script");o.onload=()=>{l("handleUtils"),e&&e()},o.onerror=()=>{l("rejectUtilsScriptPromise"),n&&n()},o.className="iti-load-utils",o.async=!0,o.src=t,document.body.appendChild(o)};t.loadUtils=t=>{if(!window.intlTelInputUtils&&!window.intlTelInputGlobals.startedLoadingUtilsScript){if(window.intlTelInputGlobals.startedLoadingUtilsScript=!0,"undefined"!=typeof Promise)return new Promise(((e,n)=>o(t,e,n)));o(t)}return null},t.defaults=e,t.version="<%= version %>";
//# sourceMappingURL=private-office.8a9dafe9.js.map
