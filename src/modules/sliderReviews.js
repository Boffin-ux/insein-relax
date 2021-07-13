const sliderReviews = () => {
   const slide = document.querySelectorAll('.reviews-slider__slide'),
      dot = document.querySelectorAll('.dot'),
      slider = document.querySelector('.reviews');

   let currentSlide = 0,
      interval;

   const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
   };
   const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
   };
   const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'reviews-slider__active');
      prevSlide(dot, currentSlide, 'dot_active');
      currentSlide++;
      if (currentSlide >= slide.length) {
         currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'reviews-slider__active');
      nextSlide(dot, currentSlide, 'dot_active');
   };
   const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
   };
   const stopSlide = () => {
      clearInterval(interval);
   };

   slider.addEventListener('click', event => {
      event.preventDefault();
      const target = event.target;

      if (!target.matches('.slider-arrow, .dot')) {
         return;
      }
      prevSlide(slide, currentSlide, 'reviews-slider__active');
      prevSlide(dot, currentSlide, 'dot_active');
      if (target.matches('#reviews-arrow_right')) {
         currentSlide++;
      } else if (target.matches('#reviews-arrow_left')) {
         currentSlide--;
      } else if (target.matches('.dot')) {
         dot.forEach((elem, index) => {
            if (elem === target) {
               currentSlide = index;
            }
         });
      }
      if (currentSlide >= slide.length) {
         currentSlide = 0;
      }
      if (currentSlide < 0) {
         currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'reviews-slider__active');
      nextSlide(dot, currentSlide, 'dot_active');
   });
   slider.addEventListener('mouseover', event => {
      if (event.target.matches('.slider-arrow') ||
         event.target.matches('.dot')) {
         stopSlide();
      }
   });
   slider.addEventListener('mouseout', event => {
      if (event.target.matches('.slider-arrow') ||
         event.target.matches('.dot')) {
         startSlide(5000);
      }
   });
   startSlide(5000);
};

export default sliderReviews;
