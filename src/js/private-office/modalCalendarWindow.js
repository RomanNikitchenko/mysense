const td = document.querySelectorAll('.work__schedule_exemple td');
const href = document.querySelectorAll('.work__schedule_exemple td a');

import ourTeam4Desktop2x from '../../images/darina.png';

href.forEach(item => {
  const linkContent = item.innerHTML;
  const markup = `<div class="table-modal-client visually-hidden">
                        <div class="table-modal-client__content">
                            <div class="table-modal-client__flex">
                                <div class="table-modal-client__border">
                                    <img class="private-office__image" src="${ourTeam4Desktop2x}" alt="Фото Дарина Приходько" />
                                </div>
                                <p class="table-modal-client__name">${
                                  linkContent
                                    ? linkContent
                                    : 'Дарина<br> Приходько'
                                }</p>
                            </div>
                            <ul class="table-modal-client__list">
                                <li class="table-modal-client__item">Тривалість <span>50 хв</span></li>
                                <li class="table-modal-client__item">Тип <span>Особиста</span></li>
                                <li class="table-modal-client__item">Дата <span>13 березня</span></li>
                                <li class="table-modal-client__item">Час <span>11:00 - 11:50</span></li>
                            </ul>

                            <button class="table-modal-client__btn" type="button">Дивитись анкету</button>
                            <button class="table-modal-client__btn" type="button">Перенести</button>
                            <button class="table-modal-client__btn" type="button">Скасувати сессію</button>
                        </div>
                    </div>`;
  item.insertAdjacentHTML('afterend', markup);
});

const tableModalClients = document.querySelectorAll('.table-modal-client');

tableModalClients.forEach(item => {
  item.addEventListener('click', e => {
    e.stopPropagation();
  });
});

td.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const linkContent = e.currentTarget.querySelector('a').textContent;
    const tableModalCent = e.currentTarget.querySelector('.table-modal-client');

    if (!tableModalCent.classList.contains('visually-hidden')) {
      tableModalCent.classList.add('visually-hidden');
      return;
    }

    for (let i = 0; i < tableModalClients.length; i += 1) {
      if (!tableModalClients[i].classList.contains('visually-hidden')) {
        tableModalClients[i].classList.add('visually-hidden');
        break;
      }
    }

    if (!linkContent) return;

    tableModalCent.classList.remove('visually-hidden');
  });
});
