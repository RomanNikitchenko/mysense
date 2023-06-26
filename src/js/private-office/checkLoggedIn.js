const privateOfficeSection = document.querySelector('.private-office-section');
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
  var currentUser = JSON.parse(
    localStorage.getItem('currentUser-psychologist')
  );

  if (currentUser) {
    pageHeaderPrivateOfficeMenu.classList.remove('visually-hidden');
    login.classList.add('visually-hidden');
    choosePerson.classList.add('visually-hidden');
    privateOfficeSection.classList.remove('visually-hidden');
    pageHheaderImgUserClient.style.display = 'none';
    // Вы можете выполнить перенаправление на другую страницу
  } else {
    pageHeaderPrivateOfficeMenu.classList.add('visually-hidden');
    login.classList.remove('visually-hidden');
    choosePerson.classList.remove('visually-hidden');
    privateOfficeSection.classList.add('visually-hidden');
    window.location.assign('registration_form.html');
    // Вы можете выполнить перенаправление на страницу входа или другую страницу
  }
}
