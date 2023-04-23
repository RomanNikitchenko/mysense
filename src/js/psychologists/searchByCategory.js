import fetchCardByValues from './fetchCardByValues';
import createImageCardsMarcup from './createImageCardsMarcup';

(() => {
  const textInput = document.querySelector(
    '.psychologists-section__search-input'
  );

  let description = '';

  let selectedSpecialties = [];
  let selectedGender = [];
  let selectedPriceRanges = [];
  let selectedLanguages = [];
  let selectedTherapys = [];

  let page = 0;
  let totalCards = 6;

  let visiblefilter = [];
  let visiblehits = null;

  let change = false;

  const getFilterChange = async () => {
    try {
      const { data, hits } = await fetchCardByValues({
        description,
        selectedSpecialties,
        selectedGender,
        selectedPriceRanges,
        selectedLanguages,
        selectedTherapys,
        page,
        totalCards,
      });

      visiblefilter = data;
      visiblehits = hits;

      console.log(visiblefilter);
      console.log(visiblehits);
      return;
    } catch (error) {
      console.log('Ошибка', error);
    }
  };

  //поиск в инпут
  textInput.addEventListener('input', async event => {
    description = event.currentTarget.value.trim();
    await getFilterChange();
    change = true;
    createImageCardsMarcup({ visiblefilter, change });
  });

  //по specialties
  const dataButtonValueSpecialties = document.querySelectorAll(
    '[data-button-value]'
  );

  dataButtonValueSpecialties.forEach(item => {
    item.addEventListener('click', async () => {
      const dataValue = item.getAttribute('data-button-value');

      page = 0;
      totalCards = 6;

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
    });
  });

  //по gender
  const dataButtonValueGender = document.querySelectorAll(
    '[data-button-value-gender]'
  );

  dataButtonValueGender.forEach(item => {
    item.addEventListener('click', async () => {
      const dataValue = item.getAttribute('data-button-value-gender');

      page = 0;
      totalCards = 6;

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
    });
  });

  ///по price
  const dataButtonValuePrice = document.querySelectorAll(
    '[data-button-value-price]'
  );

  dataButtonValuePrice.forEach(item => {
    item.addEventListener('click', async () => {
      const dataValue = item.getAttribute('data-button-value-price');

      page = 0;
      totalCards = 6;

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
    });
  });

  //по Language
  const dataButtonValueLanguage = document.querySelectorAll(
    '[data-button-value-language]'
  );

  dataButtonValueLanguage.forEach(item => {
    item.addEventListener('click', async () => {
      const dataValue = item.getAttribute('data-button-value-language');

      page = 0;
      totalCards = 6;

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
    });
  });

  //по therapy
  const dataButtonValueTherapy = document.querySelectorAll(
    '[data-button-value-therapy]'
  );

  dataButtonValueTherapy.forEach(item => {
    item.addEventListener('click', async () => {
      const dataValue = item.getAttribute('data-button-value-therapy');

      page = 0;
      totalCards = 6;

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
    });
  });

  // loadMoreButton
  const loadMoreButton = document.querySelector('.load-more');

  loadMoreButton.addEventListener('click', async () => {
    page = totalCards;
    totalCards += 3;

    await getFilterChange();

    change = false;
    createImageCardsMarcup({ visiblefilter, change });

    checkLoadMoreButton();
  });

  function checkLoadMoreButton() {
    if (visiblehits <= totalCards) {
      loadMoreButton.style.display = 'none';
    } else {
      loadMoreButton.style.display = 'block';
    }
  }

  (async () => {
    await getFilterChange();
    change = true;
    createImageCardsMarcup({ visiblefilter, change });
    checkLoadMoreButton();
  })();
})();
