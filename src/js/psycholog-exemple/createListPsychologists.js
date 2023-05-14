(() => {
  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };

  if (!load('items')) {
    return;
  }

  const gallery = document.querySelector('.psychologists-slider-section__list');

  const { data, itemId } = load('items');

  console.log(data);

  const listCards = data
    .map(
      ({ alt, photoSrc, id, name }) => `
              <li class="psychologists-slider-section__item ${
                id === itemId
                  ? 'psychologists-slider-section__item--active'
                  : ''
              }" data-psychologist-id="${id}">
                <div class="psychologists-slider-section__image-wrapper">
                  <div class="psychologists-slider-section__image-wrapper-border">
                      <img
                      src=${photoSrc}
                      class="psychologists-slider-section__image"
                      alt=${alt}
                      />
                  </div>
                </div>
                </div>
                <div class="psychologists-slider-section__info">
                  <p>${name}</p>
                </div>    
              </li>
          `
    )
    .join('');

  gallery.innerHTML = listCards;

  const psychologistsSliderSectionItem = document.querySelectorAll(
    '.psychologists-slider-section__item'
  );

  //получаем по id объект с массива
  function findItemById(id, data) {
    return data.find(item => item.id === id);
  }

  psychologistsSliderSectionItem.forEach(card => {
    card.addEventListener('click', () => {
      const itemId = card.getAttribute('data-psychologist-id');
      const item = findItemById(itemId, data);
      localStorage.setItem('item', JSON.stringify(item));
      localStorage.setItem('items', JSON.stringify({ data, itemId }));
      refreshPage(card);
    });
  });

  /////
  const refreshPage = card => {
    for (let i = 0; i < psychologistsSliderSectionItem.length; i += 1) {
      if (
        psychologistsSliderSectionItem[i].classList.contains(
          'psychologists-slider-section__item--active'
        )
      ) {
        psychologistsSliderSectionItem[i].classList.remove(
          'psychologists-slider-section__item--active'
        );
        break;
      }
    }

    card.classList.add('psychologists-slider-section__item--active');

    const cardImg = document.querySelector('.card__img img');
    const cardInfoName = document.querySelector('.card__info h3');
    const cardInfoExperience = document.querySelector('.card__info p');
    const cardPrice = document.querySelector('.card__price');

    const { name, experience, photoSrc, priceValue } = load('item');

    cardImg.src = photoSrc;
    cardInfoName.innerHTML = name;
    cardInfoExperience.innerHTML = experience;
    cardPrice.innerHTML = `${priceValue}<span>грн/год</span>`;
  };
})();
