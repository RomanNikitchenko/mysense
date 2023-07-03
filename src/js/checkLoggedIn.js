const pageHeaderPrivateOfficeMenu = document.querySelector(
  '.page-header__private-office-menu'
);
const login = document.querySelector('.login');
const choosePerson = document.querySelector('.choose-person');

//элементы клиента
const pageHheaderImgUserClient = document.querySelector(
  '.page-header__img-user-client'
);
const outsidePrivateOfficeImageClient = document.querySelector(
  '.outside-private-office__image--client'
);
const outsidePrivateOfficeTitleClient = document.querySelector(
  '.outside-private-office__title--client'
);
const outsidePrivateOfficeListClient = document.querySelector(
  '.outside-private-office__list--client'
);

//элементы психолога
const pageHeaderImgUserPsychologist = document.querySelector(
  '.page-header__img-user-psychologist'
);
const outsidePrivateOfficeImagePsychologist = document.querySelector(
  '.outside-private-office__image--psychologist'
);
const outsidePrivateOfficeTitlePsychologist = document.querySelector(
  '.outside-private-office__title--psychologist'
);
const outsidePrivateOfficeListPsychologist = document.querySelector(
  '.outside-private-office__list--psychologist'
);

// Функция для проверки, вошел ли пользователь в систему
checkLoggedIn();

function checkLoggedIn() {
  // Проверяем, есть ли информация о текущем пользователе в локальном хранилище
  var currentUserPsychologist = JSON.parse(
    localStorage.getItem('currentUser-psychologist')
  );
  var currentUseClient = JSON.parse(localStorage.getItem('currentUser-client'));

  if (currentUserPsychologist || currentUseClient) {
    if (pageHeaderPrivateOfficeMenu) {
      pageHeaderPrivateOfficeMenu.classList.remove('visually-hidden');
    }
    if (login) {
      login.classList.add('visually-hidden');
    }
    if (choosePerson) {
      choosePerson.classList.add('visually-hidden');
    }

    if (currentUserPsychologist) {
      if (pageHheaderImgUserClient) {
        pageHheaderImgUserClient.style.display = 'none';
      }
      if (outsidePrivateOfficeImageClient) {
        outsidePrivateOfficeImageClient.style.display = 'none';
      }
      if (outsidePrivateOfficeTitleClient) {
        outsidePrivateOfficeTitleClient.style.display = 'none';
      }
      if (outsidePrivateOfficeListClient) {
        outsidePrivateOfficeListClient.style.display = 'none';
      }
    }

    if (currentUseClient) {
      if (pageHeaderImgUserPsychologist) {
        pageHeaderImgUserPsychologist.style.display = 'none';
      }
      if (outsidePrivateOfficeImagePsychologist) {
        outsidePrivateOfficeImagePsychologist.style.display = 'none';
      }
      if (outsidePrivateOfficeTitlePsychologist) {
        outsidePrivateOfficeTitlePsychologist.style.display = 'none';
      }
      if (outsidePrivateOfficeListPsychologist) {
        outsidePrivateOfficeListPsychologist.style.display = 'none';
      }
    }
    // Вы можете выполнить перенаправление на другую страницу
  } else {
    if (pageHeaderPrivateOfficeMenu) {
      pageHeaderPrivateOfficeMenu.classList.add('visually-hidden');
    }
    if (login) {
      login.classList.remove('visually-hidden');
    }
    if (choosePerson) {
      choosePerson.classList.remove('visually-hidden');
    }
    // Вы можете выполнить перенаправление на страницу входа или другую страницу
  }
}
