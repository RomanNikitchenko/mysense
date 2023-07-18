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

  const dateLabel = `${formatDate(day)}, ${day.getFullYear()}`;
  button.setAttribute('aria-label', dateLabel);

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
  let currentDayButton; // Переменная для хранения кнопки текущего дня
  while (tempDate <= endWeekDate) {
    const currentWeek = [];
    for (let i = 0; i < 7; i++) {
      currentWeek.push(new Date(tempDate));
      tempDate.setDate(tempDate.getDate() + 1);
    }

    const weekContainer = document.createElement('div');
    weekContainer.classList.add('week');

    currentWeek.forEach(day => {
      const active = day.toDateString() === currentDate.toDateString(); // Проверка текущего дня
      const button = createDayButton(day, active);
      if (active) {
        currentDayButton = button; // Установка ссылки на кнопку текущего дня
      }
      weekContainer.appendChild(button);
    });

    weeksContainer.appendChild(weekContainer);
  }

  currentDayButton.classList.add('active'); // Добавление класса 'active' к текущей кнопке дня
}

// Инициализация календаря
updateCalendar();
