(() => {
  const body = document.querySelector('body');
  const beckdropMobileMenunPrivate = document.querySelector(
    '.js-menu-container-outside-private-office'
  );
  const openMenuBtnPrivate = document.querySelector(
    '.private-office__open-menu'
  );
  const closeMenuBtnPrivate = document.querySelector(
    '.outside-private-office__close-menu'
  );

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtnPrivate.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtnPrivate.setAttribute('aria-expanded', !isMenuOpen);
    beckdropMobileMenunPrivate.classList.toggle('visually-hidden');
    openMenuBtnPrivate.classList.toggle('active');

    const width = window.innerWidth;

    if (width <= 744) {
      body.classList.toggle('modal-is-open');
    }
  };

  openMenuBtnPrivate.addEventListener('click', toggleMenu);
  closeMenuBtnPrivate.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
    if (!e.matches) return;
    beckdropMobileMenunPrivate.classList.add('visually-hidden');
    openMenuBtnPrivate.classList.remove('active');
    openMenuBtnPrivate.setAttribute('aria-expanded', false);
    body.classList.remove('modal-is-open');
  });

  window
    .matchMedia('(min-width: 744px) and (max-width: 1279px)')
    .addEventListener('change', e => {
      if (!e.matches) return;
      beckdropMobileMenunPrivate.classList.add('visually-hidden');
      openMenuBtnPrivate.classList.remove('active');
      openMenuBtnPrivate.setAttribute('aria-expanded', false);
      body.classList.remove('modal-is-open');
    });

  window.matchMedia('(max-width: 743px)').addEventListener('change', e => {
    if (!e.matches) return;
    beckdropMobileMenunPrivate.classList.add('visually-hidden');
    openMenuBtnPrivate.classList.remove('active');
    openMenuBtnPrivate.setAttribute('aria-expanded', false);
    body.classList.remove('modal-is-open');
  });
})();
