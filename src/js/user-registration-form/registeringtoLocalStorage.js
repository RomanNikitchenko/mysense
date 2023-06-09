import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.registration_client');

form.addEventListener('submit', handleSubmit);

// Функция для регистрации пользователя
function register(username, password, eventSubmit) {
  // Получаем сохраненных пользователей из локального хранилища
  var users = JSON.parse(localStorage.getItem('users-psychologist')) || [];

  // Проверяем, не занят ли выбранный username
  var isUsernameTaken = users.some(function (user) {
    return user.username === username;
  });

  if (isUsernameTaken) {
    Notify.warning('Імя користувача вже зайняте.');
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
  localStorage.setItem('users-psychologist', JSON.stringify(users));

  Notify.success('психолог успішно зареєстрований.');

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
  var users = JSON.parse(localStorage.getItem('users-psychologist')) || [];

  // Ищем пользователя с указанным именем пользователя
  var user = users.find(function (user) {
    return user.username === username;
  });

  if (user && user.password === password) {
    //удаляем текущего пользоватеоя клиента если он был в системи (разлогиниваем)
    localStorage.removeItem('currentUser-client');

    // Сохраняем информацию о текущем пользователе в локальное хранилище психолога
    localStorage.setItem('currentUser-psychologist', JSON.stringify(user));

    Notify.success('Ви успішно увійшли до систем як психолог.');

    setTimeout(() => {
      // страничка психолога
      window.location.assign('private-office.html');
    }, 500);
    // Вы можете выполнить перенаправление на другую страницу
  } else {
    // Неверное имя пользователя или пароль
    Notify.warning('Неправильне імя користувача або пароль.');
  }
}
