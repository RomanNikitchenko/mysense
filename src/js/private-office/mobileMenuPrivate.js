import * as bodyScrollLock from 'body-scroll-lock';

(() => {
  const beckdropMobileMenunPrivate = document.querySelector(
    '.js-menu-container-private-office'
  );
  const openMenuBtnPrivate = document.querySelector(
    '.private-office__open-menu'
  );
  const closeMenuBtnPrivate = document.querySelector(
    '.private-office__close-menu'
  );

  function visuallyHidden() {
    const width = window.innerWidth;

    if (width > 1280) {
      openMenuBtnPrivate.classList.add('active');
      return;
    }

    beckdropMobileMenunPrivate.classList.add('visually-hidden');
  }

  visuallyHidden();

  const toggleMenu = () => {
    const width = window.innerWidth;

    if (width > 1280) return;

    const isMenuOpen =
      openMenuBtnPrivate.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtnPrivate.setAttribute('aria-expanded', !isMenuOpen);
    beckdropMobileMenunPrivate.classList.toggle('is-open');
    beckdropMobileMenunPrivate.classList.toggle('visually-hidden');
    openMenuBtnPrivate.classList.toggle('active');

    if (width <= 744) {
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    }
  };

  openMenuBtnPrivate.addEventListener('click', toggleMenu);
  closeMenuBtnPrivate.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
    if (!e.matches) return;
    beckdropMobileMenunPrivate.classList.remove('is-open');
    beckdropMobileMenunPrivate.classList.remove('visually-hidden');
    openMenuBtnPrivate.classList.add('active');
    openMenuBtnPrivate.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  window
    .matchMedia('(min-width: 744px) and (max-width: 1279px)')
    .addEventListener('change', e => {
      if (!e.matches) return;
      beckdropMobileMenunPrivate.classList.remove('is-open');
      beckdropMobileMenunPrivate.classList.add('visually-hidden');
      openMenuBtnPrivate.classList.remove('active');
      openMenuBtnPrivate.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });

  window.matchMedia('(max-width: 743px)').addEventListener('change', e => {
    if (!e.matches) return;
    beckdropMobileMenunPrivate.classList.remove('is-open');
    beckdropMobileMenunPrivate.classList.add('visually-hidden');
    openMenuBtnPrivate.classList.remove('active');
    openMenuBtnPrivate.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
