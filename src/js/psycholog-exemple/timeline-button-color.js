//клик по кнопкам меняем цвет
(() => {
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
})();
