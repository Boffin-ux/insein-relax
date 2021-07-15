import { disableScroll } from './blockScrolled';
import closedPopUp from './closedPopUp';

const popupTransparencySlide = () => {
   const popupTransparency = document.querySelector('.popup-transparency'),
      transparencySlider = document.querySelector('.transparency-slider-wrap'),
      arr = Array.from(document.querySelectorAll('.transparency-item'));

   const popupDialogTransparency = () => {
      transparencySlider.addEventListener('click', event => {
         let target = event.target;
         if (target.closest('.transparency-item')) {
            target = target.closest('.transparency-item');
            const index = arr.indexOf(target);
            popupTransparency.classList.add('popup-transparency-active');
            sliderDocument(index);
            disableScroll();
         } else {
            return;
         }
      });

      popupTransparency.addEventListener('click', event => {
         closedPopUp(event, popupTransparency, 'popup-transparency-active', '.popup-dialog-transparency');
      });
   };
   popupDialogTransparency();

   const sliderDocument = (indexElem) => {
      const popupTransparencySlider = document.querySelector('.popup-transparency-slider-wrap'),
         transparencySlide = document.querySelectorAll('.popup-transparency-slider__slide'),
         sliderContentCurrent = document.querySelector('.transparency-counter>.slider-counter-content__current'),
         sliderContentTotal = document.querySelector('.transparency-counter>.slider-counter-content__total');

      let currentSlide = indexElem;

      transparencySlide.forEach(item => {
         if (item.classList.contains('popup-transparency-slider__active')) {
            item.classList.remove('popup-transparency-slider__active');
         } else {
            return;
         }
      });

      const prevSlide = (elem, index, strClass) => {
         elem[index].classList.remove(strClass);
      };
      const nextSlide = (elem, index, strClass) => {
         elem[index].classList.add(strClass);
      };
      sliderContentCurrent.innerHTML = indexElem + 1;
      sliderContentTotal.innerHTML = transparencySlide.length;
      transparencySlide[indexElem].classList.add('popup-transparency-slider__active');

      popupTransparencySlider.addEventListener('click', event => {
         event.preventDefault();
         let target = event.target;
         if (!target.closest('.popup-arrow')) {
            return;
         }
         prevSlide(transparencySlide, currentSlide, 'popup-transparency-slider__active');
         if (target.closest('#transparency_right')) {
            currentSlide++;
         } else if (target.closest('#transparency_left')) {
            currentSlide--;
         }
         if (currentSlide >= transparencySlide.length) {
            currentSlide = 0;
         }
         if (currentSlide < 0) {
            currentSlide = transparencySlide.length - 1;
         }
         sliderContentCurrent.innerHTML = currentSlide + 1;
         nextSlide(transparencySlide, currentSlide, 'popup-transparency-slider__active');
      });
   };
};

export default popupTransparencySlide;