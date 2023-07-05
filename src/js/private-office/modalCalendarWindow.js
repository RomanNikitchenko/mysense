const td = document.querySelectorAll('.work__schedule_exemple td');
const href = document.querySelectorAll('.work__schedule_exemple td a');
const add_session__wrap = document.querySelector('.add_session__wrap');

import ourTeam4Desktop2x from '../../images/darina.png';
let disabled = false;
let disabledAction = false;
let transferName = null;
let selectedTableCell = null;
let deleteSession = false;
let time = null;
let date = null;

//при загрузки страницы каждой ячейки под ссылкой добавляем карточку.
href.forEach(item => {
  const markup = `<div class="table-modal-client visually-hidden-modal">
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
                          <button class="table-modal-client__btn table-modal-client__btn-delete-session" type="button">Скасувати сессію</button>
                      </div>
                  </div>`;

  const markupConfirmation = `<div class="table-modal-client-action visually-hidden-modal">
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
                                        <li class="table-modal-client-action__item">Дата <span class="table-modal-client-action__data">13 березня</span></li>
                                        <li class="table-modal-client-action__item">Час <span><span class="table-modal-client-action__time">11:00</span> - <span
                                                    class="table-modal-client-action__time-end">11:50</span></span></li>
                                    </ul>
                            
                                    <button class="table-modal-client-action__btn table-modal-client-action__btn-confirm" type="button">Підтвердити</button>
                                    <button class="table-modal-client-action__btn table-modal-client-action__btn-undo" type="button">Відміна</button>
                                </div>
                              </div>`;

  item.insertAdjacentHTML('afterend', markup);
  item.insertAdjacentHTML('afterend', markupConfirmation);
});

//каждой ссылки добавляем id по index
href.forEach((item, i) => {
  item.setAttribute('id', i);
});

function addSession() {
  for (let i = 0; i < href.length; i += 1) {
    if (!href[i].textContent) {
      href[i].parentNode.classList.add('add-session');
    }
  }
}

addSession();

function removeSession() {
  for (let i = 0; i < href.length; i += 1) {
    if (!href[i].textContent) {
      href[i].parentNode.classList.remove('add-session');
    }
  }
}

//при клике по мадалке клик не уходит на родителя
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

    /////
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

    /////
    const tableModalClientAction = e.currentTarget.querySelector(
      '.table-modal-client-action'
    );

    const clientActionName = tableModalClientAction.querySelector(
      '.table-modal-client-action__name'
    );
    const clientActiondata = tableModalClientAction.querySelector(
      '.table-modal-client-action__data'
    );
    const clientActionTime = tableModalClientAction.querySelector(
      '.table-modal-client-action__time'
    );
    const clientActionTimeEnd = tableModalClientAction.querySelector(
      '.table-modal-client-action__time-end'
    );

    // Получение времени из соответствующей ячейки времени
    const timeCell = e.currentTarget.parentNode.querySelector('.cell__time');
    time = timeCell.textContent.trim();

    // Получение даты из заголовка столбца таблицы
    var column = link.parentNode.cellIndex;
    var dateCell = document.querySelector(
      '.work__schedule_exemple thead th:nth-child(' + (column + 1) + ') span'
    );
    date = dateCell.textContent.trim();

    if (!tableModalCent.classList.contains('visually-hidden-modal')) {
      tableModalCent.classList.add('visually-hidden-modal');
      return;
    }

    for (let i = 0; i < tableModalClients.length; i += 1) {
      if (!tableModalClients[i].classList.contains('visually-hidden-modal')) {
        tableModalClients[i].classList.add('visually-hidden-modal');
        break;
      }
    }

    if (!linkContent) {
      if (!disabled) {
        console.log('add-session');

        for (let i = 0; i < href.length; i += 1) {
          if (href[i].classList.contains('href-active')) {
            href[i].classList.remove('href-active');
          }
        }

        add_session__wrap.style.display = 'block';

        selectedTableCell = link.parentNode
          .querySelector('a')
          .getAttribute('id');

        const dateHourSession = add_session__wrap.querySelector(
          '.correct_date .text'
        );

        dateHourSession.value = `${date}, ${time} - ${
          time.split(':')[0] + ':50'
        } за Києвом`;
      }

      //добавляем имя в пустую ячейку
      if (disabled) {
        console.log('dont-add-session');
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

        tableModalClientAction.classList.remove('visually-hidden-modal');

        clientActionName.innerHTML = transferName;
        clientActiondata.innerHTML = date;
        clientActionTime.innerHTML = time;
        clientActionTimeEnd.innerHTML = time.split(':')[0] + ':50';

        disabledAction = true;
      }

      return;
    }

    if (!disabled) {
      clientName.innerHTML = linkContentHTML;
      clientdata.innerHTML = date;
      clientTime.innerHTML = time;
      clientTimeEnd.innerHTML = time.split(':')[0] + ':50';

      tableModalCent.classList.remove('visually-hidden-modal');

      for (let i = 0; i < href.length; i += 1) {
        if (href[i].classList.contains('href-active')) {
          href[i].classList.remove('href-active');
          break;
        }
      }

      link.classList.add('href-active');
      //сохраняем ссылку на родительский елемент
      selectedTableCell = link.parentNode.querySelector('a').getAttribute('id');
      console.log(selectedTableCell);
      return;
    }
  });
});

