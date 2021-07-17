'use strict';

const getInputName = document.getElementById('name'),
   getInputPassword = document.getElementById('type'),
   getBtnSendAuth = document.querySelector('.button-ui_firm'),
   textWarning = document.querySelectorAll('.text-warning');

getBtnSendAuth.addEventListener('click', event => {
   event.preventDefault();

   const checkInput = () => {
      const checkValidInput = (str, pattern) => {
         const patterns = {
            password: new RegExp('^[a-z0-9.,:!?;-]{3,}$', 'i'),
            name: new RegExp('^[a-zа-яё0-9#$ ]{2,}$', 'ig'),
         };
         return patterns[pattern].test(str);
      };

      let complite = true;
      if (getInputName.value !== '' && checkValidInput(getInputName.value, 'name')) {
         complite = true;
      } else {
         textWarning[0].classList.remove('warning-hide-name');
         complite = false;
      }
      if (getInputPassword.value !== '' && checkValidInput(getInputPassword.value, 'password')) {
         complite = true;
      } else {
         textWarning[1].classList.remove('warning-hide-password');
         complite = false;
      }
      return complite;
   };
   const setCookie = (key, value, year, month, day, path, domain, secure) => {
      let cookieStr = `${encodeURI(key)}=${encodeURI(value)}`;
      if (year) {
         const expires = new Date(year, month - 1, day);
         cookieStr += `; expires=${expires.toGMTString()}`
      }
      cookieStr += path ? `; path=${encodeURI(path)}` : '';
      cookieStr += domain ? `; domain=${encodeURI(domain)}` : '';
      cookieStr += secure ? '; secure' : '';

      document.cookie = cookieStr;
   };
   const addCookie = () => {
      setCookie('userName', getInputName.value.trim(), 2022, 12, 1);
      setCookie('userPassword', getInputPassword.value.trim(), 2022, 12, 1);
   };

   if (checkInput() === true) {
      addCookie();
      document.location.href = 'table.html';
   } else {
      alert('Введите корректные данные');
   }
});
