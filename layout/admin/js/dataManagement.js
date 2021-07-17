'use strict';

const typeItem = document.getElementById('typeItem'),
   getTbody = document.getElementById('tbody'),
   btnAddItem = document.querySelector('.btn-addItem'),
   getModal = document.getElementById('modal'),
   getForm = document.querySelector('form'),
   getInputType = document.querySelector('.input__type'),
   inputName = document.querySelector('.input__name'),
   inputUnits = document.querySelector('.input__units'),
   inputCost = document.querySelector('.input__cost'),
   tableWrapper = document.querySelector('.table__wrapper'),
   modalHeader = document.querySelector('.modal__header');

const statusMessage = document.createElement('div');
statusMessage.style.cssText = 'font-size: 1.3rem';
statusMessage.style.color = '#ff0000';
statusMessage.style.display = 'flex';
statusMessage.style.justifyContent = 'center';
statusMessage.style.alignItems = 'center';
getForm.appendChild(statusMessage);

let getIdItemEdit;

const findOption = (typeItem) => {
   const option = typeItem.querySelector(`option[value="${typeItem.value}"]`);
   return option.value;
};

const getData = (data) => {
   const dataType = data.reduce((accum, item) => accum.concat(item.type), []);
   const filterType = dataType.filter((item, i) => dataType.indexOf(item) === i && item);

   const addTypesRepairs = () => {
      typeItem.innerHTML = '';
      const optionDefault = document.createElement('option');
      optionDefault.textContent = 'Все услуги';
      optionDefault.value = 'Все услуги';
      typeItem.append(optionDefault);

      filterType.forEach(item => {
         const option = document.createElement('option');
         option.textContent = item;
         option.value = item;
         typeItem.append(option);
      });
   };
   addTypesRepairs();

   const addContentTable = (data) => {
      getTbody.innerHTML = '';

      data.forEach(item => {
         const addTr = document.createElement('tr');
         addTr.classList.add('table__row');

         addTr.innerHTML = `
            <td class="table__id table__cell">${item.id}</td>
               <td class="table-type table__cell">${item.type}</td>
               <td class="table-name table__cell">${item.name}</td>
               <td class="table-units table__cell">${item.units}</td>
               <td class="table-cost table__cell">${item.cost} руб</td>
               <td>
                  <div class="table__actions table__cell">
                  <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change">
                        <use xlink:href="./img/sprite.svg#change"></use>
                        </svg></span><span>Изменить</span>
                  </button>
                  <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove">
                        <use xlink:href="./img/sprite.svg#remove"></use>
                        </svg></span><span>Удалить</span>
                  </button>
                  </div>
            </td>
      `;
         getTbody.append(addTr);
      });
   };
   addContentTable(data);


   const getDataSelect = () => {
      typeItem.addEventListener('change', event => {
         const target = event.target;
         if (target.value !== "Все услуги") {
            const filterDataSelectItem = data.filter(item => item.type && item.type.indexOf(target.value) > -1);
            addContentTable(filterDataSelectItem);
         } else {
            addContentTable(data);
         }
      });
   };
   getDataSelect();
};

const init = () => {
   fetch('http://localhost:3000/api/items')
      .then(response => response.json())
      .then(data => getData(data))
      .catch(error => console.error(error));
};

const getCookie = () => {
   const cookie = document.cookie.split(';');
   const getKeyCookie = cookie.map(item => item.replace(/=[\s\D\d]*/g, '').trim());
   const getValueCookie = cookie.map(item => item.replace(/\D*=/g, '').trim());

   getKeyCookie.forEach(item => {
      if (item !== 'userName' && item !== 'userPassword') {
         document.location.href = './';
         console.log('редирект');
      } else {
         init();
      }
   });
};
getCookie();

