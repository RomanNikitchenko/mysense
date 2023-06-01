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
      for (let i = 0; i < privateOfficeListButton.length; i += 1) {
        if (privateOfficeListButton[i].classList.contains('is-active')) {
          privateOfficeListButton[i].classList.remove('is-active');
          break;
        }
      }

      //добавляем клас ввыбраным кнопкам
      item.classList.toggle('is-active');

      const ataValueBtn = item.getAttribute(data);

      dataNavigationContent.forEach(item => {
        const dataValueContent = item.getAttribute('data-navigation-content');
        item.classList.add('visually-hidden');
        if (dataValueContent === ataValueBtn) {
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
