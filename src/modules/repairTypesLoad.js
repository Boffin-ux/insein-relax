const repairTypesLoad = () => {
   const showRepairTypes = (data) => {
      const navListRepair = document.querySelector('.nav-list-popup-repair'),
         priceList = document.querySelector('.popup-dialog-repair-types'),
         popupRepairTypesContentTable = document.querySelector('.popup-repair-types-content-table'),
         popupRepairTitle = document.querySelector('.popup-repair-types-content__head-title');

      const dataType = data.reduce((accum, item) => accum.concat(item.type), []);
      const filterType = dataType.filter((item, i) => dataType.indexOf(item) === i && item);

      let filterTypes = data.filter(item => item.type && item.type.indexOf('Потолок: Демонтажные работы') > -1);


      const addTypesRepair = () => {
         navListRepair.innerHTML = '';
         filterType.forEach(item => {
            const button = document.createElement('button');
            button.classList.add('button_o');
            button.classList.add('popup-repair-types-nav__item');
            button.innerHTML = item;
            navListRepair.append(button);
         });
         const getButton = navListRepair.querySelectorAll('.button_o');
         getButton[0].classList.add('active')
         addCardContentTable(filterTypes);
      };
      const addCardContentTable = (filterData) => {
         const card = document.createElement('table'),
            tbody = document.createElement('tbody');
         card.classList.add('popup-repair-types-content-table__list');
         popupRepairTypesContentTable.append(card);
         card.append(tbody);

         filterData.forEach(item => {
            const tr = document.createElement('tr');
            tr.classList.add('mobile-row');
            tr.classList.add('showHide');

            tr.innerHTML = `
                  <td class="repair-types-name">${item.name}</td>
                  <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                  <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                  <td class="repair-types-value">${item.units}</td>
                  <td class="repair-types-value">${item.cost} руб.</td>
      `;
            tbody.append(tr);
         });
      };
      const changeType = () => {
         const popupRepairNavItem = document.querySelectorAll('.popup-repair-types-nav__item');
         priceList.addEventListener('click', event => {
            let target = event.target;
            if (target.closest('.popup-repair-types-nav__item')) {
               popupRepairTypesContentTable.innerHTML = '';
               target = target.closest('.popup-repair-types-nav__item');
               popupRepairNavItem.forEach(item => {
                  item.classList.remove('active');
               });
               target.classList.add('active');
               filterTypes = data.filter(item => item.type && item.type.indexOf(target.textContent) > -1);
               popupRepairTitle.textContent = target.textContent;
               addCardContentTable(filterTypes);
            } else {
               return;
            }
         });
      };
      addTypesRepair();
      changeType();
   };

   fetch('../../crm-backend/db.json')
      .then(response => response.json())
      .then(data => showRepairTypes(data))
      .catch(error => console.error(error));
};

export default repairTypesLoad;