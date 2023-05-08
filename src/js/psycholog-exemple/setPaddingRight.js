document.addEventListener('DOMContentLoaded', function () {
  setPaddingRight(); // вызываем функцию после загрузки всех элементов страницы
});

function setPaddingRight() {
  const sliderSectionList = document.querySelector(
    '.psychologists-slider-section__list'
  );
  let width = window.innerWidth;
  let paddingRight;

  if (width >= 1280) {
    sliderSectionList.style.paddingRight = `0px`;
  } else if (width >= 744) {
    sliderSectionList.style.paddingRight = `0px`;
  } else {
    if (width <= 390) {
      paddingRight = 20;
    } else {
      const extraWidth = width - 390;
      const additionalPadding = Math.floor(extraWidth / 20) * 0.5;
      paddingRight = 20 + Math.floor(extraWidth / 2) + additionalPadding;
    }
  }

  sliderSectionList.style.paddingRight = `${paddingRight}px`;
}

window.addEventListener('resize', setPaddingRight);
