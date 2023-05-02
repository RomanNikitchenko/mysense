(() => {
  const nextButton = document.querySelector('.arrow-next');
  const prevButton = document.querySelector('.arrow-prew');
  const items = document.querySelectorAll('.user-manual__item');
  const list = document.querySelector('.user-manual__list');

  let currentIndex = 0;
  let isAnimating = false;
  let transformValue = 0;

  const handleNextButtonClick = e => {
    if (isAnimating) return;

    isAnimating = true;

    const width = window.innerWidth;

    if (width >= 1280) {
      transformValue -= 1220;
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

  const handlePrevButtonClick = e => {
    if (isAnimating) return;

    isAnimating = true;

    const width = window.innerWidth;

    if (width >= 1280) {
      transformValue += 1220;
    } else if (width >= 744) {
      transformValue += 704;
    } else {
      transformValue += 370;
    }

    if (currentIndex === 0) {
      currentIndex = items.length - 1;
      transformValue = -(items.length - 1) * 370;
    } else {
      currentIndex--;
    }

    list.style.transform = `translateX(${transformValue}px)`;

    setTimeout(() => {
      isAnimating = false;
    }, 500);
  };

  nextButton.addEventListener('click', handleNextButtonClick);
  prevButton.addEventListener('click', handlePrevButtonClick);

  window.addEventListener('resize', () => {
    const width = window.innerWidth;

    if (width >= 1280) {
      transformValue = -currentIndex * 1220;
    } else if (width >= 744) {
      transformValue = -currentIndex * 704;
    } else {
      transformValue = -currentIndex * 370;
    }

    list.style.transform = `translateX(${transformValue}px)`;
  });
})();
