import { disableScroll } from './blockScrolled';
import closedPopUp from './closedPopUp';

const sectionPortfolio = () => {
   const popupPortfolio = document.querySelector('.popup-portfolio'),
      portfolioSlider = document.querySelector('.portfolio-slider'),
      portfolioSliderWrap = document.querySelector('.portfolio-slider-wrap'),
      popupPortfolioSliderWrap = document.querySelector('.popup-portfolio-slider-wrap'),
      popupPortfolioText = document.querySelectorAll('.popup-portfolio-text'),
      sliderContentCurrent = document.querySelector('.slider-portfolio-counter>.slider-counter-content__current'),
      sliderContentTotal = document.querySelector('.slider-portfolio-counter>.slider-counter-content__total'),
      popupPortfolioSlider = document.querySelector('.popup-portfolio-slider'),
      portfolioSliderSlide = document.querySelectorAll('.popup-portfolio-slider__slide'),
      popupDialogPortfolio = document.querySelector('.popup-dialog-portfolio'),
      arrSlider = Array.from(document.querySelectorAll('.fade-tab>.portfolio-slider__slide-frame'));

   const showPopupPortfolio = () => {
      portfolioSlider.addEventListener('click', event => {
         let target = event.target;
         if (target.closest('.portfolio-slider__slide-frame')) {
            target = target.closest('.portfolio-slider__slide-frame');
            const index = arrSlider.indexOf(target);
            popupPortfolio.classList.add('popup-portfolio-active');
            showSliderPortfolio(index);
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

   const showSliderPortfolio = (indexElem) => {
      let transformSlide = -624 * indexElem,
         slideLength = arrSlider.length,
         currentSlide = indexElem;

      popupPortfolioSliderWrap.style.position = 'absolute';
      sliderContentTotal.textContent = arrSlider.length;
      sliderContentCurrent.textContent = indexElem + 1;

      portfolioSliderSlide.forEach(item => {
         item.style.minHeight = '624px';
      });

      const checkPortfolioText = (checkIndexElem) => {
         popupPortfolioText.forEach((item, index) => {
            if (index === checkIndexElem) {
               item.style.display = 'block';
               item.style.marginRight = '80px';
            } else {
               item.style.display = 'none';
            }
         });
      };
      checkPortfolioText(indexElem);

      popupPortfolioSlider.style.transform = `translateY(${transformSlide}px)`;

      const prevSlide = (popupPortfolioSlider, transformSlide) => {
         popupPortfolioSlider.style.transform = `translateY(${transformSlide}px)`;
      };
      const nextSlide = (popupPortfolioSlider, transformSlide) => {
         popupPortfolioSlider.style.transform = `translateY(${transformSlide}px)`;
      };

      popupDialogPortfolio.addEventListener('click', event => {
         const target = event.target;

         prevSlide(popupPortfolioSlider, transformSlide);
         if (!target.closest('.popup-arrow')) {
            return;
         } else if (target.closest('#popup_portfolio_right')) {
            transformSlide -= 624;
            currentSlide++;
         } else if (target.closest('#popup_portfolio_left')) {
            transformSlide += 624;
            currentSlide--;
         }
         if (currentSlide >= slideLength) {
            currentSlide = 0;
            transformSlide = 0;
         }
         if (currentSlide < 0) {
            currentSlide = slideLength - 1;
            transformSlide = -(624 * (slideLength - 1));
         }
         sliderContentCurrent.innerHTML = currentSlide + 1;
         checkPortfolioText(currentSlide);
         nextSlide(popupPortfolioSlider, transformSlide);
      });
   };
};

export default sectionPortfolio;