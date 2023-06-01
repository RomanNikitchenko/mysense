(() => {
  /////
  const privateOfficeListButton = document.querySelectorAll(
    '.private-office__list-button'
  );
  var dataNavigationContent = document.querySelectorAll(
    'div[data-navigation-content]'
  );
  /////

  /////
  const toggleArrayElement = (item, data) => {
    const title = item.innerHTML.trim();
    item.setAttribute(data, title);

    item.addEventListener('click', async () => {
      //если у элемента есть is-active удаляем его
      for (let i = 0; i < privateOfficeListButton.length; i += 1) {
        if (privateOfficeListButton[i].classList.contains('is-active')) {
          privateOfficeListButton[i].classList.remove('is-active');
          break;
        }
      }

      //добавляем класс ввыбраной кнопке
      item.classList.toggle('is-active');

      // Получаем значение данных кнопки
      const dataValueBtn = item.getAttribute(data);

      // Перебираем все элементы с атрибутом 'data-navigation-content'
      dataNavigationContent.forEach(item => {
        const dataValueContent = item.getAttribute('data-navigation-content');
        item.classList.add('visually-hidden');
        // Если значение данных элемента совпадает со значением данных кнопки, удаляем класс 'visually-hidden'
        if (dataValueContent === dataValueBtn) {
          item.classList.remove('visually-hidden');
        }
      });
    });
  };
  /////

  /////
  privateOfficeListButton.forEach(item => {
    toggleArrayElement(item, 'data-button-menu-navigation');
  });
  /////
})();
