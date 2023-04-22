import fetchCardByValues from './fetchCardByValues';

(() => {
  const dataButtonValue = document.querySelectorAll('[data-button-value]');
  const textInput = document.querySelector(
    '.psychologists-section__search-input'
  );

  let selectedButtonValues = [];
  let selectedGender = 'both';
  let visiblefilter = [];

  const getFilterChange = async () => {
    try {
      const { data, hits } = await fetchCardByValues(
        selectedButtonValues,
        selectedGender
      );
      visiblefilter = data;
      visiblehits = hits;

      console.log(visiblefilter);
      return;
    } catch (error) {
      console.log('Ошибка', error);
    }
  };

  ///по specialties

  dataButtonValue.forEach(item => {
    item.addEventListener('click', async () => {
      const dataValue = item.getAttribute('data-button-value');

      //очищаем инпут
      textInput.value = '';

      //если есть удаляем если нет добавляем
      if (selectedButtonValues.includes(dataValue)) {
        selectedButtonValues = selectedButtonValues.filter(
          value => value !== dataValue
        );
      } else {
        selectedButtonValues.push(dataValue);
      }

      //добавляем клас ввыбраным кнопкам
      item.classList.toggle('active');

      await getFilterChange();
    });
  });

  ///по gender

  const dataButtonValueGender = document.querySelectorAll(
    '[data-button-value-gender]'
  );

  dataButtonValueGender.forEach(item => {
    item.addEventListener('click', async () => {
      // очищаем инпут
      textInput.value = '';

      // добавляем класс выбранной кнопке
      item.classList.toggle('active');

      // обновляем переменную selectedGender в соответствии с выбранным полом
      const maleButton = document.querySelector(
        '[data-button-value-gender="male"]'
      );
      const femaleButton = document.querySelector(
        '[data-button-value-gender="female"]'
      );

      if (
        maleButton.classList.contains('active') &&
        !femaleButton.classList.contains('active')
      ) {
        selectedGender = 'male';
      } else if (
        !maleButton.classList.contains('active') &&
        femaleButton.classList.contains('active')
      ) {
        selectedGender = 'female';
      } else if (
        maleButton.classList.contains('active') &&
        femaleButton.classList.contains('active')
      ) {
        selectedGender = 'both';
      } else {
        selectedGender = 'both';
      }

      await getFilterChange();
    });
  });
})();
