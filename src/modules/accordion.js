const accordion = () => {
   const accordionUl = document.querySelector('.accordion');

   accordionUl.addEventListener('click', event => {
      const getMsg = accordionUl.querySelectorAll('h2');
      const target = event.target;
      if (target.closest('li')) {
         getMsg.forEach(elem => {
            elem.classList.remove('msg-active');
         });
         target.classList.toggle('msg-active');
      } else {
         return;
      }
   });
};

export default accordion;