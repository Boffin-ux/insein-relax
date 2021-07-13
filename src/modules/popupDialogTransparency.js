import { disableScroll } from './blockScrolled';
import closedPopUp from './closedPopUp';

const popupDialogTransparency = () => {
   const popupTransparency = document.querySelector('.popup-transparency'),
      transparencySlider = document.querySelector('.transparency-slider-wrap');

   transparencySlider.addEventListener('click', event => {
      let target = event.target;
      if (target.closest('.transparency-item')) {
         popupTransparency.classList.add('popup-transparency-active');
         disableScroll();
      } else {
         return;
      }
   });

   popupTransparency.addEventListener('click', event => {
      closedPopUp(event, popupTransparency, 'popup-transparency-active', '.popup-dialog-transparency');
   });
};

export default popupDialogTransparency;