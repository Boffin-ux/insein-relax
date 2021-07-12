const toggleMenu = () => {

   const popupMenu = document.querySelector('.popup-menu'),
      popupDialogMenu = document.querySelector('.popup-dialog-menu');

   document.body.addEventListener('click', event => {
      const widthPage = document.documentElement.clientWidth,
         widthElement = popupDialogMenu.clientWidth;
      const target = event.target;

      if (target.closest('.menu')) {
         if (widthPage > 575) {
            popupMenu.style.width = `${widthPage - widthElement}px`;
            popupMenu.classList.add('active-menu');
         } else {
            popupMenu.style.width = widthElement;
            popupDialogMenu.classList.add('popup-dialog-menu__mobile');
         }
      } else if (target.matches('.close-menu') || target.closest('.popup-menu-nav__item')) {
         popupMenu.style.width = '100%';
         popupMenu.classList.remove('active-menu');
         popupDialogMenu.classList.remove('popup-dialog-menu__mobile');
      } else if (!target.closest('.popup-dialog-menu')) {
         popupMenu.style.width = '100%';
         popupMenu.classList.remove('active-menu');
         popupDialogMenu.classList.remove('popup-dialog-menu__mobile');
      }
   });

};

export default toggleMenu;
