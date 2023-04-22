(() => {
  const body = document.querySelector('body');
  const beckdropMobileMenuFilter = document.querySelector(
    '.js-menu-container-filter'
  );
  const openMenuBtnFilter = document.querySelector('.js-open-menu-filter');
  const closeMenuBtnFilter = document.querySelector('.js-close-menu-filter');

  const toggleMenu = () => {
    const isMenuOpenFilter =
      openMenuBtnFilter.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtnFilter.setAttribute('aria-expanded', !isMenuOpenFilter);
    beckdropMobileMenuFilter.classList.toggle('is-open');
    body.classList.toggle('modal-is-open');
  };

  openMenuBtnFilter.addEventListener('click', toggleMenu);
  closeMenuBtnFilter.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
    if (!e.matches) return;
    beckdropMobileMenuFilter.classList.remove('is-open');
    openMenuBtnFilter.setAttribute('aria-expanded', false);
    body.classList.remove('modal-is-open');
  });
})();
