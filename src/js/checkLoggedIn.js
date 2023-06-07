const pageHeaderPrivateOfficeMenu = document.querySelector(
  '.page-header__private-office-menu'
);
const login = document.querySelector('.login');
const choosePerson = document.querySelector('.choose-person');

// Функция для проверки, вошел ли пользователь в систему
checkLoggedIn();

function checkLoggedIn() {
  // Проверяем, есть ли информация о текущем пользователе в локальном хранилище
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
    pageHeaderPrivateOfficeMenu.classList.remove('visually-hidden');
    login.classList.add('visually-hidden');
    choosePerson.classList.add('visually-hidden');
    // Вы можете выполнить перенаправление на другую страницу
  } else {
    pageHeaderPrivateOfficeMenu.classList.add('visually-hidden');
    login.classList.remove('visually-hidden');
    choosePerson.classList.remove('visually-hidden');
    // Вы можете выполнить перенаправление на страницу входа или другую страницу
  }
}