const validInput = () => {
   let checkInput = true;
   const inputs = getForm.querySelectorAll('input');
   inputs.forEach(item => {
      if (!item.value) {
         checkInput = false;
      }
   });
   return checkInput;
};
const addNewItem = event => {
   event.preventDefault();

   const formData = new FormData();
   formData.append('type', getInputType.value);
   formData.append('name', inputName.value);
   formData.append('units', inputUnits.value);
   formData.append('cost', inputCost.value);

   const bodyFormData = {};

   formData.forEach((val, key) => {
      bodyFormData[key] = val;
   });
   if (validInput() === true) {
      const addPostData = bodyFormData => fetch('http://localhost:3000/api/items', {
         method: 'POST',
         headers: {
            'Content-Type': 'aplication/json'
         },
         body: JSON.stringify(bodyFormData)
      });

      addPostData(bodyFormData)
         .then(response => {
            if (response.status !== 201) {
               throw new Error('status network not 201');
            }
            init();
            getInputType.value = '';
            inputName.value = '';
            inputUnits.value = '';
            inputCost.value = '';
            statusMessage.textContent = 'Данные успешно добавлены';
         })
         .catch(error => {
            console.error(error);
            getInputType.value = '';
            inputName.value = '';
            inputUnits.value = '';
            inputCost.value = '';
            statusMessage.textContent = 'Произошла ошибка';
         });
   } else {
      event.preventDefault();
      statusMessage.textContent = 'Поля не могут быть пустыми';
   }
};
const saveService = (event) => {
   const id = getIdItemEdit;
   event.preventDefault();
   const editItemformData = new FormData();
   editItemformData.append('type', getInputType.value);
   editItemformData.append('name', inputName.value);
   editItemformData.append('units', inputUnits.value);
   editItemformData.append('cost', inputCost.value);

   const bodyeditItemformData = {};
   editItemformData.forEach((val, key) => {
      bodyeditItemformData[key] = val;
   });
   if (validInput() === true) {
      const editPostData = bodyeditItemformData => fetch(`http://localhost:3000/api/items/${id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'aplication/json'
         },
         body: JSON.stringify(bodyeditItemformData)
      });

      editPostData(bodyeditItemformData)
         .then(response => {
            if (response.status !== 200) {
               throw new Error('status network not 200');
            }
            init();
            getInputType.value = '';
            inputName.value = '';
            inputUnits.value = '';
            inputCost.value = '';
            statusMessage.textContent = 'Данные успешно изменены';
         })
         .catch(error => {
            console.error(error);
            getInputType.value = '';
            inputName.value = '';
            inputUnits.value = '';
            inputCost.value = '';
            statusMessage.textContent = 'Произошла ошибка';
         });
   } else {
      event.preventDefault();
      statusMessage.textContent = 'Поля не могут быть пустыми';
   }
};
const addNewService = () => {
   getForm.removeEventListener('submit', saveService);
   getForm.addEventListener('submit', addNewItem);
};

const saveItem = () => {
   getForm.removeEventListener('submit', addNewItem);
   getForm.addEventListener('submit', saveService);
};

const editItem = (dataItemEdit) => {
   getModal.classList.add('modal-active');
   modalHeader.textContent = 'Редактировать услугу';
   getIdItemEdit = dataItemEdit.id;

   getInputType.value = dataItemEdit.type;
   inputName.value = dataItemEdit.name;
   inputUnits.value = dataItemEdit.units;
   inputCost.value = dataItemEdit.cost;
};

const openItem = id => {
   fetch(`http://localhost:3000/api/items/${id}`)
      .then(response => response.json())
      .then(dataItemEdit => editItem(dataItemEdit))
      .catch(error => console.error(error));
};

const openAddService = event => {
   const target = event.target;
   statusMessage.textContent = '';
   if (target.closest('.button__close') || target.closest('.cancel-button') || !target.closest('.modal')) {
      event.preventDefault();
      getModal.classList.remove('modal-active');
      getInputType.value = '';
      inputName.value = '';
      inputUnits.value = '';
      inputCost.value = '';
   }
   if (target.closest('.button-ui_firm') && modalHeader.textContent === 'Добавение новой услуги') {
      addNewService();
   } else if (target.closest('.button-ui_firm') && modalHeader.textContent === 'Редактировать услугу') {
      saveItem();
   }
};

btnAddItem.addEventListener('click', () => {
   getModal.classList.add('modal-active');
   modalHeader.textContent = 'Добавение новой услуги';
});
getModal.addEventListener('click', openAddService);

tableWrapper.addEventListener('click', event => {
   let target = event.target;
   if (target.closest('.action-remove')) {
      if (target.closest('.table__row')) {
         target = target.closest('.table__row');
         const getIdItem = target.querySelector('.table__id');

         const removeItem = id => {
            fetch(`http://localhost:3000/api/items/${id}`, {
               method: 'DELETE'
            }).then(() => {
               init();
            }).catch(err => {
               console.error(err);
            });
         };
         removeItem(getIdItem.textContent);
      }
   }
   if (target.closest('.action-change')) {
      if (target.closest('.table__row')) {
         target = target.closest('.table__row');
         const getId = target.querySelector('.table__id');
         openItem(getId.textContent);
      }
   }
});