// кнопка Перенести
const rescheduleMeeting = document.querySelectorAll(
  '.table-modal-client__reschedule-meeting'
);

rescheduleMeeting.forEach(item => {
  item.addEventListener('click', e => {
    transferName = e.currentTarget.parentNode.querySelector(
      '.table-modal-client__name'
    ).innerHTML;

    for (let i = 0; i < tableModalClients.length; i += 1) {
      if (!tableModalClients[i].classList.contains('visually-hidden-modal')) {
        tableModalClients[i].classList.add('visually-hidden-modal');
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

    removeSession();

    for (let i = 0; i < href.length; i += 1) {
      if (!href[i].textContent) {
        href[i].parentNode.classList.add('empty-link');
      }
    }
  });
});

//кнопка Підтвердити
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
      if (
        !tableModalClientAction[i].classList.contains('visually-hidden-modal')
      ) {
        tableModalClientAction[i].classList.add('visually-hidden-modal');
        break;
      }
    }

    if (deleteSession) {
      const link =
        e.currentTarget.parentNode.parentNode.parentNode.querySelector('a');
      link.innerHTML = '';
      deleteSession = false;
    }

    disabled = false;
    disabledAction = false;

    addSession();
  });
});

//кнопка Відміна
const tableModalClientActionBtnUndo = document.querySelectorAll(
  '.table-modal-client-action__btn-undo'
);

tableModalClientActionBtnUndo.forEach(item => {
  item.addEventListener('click', e => {
    ///
    if (deleteSession) {
      for (let i = 0; i < tableModalClientAction.length; i += 1) {
        if (
          !tableModalClientAction[i].classList.contains('visually-hidden-modal')
        ) {
          tableModalClientAction[i].classList.add('visually-hidden-modal');
          break;
        }
      }

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

      deleteSession = false;
      disabled = false;
      disabledAction = false;

      addSession();
      return;
    }

    ///
    const link =
      e.currentTarget.parentNode.parentNode.parentNode.querySelector('a');
    const linkHTML =
      e.currentTarget.parentNode.parentNode.parentNode.querySelector(
        'a'
      ).innerHTML;

    for (let i = 0; i < href.length; i += 1) {
      if (href[i].getAttribute('id') === selectedTableCell) {
        href[i].innerHTML = linkHTML;
        break;
      }
    }

    link.innerHTML = '';

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
      if (
        !tableModalClientAction[i].classList.contains('visually-hidden-modal')
      ) {
        tableModalClientAction[i].classList.add('visually-hidden-modal');
        break;
      }
    }

    disabled = false;
    disabledAction = false;

    addSession();
  });
});

//кнопка удалить сеанс
const tableModalClientBtnDeleteSession = document.querySelectorAll(
  '.table-modal-client__btn-delete-session'
);

tableModalClientBtnDeleteSession.forEach(item => {
  item.addEventListener('click', e => {
    const link =
      e.currentTarget.parentNode.parentNode.parentNode.querySelector('a');
    const linkHTML =
      e.currentTarget.parentNode.parentNode.parentNode.querySelector(
        'a'
      ).innerHTML;
    const tableModalClients =
      e.currentTarget.parentNode.parentNode.parentNode.querySelector(
        '.table-modal-client'
      );
    const tableModalClientAction =
      e.currentTarget.parentNode.parentNode.parentNode.querySelector(
        '.table-modal-client-action'
      );

    const clientActionName = tableModalClientAction.querySelector(
      '.table-modal-client-action__name'
    );
    const clientActiondata = tableModalClientAction.querySelector(
      '.table-modal-client-action__data'
    );
    const clientActionTime = tableModalClientAction.querySelector(
      '.table-modal-client-action__time'
    );
    const clientActionTimeEnd = tableModalClientAction.querySelector(
      '.table-modal-client-action__time-end'
    );

    tableModalClients.classList.add('visually-hidden-modal');
    tableModalClientAction.classList.remove('visually-hidden-modal');

    clientActionName.innerHTML = linkHTML;
    clientActiondata.innerHTML = date;
    clientActionTime.innerHTML = time;
    clientActionTimeEnd.innerHTML = time.split(':')[0] + ':50';

    for (let i = 0; i < href.length; i += 1) {
      if (href[i].textContent) {
        href[i].classList.add('disabled');
      }
      if (href[i].classList.contains('href-active')) {
        href[i].classList.remove('disabled');
      }
    }

    deleteSession = true;
    disabledAction = true;
    disabled = true;

    removeSession();
  });
});

