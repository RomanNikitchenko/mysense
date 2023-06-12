import { Notify } from 'notiflix/build/notiflix-notify-aio';

const privateOfficeExitButton = document.querySelector(
  '.private-office__exit-button'
);

privateOfficeExitButton.addEventListener('click', logout);

// Функция для разлогинивания пользователя
function logout() {
  // Удаляем информацию о текущем пользователе из локального хранилища
  localStorage.removeItem('currentUser');

  Notify.info('Ви успішно вийшли із системи.');
  // Вы можете выполнить перенаправление на страницу входа или другую страницу
  setTimeout(() => {
    window.location.assign('index.html');
  }, 500);
}
