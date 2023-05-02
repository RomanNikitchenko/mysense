import checkArrayAndDisableButton from './checkArrayAndDisableButton';
import toggleActiveClass from './toggleActiveClass';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
(() => {
  //section
  const testLine = document.querySelectorAll('.test__line');
  const testpageTitle = document.querySelector('.testpage__title');
  const testpageCards = document.querySelector('.testpage__cards');
  const testCardWrapBtn = document.querySelectorAll('.test__card-wrap');
  const fixedBox = document.querySelector('.fixed__box');
  const sectionState = document.querySelector('.state');
  const sectionRequests = document.querySelector('.requests');
  const sectionConsern = document.querySelector('.consern');
  const sectionCategory = document.querySelector('.category');
  const testResult = document.querySelector('.result');

  const fixedButtonLoadMore = document.querySelector(
    '.fixed__button-load-more'
  );

  let myself = false;
  let family = false;
  let child = false;

  let myState = [];
  let MyRequests = [];
  let consern = [];
  let category = [];

  let disabled = false;

  let page = 0;

  /////
  testCardWrapBtn.forEach(item => {
    item.addEventListener('click', e => {
      for (let i = 0; i < testCardWrapBtn.length; i += 1) {
        if (testCardWrapBtn[i].classList.contains('is-active')) {
          testCardWrapBtn[i].classList.remove('is-active');
          break;
        }
      }

      if (e.currentTarget.dataset.for === 'myself') {
        myself = true;
        family = false;
        child = false;
      }

      if (e.currentTarget.dataset.for === 'family') {
        myself = false;
        family = true;
        child = false;
      }

      if (e.currentTarget.dataset.for === 'child') {
        myself = false;
        family = false;
        child = true;
      }

      item.classList.add('is-active');

      fixedBox.classList.remove('visually-hidden');
    });
  });
  /////

  /////
  const fixedButtonNext = document.querySelector('.fixed__button-next');

  fixedButtonNext.addEventListener('click', () => {
    if (disabled) {
      Notify.info('Зробіть свій вибір.');
      return;
    }

    if (page === 0) {
      page += 1;

      // testpageContainer.classList.add('visually-hidden');
      testpageTitle.classList.add('visually-hidden');
      testpageCards.classList.add('visually-hidden');

      if (myself) {
        sectionState.classList.remove('visually-hidden');
        return;
      }
      if (family) {
        sectionConsern.classList.remove('visually-hidden');
        disabled = checkArrayAndDisableButton(consern, disabled);
        return;
      }
      if (child) {
        sectionCategory.classList.remove('visually-hidden');
        disabled = checkArrayAndDisableButton(category, disabled);
        return;
      }
    }

    if (page === 1) {
      if (myself) {
        page += 1;
        sectionState.classList.add('visually-hidden');
        sectionRequests.classList.remove('visually-hidden');
        disabled = checkArrayAndDisableButton(MyRequests, disabled);
        return;
      }
      if (family) {
        page += 1;
        sectionConsern.classList.add('visually-hidden');
        fixedButtonNext.classList.add('visually-hidden');
        testResult.classList.remove('visually-hidden');
        fixedButtonLoadMore.classList.remove('visually-hidden');
        toggleActiveClass(testLine, testResult, 2);
        return;
      }
      if (child) {
        page += 1;
        sectionCategory.classList.add('visually-hidden');
        fixedButtonNext.classList.add('visually-hidden');
        testResult.classList.remove('visually-hidden');
        fixedButtonLoadMore.classList.remove('visually-hidden');
        toggleActiveClass(testLine, testResult, 2);
        return;
      }
    }

    if (page === 2) {
      if (myself) {
        page += 1;
        sectionRequests.classList.add('visually-hidden');
        fixedButtonNext.classList.add('visually-hidden');
        testResult.classList.remove('visually-hidden');
        fixedButtonLoadMore.classList.remove('visually-hidden');
        toggleActiveClass(testLine, testResult, 2);
        return;
      }
    }
  });
  /////

  /////
  const fixedButtonPrew = document.querySelector('.fixed__button-prew');

  fixedButtonPrew.addEventListener('click', () => {
    disabled = false;

    if (page === 1) {
      page -= 1;

      testpageTitle.classList.remove('visually-hidden');
      testpageCards.classList.remove('visually-hidden');

      if (myself) {
        sectionState.classList.add('visually-hidden');
        return;
      }

      if (family) {
        sectionConsern.classList.add('visually-hidden');
        return;
      }

      if (child) {
        sectionCategory.classList.add('visually-hidden');
        return;
      }
    }

    if (page === 2) {
      if (myself) {
        page -= 1;
        sectionRequests.classList.add('visually-hidden');
        sectionState.classList.remove('visually-hidden');
        return;
      }
      if (family) {
        page -= 1;
        sectionConsern.classList.remove('visually-hidden');
        fixedButtonNext.classList.remove('visually-hidden');
        testResult.classList.add('visually-hidden');
        fixedButtonLoadMore.classList.add('visually-hidden');
        toggleActiveClass(testLine, sectionConsern, 1);
        return;
      }
      if (child) {
        page -= 1;
        sectionCategory.classList.remove('visually-hidden');
        fixedButtonNext.classList.remove('visually-hidden');
        testResult.classList.add('visually-hidden');
        fixedButtonLoadMore.classList.add('visually-hidden');
        toggleActiveClass(testLine, sectionCategory, 1);
        return;
      }
    }

    if (page === 3) {
      if (myself) {
        page -= 1;
        sectionRequests.classList.remove('visually-hidden');
        fixedButtonNext.classList.remove('visually-hidden');
        testResult.classList.add('visually-hidden');
        fixedButtonLoadMore.classList.add('visually-hidden');
        toggleActiveClass(testLine, sectionRequests, 1);
        return;
      }
    }
  });
  /////

  /////
  const toggleArrayElement = (item, data, array) => {
    const title = item.firstElementChild.innerHTML;
    item.setAttribute(data, title);

    item.addEventListener('click', async () => {
      const dataValue = item.getAttribute(data);

      // Получаем индекс элемента в массиве
      const index = array.indexOf(dataValue);

      // Если элемент уже есть в массиве, удаляем его
      if (index !== -1) {
        array.splice(index, 1);
      } else {
        array.push(dataValue);
      }

      //добавляем клас ввыбраным кнопкам
      item.classList.toggle('is-active');

      console.log(array);

      if (
        data === 'data-button-my-Requests' ||
        data === 'data-button-consern' ||
        data === 'data-button-category'
      ) {
        disabled = checkArrayAndDisableButton(array, disabled);
      }
    });
  };
  /////

  //myself
  //по my-state
  const dataButtonState = document.querySelectorAll('.state .card__link-btn');
  dataButtonState.forEach(item => {
    toggleArrayElement(item, 'data-button-my-state', myState);
  });
  //

  //по my-requests
  const dataButtonMyRequests = document.querySelectorAll(
    '.requests .card__link-btn'
  );
  dataButtonMyRequests.forEach(item => {
    toggleArrayElement(item, 'data-button-my-Requests', MyRequests);
  });
  //

  //family
  //по consern
  const dataButtonConsern = document.querySelectorAll(
    '.consern .card__link-btn'
  );
  dataButtonConsern.forEach(item => {
    toggleArrayElement(item, 'data-button-consern', consern);
  });
  //

  //child
  //по category
  const dataButtonCategory = document.querySelectorAll(
    '.category .card__link-btn'
  );
  dataButtonCategory.forEach(item => {
    toggleArrayElement(item, 'data-button-category', category);
  });
  //
})();