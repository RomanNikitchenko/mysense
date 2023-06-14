const pageHeaderPrivateOfficeMenu = document.querySelector(
  '.page-header__private-office-menu'
);
const login = document.querySelector('.login');
const choosePerson = document.querySelector('.choose-person');
const pageHheaderImgUserClient = document.querySelector(
  '.page-header__img-user-client'
);

// Функция для проверки, вошел ли пользователь в систему
checkLoggedIn();

function checkLoggedIn() {
  // Проверяем, есть ли информация о текущем пользователе в локальном хранилище
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
    if (pageHeaderPrivateOfficeMenu) {
      pageHeaderPrivateOfficeMenu.classList.remove('visually-hidden');
    }
    if (login) {
      login.classList.add('visually-hidden');
    }
    if (choosePerson) {
      choosePerson.classList.add('visually-hidden');
    }
    if (pageHheaderImgUserClient) {
      pageHheaderImgUserClient.style.display = 'none';
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
