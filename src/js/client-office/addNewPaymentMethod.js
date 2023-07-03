(() => {
  const refs = {
    openModalBtn: document.querySelector(
      '[data-modal-open-add-new-payment-method]'
    ),
    closeModalBtn: document.querySelector(
      '[data-modal-close-add-new-payment-method]'
    ),
    beckdrop: document.querySelector('[data-modal-add-new-payment-method]'),
    modalWrap: document.querySelector(
      '.beckdrop-add-new-payment-method__modal-wrap'
    ),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.beckdrop.addEventListener('click', closeModalBeckdrop);
  refs.modalWrap.addEventListener('click', closeModalBeckdrop);

  function openModal() {
    document.body.classList.add('modal-open');
    refs.beckdrop.classList.remove('beckdrop--is-hidden');
  }

  function closeModal() {
    document.body.classList.remove('modal-open');
    refs.beckdrop.classList.add('beckdrop--is-hidden');
  }

  function closeModalBeckdrop(e) {
    if (e.currentTarget !== e.target) {
      return;
    }
    document.body.classList.remove('modal-open');
    refs.beckdrop.classList.add('beckdrop--is-hidden');
  }
})();
