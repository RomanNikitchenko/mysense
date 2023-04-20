(() => {
  const buttons = document.querySelectorAll(
    '.psychologists-section__filter-btn'
  );

  // Создаем массив для хранения ID выбранных пользователем кнопок
  let selectedButtonValues = [];

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Получаем value кнопки
      const buttonValue = button.getAttribute('data-button-value');

      // Проверяем, есть ли уже такой value в массиве
      // Если есть, удаляем его из массива
      // Если такого value нет, добавляем его в массив

      if (selectedButtonValues.includes(buttonValue)) {
        selectedButtonValues = selectedButtonValues.filter(
          value => value !== buttonValue
        );
      } else {
        selectedButtonValues.push(buttonValue);
      }

      // Добавляем/удаляем класс "active" на кнопке
      button.classList.toggle('active');

      console.log(selectedButtonValues);
    });
  });
})();
