import { disableScroll, enableScroll } from './blockScrolled';

const togglePopUp = (popupMenu, popupDialogMenu) => {
   const popupRepairTypes = document.querySelector('.popup-repair-types'),
      popupPrivacy = document.querySelector('.popup-privacy'),
      linkPrivacy = document.querySelectorAll('.link-privacy'),
      priceList = document.querySelectorAll('.price-list');

   priceList.forEach(item => {
      item.addEventListener('click', event => {
         if (popupMenu && popupDialogMenu) {
            event.preventDefault();
            popupMenu.style.width = '100%';
            popupMenu.classList.remove('active-menu');
            popupDialogMenu.classList.remove('popup-dialog-menu__mobile');
            disableScroll();
         } else {
            popupRepairTypes.classList.add('price-list_active');
            disableScroll();
         }
      });
   });

   linkPrivacy.forEach(elem => {
      elem.addEventListener('click', () => {
         popupPrivacy.classList.add('popup-privacy_active');
         disableScroll();
      });
   });

   const closedPopUp = (event, elem, removeElem, outBox) => {
      let target = event.target;
      if (target.classList.contains('mobile-hide')) {
         elem.classList.remove(removeElem);
         enableScroll();
      } else {
         target = target.closest(outBox);
         if (!target) {
            elem.classList.remove(removeElem);
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

};

export default togglePopUp;
