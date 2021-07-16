const adaptiveSectionDocuments = () => {
   const transparencySliderWrap = document.querySelector('.transparency-slider-wrap'),
      transparencySlider = document.querySelector('.transparency-slider'),
      transparencyItem = document.querySelectorAll('.transparency-item');

   let widthPage = document.documentElement.clientWidth,
      widthSlide = widthPage - 24;

   const addStyle = () => {
      let style = document.getElementById('adaptiveBlockDocument-style');
      if (!style) {
         style = document.createElement('style');
         style.id = 'adaptiveBlockDocument-style';
      }
      style.textContent = `.transparency-slider-wrap{
         overflow: hidden !important;
      }
      .transparency-slider{
         display: flex !important;
         transition: transform 0.5s !important;
         flex-wrap: nowrap;
         min-width: ${widthSlide}px;
      }
      .transparency-item{
         min-width: ${widthSlide}px;
      }`;
      document.head.appendChild(style);
   };

   const checkResponse = () => {
      widthPage = document.documentElement.clientWidth;
      if (widthPage < 1091 && widthPage > 1025) {
         widthSlide = widthPage - 24;
         addStyle();
         showSlider();
      } else if (widthPage < 1025 && widthPage > 745) {
         widthSlide = 744;
         addStyle();
         showSlider();
      } else if (widthPage < 745 && widthPage > 576) {
         widthSlide = widthPage - 24;
         addStyle();
         showSlider();
      } else if (widthPage < 576) {
         widthSlide = 290;
         addStyle();
         showSlider();
      } else if (widthPage > 1091) {
         const getStyle = document.querySelector('#adaptiveBlockDocument-style');
         if (getStyle) {
            getStyle.remove();
         }
      }
   };

   const showSlider = () => {
      const slideLength = Array.from(transparencyItem).length;

      let currentSlide = 0,
         transformSlide = 0;

      const prevSlide = (transparencySlider, transformSlide) => {
         transparencySlider.style.transform = `translateX(${transformSlide}px)`;
      };
      const nextSlide = (transparencySlider, transformSlide) => {
         transparencySlider.style.transform = `translateX(${transformSlide}px)`;
      };

      transparencySliderWrap.addEventListener('click', event => {
         prevSlide(transparencySlider, transformSlide);
         let target = event.target;
         if (!target.closest('.slider-arrow')) {
            return;
         } else if (target.closest('#transparency-arrow_right')) {
            transformSlide -= widthSlide;
            currentSlide++;
         } else if (target.closest('#transparency-arrow_left')) {
            transformSlide += widthSlide;
            currentSlide--;
         }

         if (currentSlide >= slideLength) {
            currentSlide = 0;
            transformSlide = 0;
         }
         if (currentSlide < 0) {
            currentSlide = slideLength - 1;
            transformSlide = -(currentSlide * widthSlide);
         }
         nextSlide(transparencySlider, transformSlide);
      });
   };
   checkResponse();
   window.addEventListener('resize', checkResponse);
};

export default adaptiveSectionDocuments;