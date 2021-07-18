const formulaSider = () => {
   const formulaSliderWrap = document.querySelector('.formula-slider-wrap'),
      formulaSlider = document.querySelector('.formula-slider'),
      formulaItem = document.querySelectorAll('.formula-slider__slide');

   let widthPage = document.documentElement.clientWidth;

   formulaSlider.insertAdjacentElement('afterBegin', formulaItem[5]);
   let getNewItem = document.querySelectorAll('.formula-slider__slide');
   getNewItem[1].classList.add('active-item');

   const addStyle = () => {
      let style = document.getElementById('formulaSider-style');
      if (!style) {
         style = document.createElement('style');
         style.id = 'formulaSider-style';
      }
      style.textContent = `
      .formula-slider-wrap{
         overflow: hidden !important;
      }
      .formula-slider{
         display: flex !important;
         transition: transform 0.5s !important;
         align-items: flex-start !important;
      }
      .formula-item{
         display: flex !important;
         align-items: center;
         justify-content: center;
         flex: 0 0 33% !important;
      }
      `;
      document.head.appendChild(style);
   };

   const addStyleMobile = () => {
      let style = document.getElementById('formulaSider-style');
      if (!style) {
         style = document.createElement('style');
         style.id = 'formulaSider-style';
      }
      style.textContent = `
      .formula-slider-wrap{
         overflow: hidden !important;
      }
      .formula-slider{
         transform: translateX(-290px);
         align-items: flex-start !important;
         display: flex !important;
         transition: transform 0.5s !important;
      }
      .formula-item{
         display: flex !important;
         align-items: center;
         justify-content: center;
         min-width: 290px !important;
      }
      `;
      document.head.appendChild(style);
   };

   const checkResponse = () => {
      widthPage = document.documentElement.clientWidth;
      if (widthPage < 1025 && widthPage > 575) {
         addStyle();
         showSlider();
      } else if (widthPage < 576) {
         addStyleMobile();
         showSlider();
      } else if (widthPage > 1025) {
         const getStyle = document.querySelector('#formulaSider-style');
         if (getStyle) {
            getStyle.remove();
         }
      }
   };

   const showSlider = () => {
      let newformulaSlider = document.querySelector('.formula-slider');
      let newFormulaItem = document.querySelectorAll('.formula-slider__slide');


      const nextSlide = (newformulaSlider, newFormulaItem) => {
         newformulaSlider.insertAdjacentElement('beforeEnd', newFormulaItem[0]);
         newFormulaItem[1].classList.remove('active-item');
         newFormulaItem[2].classList.add('active-item');
      };

      const prevSlide = (newformulaSlider, newFormulaItem) => {
         newformulaSlider.insertAdjacentElement('afterBegin', newFormulaItem[5]);
         newFormulaItem[1].classList.remove('active-item');
         newFormulaItem[0].classList.add('active-item');
      };

      formulaSliderWrap.addEventListener('click', event => {
         const target = event.target;

         if (!target.closest('.slider-arrow')) {
            return;
         } else if (target.closest('#formula-arrow_right')) {
            newformulaSlider = document.querySelector('.formula-slider');
            newFormulaItem = document.querySelectorAll('.formula-slider__slide');
            nextSlide(newformulaSlider, newFormulaItem);

         } else if (target.closest('#formula-arrow_left')) {
            newformulaSlider = document.querySelector('.formula-slider');
            newFormulaItem = document.querySelectorAll('.formula-slider__slide');
            prevSlide(newformulaSlider, newFormulaItem);
         }

      });
   };
   checkResponse();
   window.addEventListener('resize', checkResponse);
};

export default formulaSider;