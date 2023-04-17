const articlesCardsWrap = document.querySelector('.articles__cards-wrap');
import icon from '../images/symbol-defs.svg';

export default function createCardslist(Items) {
  const listCards = Items.map(
    ({ speaker, likes, views, date, title, description, image }) => {
      //формат даты 'July 18, 2023' => '18. 07. 2023'
      const eventDate = new Date(date);
      const dayOfMonth = eventDate.getDate().toString().padStart(2, '0');
      const month = (eventDate.getMonth() + 1).toString().padStart(2, '0');
      const year = eventDate.getFullYear();
      const formattedDate = `${dayOfMonth}. ${month}. ${year}`;

      return `
            <li class="articles__card-column">
                    <div class="card__block-top">
                        <img src="${image} alt="${title}">
                        <div class="card__name">
                            <h4>${speaker}</h4>
                            <p>ХХ років практики</p>
                        </div>
                    </div>
                    <div class="card__block-title">
                        <img src="${image}" alt="">
                        <a href="#">${title}</a>
                        <p>${description}</p>
                    </div>
                    <div class="card__block-statistic">
                        <div class="statistic_left">
                            <div class="card__view">
                                <span>
                                    <svg class="articles-section__icon-subtract" width="16" height="12">
                                        <use href="${icon}#icon-subtract"></use>
                                    </svg>
                                    ${views}K
                                </span>
                            </div>
                            <div class="card__likes">
                                <span>
                                    <svg class="articles-section__icon-black-heart" width="16" height="12">
                                        <use href="${icon}#icon-black-heart"></use>
                                    </svg>
                                    ${likes}K
                                </span>
                            </div>
                        </div>
                        <div class="card__date">
                            <span>${formattedDate}</span>
                        </div>
                    </div>
                </li>
        `;
    }
  ).join('');

  articlesCardsWrap.innerHTML = listCards;
}
