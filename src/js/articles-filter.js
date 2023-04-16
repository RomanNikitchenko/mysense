import fetchCard from './articles-fetchCard';
import createCardslist from './articles-createCardslist';

(() => {
  const textInput = document.querySelector('#textInput');
  const itemsFilter = document.querySelectorAll('.item-filter');
  const sortLikes = document.querySelector('.sort-likes');
  const sortDate = document.querySelector('.sort-date');

  let description = '';
  let totalCards = 3;
  let visiblefilter = [];
  let visiblehits = null;
  let sortingEnabledByLikes = false;
  let sortingEnabledByDate = false;

  const getFilterChange = async () => {
    try {
      const { data, hits } = await fetchCard(
        description,
        totalCards,
        sortingEnabledByLikes,
        sortingEnabledByDate
      );
      visiblefilter = data;
      visiblehits = hits;
      return;
    } catch (error) {
      console.log('Ошибка', error);
    }
  };

  //поиск в инпут
  textInput.addEventListener('input', async event => {
    totalCards = 3;
    description = event.currentTarget.value;
    await getFilterChange();
    createCardslist(visiblefilter);
    checkLoadMoreButton();
  });

  //поиск в меню по ключевым словам
  itemsFilter.forEach(item => {
    item.addEventListener('click', async event => {
      totalCards = 3;
      description = event.currentTarget.innerHTML;
      await getFilterChange();
      createCardslist(visiblefilter);
      checkLoadMoreButton();
    });
  });

  // сортировка по лайкам
  const sortByLikes = async () => {
    sortingEnabledByLikes = true;
    sortingEnabledByDate = false;

    await getFilterChange();

    createCardslist(visiblefilter);
  };

  sortLikes.addEventListener('click', sortByLikes);

  //сортировка по дате
  const sortByDate = async () => {
    sortingEnabledByLikes = false;
    sortingEnabledByDate = true;

    await getFilterChange();

    createCardslist(visiblefilter);
  };
  sortDate.addEventListener('click', sortByDate);

  /////

  const loadMoreButton = document.querySelector('.articles__btn');

  loadMoreButton.addEventListener('click', async () => {
    totalCards += 3;

    await getFilterChange();

    createCardslist(visiblefilter);

    checkLoadMoreButton();
  });

  function checkLoadMoreButton() {
    if (visiblehits <= totalCards) {
      loadMoreButton.style.display = 'none';
    } else {
      loadMoreButton.style.display = 'block';
    }
  }

  /////

  (async () => {
    await getFilterChange();
    createCardslist(visiblefilter);
    checkLoadMoreButton();
  })();
})();
