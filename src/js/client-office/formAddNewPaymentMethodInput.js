import Cleave from 'cleave.js/dist/cleave.min.js';

(() => {
  const addNewPaymentMethodInput = document.getElementById(
    'add-new-payment-method'
  );

  let cleave = new Cleave(addNewPaymentMethodInput, {
    creditCard: true,
    delimiter: ' ',
    blocks: [4, 4, 4, 4],
  });
})();
