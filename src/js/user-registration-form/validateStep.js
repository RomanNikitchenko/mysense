import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Получаем все необходимые элементы
const form = document.querySelector('.registration_client');
const step1 = document.querySelector('.step__wrap-form-1');
const step2 = document.querySelector('.step__wrap-form-2');
const step3 = document.querySelector('.step__wrap-form-3');
const step4 = document.querySelector('.step__wrap-form-4');
const nextBtn = document.querySelector('.form__next-btn');
const endBtn = document.querySelector('.form__end-btn');

// При нажатии на кнопку "Далі"
nextBtn.addEventListener('click', () => {
  if (validateStep()) {
    // Проверяем текущий шаг и переключаемся на следующий
    if (step1.style.display !== 'none') {
      step1.style.display = 'none';
      step2.style.display = 'block';
    } else if (step2.style.display !== 'none') {
      step2.style.display = 'none';
      step3.style.display = 'block';
    } else if (step3.style.display !== 'none') {
      step3.style.display = 'none';
      step4.style.display = 'block';
      nextBtn.style.display = 'none';
      endBtn.style.display = 'block';
    }
  }
});

// При нажатии на кнопку "Назад"
document.querySelector('.form__prew-btn').addEventListener('click', () => {
  // Проверяем текущий шаг и переключаемся на предыдущий
  if (step2.style.display !== 'none') {
    step2.style.display = 'none';
    step1.style.display = 'block';
  } else if (step3.style.display !== 'none') {
    step3.style.display = 'none';
    step2.style.display = 'block';
  } else if (step4.style.display !== 'none') {
    step4.style.display = 'none';
    step3.style.display = 'block';
    nextBtn.style.display = 'block';
    endBtn.style.display = 'none';
  }
});

// Функция для валидации текущего шага
function validateStep() {
  if (step1.style.display !== 'none') {
    // Проверяем поля шага 1
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;

    if (!emailRegex.test(emailInput.value.trim())) {
      Notify.info('Введіть правильний Email');
      return false;
    }
    if (!phoneRegex.test(phoneInput.value.trim())) {
      Notify.info('Введіть правильний номер телефону');
      return false;
    }
  } else if (step2.style.display !== 'none') {
    // Проверяем поля шага 2
    const passwordInput = document.getElementById('show2');
    const confirmPasswordInput = document.getElementById('show3');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(passwordInput.value.trim())) {
      Notify.info(
        'Пароль повинен містити принаймні 8 символів, включаючи великі та малі літери'
      );
      return false;
    }
    if (passwordInput.value !== confirmPasswordInput.value) {
      Notify.info('Паролі не співпадають');
      return false;
    }
  } else if (step3.style.display !== 'none') {
    // Проверяем поля шага 3
    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('last-name');

    if (nameInput.value.trim() === '') {
      Notify.info('Заповніть поле Імʼя');
      return false;
    }
    if (lastNameInput.value.trim() === '') {
      Notify.info('Заповніть поле Прізвище');
      return false;
    }
  }
  return true;
}
