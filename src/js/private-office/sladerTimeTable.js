(() => {
  // Перемещение таблицы по стрелкам вперед и назад
  const btnNextPageTable = document.querySelector('.btn__next-page-table');
  const btnBackPageTable = document.querySelector('.btn__back-page-table');
  const table = document.querySelector('.work__schedule_exemple');
  const dayMonthElements = Array.from(table.querySelectorAll('th[day-month]')); // Выбираем все элементы заголовков с атрибутом day-month
  const switchDaysWeekBtn = document.querySelectorAll('.switch-days-week__btn');
  const switchDayMonthElements = Array.from(
    document.querySelectorAll('.switch-days-week__day-month')
  );

  let page = 0;
  let translateX = 0;
  let width = window.innerWidth;
  let weeks = [];
  let firstDayWeek = '';
  let lastDayWeek = '';

  const breakpoints = {
    desktop: -835,
    tablet: -664,
    mobile: -2450,
  };

  //получаем массив недель
  for (let i = 0; i < dayMonthElements.length; i += 7) {
    const week = dayMonthElements.slice(i, i + 7);
    weeks.push(week);
  }

  //перезаписываем недели в элементах switch-days-week__day-month
  function switchWeeks() {
    for (let i = 0; i < weeks[page].length; i += 1) {
      const dayMonth = weeks[page][i].getAttribute('day-month');
      const parts = dayMonth.split(','); // Разделяем строку на части по запятой
      const formattedDayMonth = parts[0].trim(); // Получаем первую часть и удаляем лишние пробелы
      switchDayMonthElements[i].innerHTML = formattedDayMonth;

      if (i === 0) {
        firstDayWeek = formattedDayMonth;
      }
      if (i === 6) {
        lastDayWeek = formattedDayMonth;
      }
    }
  }

  function overwriteDateHeader() {
    const firstDay = document.querySelector(
      '.work__schedule-date--first-day-week'
    );
    const lastDay = document.querySelector(
      '.work__schedule-date--last-day-week'
    );

    firstDay.textContent = firstDayWeek;
    lastDay.textContent = lastDayWeek;
  }

  function removeClass(array) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i].classList.contains('is-active')) {
        array[i].classList.remove('is-active');
        break;
      }
    }
  }

  //сбрассываем настройки при загрузки страницы и при изменени брекпоита
  function resetStorage() {
    width = window.innerWidth;
    page = 1;
    translateX = getTranslateX();
    table.style.transform = `translateX(${translateX}px)`;
    switchWeeks();
    overwriteDateHeader();
    removeClass(switchDaysWeekBtn);
    switchDaysWeekBtn[0].classList.add('is-active');
  }

  const pages = Math.ceil(dayMonthElements.length / 7);

  btnNextPageTable.addEventListener('click', () => {
    if (page < pages - 1) {
      page += 1;
      translateX = getTranslateX();
      table.style.transform = `translateX(${translateX}px)`;
      switchWeeks();
      overwriteDateHeader();
      removeClass(switchDaysWeekBtn);
      switchDaysWeekBtn[0].classList.add('is-active');
    }
  });

  btnBackPageTable.addEventListener('click', () => {
    if (page > 0) {
      page -= 1;
      translateX = getTranslateX();
      table.style.transform = `translateX(${translateX}px)`;
      switchWeeks();
      overwriteDateHeader();
      removeClass(switchDaysWeekBtn);
      switchDaysWeekBtn[0].classList.add('is-active');
    }
  });

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

  window.addEventListener('resize', resetStorage);

  resetStorage();

  //перключения по дням недели в кобилки
  switchDaysWeekBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
      let nextWeek = -350;
      let distanceNextWeek = nextWeek * i;

      removeClass(switchDaysWeekBtn);

      item.classList.add('is-active');

      table.style.transform = `translateX(${distanceNextWeek + translateX}px)`;
    });
  });
})();
