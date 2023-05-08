export default function createImageCardsMarkup({ data, hits }) {
  const userManualList = document.querySelector('.user-manual__list');
  const rightBlockSubtitle = document.querySelector('.right-block__subtitle');

  rightBlockSubtitle.innerHTML = `${hits} психологів`;

  const liCards = [];

  //создаем список ul в котором li имеют внутри ul c 4 li
  for (let i = 0; i < data.length; i += 4) {
    const sliceData = data.slice(i, i + 4);
    const ulCards = sliceData
      .map(item => {
        return `<li class="result__card-wrap" data-result-id="${item.id}">
        <div class="card__img">
          <img src="${item.photoSrc}" alt="" />
        </div>
        <div class="card__info">
          <h3>${item.name}</h3>
          <p>${item.experience}</p>
          <div class="card__price">${item.priceValue}<span>грн/год</span></div>
        </div>
      </li>`;
      })
      .join('');
    liCards.push(
      `<li class="user-manual__item"><ul class="result__cards">${ulCards}</ul></li>`
    );
  }

  userManualList.innerHTML = liCards.join('');

  const resultCards = document.querySelectorAll('.result__card-wrap');

  //получаем по id объект с массива
  function findItemById(id, data) {
    return data.find(item => item.id === id);
  }

  resultCards.forEach(card => {
    card.addEventListener('click', () => {
      const itemId = card.getAttribute('data-result-id');
      const item = findItemById(itemId, data);
      localStorage.setItem('item', JSON.stringify(item));
      localStorage.setItem('items', JSON.stringify({ data, itemId }));
      window.location.assign('psycholog-exemple.html');
    });
  });
}
