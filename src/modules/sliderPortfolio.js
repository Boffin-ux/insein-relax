const sliderPortfolio = () => {
   const portfolioSliderWrap = document.querySelector('.portfolio-slider-wrap'),
      portfolioSlider = document.querySelector('.portfolio-slider'),
      portfolioSliderWrapper = document.querySelector('.portfolio-slider-wrapper'),
      portfolioSliderMobileWrapper = document.querySelector('.portfolio-slider-mobile-wrapper'),
      sliderContentCurrent = document.querySelector('.portfolio-counter-responsive>.slider-counter-content__current'),
      sliderContentTotal = document.querySelector('.portfolio-counter-responsive>.slider-counter-content__total'),
      getLeftBtn = document.getElementById('portfolio-arrow_left'),
      getRightBtn = document.getElementById('portfolio-arrow_right'),
      getLeftBtnMobile = document.getElementById('portfolio-arrow-mobile_left'),
      getRightBtnMobile = document.getElementById('portfolio-arrow-mobile_right'),
      arrSlide = Array.from(document.querySelectorAll('.portfolio-slider__slide')),
      arrSlider = Array.from(document.querySelectorAll('.portfolio-slider-mobile-wrapper>.portfolio-slider__slide-frame'));

   let widthPage = document.documentElement.clientWidth,
      widthSliderWrap = portfolioSlider.clientWidth,
      transformSlideX = 0,
      transformSlideY = 0,
      currentSlide = 0,
      currentSlideMobile = 0,
      widthSlide = parseFloat(((widthSliderWrap / 3)).toFixed(2)),
      slideLength = 3;

   sliderContentTotal.textContent = arrSlider.length;
   sliderContentCurrent.textContent = 1;

   const addStyle = () => {
      let style = document.getElementById('sliderPortfolio-style');
      if (!style) {
         style = document.createElement('style');
         style.id = 'sliderPortfolio-style';
      }
      style.textContent = `
      .portfolio-slider-wrapper {
         transform: translateX(${transformSlideX}px);
         position: relative;
         display: flex;
         width: 100%;
         height: 100%;
         transition: transform 0.5s !important;
      }
      .portfolio-slider__slide {
         min-width: ${widthSlide}px;
      }

      .portfolio-slider-mobile-wrapper{
         transform: translateY(${transformSlideY}px);
         position: relative;
         width: 100%;
         height: 100%;
         transition: transform 0.5s !important;
      }

      #portfolio-arrow-mobile_left {
         display: none;
      }
      #portfolio-arrow_left{
         display: none;
      }
      #portfolio-arrow_right{
         display: flex;
      }
      `;
      document.head.appendChild(style);
   };
   addStyle();

   const checkResponse = () => {
      portfolioSliderWrap.removeEventListener('click', runSlider);
      widthSliderWrap = portfolioSlider.clientWidth;
      widthPage = document.documentElement.clientWidth;
      transformSlideX = 0;
      transformSlideY = 0;
      currentSlideMobile = 0;
      currentSlide = 0;

      if (widthPage < 1025 && widthPage > 900) {
         transformSlideX = 0;
         currentSlide = 0;
         slideLength = 4;
         widthSlide = parseFloat(((widthSliderWrap / 2)).toFixed(2));
         portfolioSliderWrapper.style.transform = "translateX(0)";
         getLeftBtn.style.display = 'none';
         getRightBtn.style.display = 'flex';
         getRightBtnMobile.style.display = 'none';
         getLeftBtnMobile.style.display = 'none';
         addStyle();
      } else if (widthPage < 900 && widthPage > 576) {
         transformSlideX = 0;
         currentSlide = 0;
         widthSlide = widthSliderWrap;
         slideLength = 5;
         portfolioSliderWrapper.style.transform = "translateX(0)";
         getLeftBtn.style.display = 'none';
         getRightBtn.style.display = 'flex';
         getRightBtnMobile.style.display = 'none';
         getLeftBtnMobile.style.display = 'none';
         addStyle();
      } else if (widthPage < 576) {
         getRightBtn.style.display = 'none';
         getLeftBtn.style.display = 'none';
         getRightBtnMobile.style.display = 'flex';
         widthSlide = '290';
         addStyle();
      } else if (widthPage > 1025) {
         widthPage = document.documentElement.clientWidth;
         widthSliderWrap = portfolioSlider.clientWidth;
         transformSlideX = 0;
         transformSlideY = 0;
         currentSlide = 0;
         currentSlideMobile = 0;
         widthSlide = parseFloat(((widthSliderWrap / 3)).toFixed(2));
         slideLength = 3;
      }
      portfolioSliderWrap.addEventListener('click', runSlider);
   };

   const runSlider = event => {
      const target = event.target;

      const prevSlide = (sliderWrapper, transformSlide) => {
         sliderWrapper.style.transform = transformSlide;
      };
      const nextSlide = (sliderWrapper, transformSlide) => {
         sliderWrapper.style.transform = transformSlide;
      };

      prevSlide(portfolioSliderWrapper, `translateX(${transformSlideX}px)`);
      prevSlide(portfolioSliderMobileWrapper, `translateY(${transformSlideY}px)`);

      if (target.closest('.slider-arrow')) {
         if (target.closest('#portfolio-arrow_right')) {
            getLeftBtn.style.display = 'flex';
            transformSlideX -= widthSlide;
            currentSlide++;
         }
         if (target.closest('#portfolio-arrow_left')) {
            transformSlideX += widthSlide;
            currentSlide--;
         }
      } else if (target.closest('.slider-arrow-tablet-mobile')) {
         if (target.closest('#portfolio-arrow-mobile_right')) {
            getLeftBtnMobile.style.display = 'flex';
            getRightBtn.style.display = 'none';
            transformSlideY -= 252;
            currentSlideMobile++;
         }
         if (target.closest('#portfolio-arrow-mobile_left')) {
            transformSlideY += 252;
            currentSlideMobile--;
         }
      } else {
         return;
      }

      if (currentSlide === slideLength - 1) {
         currentSlide = slideLength - 1;
         getRightBtn.style.display = 'none';
         getLeftBtn.style.display = 'flex';
      } else if (currentSlide === 0) {
         currentSlide = 0;
         getLeftBtn.style.display = 'none';
         if (widthPage < 576) {
            getRightBtn.style.display = 'none';
         } else {
            getRightBtn.style.display = 'flex';
         }
      }
      if (currentSlideMobile === (arrSlider.length - 1)) {
         currentSlideMobile = arrSlider.length - 1;
         getRightBtnMobile.style.display = 'none';
         getLeftBtnMobile.style.display = 'flex';
      } else if (currentSlideMobile === 0) {
         currentSlideMobile = 0;
         transformSlideY = 0;
         getLeftBtnMobile.style.display = 'none';
         if (widthPage > 576) {
            getRightBtnMobile.style.display = 'none';
         } else {
            getRightBtnMobile.style.display = 'flex';
         }
      }
      sliderContentCurrent.textContent = currentSlideMobile + 1;
      nextSlide(portfolioSliderWrapper, `translateX(${transformSlideX}px)`);
      nextSlide(portfolioSliderMobileWrapper, `translateY(${transformSlideY}px)`);
   };

   checkResponse();
   portfolioSliderWrap.addEventListener('click', runSlider);
   window.addEventListener('resize', checkResponse);
};

export default sliderPortfolio;