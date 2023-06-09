// Получаем ссылки на элементы SVG и поле ввода пароля
const hiddenIcon = document.querySelector('.form-login__icon--password-hidden');
const notHiddenIcon = document.querySelector(
  '.form-login__icon--password-not-hidden'
);
const passwordInput = document.getElementById('pass');

notHiddenIcon.style.display = 'none';

// Добавляем обработчик события клика на иконку SVG
hiddenIcon.addEventListener('click', togglePasswordVisibility);
notHiddenIcon.addEventListener('click', togglePasswordVisibility);

// Функция для переключения видимости пароля и изменения иконки SVG
function togglePasswordVisibility() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    hiddenIcon.style.display = 'none';
    notHiddenIcon.style.display = 'inline-block';
  } else {
    passwordInput.type = 'password';
    hiddenIcon.style.display = 'inline-block';
    notHiddenIcon.style.display = 'none';
  }
}
