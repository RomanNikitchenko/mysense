const td = document.querySelectorAll('.work__schedule_exemple td');
const href = document.querySelectorAll('.work__schedule_exemple td a');

import ourTeam4Desktop2x from '../../images/darina.png';
let disabled = false;
let disabledAction = false;
let transferName = null;

//при загрузки страницы каждой ячейки под ссылкой добавляем карточку.
href.forEach(item => {
  const markup = `<div class="table-modal-client visually-hidden">
                      <div class="table-modal-client__content">
                          <div class="table-modal-client__flex">
                              <div class="table-modal-client__border">
                                  <img class="private-office__image" src="${ourTeam4Desktop2x}" alt="Фото Дарина Приходько" />
                              </div>
                              <p class="table-modal-client__name">Дарина<br> Приходько</p>
                          </div>
                          <ul class="table-modal-client__list">
                              <li class="table-modal-client__item">Тривалість <span>50 хв</span></li>
                              <li class="table-modal-client__item">Тип <span>Особиста</span></li>
                              <li class="table-modal-client__item">Дата <span class="table-modal-client__data">13 березня</span></li>
                              <li class="table-modal-client__item">Час <span><span class="table-modal-client__time">11:00</span> - <span class="table-modal-client__time-end">11:50</span></span></li>
                          </ul>

                          <button class="table-modal-client__btn" type="button">Дивитись анкету</button>
                          <button class="table-modal-client__btn table-modal-client__reschedule-meeting" type="button">Перенести</button>
                          <button class="table-modal-client__btn" type="button">Скасувати сессію</button>
                      </div>
                  </div>`;

  const markupConfirmation = `<div class="table-modal-client-action visually-hidden">
                                <div class="table-modal-client-action__content">
                                    <div class="table-modal-client-action__flex">
                                        <div class="table-modal-client-action__border">
                                            <img class="private-office-action__image" src="${ourTeam4Desktop2x}" alt="Фото Дарина Приходько" />
                                        </div>
                                        <p class="table-modal-client-action__name">Дарина<br> Приходько</p>
                                    </div>
                                    <ul class="table-modal-client-action__list">
                                        <li class="table-modal-client-action__item">Тривалість <span>50 хв</span></li>
                                        <li class="table-modal-client-action__item">Тип <span>Особиста</span></li>
                                        <li class="table-modal-client-action__item">Дата <span class="table-modal-client__data">13 березня</span></li>
                                        <li class="table-modal-client-action__item">Час <span><span class="table-modal-client__time">11:00</span> - <span
                                                    class="table-modal-client__time-end">11:50</span></span></li>
                                    </ul>
                            
                                    <button class="table-modal-client-action__btn table-modal-client-action__btn-confirm" type="button">Підтвердити</button>
                                    <button class="table-modal-client-action__btn table-modal-client-action__btn-undo" type="button">Відміна</button>
                                </div>
                              </div>`;

  item.insertAdjacentHTML('afterend', markup);
  item.insertAdjacentHTML('afterend', markupConfirmation);
});

const tableModalClients = document.querySelectorAll('.table-modal-client');
const tableModalClientAction = document.querySelectorAll(
  '.table-modal-client-action'
);

tableModalClients.forEach(item => {
  item.addEventListener('click', e => {
    e.stopPropagation();
  });
});

tableModalClientAction.forEach(item => {
  item.addEventListener('click', e => {
    e.stopPropagation();
  });
});

