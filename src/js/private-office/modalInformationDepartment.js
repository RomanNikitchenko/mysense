(() => {
  const modalInformation = document.querySelector(
    '.modal-information-department'
  );
  const openModalBtn = document.querySelector('.js-open-modal-information');
  const closeModalBtn = document.querySelector('.js-close-modal-information');

  const toggleMenu = () => {
    const isMenuOpen =
      openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    openModalBtn.setAttribute('aria-expanded', !isMenuOpen);
    modalInformation.classList.toggle('visually-hidden');
  };

  openModalBtn.addEventListener('click', toggleMenu);
  closeModalBtn.addEventListener('click', toggleMenu);
})();
