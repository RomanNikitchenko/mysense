(() => {
  const formPaymentMethod = document.querySelector('.choose-payment-method');
  const paymentCardIcon = document.querySelector('.payment-card__icon');
  const paymentCardList = document.querySelector('.payment-card-list');
  const paymentCardItem = document.querySelectorAll('.payment-card-item');
  const paymentCardWrap = document.querySelector('.payment-card__wrap');

  formPaymentMethod.addEventListener('click', () => {
    paymentCardIcon.classList.toggle('rotated');

    if (paymentCardList.style.maxHeight) {
      paymentCardList.style.maxHeight = null;
    } else {
      paymentCardList.style.maxHeight = paymentCardList.scrollHeight + 'px';
    }
  });

  paymentCardItem.forEach(item => {
    item.addEventListener('click', () => {
      paymentCardItem.forEach(item => item.classList.remove('active'));
      item.classList.add('active');
      paymentCardWrap.innerHTML = item.innerHTML;
    });
  });
})();