///
///
///скрыть модалку Додати сесію бекдроп
add_session__wrap.addEventListener('click', e => {
  if (e.currentTarget !== e.target) {
    return;
  }

  add_session__wrap.style.display = 'none';
});

///скрыть модалку Додати сесію по крестику в модалки
const close = add_session__wrap.querySelector('.close');

close.addEventListener('click', e => {
  add_session__wrap.style.display = 'none';
});

///развернуть свернуть редактирование времени сеанса
const edit = add_session__wrap.querySelector('.edit');

let toggle = false;

edit.addEventListener('click', () => {
  const chooseDay = add_session__wrap.querySelector('.choose__day');
  const chooseTime = add_session__wrap.querySelector('.choose__time');

  if (!toggle) {
    console.log('false');
    chooseDay.style.display = 'block';
    chooseTime.style.display = 'block';
    toggle = true;
    return;
  }

  if (toggle) {
    console.log('true');
    chooseDay.style.display = 'none';
    chooseTime.style.display = 'none';
    toggle = false;
    return;
  }
});

//раскрываем меню
const listClient = add_session__wrap.querySelector('.list__client');
listClient.addEventListener('click', () => {
  listClient.classList.toggle('show');
});

//клик по всему спску ul в глубь не проходит
const dropDownList = add_session__wrap.querySelector('.drop-down-list');
dropDownList.addEventListener('click', e => {
  e.stopPropagation();
});

//кликаем по item перезаписываем изобоажение и текст внутри list__client
const dropDownListItem = add_session__wrap.querySelectorAll(
  '.drop-down-list-item'
);
const img = add_session__wrap.querySelector('.list__client__img');
const text = add_session__wrap.querySelector('.list__client__text');

dropDownListItem.forEach(item => {
  item.addEventListener('click', e => {
    const itemImgSrc = e.currentTarget
      .querySelector('.drop-down-list__img')
      .getAttribute('src');

    const itemText = e.currentTarget.querySelector(
      '.drop-down-list__text'
    ).textContent;

    img.src = itemImgSrc;
    text.textContent = itemText;

    listClient.classList.toggle('show');

    for (let i = 0; i < dropDownListItem.length; i += 1) {
      if (dropDownListItem[i].classList.contains('active')) {
        dropDownListItem[i].classList.remove('active');
        break;
      }
    }

    item.classList.add('active');
  });
});

/////
/////

//поиск даты в модальном окне Додати сесію
const weekList = add_session__wrap.querySelector('.week__list');
weekList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const button = weekList.querySelectorAll('button');

  for (let i = 0; i < button.length; i += 1) {
    if (button[i].classList.contains('num_active')) {
      button[i].classList.remove('num_active');
      break;
    }
  }

  e.target.classList.add('num_active');

  const dayMonth = e.target.dataset.day;
  date = dayMonth;
  console.log(dayMonth);

  const input = add_session__wrap.querySelector('.correct_date .text');
  input.value = `${date}, ${time} - ${time.split(':')[0] + ':50'} за Києвом`;
});

//поиск времени в модальном окне Додати сесію
const chooseTimeBtn = add_session__wrap.querySelectorAll(
  '.choose__time-body .choose__time-btn'
);

chooseTimeBtn.forEach(item => {
  item.addEventListener('click', e => {
    for (let i = 0; i < chooseTimeBtn.length; i += 1) {
      if (chooseTimeBtn[i].classList.contains('active')) {
        chooseTimeBtn[i].classList.remove('active');
        break;
      }
    }

    item.classList.add('active');

    const dataTime = e.currentTarget.dataset.time;
    time = dataTime;
    console.log(dataTime);

    const input = add_session__wrap.querySelector('.correct_date .text');
    input.value = `${date}, ${time} - ${time.split(':')[0] + ':50'} за Києвом`;
  });
});

///развернуть свернуть редактирование времени сеанса
const planSession = add_session__wrap.querySelector('.plan_session');
planSession.addEventListener('click', () => {
  console.log(selectedTableCell); //id
  console.log(time); //time
  console.log(date); //time
  console.log(text.innerHTML); //name user

  for (let i = 0; i < href.length; i += 1) {
    if (href[i].getAttribute('id') === selectedTableCell) {
      href[i].innerHTML = text.innerHTML;
      href[i].parentNode.classList.remove('add-session');
      break;
    }
  }

  add_session__wrap.style.display = 'none';
});
