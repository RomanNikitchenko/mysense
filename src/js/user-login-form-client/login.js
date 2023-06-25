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
  var users = JSON.parse(localStorage.getItem('users-client')) || [];

  // Ищем пользователя с указанным именем пользователя
  var user = users.find(function (user) {
    return user.username === username;
  });

  if (user && user.password === password) {
    //удаляем текущего пользоватеоя психолога если он был в системи (разлогиниваем)
    localStorage.removeItem('currentUser-psychologist');

    // Сохраняем информацию о текущем пользователе в локальное хранилище
    localStorage.setItem('currentUser-client', JSON.stringify(user));

    Notify.success('Ви успішно увійшли до системи як клиент.');

    // Вы можете выполнить перенаправление на другую страницу
    setTimeout(() => {
      // страничка психолога
      window.location.assign('client-office.html');
    }, 500);
  } else {
    // Неверное имя пользователя или пароль
    Notify.warning('користувача не знайдено (не зареєстровано).');

    return false;
  }

  return true;
}
