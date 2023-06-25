(() => {
  /////
  const privateOfficeListButton = document.querySelectorAll(
    '.private-office__list-button'
  );
  var dataNavigationContent = document.querySelectorAll(
    'div[data-navigation-content]'
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

  if (load('valuePersonalAccountMenuItemClient')) {
    const serializedState = load('valuePersonalAccountMenuItemClient');
    userSelectionNavigation(serializedState);
  }

  function userSelectionNavigation(serializedState) {
    // Перебираем все элементы с атрибутом 'data-navigation-content'
    dataNavigationContent.forEach(item => {
      const dataValueContent = item.getAttribute('data-navigation-content');
      item.classList.add('visually-hidden');
      // Если значение данных элемента совпадает со значением данных кнопки, удаляем класс 'visually-hidden'
      if (dataValueContent === serializedState) {
        item.classList.remove('visually-hidden');
      }
    });
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

  /////
  const toggleArrayElement = (item, data) => {
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

      // значение пункта меню личного кабинета
      localStorage.setItem(
        'valuePersonalAccountMenuItemClient',
        JSON.stringify(dataValueBtn)
      );

      // Перебираем все элементы с атрибутом 'data-navigation-content'
      dataNavigationContent.forEach(item => {
        const dataValueContent = item.getAttribute('data-navigation-content');
        item.classList.add('visually-hidden');
        // Если значение данных элемента совпадает со значением данных кнопки, удаляем класс 'visually-hidden'
        if (dataValueContent === dataValueBtn) {
          item.classList.remove('visually-hidden');
        }
      });

      //скрываем меню когда выбрали 1 из элементов меню
      const toggleMenu = () => {
        const body = document.querySelector('body');
        const beckdropMobileMenunPrivate = document.querySelector(
          '.js-menu-container-private-office'
        );
        const openMenuBtnPrivate = document.querySelector(
          '.private-office__open-menu'
        );
        const width = window.innerWidth;

        if (width > 1280) return;

        const isMenuOpen =
          openMenuBtnPrivate.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtnPrivate.setAttribute('aria-expanded', !isMenuOpen);
        beckdropMobileMenunPrivate.classList.toggle('is-open');
        beckdropMobileMenunPrivate.classList.toggle('visually-hidden');
        openMenuBtnPrivate.classList.toggle('active');

        if (width <= 744) {
          body.classList.toggle('modal-is-open');
        }
      };

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
