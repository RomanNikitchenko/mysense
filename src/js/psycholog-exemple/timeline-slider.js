(() => {
  // по стрелкам вперед и назад
  const btnScheduleNext = document.querySelector('.btn__schedule:last-child');
  const btnScheduleBack = document.querySelector('.btn__schedule:first-child');
  const workScheduleWeeks = document.querySelector('.work__schedule-weeks');
  const week = workScheduleWeeks.querySelectorAll('.week');

  const workScheduleDateSpanLastChild = document.querySelector(
    '.work__schedule-date span:last-child'
  );
  const workScheduleDateSpanFirstChild = document.querySelector(
    '.work__schedule-date span:first-child'
  );

  let page = 4;
  let width = window.innerWidth;
  let translateX = 0;

  const breakpoints = {
    desktop: -808,
    tablet: -468,
    mobile: -382,
  };

  const pages = week.length;

  btnScheduleNext.addEventListener('click', () => {
    if (page < pages - 1) {
      page += 1;
      translateX = getTranslateX();
      workScheduleWeeks.style.transform = `translateX(${translateX}px)`;
      overwriteDateHeader();
    }
  });

  btnScheduleBack.addEventListener('click', () => {
    if (page > 0) {
      page -= 1;
      translateX = getTranslateX();
      workScheduleWeeks.style.transform = `translateX(${translateX}px)`;
      overwriteDateHeader();
    }
  });

  function resetStorage() {
    page = 4;
    translateX = getTranslateX();
    workScheduleWeeks.style.transform = `translateX(${translateX}px)`;
    overwriteDateHeader();
  }

  resetStorage();

  function getTranslateX() {
    const currentBreakpoint = getCurrentBreakpoint();
    return breakpoints[currentBreakpoint] * page;
  }

  function getCurrentBreakpoint() {
    if (width >= 1280) {
      return 'desktop';
    } else if (width >= 744) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  }

  function overwriteDateHeader() {
    const firstDayWeek = week[page]
      .querySelectorAll('.days')[0]
      .querySelector('.show-month').textContent;

    const lastDayWeek = week[page]
      .querySelectorAll('.days')[6]
      .querySelector('.show-month').textContent;

    workScheduleDateSpanFirstChild.textContent = firstDayWeek;
    workScheduleDateSpanLastChild.textContent = lastDayWeek;
  }

  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
    if (!e.matches) return;
    width = window.innerWidth;
    resetStorage();
  });

  window
    .matchMedia('(min-width: 744px) and (max-width: 1279px)')
    .addEventListener('change', e => {
      if (!e.matches) return;
      width = window.innerWidth;
      resetStorage();
    });

  window.matchMedia('(max-width: 743px)').addEventListener('change', e => {
    if (!e.matches) return;
    width = window.innerWidth;
    resetStorage();
  });
})();
