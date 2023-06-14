import { Notify } from 'notiflix/build/notiflix-notify-aio';

const emailInput = document.getElementById('email');
const formLoginButtonSubmit = document.querySelector(
  '.form-restore-password__button-submit'
);

let loginIsValid = false;
let removedFocuslogin = false;

// Функция для валидации
function validate() {
  //удаляем у кнопки submit атрибут disabled если логин и пароль валидны
  if (loginIsValid) {
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

//
formLoginButtonSubmit.addEventListener('click', () => {
  if (loginIsValid === false) {
    Notify.failure('Введіть правильний Email');
    emailInput.classList.add('is-not-valid');
    removedFocuslogin = true;
  }
});
