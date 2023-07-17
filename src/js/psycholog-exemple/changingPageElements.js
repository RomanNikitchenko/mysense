(() => {
  const cardImg = document.querySelector('.card__img img');
  const cardInfoName = document.querySelector('.card__info h3');
  const cardInfoExperience = document.querySelector('.card__info p');
  const cardPrice = document.querySelector('.card__price');
  const psychologVideo = document.querySelector('.psycholog__video img');
  const nameDoc = document.querySelector('.name-doc');
  const yearWork = document.querySelector('.year-work');

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

  const nameBr = name.split(' ');

  cardImg.src = photoSrc;
  cardInfoName.innerHTML = name;
  cardInfoExperience.innerHTML = experience;
  cardPrice.innerHTML = `${priceValue}<span>грн/год</span>`;
  psychologVideo.src = photoSrc;
  nameDoc.innerHTML = `${nameBr[0]} <br>${nameBr[1]}`;
  yearWork.textContent = experience;
  console.log('при загрузки');
})();
