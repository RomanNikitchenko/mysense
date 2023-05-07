(() => {
  const cardImg = document.querySelector('.card__img img');
  const cardInfoName = document.querySelector('.card__info h3');
  const cardInfoExperience = document.querySelector('.card__info p');
  const cardPrice = document.querySelector('.card__price');

  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };

  if (!load('item')) {
    return;
  }

  const { name, experience, photoSrc, priceValue } = load('item');

  cardImg.src = photoSrc;
  cardInfoName.innerHTML = name;
  cardInfoExperience.innerHTML = experience;
  cardPrice.innerHTML = `${priceValue}<span>грн/год</span>`;
})();

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
    sliderSectionList.style.paddingRight = `${20}px`;
  } else if (width >= 744) {
    sliderSectionList.style.paddingRight = `${20}px`;
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
