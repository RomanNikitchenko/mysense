import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form-login');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { mail, password },
  } = event.currentTarget;

  const userFound = login(mail.value, password.value);

  if (userFound) {
    event.currentTarget.reset();
  }
}

// Функция для выполнения входа пользователя
function login(username, password) {
  // Получаем сохраненных пользователей из локального хранилища
  var users = JSON.parse(localStorage.getItem('users')) || [];

  // Ищем пользователя с указанным именем пользователя
  var user = users.find(function (user) {
    return user.username === username;
  });

  if (user && user.password === password) {
    // Сохраняем информацию о текущем пользователе в локальное хранилище
    localStorage.setItem('currentUser', JSON.stringify(user));

    Notify.success('Ви успішно увійшли до системи.');

    // Вы можете выполнить перенаправление на другую страницу
    setTimeout(() => {
      window.location.assign('private-office.html');
    }, 500);
  } else {
    // Неверное имя пользователя или пароль
    Notify.warning('Неправильне імя користувача або пароль.');

    return false;
  }

  return true;
}
