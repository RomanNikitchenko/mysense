(() => {
  const body = document.querySelector('body');
  const open = document.querySelectorAll('.person-info-button');
  const infoCardClientWrapper = document.querySelector(
    '.info-card__client-wrapper'
  );
  const close = document.querySelector('.close');

  const toggleMenu = e => {
    infoCardClientWrapper.classList.toggle('visually-hidden');
    body.classList.toggle('modal-is-open');
  };

  open.forEach(item => {
    item.addEventListener('click', toggleMenu);
  });

  close.addEventListener('click', toggleMenu);
})();
