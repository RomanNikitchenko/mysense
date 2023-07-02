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

  return '+99 999 999 9999';
}

// Обновление маски при инициализации
const countryData = iti.getSelectedCountryData();
const countryCode = countryData.iso2;
$(input).inputmask({
  mask: getPhoneMaskByCountryCode(countryCode),
});
