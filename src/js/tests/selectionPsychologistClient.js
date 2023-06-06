import checkArrayAndDisableButton from './checkArrayAndDisableButton';
import toggleActiveClass from './toggleActiveClass';
import getFilterChange from './getFilterChange';
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

  //gender lang cost
  const sectionGender = document.querySelector('section.gender');
  const sectionLang = document.querySelector('section.lang');
  const sectionCost = document.querySelector('section.cost');

  let psychiatristFor = [];

  let myself = false;
  let family = false;
  let child = false;

  let myState = [];
  let myRequests = [];
  let consern = [];
  let category = [];

  let gender = [];
  let lang = [];
  let cost = [];

  let disabled = false;

  let page = 0;

  /////
  testCardWrapBtn.forEach(item => {
    item.addEventListener('click', async e => {
      for (let i = 0; i < testCardWrapBtn.length; i += 1) {
        if (testCardWrapBtn[i].classList.contains('is-active')) {
          testCardWrapBtn[i].classList.remove('is-active');
          break;
        }
      }

      psychiatristFor = [];

      if (e.currentTarget.dataset.for === 'myself') {
        myself = true;
        family = false;
        child = false;
        psychiatristFor.push('myself');
      }

      if (e.currentTarget.dataset.for === 'family') {
        myself = false;
        family = true;
        child = false;
        psychiatristFor.push('family');
      }

      if (e.currentTarget.dataset.for === 'child') {
        myself = false;
        family = false;
        child = true;
        psychiatristFor.push('child');
      }

      await getFilterChange([...psychiatristFor]);

      item.classList.add('is-active');

      fixedBox.classList.remove('visually-hidden');
    });
  });
  /////

  /////
  const fixedButtonNext = document.querySelector('.fixed__button-next');

  fixedButtonNext.addEventListener('click', async () => {
    if (disabled) {
      Notify.info('Зробіть свій вибір.');
      return;
    }

    if (page === 0) {
      page += 1;

      testpageTitle.classList.add('visually-hidden');
      testpageCards.classList.add('visually-hidden');

      if (myself) {
        sectionState.classList.remove('visually-hidden');
        await getFilterChange([...psychiatristFor, ...myState]);
        return;
      }
      if (family) {
        sectionConsern.classList.remove('visually-hidden');
        disabled = checkArrayAndDisableButton(consern, disabled);
        await getFilterChange([...psychiatristFor, ...consern]);
        return;
      }
      if (child) {
        sectionCategory.classList.remove('visually-hidden');
        disabled = checkArrayAndDisableButton(category, disabled);
        await getFilterChange([...psychiatristFor, ...category]);
        return;
      }
    }

    if (page === 1) {
      if (myself) {
        page += 1;
        sectionState.classList.add('visually-hidden');
        sectionRequests.classList.remove('visually-hidden');
        disabled = checkArrayAndDisableButton(myRequests, disabled);
        await getFilterChange([...psychiatristFor, ...myState, ...myRequests]);
        return;
      }
      if (family) {
        page += 1;
        sectionConsern.classList.add('visually-hidden');
        sectionGender.classList.remove('visually-hidden');
        sectionLang.classList.remove('visually-hidden');
        sectionCost.classList.remove('visually-hidden');
        await getFilterChange(
          [...psychiatristFor, ...consern],
          gender,
          lang,
          cost
        );
        return;
      }
      if (child) {
        page += 1;
        sectionCategory.classList.add('visually-hidden');
        sectionGender.classList.remove('visually-hidden');
        sectionLang.classList.remove('visually-hidden');
        sectionCost.classList.remove('visually-hidden');
        await getFilterChange(
          [...psychiatristFor, ...category],
          gender,
          lang,
          cost
        );
        return;
      }
    }

    if (page === 2) {
      if (myself) {
        page += 1;
        sectionRequests.classList.add('visually-hidden');
        sectionGender.classList.remove('visually-hidden');
        sectionLang.classList.remove('visually-hidden');
        sectionCost.classList.remove('visually-hidden');
        await getFilterChange(
          [...psychiatristFor, ...myState, ...myRequests],
          gender,
          lang,
          cost
        );
        return;
      }
      if (family) {
        page += 1;
        fixedButtonNext.classList.add('visually-hidden');
        testResult.classList.remove('visually-hidden');
        fixedButtonLoadMore.classList.remove('visually-hidden');
        sectionGender.classList.add('visually-hidden');
        sectionLang.classList.add('visually-hidden');
        sectionCost.classList.add('visually-hidden');
        toggleActiveClass(testLine, testResult, 2);
        return;
      }
      if (child) {
        page += 1;
        fixedButtonNext.classList.add('visually-hidden');
        testResult.classList.remove('visually-hidden');
        fixedButtonLoadMore.classList.remove('visually-hidden');
        sectionGender.classList.add('visually-hidden');
        sectionLang.classList.add('visually-hidden');
        sectionCost.classList.add('visually-hidden');
        toggleActiveClass(testLine, testResult, 2);
        return;
      }
    }

    if (page === 3) {
      if (myself) {
        page += 1;
        fixedButtonNext.classList.add('visually-hidden');
        testResult.classList.remove('visually-hidden');
        fixedButtonLoadMore.classList.remove('visually-hidden');
        sectionGender.classList.add('visually-hidden');
        sectionLang.classList.add('visually-hidden');
        sectionCost.classList.add('visually-hidden');
        toggleActiveClass(testLine, testResult, 2);
        return;
      }
    }
  });
  /////

  /////
  const fixedButtonPrew = document.querySelector('.fixed__button-prew');

  fixedButtonPrew.addEventListener('click', async () => {
    disabled = false;

    if (page === 1) {
      page -= 1;

      testpageTitle.classList.remove('visually-hidden');
      testpageCards.classList.remove('visually-hidden');

      if (myself) {
        sectionState.classList.add('visually-hidden');
        await getFilterChange([...psychiatristFor]);
        return;
      }

      if (family) {
        sectionConsern.classList.add('visually-hidden');
        await getFilterChange([...psychiatristFor]);
        return;
      }

      if (child) {
        sectionCategory.classList.add('visually-hidden');
        await getFilterChange([...psychiatristFor]);
        return;
      }
    }

    if (page === 2) {
      if (myself) {
        page -= 1;
        sectionRequests.classList.add('visually-hidden');
        sectionState.classList.remove('visually-hidden');
        await getFilterChange([...psychiatristFor, ...myState]);
        return;
      }
      if (family) {
        page -= 1;
        sectionConsern.classList.remove('visually-hidden');
        fixedButtonNext.classList.remove('visually-hidden');
        testResult.classList.add('visually-hidden');
        fixedButtonLoadMore.classList.add('visually-hidden');
        sectionGender.classList.add('visually-hidden');
        sectionLang.classList.add('visually-hidden');
        sectionCost.classList.add('visually-hidden');
        toggleActiveClass(testLine, sectionConsern, 1);
        await getFilterChange([...psychiatristFor, ...consern]);
        return;
      }
      if (child) {
        page -= 1;
        sectionCategory.classList.remove('visually-hidden');
        fixedButtonNext.classList.remove('visually-hidden');
        testResult.classList.add('visually-hidden');
        fixedButtonLoadMore.classList.add('visually-hidden');
        sectionGender.classList.add('visually-hidden');
        sectionLang.classList.add('visually-hidden');
        sectionCost.classList.add('visually-hidden');
        toggleActiveClass(testLine, sectionCategory, 1);
        await getFilterChange([...psychiatristFor, ...category]);
        return;
      }
    }

    if (page === 3) {
      if (myself) {
        page -= 1;
        sectionRequests.classList.remove('visually-hidden');
        sectionGender.classList.add('visually-hidden');
        sectionLang.classList.add('visually-hidden');
        sectionCost.classList.add('visually-hidden');
        await getFilterChange([...psychiatristFor, ...myState, ...myRequests]);
        return;
      }
      if (family) {
        page -= 1;
        sectionGender.classList.remove('visually-hidden');
        sectionLang.classList.remove('visually-hidden');
        sectionCost.classList.remove('visually-hidden');
        testResult.classList.add('visually-hidden');
        fixedButtonNext.classList.remove('visually-hidden');
        fixedButtonLoadMore.classList.add('visually-hidden');
        toggleActiveClass(testLine, sectionGender, 1);
        await getFilterChange(
          [...psychiatristFor, ...consern],
          gender,
          lang,
          cost
        );
        return;
      }
      if (child) {
        page -= 1;
        sectionGender.classList.remove('visually-hidden');
        sectionLang.classList.remove('visually-hidden');
        sectionCost.classList.remove('visually-hidden');
        testResult.classList.add('visually-hidden');
        fixedButtonNext.classList.remove('visually-hidden');
        fixedButtonLoadMore.classList.add('visually-hidden');
        toggleActiveClass(testLine, sectionGender, 1);
        await getFilterChange(
          [...psychiatristFor, ...category],
          gender,
          lang,
          cost
        );
        return;
      }
    }

    if (page === 4) {
      if (myself) {
        page -= 1;
        sectionGender.classList.remove('visually-hidden');
        sectionLang.classList.remove('visually-hidden');
        sectionCost.classList.remove('visually-hidden');
        testResult.classList.add('visually-hidden');
        fixedButtonNext.classList.remove('visually-hidden');
        fixedButtonLoadMore.classList.add('visually-hidden');
        toggleActiveClass(testLine, sectionGender, 1);
        await getFilterChange(
          [...psychiatristFor, ...myState, ...myRequests],
          gender,
          lang,
          cost
        );
        return;
      }
    }
  });
  /////

  /////
  const toggleArrayElement = (item, data, array) => {
    const title = item.firstElementChild.innerHTML.trim();
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

      //добавляем класс ввыбраным кнопкам
      item.classList.toggle('is-active');

      if (
        data === 'data-button-my-Requests' ||
        data === 'data-button-consern' ||
        data === 'data-button-category'
      ) {
        disabled = checkArrayAndDisableButton(array, disabled);
      }

      //myself
      if (data === 'data-button-my-state') {
        await getFilterChange([...psychiatristFor, ...myState]);
      }
      if (data === 'data-button-my-Requests') {
        await getFilterChange([...psychiatristFor, ...myState, ...myRequests]);
      }

      //family
      if (data === 'data-button-consern') {
        await getFilterChange([...psychiatristFor, ...consern]);
      }

      //child
      if (data === 'data-button-category') {
        await getFilterChange([...psychiatristFor, ...category]);
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
    toggleArrayElement(item, 'data-button-my-Requests', myRequests);
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

  //gender
  const dataButtonGender = document.querySelectorAll('.gender .card__link-btn');

  dataButtonGender.forEach(item => {
    item.addEventListener('click', async () => {
      // Получаем значение дата атрибута элемента
      const dataValue = item.getAttribute('data-button-gender');

      // Получаем индекс элемента в массиве
      const index = gender.indexOf(dataValue);

      // Если элемент уже есть в массиве, удаляем его
      if (index !== -1) {
        gender.splice(index, 1);
      } else {
        gender = [];
        if (dataValue !== '') {
          gender.push(dataValue);
        }
      }

      if (myself) {
        await getFilterChange(
          [...psychiatristFor, ...myState, ...myRequests],
          gender,
          lang,
          cost
        );
      }

      if (family) {
        await getFilterChange(
          [...psychiatristFor, ...consern],
          gender,
          lang,
          cost
        );
      }

      if (child) {
        await getFilterChange(
          [...psychiatristFor, ...category],
          gender,
          lang,
          cost
        );
      }

      if (item.classList.contains('is-active')) {
        item.classList.remove('is-active');
        return;
      }

      for (let i = 0; i < dataButtonGender.length; i += 1) {
        if (dataButtonGender[i].classList.contains('is-active')) {
          dataButtonGender[i].classList.remove('is-active');
          break;
        }
      }

      item.classList.add('is-active');
    });
  });
  //

  //lang
  const dataButtonLang = document.querySelectorAll('.lang .card__link-btn');

  dataButtonLang.forEach(item => {
    item.addEventListener('click', async () => {
      // Получаем значение дата атрибута элемента
      const dataValue = item.getAttribute('data-button-lang');

      // Получаем индекс элемента в массиве
      const index = lang.indexOf(dataValue);

      // Если элемент уже есть в массиве, удаляем его
      if (index !== -1) {
        lang.splice(index, 1);
      } else {
        lang = [];
        if (dataValue !== '') {
          lang.push(dataValue);
        }
      }

      if (myself) {
        await getFilterChange(
          [...psychiatristFor, ...myState, ...myRequests],
          gender,
          lang,
          cost
        );
      }

      if (family) {
        await getFilterChange(
          [...psychiatristFor, ...consern],
          gender,
          lang,
          cost
        );
      }

      if (child) {
        await getFilterChange(
          [...psychiatristFor, ...category],
          gender,
          lang,
          cost
        );
      }

      if (item.classList.contains('is-active')) {
        item.classList.remove('is-active');
        return;
      }

      for (let i = 0; i < dataButtonLang.length; i += 1) {
        if (dataButtonLang[i].classList.contains('is-active')) {
          dataButtonLang[i].classList.remove('is-active');
          break;
        }
      }

      item.classList.add('is-active');
    });
  });
  //

  //cost
  const dataButtonCost = document.querySelectorAll('.cost .card__link-btn');

  dataButtonCost.forEach(item => {
    item.addEventListener('click', async () => {
      // Получаем значение дата атрибута элемента
      const dataValue = item.getAttribute('data-button-cost');

      // Получаем индекс элемента в массиве
      const index = cost.indexOf(dataValue);

      // Если элемент уже есть в массиве, удаляем его
      if (index !== -1) {
        cost.splice(index, 1);
      } else {
        cost = [];
        if (dataValue !== '') {
          cost.push(dataValue);
        }
      }

      if (myself) {
        await getFilterChange(
          [...psychiatristFor, ...myState, ...myRequests],
          gender,
          lang,
          cost
        );
      }

      if (family) {
        await getFilterChange(
          [...psychiatristFor, ...consern],
          gender,
          lang,
          cost
        );
      }

      if (child) {
        await getFilterChange(
          [...psychiatristFor, ...category],
          gender,
          lang,
          cost
        );
      }

      if (item.classList.contains('is-active')) {
        item.classList.remove('is-active');
        return;
      }

      for (let i = 0; i < dataButtonCost.length; i += 1) {
        if (dataButtonCost[i].classList.contains('is-active')) {
          dataButtonCost[i].classList.remove('is-active');
          break;
        }
      }

      item.classList.add('is-active');
    });
  });
  //

  (async () => {
    await getFilterChange([...psychiatristFor]);
  })();
})();
