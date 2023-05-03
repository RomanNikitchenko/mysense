(() => {
  const nextButton = document.querySelector('.arrow-next-meeting');
  const prevButton = document.querySelector('.arrow-prew-meeting');
  const items = document.querySelectorAll('.meeting__item');
  const list = document.querySelector('.meeting__list');

  let currentIndex = 0;
  let isAnimating = false;
  let transformValue = 0;

  const handleNextButtonClick = () => {
    if (isAnimating) return;

    isAnimating = true;

    const width = window.innerWidth;

    if (width >= 1280) {
      transformValue -= 285;

      if (currentIndex === items.length - 1) {
        currentIndex = 0;
        transformValue = 0;
      } else {
        currentIndex++;
      }
    } else if (width >= 744) {
      transformValue -= 450;

      if (currentIndex === items.length - 1) {
        currentIndex = 0;
        transformValue = 0;
      } else {
        currentIndex++;
      }
    } else {
      transformValue -= 300;

      if (currentIndex === items.length - 1) {
        currentIndex = 0;
        transformValue = 0;
      } else {
        currentIndex++;
      }
    }

    list.style.transform = `translateX(${transformValue}px)`;

    setTimeout(() => {
      isAnimating = false;
    }, 500);
  };

  const handlePrevButtonClick = () => {
    if (isAnimating) return;

    isAnimating = true;

    const width = window.innerWidth;

    if (width >= 1280) {
      transformValue += 285;
    } else if (width >= 744) {
      transformValue += 450;
    } else {
      transformValue += 300;
    }

    if (currentIndex === 0) {
      if (width >= 1280) {
        currentIndex = items.length - 1;
        transformValue = -(items.length - 1) * 285;
      } else if (width >= 744) {
        currentIndex = items.length - 1;
        transformValue = -(items.length - 1) * 450;
      } else {
        currentIndex = items.length - 1;
        transformValue = -(items.length - 1) * 300;
      }
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
      transformValue = -currentIndex * 285;
    } else if (width >= 744) {
      transformValue = -currentIndex * 450;
    } else {
      transformValue = -currentIndex * 300;
    }

    list.style.transform = `translateX(${transformValue}px)`;
  });
})();
