(() => {
  // Перемещение таблицы по стрелкам вперед и назад
  const btnNextPageTable = document.querySelector('.controls__btn-next');
  const btnBackPageTable = document.querySelector('.controls__btn-back');
  const table = document.querySelector('.month-list');
  const dayMonthElements = table.querySelectorAll('.month-list__item');
  let page = 0;

  const pages = dayMonthElements.length;

  btnNextPageTable.addEventListener('click', () => {
    if (page < pages - 1) {
      page += 1;
      let translateX = -440 * page;
      table.style.transform = `translateX(${translateX}px)`;
    }
  });

  btnBackPageTable.addEventListener('click', () => {
    if (page > 0) {
      page -= 1;
      let translateX = -440 * page;
      table.style.transform = `translateX(${translateX}px)`;
    }
  });

  function resetStorage() {
    page = 1;
    let translateX = -440 * page;
    table.style.transform = `translateX(${translateX}px)`;
  }

  resetStorage();
})();
