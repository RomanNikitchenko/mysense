// Получаем элементы DOM
const scheduleDate = document.querySelector('.work__schedule-date');
const prevButton = document.querySelector('.btn__schedule:first-child');
const nextButton = document.querySelector('.btn__schedule:last-child');
const weeksContainer = document.querySelector('.work__schedule-weeks');

// Массив сокращенных названий дней недели
const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

// Установка текущей даты и диапазона недели
const currentDate = new Date(); // Текущая дата
const currentDay = currentDate.getDay(); // Номер текущего дня недели
const startDate = new Date(currentDate);
startDate.setDate(startDate.getDate() - currentDay + 1); // Начало текущей недели (понедельник)
const endDate = new Date(startDate);
endDate.setDate(endDate.getDate() + 6); // Конец текущей недели (воскресенье)

// Функция форматирования даты с украинской локализацией
function formatDate(date) {
  const options = { day: 'numeric', month: 'long' };
  const ukrainianLocale = new Intl.DateTimeFormat('uk-UA', options);
  return ukrainianLocale.format(date);
}

// Функция обновления календаря
function updateCalendar() {
  scheduleDate.innerHTML = `${formatDate(startDate)} - ${formatDate(endDate)}`;

  // Очищаем контейнер с неделями
  weeksContainer.innerHTML = '';

  // Определяем текущую неделю
  const currentWeek = [];
  const tempDate = new Date(startDate);

  // Добавляем дни текущей недели в массив currentWeek
  while (tempDate <= endDate) {
    currentWeek.push(new Date(tempDate)); // Используем новый объект даты, чтобы избежать изменений оригинальной даты
    tempDate.setDate(tempDate.getDate() + 1);
  }

  // Создаем кнопки для каждого дня текущей недели
  for (let day of currentWeek) {
    const button = document.createElement('button');
    button.classList.add('days');
    button.innerHTML = `
      <span class="day__week">${
        weekDays[day.getDay() === 0 ? 6 : day.getDay() - 1]
      }</span>
      <div class="num__day">
        <p class="day">${day.getDate()}</p>
        <span class="show-month">${formatDate(day)}</span>
      </div>
    `;

    weeksContainer.appendChild(button);
  }
}

function updateElements() {
  const days = document.querySelectorAll('.days');

  days.forEach(item => {
    item.addEventListener('click', () => {
      days.forEach(day => {
        if (day.classList.contains('active')) {
          day.classList.remove('active');
          return;
        }
      });

      item.classList.add('active');
    });
  });
}

// Обработчик клика на кнопку "Назад"
prevButton.addEventListener('click', () => {
  startDate.setDate(startDate.getDate() - 7); // Переходим к предыдущей неделе
  endDate.setDate(endDate.getDate() - 7);
  updateCalendar();
  updateElements();
});

// Обработчик клика на кнопку "Вперед"
nextButton.addEventListener('click', () => {
  startDate.setDate(startDate.getDate() + 7); // Переходим к следующей неделе
  endDate.setDate(endDate.getDate() + 7);
  updateCalendar();
  updateElements();
});

// Инициализация календаря
updateCalendar();
updateElements();

const hourBtn = document.querySelectorAll('.hour-btn');

hourBtn.forEach(item => {
  item.addEventListener('click', () => {
    for (let i = 0; i < hourBtn.length; i += 1) {
      if (hourBtn[i].classList.contains('active')) {
        hourBtn[i].classList.remove('active');
        break;
      }
    }

    item.classList.add('active');
  });
});
