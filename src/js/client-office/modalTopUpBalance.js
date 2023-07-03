(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-top-up-balance]'),
    closeModalBtn: document.querySelector('[data-modal-close-top-up-balance]'),
    beckdrop: document.querySelector('[data-modal-top-up-balance]'),
    modalWrap: document.querySelector('.beckdrop-top-up-balance__modal-wrap'),
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
