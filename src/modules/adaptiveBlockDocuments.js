import { disableScroll } from './blockScrolled';
import closedPopUp from '../../crm-backend/db.json';

const adaptiveBlockDocuments = () => {
   const transparencySliderWrap = document.querySelector('.transparency-slider-wrap'),
      widthPage = document.documentElement.clientWidth;

   transparencySliderWrap.addEventListener('click', event => {
      let target = event.target;

      if (widthPage < 1091) {
         console.log(widthPage);
      }
   });
};

export default adaptiveBlockDocuments;