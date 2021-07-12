const scrolled = () => {
   const popupMenuNavLink = document.querySelectorAll('.popup-menu-nav a:not(.no-overflow)'),
      buttonFooter = document.querySelector('.button-footer > a');

   const addScroll = item => {
      const blockID = item.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   };

   popupMenuNavLink.forEach(elem => {
      elem.addEventListener('click', event => {
         event.preventDefault();
         addScroll(elem);
      });
   });
   buttonFooter.addEventListener('click', event => {
      event.preventDefault();
      addScroll(buttonFooter);
   });
};

export default scrolled;