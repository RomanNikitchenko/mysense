(() => {
  const mysessionWrap = document.querySelector('.mysession__wrap');
  const scheduleBlockWrap = document.querySelector('.schedule-block_wrap');

  const switchBoxCalendarButton = document.querySelector(
    '.switch__box-calendar-button'
  );
  const listBtn = document.querySelector('.list__btn');

  const toggleMenu = () => {
    mysessionWrap.classList.toggle('visually-hidden');
    scheduleBlockWrap.classList.toggle('visually-hidden');
  };

  switchBoxCalendarButton.addEventListener('click', toggleMenu);
  listBtn.addEventListener('click', toggleMenu);
})();
