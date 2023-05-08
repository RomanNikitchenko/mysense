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
