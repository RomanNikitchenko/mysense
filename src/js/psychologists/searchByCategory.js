import fetchCardByValues from './fetchCardByValues';
import createImageCardsMarcup from './createImageCardsMarcup';
import viewProfile from './viewProfile';
const filteredQueryParagraphNumber = document.querySelectorAll(
  '.filtered-query__paragraph--number'
);

(() => {
  let description = '';

  let selectedSpecialties = [];
  let selectedGender = [];
  let selectedPriceRanges = [];
  let selectedLanguages = [];
  let selectedTherapys = [];

  let sortingEnabledByPrice = false;
  let sortingEnabledByExperience = false;
  let reversed = false;

  let page = 0;
  let totalCards = 9;

  let visiblefilterAll = [];
  let visiblefilter = [];
  let visiblehits = null;

  let change = false;

  /////получаем из локального хранилища
  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };

  if (load('filterValues')) {
    const serializedState = load('filterValues');
    description = serializedState.description;
    selectedSpecialties = serializedState.selectedSpecialties;
    selectedGender = serializedState.selectedGender;
    selectedPriceRanges = serializedState.selectedPriceRanges;
    selectedLanguages = serializedState.selectedLanguages;
    selectedTherapys = serializedState.selectedTherapys;
    sortingEnabledByPrice = serializedState.sortingEnabledByPrice;
    sortingEnabledByExperience = serializedState.sortingEnabledByExperience;
    reversed = serializedState.reversed;
    totalCards = serializedState.totalCards;
  }
  /////

  const getFilterChange = async () => {
    try {
      const { dataAll, data, hits } = await fetchCardByValues({
        description,
        selectedSpecialties,
        selectedGender,
        selectedPriceRanges,
        selectedLanguages,
        selectedTherapys,
        sortingEnabledByPrice,
        sortingEnabledByExperience,
        reversed,
        page,
        totalCards,
      });

      visiblefilterAll = dataAll;
      visiblefilter = data;
      visiblehits = hits;

      /////записываем в локальное хранилище
      const filterData = {};

      filterData.description = description;
      filterData.selectedSpecialties = selectedSpecialties;
      filterData.selectedGender = selectedGender;
      filterData.selectedPriceRanges = selectedPriceRanges;
      filterData.selectedLanguages = selectedLanguages;
      filterData.selectedTherapys = selectedTherapys;
      filterData.sortingEnabledByPrice = sortingEnabledByPrice;
      filterData.sortingEnabledByExperience = sortingEnabledByExperience;
      filterData.reversed = reversed;
      filterData.totalCards = totalCards;

      const formDataJSON = JSON.stringify(filterData);

      localStorage.setItem('filterValues', formDataJSON);
      /////

      filteredQueryParagraphNumber.forEach(
        item => (item.textContent = `${visiblehits} психлогів`)
      );

      return;
    } catch (error) {
      console.log('Ошибка', error);
    }
  };

  //поиск в инпут
  const textInput = document.querySelector(
    '.psychologists-section__search-input'
  );

  if (description) {
    textInput.value = description;
  }

  textInput.addEventListener('input', async event => {
    page = 0;
    totalCards = 9;

    description = event.currentTarget.value.trim();
    await getFilterChange();
    change = true;
    createImageCardsMarcup({ visiblefilter, change });

    checkLoadMoreButton();
    viewProfile(visiblefilterAll);
  });
  //

  //по specialties
  const dataButtonValueSpecialties = document.querySelectorAll(
    '[data-button-value]'
  );

  dataButtonValueSpecialties.forEach(item => {
    const dataValueAll = item.getAttribute('data-button-value');
    if (selectedSpecialties.includes(dataValueAll)) {
      item.classList.add('active');
    }

    item.addEventListener('click', async () => {
      const dataValue = item.getAttribute('data-button-value');

      page = 0;
      totalCards = 9;

      //если есть удаляем если нет добавляем
      if (selectedSpecialties.includes(dataValue)) {
        selectedSpecialties = selectedSpecialties.filter(
          value => value !== dataValue
        );
      } else {
        selectedSpecialties.push(dataValue);
      }

      //добавляем клас ввыбраным кнопкам
      item.classList.toggle('active');

      await getFilterChange();

      change = true;
      createImageCardsMarcup({ visiblefilter, change });

      checkLoadMoreButton();
      viewProfile(visiblefilterAll);
    });
  });
  //

  //по gender
  const dataButtonValueGender = document.querySelectorAll(
    '[data-button-value-gender]'
  );

  dataButtonValueGender.forEach(item => {
    const dataValueAll = item.getAttribute('data-button-value-gender');
    if (selectedGender.includes(dataValueAll)) {
      item.classList.add('active');
    }

    item.addEventListener('click', async () => {
      const dataValue = item.getAttribute('data-button-value-gender');

      page = 0;
      totalCards = 9;

      // если есть удаляем, если нет - добавляем
      if (selectedGender.includes(dataValue)) {
        selectedGender = selectedGender.filter(value => value !== dataValue);
      } else {
        selectedGender.push(dataValue);
      }

      // добавляем класс выбранной кнопке
      item.classList.toggle('active');

      await getFilterChange();

      change = true;
      createImageCardsMarcup({ visiblefilter, change });

      checkLoadMoreButton();
      viewProfile(visiblefilterAll);
    });
  });
  //

  ///по price
  const dataButtonValuePrice = document.querySelectorAll(
    '[data-button-value-price]'
  );

  dataButtonValuePrice.forEach(item => {
    const dataValueAll = item.getAttribute('data-button-value-price');
    if (selectedPriceRanges.includes(dataValueAll)) {
      item.classList.add('active');
    }

    item.addEventListener('click', async () => {
      const dataValue = item.getAttribute('data-button-value-price');

      page = 0;
      totalCards = 9;

      // если есть удаляем, если нет - добавляем
      if (selectedPriceRanges.includes(dataValue)) {
        selectedPriceRanges = selectedPriceRanges.filter(
          value => value !== dataValue
        );
      } else {
        selectedPriceRanges.push(dataValue);
      }

      // добавляем класс выбранной кнопке
      item.classList.toggle('active');

      await getFilterChange();

      change = true;
      createImageCardsMarcup({ visiblefilter, change });

      checkLoadMoreButton();
      viewProfile(visiblefilterAll);
    });
  });
  //

  //по Language
  const dataButtonValueLanguage = document.querySelectorAll(
    '[data-button-value-language]'
  );

  dataButtonValueLanguage.forEach(item => {
    const dataValueAll = item.getAttribute('data-button-value-language');
    if (selectedLanguages.includes(dataValueAll)) {
      item.classList.add('active');
    }

    item.addEventListener('click', async () => {
      const dataValue = item.getAttribute('data-button-value-language');

      page = 0;
      totalCards = 9;

      // если есть удаляем, если нет - добавляем
      if (selectedLanguages.includes(dataValue)) {
        selectedLanguages = selectedLanguages.filter(
          value => value !== dataValue
        );
      } else {
        selectedLanguages.push(dataValue);
      }

      // добавляем класс выбранной кнопке
      item.classList.toggle('active');

      await getFilterChange();

      change = true;
      createImageCardsMarcup({ visiblefilter, change });

      checkLoadMoreButton();
      viewProfile(visiblefilterAll);
    });
  });
  //

  //по therapy
  const dataButtonValueTherapy = document.querySelectorAll(
    '[data-button-value-therapy]'
  );

  dataButtonValueTherapy.forEach(item => {
    const dataValueAll = item.getAttribute('data-button-value-therapy');
    if (selectedTherapys.includes(dataValueAll)) {
      item.classList.add('active');
    }

    item.addEventListener('click', async () => {
      const dataValue = item.getAttribute('data-button-value-therapy');

      page = 0;
      totalCards = 9;

      // если есть удаляем, если нет - добавляем
      if (selectedTherapys.includes(dataValue)) {
        selectedTherapys = selectedTherapys.filter(
          value => value !== dataValue
        );
      } else {
        selectedTherapys.push(dataValue);
      }

      // добавляем класс выбранной кнопке
      item.classList.toggle('active');

      await getFilterChange();

      change = true;
      createImageCardsMarcup({ visiblefilter, change });

      checkLoadMoreButton();
      viewProfile(visiblefilterAll);
    });
  });
  //

  // сортировка
  const dataSort = document.querySelector('.sort-list');
  const sortValue = document.querySelector('.sort-value');

  if (sortingEnabledByPrice) {
    sortValue.textContent = 'за ціною';
  }

  if (sortingEnabledByExperience) {
    sortValue.textContent = 'за досвідом';
  }

  const sortByDateAttributeValue = async e => {
    page = 0;
    totalCards = 9;

    if (!e.target.classList.contains('sort-button')) return;
    reversed = !reversed;

    if (e.target.dataset.sort === 'price') {
      sortingEnabledByPrice = true;
      sortingEnabledByExperience = false;
    }

    if (e.target.dataset.sort === 'experience') {
      sortingEnabledByPrice = false;
      sortingEnabledByExperience = true;
    }

    await getFilterChange();

    change = true;
    createImageCardsMarcup({ visiblefilter, change });

    checkLoadMoreButton();
    viewProfile(visiblefilterAll);
  };

  dataSort.addEventListener('click', sortByDateAttributeValue);
  //

  // loadMoreButton
  const loadMoreButton = document.querySelector('.load-more');

  loadMoreButton.addEventListener('click', async () => {
    page = totalCards;
    totalCards += 9;

    await getFilterChange();

    change = false;
    createImageCardsMarcup({ visiblefilter, change });

    checkLoadMoreButton();
    viewProfile(visiblefilterAll);
  });
  //

  //скрываем кнопку
  function checkLoadMoreButton() {
    if (visiblehits <= totalCards) {
      loadMoreButton.style.display = 'none';
    } else {
      loadMoreButton.style.display = 'block';
    }
  }

  //сбросываем фильтер
  const dataButtonReset = document.querySelectorAll('[data-button-reset]');

  dataButtonReset.forEach(item => {
    item.addEventListener('click', async () => {
      description = '';

      selectedSpecialties = [];
      selectedGender = [];
      selectedPriceRanges = [];
      selectedLanguages = [];
      selectedTherapys = [];

      sortingEnabledByPrice = false;
      sortingEnabledByExperience = false;
      reversed = false;

      page = 0;
      totalCards = 9;

      visiblefilter = [];
      visiblehits = null;

      change = true;

      textInput.value = '';

      dataButtonValueSpecialties.forEach(item =>
        item.classList.remove('active')
      );

      const items = [
        dataButtonValueGender,
        dataButtonValuePrice,
        dataButtonValueLanguage,
        dataButtonValueTherapy,
      ];

      items.forEach(elements =>
        elements.forEach(item => item.classList.remove('active'))
      );

      sortValue.textContent = 'Сортувати';

      await getFilterChange();
      createImageCardsMarcup({ visiblefilter, change });
      checkLoadMoreButton();
      viewProfile(visiblefilterAll);
    });
  });
  //

  (async () => {
    await getFilterChange();
    change = true;
    createImageCardsMarcup({ visiblefilter, change });
    checkLoadMoreButton();
    viewProfile(visiblefilterAll);
  })();
})();
