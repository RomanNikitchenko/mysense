import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Получаем все необходимые элементы
const step1 = document.querySelector('.step__wrap-form-1');
const step2 = document.querySelector('.step__wrap-form-2');
const step3 = document.querySelector('.step__wrap-form-3');
const step4 = document.querySelector('.step__wrap-form-4');
const prewBtn = document.querySelector('.form__prew-btn');
const nextBtn = document.querySelector('.form__next-btn');
const endBtn = document.querySelector('.form__end-btn');
const stepLine = document.querySelectorAll('.step__line');

// Переменная для блокировки кнопки "Назад" во время перехода между шагами
let isTransitioning = true;
let stap = 1;

// При нажатии на кнопку "Далі"
nextBtn.addEventListener('click', () => {
  if (validateStep()) {
    // Проверяем текущий шаг и переключаемся на следующий
    if (step1.style.display !== 'none') {
      step1.style.display = 'none';
      step2.style.display = 'block';
      prewBtn.style.display = 'flex';
      isTransitioning = false;
      stap = 2;
    } else if (step2.style.display !== 'none') {
      step2.style.display = 'none';
      step3.style.display = 'block';
      stap = 3;
    } else if (step3.style.display !== 'none') {
      step3.style.display = 'none';
      step4.style.display = 'flex';
      nextBtn.style.display = 'none';
      endBtn.style.display = 'block';
      stap = 4;
    }

    for (let i = 0; i < stepLine.length; i += 1) {
      if (stepLine[i].classList.contains('step__line-active')) {
        stepLine[i].classList.remove('step__line-active');
        break;
      }
    }

    stepLine[stap - 1].classList.add('step__line-active');
  }
});

// При нажатии на кнопку "Назад"
document.querySelector('.form__prew-btn').addEventListener('click', () => {
  // Если уже идет переход между шагами, выходим из обработчика
  if (isTransitioning) {
    return;
  }

  // Проверяем текущий шаг и переключаемся на предыдущий, только если не на первом шаге
  if (step2.style.display !== 'none') {
    step2.style.display = 'none';
    step1.style.display = 'block';
    isTransitioning = true;
    prewBtn.style.display = 'none';
    stap = 1;
  } else if (step3.style.display !== 'none') {
    step3.style.display = 'none';
    step2.style.display = 'block';
    stap = 2;
  } else if (step4.style.display !== 'none') {
    step4.style.display = 'none';
    step3.style.display = 'block';
    nextBtn.style.display = 'block';
    endBtn.style.display = 'none';
    stap = 3;
  }

  for (let i = 0; i < stepLine.length; i += 1) {
    if (stepLine[i].classList.contains('step__line-active')) {
      stepLine[i].classList.remove('step__line-active');
      break;
    }
  }

  stepLine[stap - 1].classList.add('step__line-active');
});

// Функция для валидации текущего шага
function validateStep() {
  if (step1.style.display !== 'none') {
    // Проверяем поля шага 1
    const emailInput = document.getElementById('email');
    // const phoneInput = document.getElementById('phone');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const phoneRegex = /^\d+$/;

    if (!emailRegex.test(emailInput.value.trim())) {
      Notify.failure('Введіть правильний Email');
      return false;
    }
    // if (!phoneRegex.test(phoneInput.value.trim())) {
    //   Notify.failure('Введіть правильний номер телефону');
    //   return false;
    // }
  } else if (step2.style.display !== 'none') {
    // Проверяем поля шага 2
    const passwordInput = document.getElementById('show2');
    const confirmPasswordInput = document.getElementById('show3');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(passwordInput.value.trim())) {
      Notify.failure(
        'Пароль повинен містити принаймні 8 символів, включаючи великі та малі літери'
      );
      return false;
    }
    if (passwordInput.value !== confirmPasswordInput.value) {
      Notify.failure('Паролі не співпадають');
      return false;
    }
  } else if (step3.style.display !== 'none') {
    // Проверяем поля шага 3
    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('last-name');

    if (nameInput.value.trim() === '') {
      Notify.failure('Заповніть поле Імʼя');
      return false;
    }
    if (lastNameInput.value.trim() === '') {
      Notify.failure('Заповніть поле Прізвище');
      return false;
    }
  }
  return true;
}

import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import utils from 'intl-tel-input/build/js/utils';
import $ from 'jquery';
import 'jquery.inputmask';

const input = document.querySelector('#phone');

// Инициализация intl-tel-input
const iti = intlTelInput(input, {
  utilsScript: utils,
  initialCountry: 'auto',
  geoIpLookup: function (callback) {
    fetch('https://ipapi.co/json')
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        callback(data.country_code);
      })
      .catch(function () {
        callback('us');
      });
  },
  nationalMode: false,
  onlyCountries: ['ua', 'ru', 'us'], // Ограничение доступных стран
});

// Обработчик события изменения страны
$(input).on('countrychange', function (e) {
  const countryData = iti.getSelectedCountryData();
  const countryCode = countryData.iso2;

  // Обновление маски в зависимости от выбранной страны
  $(input).inputmask({
    mask: getPhoneMaskByCountryCode(countryCode),
  });
});

// Функция получения маски номера телефона по коду страны
function getPhoneMaskByCountryCode(countryCode) {
  if (countryCode === 'ua') {
    return '+380 99 999 9999'; // Маска для Украины
  }

  if (countryCode === 'ru') {
    return '+7 (999) 999-9999'; // Маска для России
  }

  if (countryCode === 'us') {
    return '+1 (999) 999-9999'; // Маска для США
  }

  return ''; // Возвращать пустую строку для других стран
}

// Обновление маски при инициализации
const countryData = iti.getSelectedCountryData();
const countryCode = countryData.iso2;
$(input).inputmask({
  mask: getPhoneMaskByCountryCode(countryCode),
});
