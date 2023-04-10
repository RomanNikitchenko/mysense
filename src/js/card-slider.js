// (() => {
//     const button = document.querySelector('.user-manual__button');
//     const list = document.querySelector('.user-manual__list');
//     const items = document.querySelectorAll('.user-manual__item');

//     let currentIndex = 0; // начальный индекс текущего элемента
//     let transformValue = 0; // начальное значение трансформации
//     let isAnimating = false;

//     const handleButtonClick = () => {
//         if (isAnimating) return;

//         isAnimating = true;
//         if (currentIndex >= items.length - 1) {
//             // если достигнут конец списка, начинаем сначала
//             currentIndex = 0;
//             transformValue = 0;
//         } else {
//             currentIndex++;
//             transformValue -= 370; // отрицательное значение для перемещения вправо
//         }
//         list.style.transform = `translateX(${transformValue}px)`;

//         setTimeout(() => {
//             isAnimating = false;
//         }, 300);
//     };

//     button.addEventListener('click', handleButtonClick);
// })();

(() => {
  const button = document.querySelector('.user-manual__button');
  const items = document.querySelectorAll('.user-manual__item');
  const list = document.querySelector('.user-manual__list');

  let currentIndex = 0;
  let isAnimating = false;
  let transformValue = 0;

  const handleButtonClick = e => {
    if (!e.currentTarget.classList.contains('user-manual__button')) return;

    if (isAnimating) return;

    isAnimating = true;

    const width = window.innerWidth;

    if (width >= 1280) {
      transformValue -= 1140;
    } else if (width >= 744) {
      transformValue -= 704;
    } else {
      transformValue -= 370;
    }

    if (currentIndex === items.length - 1) {
      currentIndex = 0;
      transformValue = 0;
    } else {
      currentIndex++;
    }

    list.style.transform = `translateX(${transformValue}px)`;

    setTimeout(() => {
      isAnimating = false;
    }, 500);
  };

  button.addEventListener('click', handleButtonClick);

  window.addEventListener('resize', () => {
    currentIndex = Math.floor(Math.abs(transformValue) / 370);
    transformValue = -currentIndex * 350;
    list.style.transform = `translateX(${transformValue}px)`;
  });
})();
