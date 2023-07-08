//перемещение таблицы по стрелачкам в перед назад
(() => {
  //перемещение таблицы по стрелачкам в перед назад
  const btnNextPageTable = document.querySelector('.btn__next-page-table');
  const btnBackPageTable = document.querySelector('.btn__back-page-table');
  const table = document.querySelector('.work__schedule_exemple');

  let page = 1;
  let width = window.innerWidth;

  btnNextPageTable.addEventListener('click', () => {
    if (width >= 1280) {
      if (page === 1) {
        table.style.transform = `translateX(${-835 * page}px)`;
      }
      if (page === 2) {
        table.style.transform = `translateX(${-835 * page}px)`;
      }
      if (page === 3) {
        table.style.transform = `translateX(${-835 * page}px)`;
        return;
      }

      page += 1;
      return;
    }

    if (width >= 744) {
      if (page === 1) {
        table.style.transform = `translateX(${-664 * page}px)`;
      }
      if (page === 2) {
        table.style.transform = `translateX(${-664 * page}px)`;
      }
      if (page === 3) {
        table.style.transform = `translateX(${-664 * page}px)`;
        return;
      }

      page += 1;
      return;
    }

    if (width < 744) {
      if (page === 1) {
        table.style.transform = `translateX(${-2450 * page}px)`;
      }
      if (page === 2) {
        table.style.transform = `translateX(${-2450 * page}px)`;
      }
      if (page === 3) {
        table.style.transform = `translateX(${-2450 * page}px)`;
        return;
      }

      page += 1;
      return;
    }
  });

  btnBackPageTable.addEventListener('click', () => {
    if (width >= 1280) {
      if (page === 1) {
        table.style.transform = `translateX(0px)`;
        return;
      }
      if (page === 2) {
        table.style.transform = `translateX(-835px)`;
      }
      if (page === 3) {
        table.style.transform = `translateX(-1670px)`;
      }

      page -= 1;
      return;
    }

    if (width >= 744) {
      if (page === 1) {
        table.style.transform = `translateX(0px)`;
        return;
      }
      if (page === 2) {
        table.style.transform = `translateX(-664px)`;
      }
      if (page === 3) {
        table.style.transform = `translateX(-1328px)`;
      }

      page -= 1;
      return;
    }

    if (width < 744) {
      if (page === 1) {
        table.style.transform = `translateX(0px)`;
        return;
      }
      if (page === 2) {
        table.style.transform = `translateX(-2450px)`;
      }
      if (page === 3) {
        table.style.transform = `translateX(-4900px)`;
      }

      page -= 1;
      return;
    }
  });

  function resetStorage() {
    page = 1;
    width = window.innerWidth;
    table.style.transform = `translateX(0px)`;
  }

  window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
    if (!e.matches) return;
    resetStorage();
  });

  window
    .matchMedia('(min-width: 744px) and (max-width: 1279px)')
    .addEventListener('change', e => {
      if (!e.matches) return;
      resetStorage();
    });

  window.matchMedia('(max-width: 743px)').addEventListener('change', e => {
    if (!e.matches) return;
    resetStorage();
  });
})();
