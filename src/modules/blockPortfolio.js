import { disableScroll } from './blockScrolled';
import closedPopUp from './closedPopUp';

const blockPortfolio = () => {
   const popupPortfolio = document.querySelector('.popup-portfolio'),
      portfolioSliderWrap = document.querySelector('.portfolio-slider-wrap'),
      widthPage = document.documentElement.clientWidth;

   const showPopupPortfolio = () => {
      portfolioSliderWrap.addEventListener('click', event => {
         let target = event.target;
         if (target.closest('.portfolio-slider__slide')) {
            popupPortfolio.classList.add('popup-portfolio-active');
            disableScroll();
         } else {
            return;
         }
      });

      popupPortfolio.addEventListener('click', event => {
         closedPopUp(event, popupPortfolio, 'popup-portfolio-active', '.popup-dialog-portfolio');
      });
   };
   showPopupPortfolio();
};

export default blockPortfolio;