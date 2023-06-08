(() => {
  /////
  const switchBtns = document.querySelector('.switch_btns');
  const buttons = document.querySelectorAll('.switch_btns button');
  const dataContent = document.querySelectorAll('div[data-content]');
  /////

  switchBtns.addEventListener('click', selectsWitchBtns);

  function selectsWitchBtns(event) {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }

    //если у элемента есть btn_active-chat удаляем его
    for (let i = 0; i < buttons.length; i += 1) {
      if (buttons[i].classList.contains('is-active')) {
        buttons[i].classList.remove('is-active');
        break;
      }
    }

    //добавляем класс ввыбраной кнопке
    event.target.classList.add('is-active');

    const selectedSwitch = event.target.dataset.switch;

    //Перебираем все элементы с атрибутом 'data-navigation-content'
    dataContent.forEach(item => {
      const dataValueContent = item.getAttribute('data-content');
      item.classList.add('visually-hidden');
      // Если значение данных элемента совпадает со значением данных кнопки, удаляем класс 'visually-hidden'
      if (dataValueContent === selectedSwitch) {
        item.classList.remove('visually-hidden');
      }
    });
  }
})();
