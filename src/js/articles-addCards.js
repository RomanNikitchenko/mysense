const loadMoreButton = document.querySelector('.articles__btn');

let cardCount = 0;

export default function addCards(allCards) {
  cardCount += 3;

  const cardsToShow = allCards.slice(0, cardCount);

  console.log(cardsToShow);
}
