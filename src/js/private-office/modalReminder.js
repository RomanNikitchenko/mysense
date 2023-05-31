(() => {
  const modalReminder = document.querySelector('.modal-reminder');
  const openModalBtn = document.querySelector('.js-open-modal-reminder');
  const closeModalBtn = document.querySelector('.js-close-modal-reminder');

  const toggleMenu = () => {
    const isMenuOpen =
      openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    openModalBtn.setAttribute('aria-expanded', !isMenuOpen);
    openModalBtn.classList.toggle('active');
    modalReminder.classList.toggle('visually-hidden');
  };

  openModalBtn.addEventListener('click', toggleMenu);
  closeModalBtn.addEventListener('click', toggleMenu);
})();
