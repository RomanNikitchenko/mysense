//календарь на 9 недель
// Получаем элементы DOM
const scheduleDate = document.querySelector('.work__schedule-date');
const weeksContainer = document.querySelector('.work__schedule-weeks');

// Массив сокращенных названий дней недели на украинском языке
const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

// Функция форматирования даты с украинской локализацией
function formatDate(date) {
  const options = { day: 'numeric', month: 'long' };
  const ukrainianLocale = new Intl.DateTimeFormat('uk-UA', options);
  return ukrainianLocale.format(date);
}

// Функция создания кнопки для дня недели
function createDayButton(day, active = false) {
  const button = document.createElement('button');
  button.classList.add('days');
  if (active) {
    button.classList.add('active');
  }
  button.innerHTML = `
    <span class="day__week">${
      weekDays[day.getDay() === 0 ? 6 : day.getDay() - 1]
    }</span>
    <div class="num__day">
      <p class="day">${day.getDate()}</p>
      <span class="show-month">${formatDate(day)}</span>
    </div>
  `;
  return button;
}

// Функция обновления календаря
function updateCalendar() {
  // Очищаем контейнер с неделями
  weeksContainer.innerHTML = '';

  // Установка диапазона недель
  const currentDate = new Date(); // Текущая дата
  const startWeekDate = new Date(currentDate);
  startWeekDate.setDate(
    startWeekDate.getDate() - ((startWeekDate.getDay() + 6) % 7) - 28
  ); // Начало первой отображаемой недели (4 прошлые недели)
  const endWeekDate = new Date(currentDate);
  endWeekDate.setDate(
    endWeekDate.getDate() + 28 - ((endWeekDate.getDay() + 6) % 7)
  ); // Конец последней отображаемой недели (4 следующие недели)

  // Создаем кнопки для каждой недели
  let tempDate = new Date(startWeekDate);
  while (tempDate <= endWeekDate) {
    const currentWeek = [];
    for (let i = 0; i < 7; i++) {
      currentWeek.push(new Date(tempDate));
      tempDate.setDate(tempDate.getDate() + 1);
    }

    const weekContainer = document.createElement('div');
    weekContainer.classList.add('week');

    currentWeek.forEach(day => {
      const button = createDayButton(day);
      weekContainer.appendChild(button);
    });

    weeksContainer.appendChild(weekContainer);
  }
}

// Инициализация календаря
updateCalendar();

//клик по кнопке
const days = document.querySelectorAll('.days');

days.forEach(item => {
  item.addEventListener('click', () => {
    days.forEach(e => {
      if (e.classList.contains('active')) {
        e.classList.remove('active');
        return;
      }
    });

    item.classList.add('active');
  });
});

///
///

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
