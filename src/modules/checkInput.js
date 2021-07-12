import maskPhone from './maskPhone';

const checkInput = () => {
   const getInputPhone = document.querySelectorAll('.input-phone');
   getInputPhone.forEach(elem => {
      elem.addEventListener('focus', () => maskPhone(`#${elem.id}`), true);
   });
}

export default checkInput;
