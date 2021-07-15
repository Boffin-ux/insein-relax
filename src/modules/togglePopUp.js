import { disableScroll } from './blockScrolled';
import closedPopUp from './closedPopUp';

const togglePopUp = () => {
   const popupRepairTypes = document.querySelector('.popup-repair-types'),
      popupPrivacy = document.querySelector('.popup-privacy'),
      popupConsultation = document.querySelector('.popup-consultation'),
      linkPrivacy = document.querySelectorAll('.link-privacy'),
      priceList = document.querySelectorAll('.price-list'),
      buttonWide = document.querySelectorAll('.button_wide');

   priceList.forEach(item => {
      item.addEventListener('click', event => {
         popupRepairTypes.classList.add('price-list_active');
         disableScroll();
      });
   });

   buttonWide.forEach(elem => {
      elem.addEventListener('click', () => {
         popupConsultation.classList.add('popup-consultation_active');
      });
   });

   linkPrivacy.forEach(elem => {
      elem.addEventListener('click', () => {
         popupPrivacy.classList.add('popup-privacy_active');
         disableScroll();
      });
   });

   popupRepairTypes.addEventListener('click', event => {
      closedPopUp(event, popupRepairTypes, 'price-list_active', '.popup-dialog-repair-types');
   });
   popupPrivacy.addEventListener('click', event => {
      closedPopUp(event, popupPrivacy, 'popup-privacy_active', '.popup-dialog-privacy');
   });
   popupConsultation.addEventListener('click', event => {
      closedPopUp(event, popupConsultation, 'popup-consultation_active', '.feedback-wrap');
   });

};

export default togglePopUp;
