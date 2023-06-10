import { Notify } from 'notiflix/build/notiflix-notify-aio';

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
formLoginButtonSubmit = document.querySelector('.form-login__button-submit');

let loginIsValid = false;
let passworIsValid = false;
let removedFocuslogin = false;
let removedFocuspasswor = false;

emailInput.addEventListener('blur', () => {
  if (loginIsValid === false) {
    Notify.failure('Введіть правильний Email');
    emailInput.classList.add('is-not-valid');
    removedFocuslogin = true;
    return;
  }
});

passwordInput.addEventListener('blur', () => {
  if (passworIsValid === false) {
    Notify.failure(
      'Пароль повинен містити принаймні 8 символів, включаючи великі та малі літери'
    );
    passwordInput.classList.add('is-not-valid');
    removedFocuspasswor = true;
    return;
  }
});

// Функция для валидации
function validate() {
  //удаляем у кнопки submit атрибут disabled если логин и пароль валидны
  if (loginIsValid && passworIsValid) {
    formLoginButtonSubmit.setAttribute('type', 'submit');
  } else {
    formLoginButtonSubmit.setAttribute('type', 'button');
  }
}

emailInput.addEventListener('input', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    loginIsValid = false;
    if (removedFocuslogin) {
      emailInput.classList.add('is-not-valid');
    }
    validate();
    return;
  }
  loginIsValid = true;
  emailInput.classList.remove('is-not-valid');
  validate();
});

passwordInput.addEventListener('input', () => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(passwordInput.value.trim())) {
    passworIsValid = false;
    if (removedFocuspasswor) {
      passwordInput.classList.add('is-not-valid');
    }
    validate();
    return;
  }
  passworIsValid = true;
  passwordInput.classList.remove('is-not-valid');
  validate();
});
