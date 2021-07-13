(()=>{"use strict";var e=function(){document.body.dataset.scrollY=window.scrollY;var e=window.innerWidth-document.body.offsetWidth;document.body.style.cssText="\n      position: fixed;\n      top: -".concat(window.scrollY,"px;\n      left: 0;\n      width: 100%;\n      overflow: hidden;\n      height: 100vh;\n      padding-right: ").concat(e,"px;\n   ")},t=function(){document.body.style.cssText="",window.scroll({top:document.body.dataset.scrollY})};function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,c=function(){};return{s:c,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){s=!0,a=e},f:function(){try{r||null==n.return||n.return()}finally{if(s)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var i,c,a,r,s,l,u,d,m,p,v,f,h,y,g,w;g=document.querySelector(".header-contacts__arrow"),w=document.querySelector(".header-contacts__phone-number-accord>.header-contacts__phone-number"),g.addEventListener("click",(function(){"0"===getComputedStyle(w).opacity?(w.classList.add("phone-number-show"),g.classList.add("showArrow")):(w.classList.remove("phone-number-show"),g.classList.remove("showArrow"))})),h=document.querySelector(".popup-menu"),y=document.querySelector(".popup-dialog-menu"),document.body.addEventListener("click",(function(t){var n=document.documentElement.clientWidth,o=y.clientWidth,i=t.target;i.closest(".menu")?n>575?(h.style.width="".concat(n-o,"px"),h.classList.add("active-menu")):(h.style.width=o,y.classList.add("popup-dialog-menu__mobile")):i.matches(".close-menu")||i.closest(".popup-menu-nav__item")?(h.style.width="100%",h.classList.remove("active-menu"),h.classList.add("hiden-menu"),y.classList.remove("popup-dialog-menu__mobile")):i.closest(".popup-dialog-menu")?i.matches(".price-list")&&(t.preventDefault(),h.style.width="100%",h.classList.remove("active-menu"),y.classList.remove("popup-dialog-menu__mobile"),e()):(h.style.width="100%",h.classList.remove("active-menu"),h.classList.add("hiden-menu"),y.classList.remove("popup-dialog-menu__mobile"))})),p=document.querySelectorAll(".popup-menu-nav a:not(.no-overflow)"),v=document.querySelector(".button-footer > a"),f=function(e){var t=e.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})},p.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),f(e)}))})),v.addEventListener("click",(function(e){e.preventDefault(),f(v)})),function(){var n=document.querySelector(".popup-repair-types"),o=document.querySelector(".popup-privacy"),i=document.querySelector(".popup-consultation"),c=document.querySelectorAll(".link-privacy"),a=document.querySelectorAll(".price-list"),r=document.querySelectorAll(".button_wide");a.forEach((function(t){t.addEventListener("click",(function(t){n.classList.add("price-list_active"),e()}))})),r.forEach((function(e){e.addEventListener("click",(function(){i.classList.add("popup-consultation_active")}))})),c.forEach((function(t){t.addEventListener("click",(function(){o.classList.add("popup-privacy_active"),e()}))}));var s=function(e,n,o,i){var c=e.target;c.classList.contains("close")?(n.classList.remove(o),t()):(c=c.closest(i))||(n.classList.remove(o),t())};n.addEventListener("click",(function(e){s(e,n,"price-list_active",".popup-dialog-privacy")})),o.addEventListener("click",(function(e){s(e,o,"popup-privacy_active",".popup-dialog-repair-types")})),i.addEventListener("click",(function(e){s(e,i,"popup-consultation_active",".feedback-wrap")}))}(),document.querySelectorAll(".input-phone").forEach((function(e){e.addEventListener("focus",(function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function o(e){var n=e.keyCode,o=t,i=o.replace(/\D/g,""),c=this.value.replace(/\D/g,""),a=0,r=o.replace(/[_\d]/g,(function(e){return a<c.length?c.charAt(a++)||i.charAt(a):e}));-1!==(a=r.indexOf("_"))&&(r=r.slice(0,a));var s=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(s=new RegExp("^"+s+"$")).test(this.value)||this.value.length<8||n>47&&n<58)&&(this.value=r),"blur"===e.type&&this.value.length<8&&(this.value="")}var i,c=n(document.querySelectorAll(e));try{for(c.s();!(i=c.n()).done;){var a=i.value;a.addEventListener("input",o),a.addEventListener("focus",o),a.addEventListener("blur",o)}}catch(e){c.e(e)}finally{c.f()}}("#".concat(e.id))}),!0)})),function(){var e,t=document.getElementById("formula"),n=function(t){var n=t.target;"mouseover"===t.type&&n.closest(".formula-item__icon")?((n=n.closest(".formula-item__icon")).classList.add("active-item"),e=n.querySelector(".formula-item-popup"),o(e)):"mouseout"===t.type&&n.closest(".formula-item__icon")&&((n=n.closest(".formula-item__icon")).classList.remove("active-item"),o(e))};t.addEventListener("mouseover",n),t.addEventListener("mouseout",n);var o=function(e){var t=window.pageYOffset+e.getBoundingClientRect().top,n=(window.pageYOffset,e.getBoundingClientRect().bottom,e.clientHeight,window.pageYOffset);window.pageYOffset,document.documentElement.clientHeight,document.documentElement.clientHeight,t>n?e.classList.remove("rotatePopUp"):e.classList.add("rotatePopUp")}}(),function(){var n=document.getElementById("feedback1"),o=document.getElementById("feedback2"),i=document.getElementById("feedback3"),c=document.getElementById("feedback4"),a=document.getElementById("feedback5"),r=document.getElementById("feedback6"),s=document.getElementById("checkbox1"),l=document.getElementById("checkbox2"),u=document.getElementById("checkbox3"),d=document.getElementById("checkbox4"),m=document.getElementById("checkbox5"),p=document.getElementById("checkbox6"),v=document.createElement("div");v.style.cssText="font-size: 1.2rem",v.style.color="#000",v.style.paddingTop="30px";var f=function(n,o,i){var c,a=!0,r=o.querySelectorAll("input");r.forEach((function(e){e.value&&"on"!==e.value?a=!0:"on"!==e.value&&(a=!1)})),o.appendChild(v),i.checked&&!0===a?(n.preventDefault(),v.innerHTML='\n      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n      <rect x="19" y="29.5" width="12" height="41" fill="#40b5fd">\n         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="17.199999999999996;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>\n         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="65.60000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>\n      </rect>\n      <rect x="44" y="29.5" width="12" height="41" fill="#74c4f5">\n         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="20.274999999999995;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>\n         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="59.45000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>\n      </rect>\n      <rect x="69" y="29.5" width="12" height="41" fill="#9dd5f7">\n         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="20.274999999999995;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>\n         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="59.45000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>\n      </rect>\n      ',(c=new FormData(o),fetch("../layout/server.php",{method:"POST",body:c})).then((function(n){if(200!==n.status)throw new Error("status network not 200");var o;v.textContent="Спасибо! Мы скоро с вами свяжемся...",r.forEach((function(e){return e.value=""})),i.checked=!1,i.value="on",(o=document.querySelector(".popup-thank")).addEventListener("click",(function(e){var n=e.target;n.classList.contains("close")?(o.classList.remove("popup-thank-active"),t()):(n=n.closest(".popup-thank-bg"))||(o.classList.remove("popup-thank-active"),t())})),setTimeout((function(){o.classList.add("popup-thank-active")}),500),e(),setTimeout((function(){o.classList.remove("popup-thank-active"),t()}),5e3)})).catch((function(e){v.textContent="Что-то пошло не так...",r.forEach((function(e){return e.value=""})),i.checked=!1,i.value="on",console.error(e)}))):!1===a?(n.preventDefault(),v.innerHTML="Поля не могут быть пустыми"):(n.preventDefault(),v.innerHTML="Отметьте СheckBox")};n.addEventListener("submit",(function(e){f(e,n,s)})),o.addEventListener("submit",(function(e){f(e,o,l)})),i.addEventListener("submit",(function(e){f(e,i,u)})),c.addEventListener("submit",(function(e){f(e,c,d)})),a.addEventListener("submit",(function(e){f(e,a,m)})),r.addEventListener("submit",(function(e){f(e,r,p)}))}(),c=document.querySelectorAll(".reviews-slider__slide"),a=document.querySelectorAll(".dot"),r=document.querySelector(".reviews"),s=0,l=function(e,t,n){e[t].classList.remove(n)},u=function(e,t,n){e[t].classList.add(n)},d=function(){l(c,s,"reviews-slider__active"),l(a,s,"dot_active"),++s>=c.length&&(s=0),u(c,s,"reviews-slider__active"),u(a,s,"dot_active")},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;i=setInterval(d,e)},r.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".slider-arrow, .dot")&&(l(c,s,"reviews-slider__active"),l(a,s,"dot_active"),t.matches("#reviews-arrow_right")?s++:t.matches("#reviews-arrow_left")?s--:t.matches(".dot")&&a.forEach((function(e,n){e===t&&(s=n)})),s>=c.length&&(s=0),s<0&&(s=c.length-1),u(c,s,"reviews-slider__active"),u(a,s,"dot_active"))})),r.addEventListener("mouseover",(function(e){(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&clearInterval(i)})),r.addEventListener("mouseout",(function(e){(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&m(5e3)})),m(5e3)})();