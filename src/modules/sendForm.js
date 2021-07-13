const sendForm = () => {
   const errorMessage = 'Что-то пошло не так...',
      preload = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <rect x="19" y="29.5" width="12" height="41" fill="#40b5fd">
         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="17.199999999999996;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="65.60000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
      </rect>
      <rect x="44" y="29.5" width="12" height="41" fill="#74c4f5">
         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="20.274999999999995;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="59.45000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
      </rect>
      <rect x="69" y="29.5" width="12" height="41" fill="#9dd5f7">
         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="20.274999999999995;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="59.45000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
      </rect>
      `,
      successMessage = 'Спасибо! Мы скоро с вами свяжемся...';

   const formFeedBackOne = document.getElementById('feedback1'),
      formFeedBackTwo = document.getElementById('feedback2'),
      formFeedBackThree = document.getElementById('feedback3'),
      formFeedbackblockOne = document.getElementById('feedback4'),
      formFeedbackblockTwo = document.getElementById('feedback5'),
      formFeedback = document.getElementById('feedback6'),
      checkBoxFormFeedBackOne = document.getElementById('checkbox1'),
      checkBoxFormFeedBackTwo = document.getElementById('checkbox2'),
      checkBoxFormFeedBackThree = document.getElementById('checkbox3'),
      checkBoxFeedbackBlockOne = document.getElementById('checkbox4'),
      checkBoxFeedbackBlockTwo = document.getElementById('checkbox5'),
      checkBoxFeedback = document.getElementById('checkbox6');

   const statusMessage = document.createElement('div');
   statusMessage.style.cssText = 'font-size: 1.2rem';
   statusMessage.style.color = '#000';
   statusMessage.style.paddingTop = '30px';

   const postData = formData => fetch('../layout/server.php', {
      method: 'POST',
      body: formData,
   });

   const addMessageForm = (event, form, checkBox) => {
      let checkInput = true;
      const inputs = form.querySelectorAll('input');

      inputs.forEach(item => {
         if (item.value && item.value !== 'on') {
            checkInput = true;
         } else if (item.value !== 'on') {
            checkInput = false;
         }
      });
      form.appendChild(statusMessage);
      if (checkBox.checked && checkInput === true) {
         event.preventDefault();
         statusMessage.innerHTML = preload;
         const formData = new FormData(form);
         postData(formData)
            .then(response => {
               if (response.status !== 200) {
                  throw new Error('status network not 200');
               }
               statusMessage.textContent = successMessage;
               inputs.forEach(item => item.value = '');
               checkBox.checked = false;
               checkBox.value = 'on';
            })
            .catch(error => {
               statusMessage.textContent = errorMessage;
               inputs.forEach(item => item.value = '');
               checkBox.checked = false;
               checkBox.value = 'on';
               console.error(error);
            });
      } else if (checkInput === false) {
         event.preventDefault();
         statusMessage.innerHTML = 'Поля не могут быть пустыми';
      } else {
         event.preventDefault();
         statusMessage.innerHTML = 'Отметьте СheckBox';
      }
   };

   formFeedBackOne.addEventListener('submit', event => {
      addMessageForm(event, formFeedBackOne, checkBoxFormFeedBackOne);
   });
   formFeedBackTwo.addEventListener('submit', event => {
      addMessageForm(event, formFeedBackTwo, checkBoxFormFeedBackTwo);
   });
   formFeedBackThree.addEventListener('submit', event => {
      addMessageForm(event, formFeedBackThree, checkBoxFormFeedBackThree);
   });
   formFeedbackblockOne.addEventListener('submit', event => {
      addMessageForm(event, formFeedbackblockOne, checkBoxFeedbackBlockOne);
   });
   formFeedbackblockTwo.addEventListener('submit', event => {
      addMessageForm(event, formFeedbackblockTwo, checkBoxFeedbackBlockTwo);
   });
   formFeedback.addEventListener('submit', event => {
      addMessageForm(event, formFeedback, checkBoxFeedback);
   });
};

export default sendForm;
