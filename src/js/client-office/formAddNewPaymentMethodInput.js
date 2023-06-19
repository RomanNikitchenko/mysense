import Cleave from 'cleave.js/dist/cleave.min.js';

(() => {
  const cardNumberInput = document.getElementById('card-number');
  const expiryInput = document.getElementById('expiry');
  const cvvInput = document.getElementById('cvv');
  const cardNameInput = document.getElementById('card-name');

  const cardNumberCleave = new Cleave(cardNumberInput, {
    creditCard: true,
    delimiter: ' ',
    blocks: [4, 4, 4, 4],
  });

  const expiryCleave = new Cleave(expiryInput, {
    date: true,
    datePattern: ['m', 'y'],
  });

  const cvvCleave = new Cleave(cvvInput, {
    // numeral: true, // можно ввсети больше 3 символов
    blocks: [3],
  });

  const cardNameCleave = new Cleave(cardNameInput, {
    uppercase: true,
  });
})();

////////////////////

(() => {
  // Получаем ссылки на элементы SVG и поле ввода пароля
  const hiddenIcon = document.querySelector(
    '.form-login__icon--password-hidden'
  );
  const notHiddenIcon = document.querySelector(
    '.form-login__icon--password-not-hidden'
  );

  const Input = document.getElementById('cvv');

  notHiddenIcon.style.display = 'none';

  // Добавляем обработчик события клика на иконку SVG
  hiddenIcon.addEventListener('click', togglePasswordVisibility);
  notHiddenIcon.addEventListener('click', togglePasswordVisibility);

  // Добавляем обработчик события нажатия клавиши
  hiddenIcon.addEventListener('keydown', handleKeyPress);
  notHiddenIcon.addEventListener('keydown', handleKeyPress);

  // Функция для переключения видимости пароля и изменения иконки SVG
  function togglePasswordVisibility() {
    if (Input.type === 'password') {
      Input.type = 'text';
      hiddenIcon.style.display = 'none';
      notHiddenIcon.style.display = 'inline-block';
      notHiddenIcon.focus();
    } else {
      Input.type = 'password';
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
})();
