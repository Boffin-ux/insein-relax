const accordion = () => {
   const accordionUl = document.querySelector('.accordion');

   accordionUl.addEventListener('click', event => {
      const getMsg = accordionUl.querySelectorAll('h2');
      let target = event.target;
      if (target.closest('li') && !target.matches('.msg-active')) {
         getMsg.forEach(elem => {
            elem.classList.remove('msg-active');
         });
         target.classList.add('msg-active');
      } else if (target.closest('li') && target.matches('.msg-active')) {
         target.classList.remove('msg-active');
      }

   });
};

export default accordion;