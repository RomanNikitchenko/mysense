(() => {
  console.log('qwe');
  const body = document.querySelector('body');
  const beckdropMobileMenu = document.querySelector(
    '.js-menu-container-psycholog'
  );
  const openMenuBtn = document.querySelector('.js-open-menu-psycholog');
  const closeMenuBtn = document.querySelector('.js-close-menu-psycholog');

  const toggleMenu = () => {
    const isMenuOpenFilter =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpenFilter);
    beckdropMobileMenu.classList.toggle('is-open');
    body.classList.toggle('modal-is-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
})();

// (() => {
//   const formPaymentMethod = document.querySelector('.form__payment-method');
//   const paymentCard = document.querySelector('.payment-card');
//   const paymentCardList = document.querySelector('.payment-card-list');
//   const paymentCardValue = document.querySelector('.payment-card__value');
//   const paymentCardButton = document.querySelectorAll('.payment-card-button');

//   formPaymentMethod.addEventListener('click', () => {
//     paymentCard.classList.toggle('rotated');

//     if (paymentCardList.style.maxHeight) {
//       paymentCardList.style.maxHeight = null;
//     } else {
//       paymentCardList.style.maxHeight = paymentCardList.scrollHeight + 'px';
//     }
//   });

//   paymentCardList.addEventListener('click', event => {
//     event.preventDefault();

//     if (!event.target.classList.contains('payment-card-button')) return;

//     paymentCard.classList.toggle('rotated');

//     paymentCardButton.forEach(item => item.classList.remove('active'));

//     event.target.classList.add('active');

//     paymentCardValue.textContent = event.target.textContent;

//     paymentCardList.style.maxHeight = null;
//   });
// })();
