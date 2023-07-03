(() => {
  /////
  const privateOfficeListButton = document.querySelectorAll(
    '.outside-private-office__list--psychologist .outside-private-office__list-button'
  );
  /////

  /////получаем из локального хранилища
  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };

  if (load('valuePersonalAccountMenuItem')) {
    const serializedState = load('valuePersonalAccountMenuItem');
    userSelectionNavigation(serializedState);
  }

  function userSelectionNavigation(serializedState) {
    //если у элемента есть is-active удаляем его
    for (let i = 0; i < privateOfficeListButton.length; i += 1) {
      if (privateOfficeListButton[i].classList.contains('is-active')) {
        privateOfficeListButton[i].classList.remove('is-active');
        break;
      }
    }
    //если у элемента есть is-active удаляем его
    for (let i = 0; i < privateOfficeListButton.length; i += 1) {
      if (
        privateOfficeListButton[i].getAttribute(
          'data-button-menu-navigation'
        ) === serializedState
      ) {
        privateOfficeListButton[i].classList.add('is-active');
        break;
      }
    }
  }
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

      //скрываем меню когда выбрали 1 из элементов меню
      const toggleMenu = () => {
        const body = document.querySelector('body');
        const beckdropMobileMenunPrivate = document.querySelector(
          '.js-menu-container-outside-private-office'
        );
        const openMenuBtnPrivate = document.querySelector(
          '.private-office__open-menu'
        );

        const isMenuOpen =
          openMenuBtnPrivate.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtnPrivate.setAttribute('aria-expanded', !isMenuOpen);
        beckdropMobileMenunPrivate.classList.toggle('visually-hidden');
        openMenuBtnPrivate.classList.toggle('active');
        body.classList.remove('modal-is-open');
      };

      // значение пункта меню личного кабинета
      localStorage.setItem(
        'valuePersonalAccountMenuItem',
        JSON.stringify(dataValueBtn)
      );
      window.location.assign('private-office.html');

      toggleMenu();
    });
  };
  /////

  /////
  privateOfficeListButton.forEach(item => {
    toggleArrayElement(item, 'data-button-menu-navigation');
  });
  /////
})();
