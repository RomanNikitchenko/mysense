(() => {
  const formPaymentMethod = document.querySelector('.form__payment-method');
  const paymentCard = document.querySelector('.payment-card');
  const paymentCardList = document.querySelector('.payment-card-list');
  const paymentCardValue = document.querySelector('.payment-card__value');
  const paymentCardButton = document.querySelectorAll('.payment-card-button');

  formPaymentMethod.addEventListener('click', () => {
    paymentCard.classList.toggle('rotated');

    if (paymentCardList.style.maxHeight) {
      paymentCardList.style.maxHeight = null;
    } else {
      paymentCardList.style.maxHeight = paymentCardList.scrollHeight + 'px';
    }
  });

  paymentCardList.addEventListener('click', event => {
    event.preventDefault();

    if (!event.target.classList.contains('payment-card-button')) return;

    paymentCard.classList.toggle('rotated');

    paymentCardButton.forEach(item => item.classList.remove('active'));

    event.target.classList.add('active');

    paymentCardValue.textContent = event.target.textContent;

    paymentCardList.style.maxHeight = null;
  });
})();
