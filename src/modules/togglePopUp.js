import { disableScroll, enableScroll } from './blockScrolled';

const togglePopUp = () => {
   const popupRepairTypes = document.querySelector('.popup-repair-types'),
      popupPrivacy = document.querySelector('.popup-privacy'),
      linkPrivacy = document.querySelectorAll('.link-privacy'),
      priceList = document.querySelectorAll('.price-list'),
      buttonWide = document.querySelectorAll('.button_wide'),
      popupConsultation = document.querySelector('.popup-consultation');

   priceList.forEach(item => {
      item.addEventListener('click', event => {
         popupRepairTypes.classList.add('price-list_active');
         disableScroll();
      });
   });

   linkPrivacy.forEach((event, elem) => {
      elem.addEventListener('click', () => {
         popupPrivacy.classList.add('popup-privacy_active');
         disableScroll();
      });
   });

   buttonWide.forEach(elem => {
      elem.addEventListener('click', () => {
         popupConsultation.classList.add('popup-consultation_active');
         disableScroll();
      });
   });

   const closedPopUp = (event, elem, removeClass, outBox) => {
      let target = event.target;
      if (target.classList.contains('close')) {
         elem.classList.remove(removeClass);
         enableScroll();
      } else {
         target = target.closest(outBox);
         if (!target) {
            elem.classList.remove(removeClass);
            enableScroll();
         }
      }
   };

   popupRepairTypes.addEventListener('click', event => {
      closedPopUp(event, popupRepairTypes, 'price-list_active', '.popup-dialog-privacy');
   });
   popupPrivacy.addEventListener('click', event => {
      closedPopUp(event, popupPrivacy, 'popup-privacy_active', '.popup-dialog-repair-types');
   });
   popupConsultation.addEventListener('click', event => {
      closedPopUp(event, popupConsultation, 'popup-consultation_active', '.feedback-wrap');
   });

};

export default togglePopUp;
