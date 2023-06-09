import { Notify } from 'notiflix/build/notiflix-notify-aio';

const privateOfficeExitButton = document.querySelector(
  '.outside-private-office__exit-button'
);

privateOfficeExitButton.addEventListener('click', logout);

// Функция для разлогинивания пользователя
function logout() {
  // Удаляем информацию о текущем пользователе из локального хранилища
  localStorage.removeItem('currentUser-psychologist');
  localStorage.removeItem('currentUser-client');

  Notify.info('Вы успешно вышли из системы.');
  // Вы можете выполнить перенаправление на страницу входа или другую страницу
  setTimeout(() => {
    window.location.assign('index.html');
  }, 500);
}
