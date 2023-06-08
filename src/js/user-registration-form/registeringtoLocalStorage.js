import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.registration_client');

form.addEventListener('submit', handleSubmit);

// Функция для регистрации пользователя
function register(username, password, eventSubmit) {
  // Получаем сохраненных пользователей из локального хранилища
  var users = JSON.parse(localStorage.getItem('users')) || [];

  // Проверяем, не занят ли выбранный username
  var isUsernameTaken = users.some(function (user) {
    return user.username === username;
  });

  if (isUsernameTaken) {
    Notify.info('Имя пользователя уже занято.');
    return;
  }

  // Создаем нового пользователя
  var newUser = {
    username: username,
    password: password,
  };

  // Добавляем нового пользователя в список
  users.push(newUser);

  // Сохраняем обновленный список пользователей в локальное хранилище
  localStorage.setItem('users', JSON.stringify(users));

  Notify.info('Пользователь успешно зарегистрирован.');

  eventSubmit.currentTarget.reset();

  login(username, password);
}

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { login, password },
  } = event.currentTarget;

  register(login.value, password.value, event);
}

//////////
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

    Notify.info('Вы успешно вошли в систему.');
    window.location.assign('private-office.html');
    // Вы можете выполнить перенаправление на другую страницу
  } else {
    // Неверное имя пользователя или пароль
    Notify.info('Неверное имя пользователя или пароль.');
  }
}
