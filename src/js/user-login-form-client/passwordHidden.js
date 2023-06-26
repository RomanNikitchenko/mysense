// Получаем ссылки на элементы SVG и поле ввода пароля
const hiddenIcon = document.querySelector('.form-login__icon--password-hidden');
const notHiddenIcon = document.querySelector(
  '.form-login__icon--password-not-hidden'
);
const passwordInput = document.getElementById('password');

notHiddenIcon.style.display = 'none';

// Добавляем обработчик события клика на иконку SVG
hiddenIcon.addEventListener('click', togglePasswordVisibility);
notHiddenIcon.addEventListener('click', togglePasswordVisibility);
// Добавляем обработчик события нажатия клавиши
hiddenIcon.addEventListener('keydown', handleKeyPress);
notHiddenIcon.addEventListener('keydown', handleKeyPress);

// Функция для переключения видимости пароля и изменения иконки SVG
function togglePasswordVisibility() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    hiddenIcon.style.display = 'none';
    notHiddenIcon.style.display = 'inline-block';
    notHiddenIcon.focus();
  } else {
    passwordInput.type = 'password';
    hiddenIcon.style.display = 'inline-block';
    notHiddenIcon.style.display = 'none';
    hiddenIcon.focus();
  }
}

// Функция для обработки нажатия клавиши
function handleKeyPress(event) {
  if (event.code === 'Space') {
    togglePasswordVisibility();
    event.preventDefault(); // Предотвращаем стандартное действие браузера при нажатии пробела
  }
}
