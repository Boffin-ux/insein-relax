import { enableScroll } from './blockScrolled';

const closedPopUp = (event, elem, removeClass, outBox) => {
   let target = event.target;
   if (target.classList.contains('close')) {
      elem.classList.remove(removeClass);
      if (removeClass !== 'popup-consultation_active') {
         enableScroll();
      }
   } else {
      target = target.closest(outBox);
      if (!target) {
         elem.classList.remove(removeClass);
         if (removeClass !== 'popup-consultation_active') {
            enableScroll();
         }
      }
   }
};

export default closedPopUp;