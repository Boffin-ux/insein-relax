const showNumberPhone = () => {
   const headerContacts = document.querySelector('.header-contacts__arrow'),
      headerPhoneNumber = document.querySelector('.header-contacts__phone-number-accord>.header-contacts__phone-number');

   const showPhone = () => {
      if (getComputedStyle(headerPhoneNumber).opacity === '0') {
         headerPhoneNumber.classList.add('phone-number-show');
         headerContacts.classList.add('showArrow');
      } else {
         headerPhoneNumber.classList.remove('phone-number-show');
         headerContacts.classList.remove('showArrow');
      }
   };

   headerContacts.addEventListener('click', showPhone);
};

export default showNumberPhone;
