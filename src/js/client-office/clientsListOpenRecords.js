import purpleArrow from '../../images/office/purple-arrow.svg';

(() => {
  /////
  const switchBtns = document.querySelectorAll('.clients__list button');
  const leftBlockClients = document.querySelector('.left-block__clients');
  const rightBlockContent = document.querySelector('.right-block__content');
  const backBtn = document.querySelector('.right-block__content .back');
  /////

  /////
  //при первой загрузки и если мобилка скрываем все записи пользователя
  let width = window.innerWidth;
  if (width < 744) {
    rightBlockContent.classList.add('visually-hidden');
  }
  /////

  switchBtns.forEach(item => {
    item.addEventListener('click', e => {
      if (width > 744) return;
      leftBlockClients.classList.add('visually-hidden');
      rightBlockContent.classList.remove('visually-hidden');
      const name = e.currentTarget.textContent;
      backBtn.innerHTML = `<img src="${purpleArrow}" alt="">${name}`;
    });
  });

  backBtn.addEventListener('click', () => {
    if (width > 744) return;
    leftBlockClients.classList.remove('visually-hidden');
    rightBlockContent.classList.add('visually-hidden');
  });

  window.matchMedia('(min-width: 744px)').addEventListener('change', e => {
    if (!e.matches) return;
    leftBlockClients.classList.remove('visually-hidden');
    rightBlockContent.classList.remove('visually-hidden');
    width = window.innerWidth;
  });

  window.matchMedia('(max-width: 743px)').addEventListener('change', e => {
    if (!e.matches) return;
    leftBlockClients.classList.remove('visually-hidden');
    rightBlockContent.classList.add('visually-hidden');
    width = window.innerWidth;
  });
})();
