let employees = [
  { name: 'Иван', skills: ['Чоловіча', 'Російська', 'Англійська'] },
  { name: 'Анна', skills: ['Жіноча', 'Англійська', 'Українська'] },
  { name: 'Петр', skills: ['Чоловіча', 'Російська', 'Українська'] },
  { name: 'Мария', skills: ['Жіноча', 'Українська', 'Російська'] },
  { name: 'Дмитрий', skills: ['Чоловіча', 'Українська', 'Російська'] },
];

function filterEmployeesByAllSkills(employees, selectedSkills) {
  if (selectedSkills.length === 0) {
    return employees;
  }
  return employees.filter(employee => {
    return selectedSkills.every(skill => employee.skills.includes(skill));
  });
}

(() => {
  const buttons = document.querySelectorAll(
    '.psychologists-section__filter-btn'
  );

  // Создаем массив для хранения ID выбранных пользователем кнопок
  let selectedButtonIds = [];

  let filteredEmployees = filterEmployeesByAllSkills(
    employees,
    selectedButtonIds
  );
  console.log(filteredEmployees);

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Получаем ID кнопки
      const buttonId = button.getAttribute('data-button-id');

      // Проверяем, есть ли уже такой ID в массиве
      if (selectedButtonIds.includes(buttonId)) {
        // Если есть, удаляем его из массива
        selectedButtonIds = selectedButtonIds.filter(id => id !== buttonId);
      } else {
        // Если такого ID нет, добавляем его в массив
        selectedButtonIds.push(buttonId);
      }

      // Добавляем/удаляем класс "active" на кнопке
      button.classList.toggle('active');

      let filteredEmployees = filterEmployeesByAllSkills(
        employees,
        selectedButtonIds
      );

      console.log(filteredEmployees);
    });
  });
})();
