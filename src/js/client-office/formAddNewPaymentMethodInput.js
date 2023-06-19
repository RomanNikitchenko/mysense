import Cleave from 'cleave.js/dist/cleave.min.js';

(() => {
  const cardNumberInput = document.getElementById('card-number');
  const expiryInput = document.getElementById('expiry');
  const cvvInput = document.getElementById('cvv');

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
    numeral: true,
    blocks: [3],
  });
})();
