const td = document.querySelectorAll('.work__schedule_exemple td');
const href = document.querySelectorAll('.work__schedule_exemple td a');
const add_session__wrap = document.querySelector('.add_session__wrap');

import imagesDarinaPng from '../../images/darina.png';
import imagesYarikPng from '../../images/yarik.png';
import imagesKamilaPng from '../../images/kamila.png';
import imagesMariyaPng from '../../images/mariya.png';
import imagesYarinaPng from '../../images/yarina.png';

let disabled = false;
let disabledAction = false;
let transferName = null;
let selectedTableCell = null;
let idTransferCell = null;
let deleteSession = false;
let time = null;
let date = null;

//при загрузки страницы каждой ячейки под ссылкой добавляем карточку.
href.forEach(item => {
  const markup = `<div class="table-modal-client visually-hidden-modal">
                      <div class="table-modal-client__content">
                          <div class="table-modal-client__flex">
                              <div class="table-modal-client__border">
                                  <img class="private-office__image" src="${imagesDarinaPng}" alt="Фото Дарина Приходько" />
                              </div>
                              <p class="table-modal-client__name">Дарина<br> Приходько</p>
                          </div>
                          <ul class="table-modal-client__list">
                              <li class="table-modal-client__item">Тривалість <span>50 хв</span></li>
                              <li class="table-modal-client__item">Тип <span>Особиста</span></li>
                              <li class="table-modal-client__item">Дата <span class="table-modal-client__data">13 березня</span></li>
                              <li class="table-modal-client__item">Час <span><span class="table-modal-client__time">11:00</span> - <span class="table-modal-client__time-end">11:50</span></span></li>
                          </ul>

                          <button class="table-modal-client__btn table-modal-client__view-profile" type="button">Дивитись анкету</button>
                          <button class="table-modal-client__btn table-modal-client__reschedule-meeting" type="button">Перенести</button>
                          <button class="table-modal-client__btn table-modal-client__btn-delete-session" type="button">Скасувати сессію</button>
                      </div>
                  </div>`;

  const markupConfirmation = `<div class="table-modal-client-action visually-hidden-modal">
                                <div class="table-modal-client-action__content">
                                    <div class="table-modal-client-action__flex">
                                        <div class="table-modal-client-action__border">
                                            <img class="private-office-action__image" src="${imagesDarinaPng}" alt="Фото Дарина Приходько" />
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
    const clientImage = tableModalCent.querySelector('.private-office__image');

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

    const clientActionImage = tableModalClientAction.querySelector(
      '.private-office-action__image'
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

        //открыть модалку Додати сесію
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

        //Виберіть дату сесії
        //подсвечиваем дату когда открываем модалку
        const weekList = document.querySelectorAll('.week__list button');

        //удаляем всем сласс num_active
        for (let i = 0; i < weekList.length; i += 1) {
          if (weekList[i].classList.contains('num_active')) {
            weekList[i].classList.remove('num_active');
            break;
          }
        }

        //тому у которого совпала дата атрибут с переменной дата, добаволяем класс
        for (let i = 0; i < weekList.length; i += 1) {
          if (weekList[i].getAttribute('data-day') === date) {
            weekList[i].classList.add('num_active');
            break;
          }
        }

        //Оберіть зручний час (за Києвом)
        //подсвечиваем время когда открываем модалку
        const chooseTime = document.querySelectorAll('.choose__time button');

        //удаляем всем сласс num_active
        for (let i = 0; i < chooseTime.length; i += 1) {
          if (chooseTime[i].classList.contains('active')) {
            chooseTime[i].classList.remove('active');
            break;
          }
        }

        //тому у которого совпала дата атрибут с переменной дата, добаволяем класс
        for (let i = 0; i < chooseTime.length; i += 1) {
          if (chooseTime[i].getAttribute('data-time') === time) {
            chooseTime[i].classList.add('active');
            break;
          }
        }
      }

      if (disabledAction) {
        console.log('отмена');

        const modal = document.querySelectorAll('.table-modal-client-action');

        for (let i = 0; i < modal.length; i += 1) {
          if (!modal[i].classList.contains('visually-hidden-modal')) {
            modal[i].classList.add('visually-hidden-modal');
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

        for (let i = 0; i < href.length; i += 1) {
          if (href[i].getAttribute('id') === idTransferCell) {
            href[i].innerHTML = '';
            break;
          }
        }

        for (let i = 0; i < href.length; i += 1) {
          if (href[i].getAttribute('id') === selectedTableCell) {
            href[i].innerHTML = transferName;
            break;
          }
        }

        addSession();
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

        tableModalClientAction.classList.remove('visually-hidden-modal');

        if (link.textContent === 'Дарина Приходько')
          clientActionImage.src = `${imagesDarinaPng}`;

        if (link.textContent === 'Ярослав Науменко')
          clientActionImage.src = `${imagesYarikPng}`;

        if (link.textContent === 'Каміла Айс')
          clientActionImage.src = `${imagesKamilaPng}`;

        if (link.textContent === 'Марія Соловій')
          clientActionImage.src = `${imagesMariyaPng}`;

        if (link.textContent === 'Ярина Перекотиполе')
          clientActionImage.src = `${imagesYarinaPng}`;

        clientActionName.innerHTML = transferName;
        clientActiondata.innerHTML = date;
        clientActionTime.innerHTML = time;
        clientActionTimeEnd.innerHTML = time.split(':')[0] + ':50';

        disabledAction = true;

        //id ячейки в которую хотим перезаписать имя перед потверждением или отменой
        idTransferCell = e.currentTarget.querySelector('a').getAttribute('id');
      }

      return;
    }

    if (!disabled) {
      console.log('!disabled');

      //меняем изображение в модалки в зависимости от контента в ячейки
      if (link.textContent === 'Дарина Приходько')
        clientImage.src = `${imagesDarinaPng}`;

      if (link.textContent === 'Ярослав Науменко')
        clientImage.src = `${imagesYarikPng}`;

      if (link.textContent === 'Каміла Айс')
        clientImage.src = `${imagesKamilaPng}`;

      if (link.textContent === 'Марія Соловій')
        clientImage.src = `${imagesMariyaPng}`;

      if (link.textContent === 'Ярина Перекотиполе')
        clientImage.src = `${imagesYarinaPng}`;

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

const undoAction = e => {
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
};

tableModalClientActionBtnUndo.forEach(item => {
  item.addEventListener('click', undoAction);
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

    const clientActionImage = tableModalClientAction.querySelector(
      '.private-office-action__image'
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

    if (link.textContent === 'Дарина Приходько')
      clientActionImage.src = `${imagesDarinaPng}`;

    if (link.textContent === 'Ярослав Науменко')
      clientActionImage.src = `${imagesYarikPng}`;

    if (link.textContent === 'Каміла Айс')
      clientActionImage.src = `${imagesKamilaPng}`;

    if (link.textContent === 'Марія Соловій')
      clientActionImage.src = `${imagesMariyaPng}`;

    if (link.textContent === 'Ярина Перекотиполе')
      clientActionImage.src = `${imagesYarinaPng}`;

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
    chooseDay.style.display = 'block';
    chooseTime.style.display = 'block';
    toggle = true;
    return;
  }

  if (toggle) {
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
function searchСellInTable(date, time) {
  const tableTheadDay = document.querySelectorAll(
    '.work__schedule_exemple [day-month]'
  );

  let indexDay = null;

  for (let i = 0; i < tableTheadDay.length; i += 1) {
    if (tableTheadDay[i].getAttribute('day-month') === date) {
      indexDay = i;
      break;
    }
  }

  const tableTbodyLine = document.querySelectorAll(
    '.work__schedule_exemple [line]'
  );

  let trLineTime = null;

  for (let i = 0; i < tableTbodyLine.length; i += 1) {
    if (tableTbodyLine[i].getAttribute('line') === time) {
      trLineTime = tableTbodyLine[i];
      break;
    }
  }

  const lineTdTime = trLineTime.querySelectorAll('td[time]');

  let tdTime = null;

  for (let i = 0; i < lineTdTime.length; i += 1) {
    if (i === indexDay) {
      tdTime = lineTdTime[i];
      break;
    }
  }

  console.log(date, time);
  console.log(tdTime);
  console.log(tdTime.querySelector('a').getAttribute('id'));

  selectedTableCell = tdTime.querySelector('a').getAttribute('id');
}
/////

//////
//поиск даты в модальном окне Додати сесію
const weekList = document.querySelectorAll('.week__list button');

weekList.forEach(item => {
  item.addEventListener('click', () => {
    for (let i = 0; i < weekList.length; i += 1) {
      if (weekList[i].classList.contains('num_active')) {
        weekList[i].classList.remove('num_active');
        break;
      }
    }

    item.classList.add('num_active');

    const dayMonth = item.dataset.day;
    date = dayMonth;

    const input = add_session__wrap.querySelector('.correct_date .text');
    input.value = `${date}, ${time} - ${time.split(':')[0] + ':50'} за Києвом`;

    searchСellInTable(date, time);
  });
});
//////

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

    const input = add_session__wrap.querySelector('.correct_date .text');
    input.value = `${date}, ${time} - ${time.split(':')[0] + ':50'} за Києвом`;

    searchСellInTable(date, time);
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

//можно вынести в другой файл
///открыть модально екно дывытысь анкету
const viewProfileBtn = document.querySelectorAll(
  '.table-modal-client__view-profile'
);

const infoCardClient = document.querySelector('.info-card__client-wrapper');

//по клику открыть модальное окно и записать инфу
viewProfileBtn.forEach(item => {
  item.addEventListener('click', e => {
    const content = e.currentTarget.parentNode;

    const img = content.querySelector('.private-office__image').src;
    const name = content.querySelector('.table-modal-client__name').textContent;

    const infoNameImg = infoCardClient.querySelector('.info-name__img');
    const infoNameClient = infoCardClient.querySelector('.info-name__client');

    infoNameImg.src = img;
    infoNameClient.textContent = name;

    infoCardClient.classList.remove('visually-hidden');
  });
});

//скрыть модалку по бекдропу
infoCardClient.addEventListener('click', e => {
  if (e.currentTarget !== e.target) {
    return;
  }
  infoCardClient.classList.add('visually-hidden');
});
