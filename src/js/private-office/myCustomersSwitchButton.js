(() => {
  /////
  const clientsSwitchBtns = document.querySelectorAll(
    '.clients__switch-btns button'
  );
  var dataSwitchContent = document.querySelectorAll('div[data-switch-content]');
  /////

  /////
  const toggleArrayElement = (item, data) => {
    item.addEventListener('click', async () => {
      //если у элемента есть btn_active-chat удаляем его
      for (let i = 0; i < clientsSwitchBtns.length; i += 1) {
        if (clientsSwitchBtns[i].classList.contains('btn_active-chat')) {
          clientsSwitchBtns[i].classList.remove('btn_active-chat');
          break;
        }
      }

      //добавляем класс ввыбраной кнопке
      item.classList.toggle('btn_active-chat');

      // Получаем значение данных кнопки
      const dataValueBtn = item.getAttribute(data);

      //Перебираем все элементы с атрибутом 'data-navigation-content'
      dataSwitchContent.forEach(item => {
        const dataValueContent = item.getAttribute('data-switch-content');
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
  clientsSwitchBtns.forEach(item => {
    toggleArrayElement(item, 'data-switch-button');
  });
  /////
})();
