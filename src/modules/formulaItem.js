const formulaItem = () => {
   const formula = document.getElementById('formula');
   let getPopUpItem;

   const changeItem = event => {
      let target = event.target;
      if (event.type === 'mouseover' && target.closest('.formula-item__icon')) {
         target = target.closest('.formula-item__icon');
         target.classList.add('active-item');
         getPopUpItem = target.querySelector('.formula-item-popup');
         isVisible(getPopUpItem, event);
      } else if (event.type === 'mouseout' && target.closest('.formula-item__icon')) {
         isVisible(getPopUpItem, event);
         target = target.closest('.formula-item__icon');
         target.classList.remove('active-item');
      }
   };
   formula.addEventListener('mouseover', changeItem);
   formula.addEventListener('mouseout', changeItem);

   const isVisible = (elem, event) => {
      let target = event.target;
      const elemPosition = {
         top: window.pageYOffset + elem.getBoundingClientRect().top,
         bottom: window.pageYOffset + elem.getBoundingClientRect().bottom,
         heightElement: elem.clientHeight,
         heighFormulaItem: formulaItem.clientHeight,
      };
      const windowPosition = {
         top: window.pageYOffset,
         bottom: window.pageYOffset + document.documentElement.clientHeight,
         heightPage: document.documentElement.clientHeight
      };
      if (elemPosition.top > windowPosition.top && target.closest('.row')) {
         target = event.target.closest('.row');
         target.classList.remove('row-index');
         elem.classList.remove('rotatePopUp');
      } else if (target.closest('.row')) {
         target = event.target.closest('.row');
         target.classList.add('row-index');
         elem.classList.add('rotatePopUp');
      }
   };
};

export default formulaItem;