td.forEach(item => {
  item.addEventListener('click', e => {
    if (!e.currentTarget.querySelector('a')) {
      return;
    }

    e.preventDefault();
    const link = e.currentTarget.querySelector('a');
    const linkContent = e.currentTarget.querySelector('a').textContent;
    const linkContentHTML = e.currentTarget.querySelector('a').innerHTML;
    const tableModalCent = e.currentTarget.querySelector('.table-modal-client');

    const clientName = tableModalCent.querySelector(
      '.table-modal-client__name'
    );
    const clientdata = tableModalCent.querySelector(
      '.table-modal-client__data'
    );
    const clientTime = tableModalCent.querySelector(
      '.table-modal-client__time'
    );
    const clientTimeEnd = tableModalCent.querySelector(
      '.table-modal-client__time-end'
    );

    const tableModalClientAction = e.currentTarget.querySelector(
      '.table-modal-client-action'
    );

    // Получение времени из соответствующей ячейки времени
    const timeCell = e.currentTarget.parentNode.querySelector('.cell__time');
    const time = timeCell.textContent.trim();

    // Получение даты из заголовка столбца таблицы
    var column = link.parentNode.cellIndex;
    var dateCell = document.querySelector(
      '.work__schedule_exemple thead th:nth-child(' + (column + 1) + ') span'
    );
    var date = dateCell.textContent.trim();

    //
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

    if (!linkContent) {
      if (!disabled) {
        for (let i = 0; i < href.length; i += 1) {
          if (href[i].classList.contains('href-active')) {
            href[i].classList.remove('href-active');
          }
        }
      }

      //добавляем имя в пустую ячейку
      if (disabled) {
        if (disabledAction) return;

        link.innerHTML = transferName;
        link.classList.add('disabled');

        const linkActive = document.querySelector('.href-active');
        linkActive.innerHTML = '';

        for (let i = 0; i < td.length; i += 1) {
          if (td[i].classList.contains('empty-link')) {
            td[i].classList.remove('empty-link');
          }
        }

        tableModalClientAction.classList.remove('visually-hidden');

        disabledAction = true;
      }

      return;
    }

    if (!disabled) {
      clientName.innerHTML = linkContentHTML;
      clientdata.innerHTML = date;
      clientTime.innerHTML = time;
      clientTimeEnd.innerHTML = time.split(':')[0] + ':50';
      tableModalCent.classList.remove('visually-hidden');

      for (let i = 0; i < href.length; i += 1) {
        if (href[i].classList.contains('href-active')) {
          href[i].classList.remove('href-active');
          break;
        }
      }

      link.classList.add('href-active');
      return;
    }
  });
});

///
const rescheduleMeeting = document.querySelectorAll(
  '.table-modal-client__reschedule-meeting'
);

rescheduleMeeting.forEach(item => {
  item.addEventListener('click', e => {
    transferName = e.currentTarget.parentNode.querySelector(
      '.table-modal-client__name'
    ).innerHTML;

    for (let i = 0; i < tableModalClients.length; i += 1) {
      if (!tableModalClients[i].classList.contains('visually-hidden')) {
        tableModalClients[i].classList.add('visually-hidden');
        break;
      }
    }

    for (let i = 0; i < href.length; i += 1) {
      if (href[i].textContent) {
        href[i].classList.add('disabled');
      }
      if (href[i].classList.contains('href-active')) {
        href[i].classList.remove('disabled');
      }
    }

    disabled = true;

    for (let i = 0; i < href.length; i += 1) {
      if (!href[i].textContent) {
        href[i].parentNode.classList.add('empty-link');
      }
    }
  });
});

///
const tableModalClientActionBtnConfirm = document.querySelectorAll(
  '.table-modal-client-action__btn-confirm'
);

tableModalClientActionBtnConfirm.forEach(item => {
  item.addEventListener('click', e => {
    for (let i = 0; i < href.length; i += 1) {
      if (href[i].classList.contains('disabled')) {
        href[i].classList.remove('disabled');
      }
    }

    for (let i = 0; i < href.length; i += 1) {
      if (href[i].classList.contains('href-active')) {
        href[i].classList.remove('href-active');
      }
    }

    for (let i = 0; i < tableModalClientAction.length; i += 1) {
      if (!tableModalClientAction[i].classList.contains('visually-hidden')) {
        tableModalClientAction[i].classList.add('visually-hidden');
        break;
      }
    }

    disabled = false;
    disabledAction = false;
  });
});
