const navTypesRepair = () => {
   const repairTypes = document.getElementById('repair-types'),
      buttonTypes = document.querySelectorAll('.repair-types-nav__item'),
      repairTypesSlider = document.querySelectorAll('.repair-types-slider>div'),
      navListRepair = document.querySelector('.nav-list-repair'),
      arrButton = Array.from(buttonTypes),
      sliderContentCurrent = document.querySelector('.repair-types-counter>.slider-counter-content__current'),
      sliderContentTotal = document.querySelector('.repair-types-counter>.slider-counter-content__total');

   let indexArr = 0,
      currentSlide = 0,
      transformSlide = 0,
      slideLength = 0,
      transformSlideMobile = 0,
      currentSlideMobile = 0,
      widthPage = document.documentElement.clientWidth,
      size = 575;

   sliderContentTotal.textContent = 5;
   sliderContentCurrent.textContent = currentSlide + 1;

   const checkResponse = () => {
      repairTypes.removeEventListener('click', startRepairTypes);
      widthPage = document.documentElement.clientWidth;
      if (widthPage > 575) {
         size = 575;
         currentSlide = 0;
         sliderContentCurrent.textContent = currentSlide + 1;
         repairTypesSlider[indexArr].style.transform = 'translateY(0)';
         repairTypesSlider[indexArr].style.display = 'none';

         repairTypesSlider[0].style.transform = 'translateY(0)';
         repairTypesSlider[0].style.display = 'block';
         repairTypesSlider[0].classList.add('active');
         transformSlide = 0;
         slideLength = 0;
         buttonTypes.forEach(item => {
            if (item.classList.contains('active')) {
               item.classList.remove('active');
            } else {
               return;
            }
         });
         buttonTypes[0].classList.add('active');
         indexArr = 0;
      } else if (widthPage < 576) {
         size = 260;
         currentSlide = 0;
         sliderContentCurrent.textContent = currentSlide + 1;
         repairTypesSlider[indexArr].style.transform = 'translateY(0)';
         repairTypesSlider[indexArr].style.display = 'none';

         repairTypesSlider[0].style.transform = 'translateY(0)';
         repairTypesSlider[0].style.display = 'block';
         repairTypesSlider[0].classList.add('active');
         transformSlide = 0;
         slideLength = 0;
         buttonTypes.forEach(item => {
            if (item.classList.contains('active')) {
               item.classList.remove('active');
            } else {
               return;
            }
         });
         buttonTypes[0].classList.add('active');
         indexArr = 0;
      }
      repairTypes.addEventListener('click', startRepairTypes);
   };

   const startRepairTypes = event => {
      let target = event.target;

      const prevSlide = (repairTypesSlider, index = 0, transformSlide, currentSlide) => {
         repairTypesSlider[index].style.transform = `translateY(${transformSlide}px)`;
         sliderContentCurrent.textContent = currentSlide + 1;
      };
      const nextSlide = (repairTypesSlider, index = 0, transformSlide, currentSlide) => {
         repairTypesSlider[index].style.transform = `translateY(${transformSlide}px)`;
         sliderContentCurrent.textContent = currentSlide + 1;
      };

      const prevSlideMobile = (navListRepair, transformSlideMobile) => {
         navListRepair.style.transform = `translateX(${transformSlideMobile}px)`;
      };
      const nextSlideMobile = (navListRepair, transformSlideMobile) => {
         navListRepair.style.transform = `translateX(${transformSlideMobile}px)`;
      };

      if (target.closest('.repair-types-nav__item')) {
         target = target.closest('.repair-types-nav__item');
         indexArr = arrButton.indexOf(target);

         buttonTypes.forEach(item => {
            if (item.classList.contains('active')) {
               item.classList.remove('active');
            } else {
               return;
            }
         });
         target.classList.add('active');
         repairTypesSlider[indexArr].style.display = 'block';
         repairTypesSlider[indexArr].style.transform = `translateY(${transformSlide}px)`;
         sliderContentCurrent.textContent = 1;
         currentSlide = 0;
         transformSlide = 0;

         repairTypesSlider.forEach((item, indexSlide) => {
            if (indexSlide !== indexArr) {
               item.style.display = 'none';
               item.style.transform = `translateY(${transformSlide}px)`;
            } else {
               slideLength = item.querySelectorAll('div').length;
               sliderContentTotal.textContent = slideLength;
               sliderContentCurrent.textContent = 1;
            }
         });
      }
      prevSlide(repairTypesSlider, indexArr, transformSlide, currentSlide);
      prevSlideMobile(navListRepair, transformSlideMobile);

      if (target.closest('.slider-arrow')) {
         if (target.closest('#repair-types-arrow_right')) {
            transformSlide -= size;
            currentSlide++;
         }
         if (target.closest('#repair-types-arrow_left')) {
            transformSlide += size;
            currentSlide--;
         }
      } else if (target.closest('.nav-arrow')) {
         if (target.closest('#nav-arrow-repair-right_base')) {
            transformSlideMobile -= 98;
            currentSlideMobile++;
         }
         if (target.closest('#nav-arrow-repair-left_base')) {
            transformSlideMobile += 98;
            currentSlideMobile--;
         }
      } else {
         return;
      }

      if (currentSlideMobile >= arrButton.length) {
         currentSlideMobile = 0;
         transformSlideMobile = 0;
      } else if (currentSlideMobile < 0) {
         currentSlideMobile = arrButton.length - 1;
         transformSlideMobile = -(currentSlideMobile * 98);
      }

      const ifSlideLength = () => {
         if (currentSlide >= slideLength) {
            currentSlide = 0;
            transformSlide = 0;
         }
         if (currentSlide < 0) {
            currentSlide = slideLength - 1;
            transformSlide = -(currentSlide * 547);
         }
      };
      if (slideLength) {
         ifSlideLength();
      } else {
         repairTypesSlider.forEach((item, indexSlide) => {
            if (indexSlide !== 0) {
               item.style.display = 'none';
               item.style.transform = 'transform: translateY(0px)';
            } else {
               slideLength = item.querySelectorAll('div').length;
               sliderContentTotal.textContent = slideLength;
               sliderContentCurrent.textContent = 1;
            }
         });
         ifSlideLength();
      }
      nextSlide(repairTypesSlider, indexArr, transformSlide, currentSlide);
      nextSlideMobile(navListRepair, transformSlideMobile);
   };

   repairTypes.addEventListener('click', startRepairTypes);

   checkResponse();
   window.addEventListener('resize', checkResponse);
};

export default navTypesRepair;