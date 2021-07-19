(()=>{"use strict";var e=function(){document.body.dataset.scrollY=window.scrollY;var e=window.innerWidth-document.body.offsetWidth;document.body.style.cssText="\n      position: fixed;\n      top: -".concat(window.scrollY,"px;\n      left: 0;\n      width: 100%;\n      overflow: hidden;\n      height: 100vh;\n      padding-right: ").concat(e,"px;\n   ")},t=function(){document.body.style.cssText="",window.scroll({top:document.body.dataset.scrollY})};const n=function(e,n,o,r){var i=e.target;i.classList.contains("close")?(n.classList.remove(o),"popup-consultation_active"!==o&&t()):(i=i.closest(r))||(n.classList.remove(o),"popup-consultation_active"!==o&&t())};function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var i,a,l,c,s,d,u,p,m,f,y,v,h,g,_,w,L,E,x,b,S,k,q,A,C,B,I,T,Y,M,W;M=document.querySelector(".header-contacts__arrow"),W=document.querySelector(".header-contacts__phone-number-accord>.header-contacts__phone-number"),M.addEventListener("click",(function(){"0"===getComputedStyle(W).opacity?(W.classList.add("phone-number-show"),M.classList.add("showArrow")):(W.classList.remove("phone-number-show"),M.classList.remove("showArrow"))})),T=document.querySelector(".popup-menu"),Y=document.querySelector(".popup-dialog-menu"),document.body.addEventListener("click",(function(t){var n=document.documentElement.clientWidth,o=Y.clientWidth,r=t.target;r.closest(".menu")?n>575?(T.style.width="".concat(n-o,"px"),T.classList.add("active-menu")):(T.style.width=o,Y.classList.add("popup-dialog-menu__mobile")):r.matches(".close-menu")||r.closest(".popup-menu-nav__item")?(T.style.width="100%",T.classList.remove("active-menu"),T.classList.add("hiden-menu"),Y.classList.remove("popup-dialog-menu__mobile")):r.closest(".popup-dialog-menu")?r.matches(".price-list")&&(t.preventDefault(),T.style.width="100%",T.classList.remove("active-menu"),Y.classList.remove("popup-dialog-menu__mobile"),e()):(T.style.width="100%",T.classList.remove("active-menu"),T.classList.add("hiden-menu"),Y.classList.remove("popup-dialog-menu__mobile"))})),C=document.querySelectorAll(".popup-menu-nav a:not(.no-overflow)"),B=document.querySelector(".button-footer > a"),I=function(e){var t=e.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})},C.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),I(e)}))})),B.addEventListener("click",(function(e){e.preventDefault(),I(B)})),x=document.querySelector(".popup-repair-types"),b=document.querySelector(".popup-privacy"),S=document.querySelector(".popup-consultation"),k=document.querySelectorAll(".link-privacy"),q=document.querySelectorAll(".price-list"),A=document.querySelectorAll(".button_wide"),q.forEach((function(t){t.addEventListener("click",(function(t){x.classList.add("price-list_active"),e()}))})),A.forEach((function(e){e.addEventListener("click",(function(){S.classList.add("popup-consultation_active")}))})),k.forEach((function(t){t.addEventListener("click",(function(){b.classList.add("popup-privacy_active"),e()}))})),x.addEventListener("click",(function(e){n(e,x,"price-list_active",".popup-dialog-repair-types")})),b.addEventListener("click",(function(e){n(e,b,"popup-privacy_active",".popup-dialog-privacy")})),S.addEventListener("click",(function(e){n(e,S,"popup-consultation_active",".feedback-wrap")})),document.querySelectorAll(".input-phone").forEach((function(e){e.addEventListener("focus",(function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function n(e){var n=e.keyCode,o=t,r=o.replace(/\D/g,""),i=this.value.replace(/\D/g,""),a=0,l=o.replace(/[_\d]/g,(function(e){return a<i.length?i.charAt(a++)||r.charAt(a):e}));-1!==(a=l.indexOf("_"))&&(l=l.slice(0,a));var c=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(this.value)||this.value.length<18||n>47&&n<58)&&(this.value=l),"blur"===e.type&&this.value.length<18&&(this.value="")}var r,i=o(document.querySelectorAll(e));try{for(i.s();!(r=i.n()).done;){var a=r.value;a.addEventListener("input",n),a.addEventListener("focus",n),a.addEventListener("blur",n)}}catch(e){i.e(e)}finally{i.f()}}("#".concat(e.id))}),!0)})),function(){var e,t=document.getElementById("formula"),n=function(t){var n=t.target;"mouseover"===t.type&&n.closest(".formula-item__icon")?((n=n.closest(".formula-item__icon")).classList.add("active-item"),e=n.querySelector(".formula-item-popup"),o(e,t)):"mouseout"===t.type&&n.closest(".formula-item__icon")&&(o(e,t),(n=n.closest(".formula-item__icon")).classList.remove("active-item"))};t.addEventListener("mouseover",n),t.addEventListener("mouseout",n);var o=function(e,t){var n=t.target,o=window.pageYOffset+e.getBoundingClientRect().top,r=(window.pageYOffset,e.getBoundingClientRect().bottom,e.clientHeight,window.pageYOffset);window.pageYOffset,document.documentElement.clientHeight,document.documentElement.clientHeight,o>r&&n.closest(".row")?((n=t.target.closest(".row")).classList.remove("row-index"),e.classList.remove("rotatePopUp")):n.closest(".row")&&((n=t.target.closest(".row")).classList.add("row-index"),e.classList.add("rotatePopUp"))}}(),function(){var n=document.getElementById("feedback1"),o=document.getElementById("feedback2"),r=document.getElementById("feedback3"),i=document.getElementById("feedback4"),a=document.getElementById("feedback5"),l=document.getElementById("feedback6"),c=document.getElementById("checkbox1"),s=document.getElementById("checkbox2"),d=document.getElementById("checkbox3"),u=document.getElementById("checkbox4"),p=document.getElementById("checkbox5"),m=document.getElementById("checkbox6"),f=document.createElement("div");f.style.cssText="font-size: 1.3rem",f.style.color="#000",f.style.paddingTop="20px",f.style.position="absolute",f.style.margin="30px",f.style.bottom="-5px",f.style.fontWeight="bold";var y=function(n,o,r){var i,a=!0,l=o.querySelectorAll("input");l.forEach((function(e){e.value&&"on"!==e.value?a=!0:"on"!==e.value&&(a=!1)})),o.appendChild(f),r.checked&&!0===a?(n.preventDefault(),f.innerHTML='\n      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n      <rect x="19" y="29.5" width="12" height="41" fill="#40b5fd">\n         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="17.199999999999996;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>\n         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="65.60000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>\n      </rect>\n      <rect x="44" y="29.5" width="12" height="41" fill="#74c4f5">\n         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="20.274999999999995;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>\n         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="59.45000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>\n      </rect>\n      <rect x="69" y="29.5" width="12" height="41" fill="#9dd5f7">\n         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="20.274999999999995;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>\n         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="59.45000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>\n      </rect>\n      ',(i=new FormData(o),fetch("../layout/server.php",{method:"POST",body:i})).then((function(n){if(200!==n.status)throw new Error("status network not 200");var o;f.textContent="",l.forEach((function(e){return e.value=""})),r.checked=!1,r.value="on",(o=document.querySelector(".popup-thank")).addEventListener("click",(function(e){var n=e.target;n.classList.contains("close")?(o.classList.remove("popup-thank-active"),t()):(n=n.closest(".popup-thank-bg"))||(o.classList.remove("popup-thank-active"),t())})),setTimeout((function(){o.classList.add("popup-thank-active")}),500),e(),setTimeout((function(){o.classList.remove("popup-thank-active"),t()}),5e3)})).catch((function(e){f.textContent="Что-то пошло не так...",l.forEach((function(e){return e.value=""})),r.checked=!1,r.value="on",console.error(e)}))):!1===a?(n.preventDefault(),f.innerHTML="Поля не могут быть пустыми"):(n.preventDefault(),f.innerHTML="Отметьте СheckBox")};n.addEventListener("submit",(function(e){y(e,n,c)})),o.addEventListener("submit",(function(e){y(e,o,s)})),r.addEventListener("submit",(function(e){y(e,r,d)})),i.addEventListener("submit",(function(e){y(e,i,u)})),a.addEventListener("submit",(function(e){y(e,a,p)})),l.addEventListener("submit",(function(e){y(e,l,m)}))}(),y=document.querySelectorAll(".reviews-slider__slide"),v=document.querySelectorAll(".dot"),h=document.getElementById("reviews"),g=0,_=function(e,t,n){e[t].classList.remove(n)},w=function(e,t,n){e[t].classList.add(n)},L=function(){_(y,g,"reviews-slider__active"),_(v,g,"dot_active"),++g>=y.length&&(g=0),w(y,g,"reviews-slider__active"),w(v,g,"dot_active")},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;f=setInterval(L,e)},h.addEventListener("click",(function(e){e.preventDefault();var t=e.target;_(y,g,"reviews-slider__active"),_(v,g,"dot_active"),t.closest("#reviews-arrow_right")?g++:t.closest("#reviews-arrow_left")?(t=t.closest,g--):t.matches(".dot")&&v.forEach((function(e,n){e===t&&(g=n)})),g>=y.length&&(g=0),g<0&&(g=y.length-1),w(y,g,"reviews-slider__active"),w(v,g,"dot_active")})),h.addEventListener("mouseover",(function(e){(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&clearInterval(f)})),h.addEventListener("mouseout",(function(e){(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&E(5e3)})),E(5e3),(m=document.querySelector(".accordion")).addEventListener("click",(function(e){var t=m.querySelectorAll("h2"),n=e.target;n.closest("li")&&!n.matches(".msg-active")?(t.forEach((function(e){e.classList.remove("msg-active")})),n.classList.add("msg-active")):n.closest("li")&&n.matches(".msg-active")&&n.classList.remove("msg-active")})),function(){var t=document.querySelector(".popup-transparency"),o=document.querySelector(".transparency-slider-wrap"),r=Array.from(document.querySelectorAll(".transparency-item"));o.addEventListener("click",(function(n){var o=n.target;if(o.closest(".transparency-item")){o=o.closest(".transparency-item");var a=r.indexOf(o);t.classList.add("popup-transparency-active"),i(a),e()}})),t.addEventListener("click",(function(e){n(e,t,"popup-transparency-active",".popup-dialog-transparency")}));var i=function(e){var t=document.querySelector(".popup-transparency-slider-wrap"),n=document.querySelectorAll(".popup-transparency-slider__slide"),o=document.querySelector(".transparency-counter>.slider-counter-content__current"),r=document.querySelector(".transparency-counter>.slider-counter-content__total"),i=e;n.forEach((function(e){e.classList.contains("popup-transparency-slider__active")&&e.classList.remove("popup-transparency-slider__active")})),o.innerHTML=e+1,r.innerHTML=n.length,n[e].classList.add("popup-transparency-slider__active"),t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.closest(".popup-arrow")&&("popup-transparency-slider__active",n[i].classList.remove("popup-transparency-slider__active"),t.closest("#transparency_right")?i++:t.closest("#transparency_left")&&i--,i>=n.length&&(i=0),i<0&&(i=n.length-1),o.innerHTML=i+1,n[i].classList.add("popup-transparency-slider__active"))}))}}(),function(){var t=document.querySelector(".popup-portfolio"),o=document.querySelector(".portfolio-slider"),r=(document.querySelector(".portfolio-slider-wrap"),document.querySelector(".popup-portfolio-slider-wrap")),i=document.querySelectorAll(".popup-portfolio-text"),a=document.querySelector(".slider-portfolio-counter>.slider-counter-content__current"),l=document.querySelector(".slider-portfolio-counter>.slider-counter-content__total"),c=document.querySelector(".popup-portfolio-slider"),s=document.querySelectorAll(".popup-portfolio-slider__slide"),d=document.querySelector(".popup-dialog-portfolio"),u=Array.from(document.querySelectorAll(".fade-tab>.portfolio-slider__slide-frame"));o.addEventListener("click",(function(n){var o=n.target;if(o.closest(".portfolio-slider__slide-frame")){o=o.closest(".portfolio-slider__slide-frame");var r=u.indexOf(o);t.classList.add("popup-portfolio-active"),p(r),e()}})),t.addEventListener("click",(function(e){n(e,t,"popup-portfolio-active",".popup-dialog-portfolio")}));var p=function(e){var t=-624*e,n=u.length,o=e;r.style.position="absolute",l.textContent=u.length,a.textContent=e+1,s.forEach((function(e){e.style.minHeight="624px"}));var p=function(e){i.forEach((function(t,n){n===e?(t.style.display="block",t.style.marginRight="80px"):t.style.display="none"}))};p(e),c.style.transform="translateY(".concat(t,"px)"),d.addEventListener("click",(function(e){var r=e.target;!function(e,t){e.style.transform="translateY(".concat(t,"px)")}(c,t),r.closest(".popup-arrow")&&(r.closest("#popup_portfolio_right")?(t-=624,o++):r.closest("#popup_portfolio_left")&&(t+=624,o--),o>=n&&(o=0,t=0),o<0&&(o=n-1,t=-624*(n-1)),a.innerHTML=o+1,p(o),function(e,t){e.style.transform="translateY(".concat(t,"px)")}(c,t))}))}}(),fetch("../crm-backend/db.json").then((function(e){return e.json()})).then((function(e){return function(e){var t,n=document.querySelector(".nav-list-popup-repair"),o=document.querySelector(".popup-dialog-repair-types"),r=document.querySelector(".popup-repair-types-content-table"),i=document.querySelector(".popup-repair-types-content__head-title"),a=e.reduce((function(e,t){return e.concat(t.type)}),[]),l=a.filter((function(e,t){return a.indexOf(e)===t&&e})),c=e.filter((function(e){return e.type&&e.type.indexOf("Потолок: Демонтажные работы")>-1})),s=function(e){var t=document.createElement("table"),n=document.createElement("tbody");t.classList.add("popup-repair-types-content-table__list"),r.append(t),t.append(n),e.forEach((function(e){var t=document.createElement("tr");t.classList.add("mobile-row"),t.classList.add("showHide"),t.innerHTML='\n                  <td class="repair-types-name">'.concat(e.name,'</td>\n                  <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n                  <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n                  <td class="repair-types-value">').concat(e.units,'</td>\n                  <td class="repair-types-value">').concat(e.cost," руб.</td>\n      "),n.append(t)}))};n.innerHTML="",l.forEach((function(e){var t=document.createElement("button");t.classList.add("button_o"),t.classList.add("popup-repair-types-nav__item"),t.innerHTML=e,n.append(t)})),n.querySelectorAll(".button_o")[0].classList.add("active"),s(c),t=document.querySelectorAll(".popup-repair-types-nav__item"),o.addEventListener("click",(function(n){var o=n.target;o.closest(".popup-repair-types-nav__item")&&(r.innerHTML="",o=o.closest(".popup-repair-types-nav__item"),t.forEach((function(e){e.classList.remove("active")})),o.classList.add("active"),c=e.filter((function(e){return e.type&&e.type.indexOf(o.textContent)>-1})),i.textContent=o.textContent,s(c))}))}(e)})).catch((function(e){return console.error(e)})),function(){var e=document.getElementById("repair-types"),t=document.querySelectorAll(".repair-types-nav__item"),n=document.querySelectorAll(".repair-types-slider>div"),o=document.querySelector(".nav-list-repair"),r=Array.from(t),i=document.querySelector(".repair-types-counter>.slider-counter-content__current"),a=document.querySelector(".repair-types-counter>.slider-counter-content__total"),l=0,c=0,s=0,d=0,u=0,p=0,m=document.documentElement.clientWidth,f=575;a.textContent=5,i.textContent=c+1;var y=function(){e.removeEventListener("click",v),(m=document.documentElement.clientWidth)>575?(f=575,c=0,i.textContent=c+1,n[l].style.transform="translateY(0)",n[l].style.display="none",n[0].style.transform="translateY(0)",n[0].style.display="block",n[0].classList.add("active"),s=0,d=0,t.forEach((function(e){e.classList.contains("active")&&e.classList.remove("active")})),t[0].classList.add("active"),l=0):m<576&&(f=260,c=0,i.textContent=c+1,n[l].style.transform="translateY(0)",n[l].style.display="none",n[0].style.transform="translateY(0)",n[0].style.display="block",n[0].classList.add("active"),s=0,d=0,t.forEach((function(e){e.classList.contains("active")&&e.classList.remove("active")})),t[0].classList.add("active"),l=0),e.addEventListener("click",v)},v=function(e){var m=e.target;if(m.closest(".repair-types-nav__item")&&(m=m.closest(".repair-types-nav__item"),l=r.indexOf(m),t.forEach((function(e){e.classList.contains("active")&&e.classList.remove("active")})),m.classList.add("active"),n[l].style.display="block",n[l].style.transform="translateY(".concat(s,"px)"),i.textContent=1,c=0,s=0,n.forEach((function(e,t){t!==l?(e.style.display="none",e.style.transform="translateY(".concat(s,"px)")):(d=e.querySelectorAll("div").length,a.textContent=d,i.textContent=1)}))),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;e[t].style.transform="translateY(".concat(n,"px)"),i.textContent=o+1}(n,l,s,c),function(e,t){e.style.transform="translateX(".concat(t,"px)")}(o,u),m.closest(".slider-arrow"))m.closest("#repair-types-arrow_right")&&(s-=f,c++),m.closest("#repair-types-arrow_left")&&(s+=f,c--);else{if(!m.closest(".nav-arrow"))return;m.closest("#nav-arrow-repair-right_base")&&(u-=98,p++),m.closest("#nav-arrow-repair-left_base")&&(u+=98,p--)}p>=r.length?(p=0,u=0):p<0&&(p=r.length-1,u=-98*p);d||n.forEach((function(e,t){0!==t?(e.style.display="none",e.style.transform="transform: translateY(0px)"):(d=e.querySelectorAll("div").length,a.textContent=d,i.textContent=1)})),c>=d&&(c=0,s=0),c<0&&(s=-547*(c=d-1)),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;e[t].style.transform="translateY(".concat(n,"px)"),i.textContent=o+1}(n,l,s,c),function(e,t){e.style.transform="translateX(".concat(t,"px)")}(o,u)};e.addEventListener("click",v),y(),window.addEventListener("resize",y)}(),i=document.querySelector(".transparency-slider-wrap"),a=document.querySelector(".transparency-slider"),l=document.querySelectorAll(".transparency-item"),c=document.documentElement.clientWidth,s=c-24,d=function(){var e=document.getElementById("adaptiveBlockDocument-style");e||((e=document.createElement("style")).id="adaptiveBlockDocument-style"),e.textContent=".transparency-slider-wrap{\n         overflow: hidden !important;\n      }\n      .transparency-slider{\n         display: flex !important;\n         transition: transform 0.5s !important;\n         flex-wrap: nowrap;\n         min-width: ".concat(s,"px;\n      }\n      .transparency-item{\n         min-width: ").concat(s,"px;\n      }"),document.head.appendChild(e)},u=function(){if((c=document.documentElement.clientWidth)<1091&&c>1025)s=c-24,d(),p();else if(c<1025&&c>745)s=744,d(),p();else if(c<745&&c>576)s=c-24,d(),p();else if(c<576)s=290,d(),p();else if(c>1091){var e=document.querySelector("#adaptiveBlockDocument-style");e&&e.remove()}},p=function(){var e=Array.from(l).length,t=0,n=0;i.addEventListener("click",(function(o){!function(e,t){e.style.transform="translateX(".concat(t,"px)")}(a,n);var r=o.target;r.closest(".slider-arrow")&&(r.closest("#transparency-arrow_right")?(n-=s,t++):r.closest("#transparency-arrow_left")&&(n+=s,t--),t>=e&&(t=0,n=0),t<0&&(n=-(t=e-1)*s),function(e,t){e.style.transform="translateX(".concat(t,"px)")}(a,n))}))},u(),window.addEventListener("resize",u),function(){var e=document.querySelector(".formula-slider-wrap"),t=document.querySelector(".formula-slider"),n=document.querySelectorAll(".formula-slider__slide"),o=document.documentElement.clientWidth;t.insertAdjacentElement("afterBegin",n[5]),document.querySelectorAll(".formula-slider__slide")[1].classList.add("active-item");var r=function(){var t,n=document.querySelector("#formulaSider-style"),r=document.querySelector("#formulaSider-style-mobile");e.removeEventListener("click",i),(o=document.documentElement.clientWidth)<1025&&o>575?(o=document.documentElement.clientWidth,r&&r.remove(),(t=document.getElementById("formulaSider-style"))||((t=document.createElement("style")).id="formulaSider-style"),t.textContent="\n      .formula-slider-wrap{\n         overflow: hidden !important;\n      }\n      .formula-slider{\n         display: flex !important;\n         transition: transform 0.5s !important;\n         align-items: flex-start !important;\n      }\n      .formula-item{\n         display: flex !important;\n         align-items: center;\n         justify-content: center;\n         flex: 0 0 33% !important;\n      }\n      ",document.head.appendChild(t)):o<576?(o=document.documentElement.clientWidth,n&&n.remove(),function(){var e=document.getElementById("formulaSider-style-mobile");e||((e=document.createElement("style")).id="formulaSider-style-mobile"),e.textContent="\n      .formula-slider-wrap{\n         overflow: hidden !important;\n      }\n      .formula-slider{\n         transform: translateX(-290px);\n         align-items: flex-start !important;\n         display: flex !important;\n         transition: transform 0.5s !important;\n      }\n      .formula-item{\n         display: flex !important;\n         align-items: center;\n         justify-content: center;\n         min-width: 290px !important;\n      }\n      ",document.head.appendChild(e)}()):o>1025&&(n?n.remove():r&&r.remove()),e.addEventListener("click",i)},i=function(e){var t,n,o=e.target;document.querySelector(".formula-slider"),document.querySelectorAll(".formula-slider__slide"),o.closest(".slider-arrow")&&(o.closest("#formula-arrow_right")?(t=document.querySelector(".formula-slider"),n=document.querySelectorAll(".formula-slider__slide"),t.insertAdjacentElement("beforeEnd",n[0]),n[1].classList.remove("active-item"),n[2].classList.add("active-item")):o.closest("#formula-arrow_left")&&function(e,t){e.insertAdjacentElement("afterBegin",t[5]),t[1].classList.remove("active-item"),t[0].classList.add("active-item")}(document.querySelector(".formula-slider"),document.querySelectorAll(".formula-slider__slide")))};e.addEventListener("click",i),r(),window.addEventListener("resize",r)}(),function(){var e=document.querySelector(".portfolio-slider-wrap"),t=document.querySelector(".portfolio-slider"),n=document.querySelector(".portfolio-slider-wrapper"),o=document.querySelector(".portfolio-slider-mobile-wrapper"),r=document.querySelector(".portfolio-counter-responsive>.slider-counter-content__current"),i=document.querySelector(".portfolio-counter-responsive>.slider-counter-content__total"),a=document.getElementById("portfolio-arrow_left"),l=document.getElementById("portfolio-arrow_right"),c=document.getElementById("portfolio-arrow-mobile_left"),s=document.getElementById("portfolio-arrow-mobile_right"),d=(Array.from(document.querySelectorAll(".portfolio-slider__slide")),Array.from(document.querySelectorAll(".portfolio-slider-mobile-wrapper>.portfolio-slider__slide-frame"))),u=document.documentElement.clientWidth,p=t.clientWidth,m=0,f=0,y=0,v=0,h=parseFloat((p/3).toFixed(2)),g=3;i.textContent=d.length,r.textContent=1;var _=function(){var e=document.getElementById("sliderPortfolio-style");e||((e=document.createElement("style")).id="sliderPortfolio-style"),e.textContent="\n      .portfolio-slider-wrapper {\n         transform: translateX(".concat(m,"px);\n         position: relative;\n         display: flex;\n         width: 100%;\n         height: 100%;\n         transition: transform 0.5s !important;\n      }\n      .portfolio-slider__slide {\n         min-width: ").concat(h,"px;\n      }\n\n      .portfolio-slider-mobile-wrapper{\n         transform: translateY(").concat(f,"px);\n         position: relative;\n         width: 100%;\n         height: 100%;\n         transition: transform 0.5s !important;\n      }\n\n      #portfolio-arrow-mobile_left {\n         display: none;\n      }\n      #portfolio-arrow_left{\n         display: none;\n      }\n      #portfolio-arrow_right{\n         display: flex;\n      }\n      "),document.head.appendChild(e)};_();var w=function(){e.removeEventListener("click",L),p=t.clientWidth,u=document.documentElement.clientWidth,m=0,f=0,v=0,y=0,u<1025&&u>900?(m=0,y=0,g=4,h=parseFloat((p/2).toFixed(2)),n.style.transform="translateX(0)",a.style.display="none",l.style.display="flex",s.style.display="none",c.style.display="none",_()):u<900&&u>576?(m=0,y=0,h=p,g=5,n.style.transform="translateX(0)",a.style.display="none",l.style.display="flex",s.style.display="none",c.style.display="none",_()):u<576?(l.style.display="none",a.style.display="none",s.style.display="flex",h="290",_()):u>1025&&(u=document.documentElement.clientWidth,p=t.clientWidth,m=0,f=0,y=0,v=0,h=parseFloat((p/3).toFixed(2)),g=3),e.addEventListener("click",L)},L=function(e){var t=e.target,i=function(e,t){e.style.transform=t},p=function(e,t){e.style.transform=t};if(i(n,"translateX(".concat(m,"px)")),i(o,"translateY(".concat(f,"px)")),t.closest(".slider-arrow"))t.closest("#portfolio-arrow_right")&&(a.style.display="flex",m-=h,y++),t.closest("#portfolio-arrow_left")&&(m+=h,y--);else{if(!t.closest(".slider-arrow-tablet-mobile"))return;t.closest("#portfolio-arrow-mobile_right")&&(c.style.display="flex",l.style.display="none",f-=252,v++),t.closest("#portfolio-arrow-mobile_left")&&(f+=252,v--)}y===g-1?(y=g-1,l.style.display="none",a.style.display="flex"):0===y&&(y=0,a.style.display="none",l.style.display=u<576?"none":"flex"),v===d.length-1?(v=d.length-1,s.style.display="none",c.style.display="flex"):0===v&&(v=0,f=0,c.style.display="none",s.style.display=u>576?"none":"flex"),r.textContent=v+1,p(n,"translateX(".concat(m,"px)")),p(o,"translateY(".concat(f,"px)"))};w(),e.addEventListener("click",L),window.addEventListener("resize",w)}()})();