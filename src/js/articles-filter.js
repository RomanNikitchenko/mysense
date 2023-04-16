import fetchCard from './articles-fetchCard';
import createCardslist from './articles-createCardslist';

(() => {
  const textInput = document.querySelector('#textInput');
  const itemsFilter = document.querySelectorAll('.item-filter');
  const sortLikes = document.querySelector('.sort-likes');
  const sortDate = document.querySelector('.sort-date');

  let description = '';
  let visibleFilter = [];
  let reverseLikes = 'desc';
  let reverseDate = 'desc';
  let totalCards = 3;
  let sortingEnabledByLikes = false;
  let sortingEnabledByDate = false;

  const getFilterChange = async () => {
    try {
      const articles = await fetchCard();
      const normalizedFilter = description.toLowerCase();

      return articles.filter(item => {
        return (
          item.title.toLowerCase().includes(normalizedFilter) ||
          item.speaker.toLowerCase().includes(normalizedFilter) ||
          item.tag.join(' ').toLowerCase().includes(normalizedFilter)
        );
      });
    } catch (error) {
      console.log('Ошибка', error);
    }
  };

  //поиск в инпут
  textInput.addEventListener('input', async event => {
    totalCards = 3;
    description = event.currentTarget.value;
    visibleFilter = await getFilterChange();
    if (sortingEnabledByLikes) {
      sortByLikes();
    }
    if (sortingEnabledByDate) {
      sortByDate();
    }
    createCardslist(visibleFilter.slice(0, totalCards));
    checkLoadMoreButton();
  });

  //поиск в меню по ключевым словам
  itemsFilter.forEach(item => {
    item.addEventListener('click', async event => {
      totalCards = 3;
      description = event.currentTarget.innerHTML;
      visibleFilter = await getFilterChange();
      if (sortingEnabledByLikes) {
        sortByLikes();
      }
      if (sortingEnabledByDate) {
        sortByDate();
      }
      createCardslist(visibleFilter.slice(0, totalCards));
      checkLoadMoreButton();
    });
  });

  //сортировка по лайкам
  function sortByLikes() {
    sortingEnabledByLikes = true;
    sortingEnabledByDate = false;

    if (reverseLikes === 'desc') {
      visibleFilter.sort((a, b) => b.likes - a.likes);
    }

    createCardslist(visibleFilter.slice(0, totalCards));
  }
  sortLikes.addEventListener('click', sortByLikes);

  //сортировка по дате
  function sortByDate() {
    sortingEnabledByLikes = false;
    sortingEnabledByDate = true;

    if (reverseDate === 'desc') {
      visibleFilter.sort((a, b) => {
        const dateA = new Date(b.date);
        const dateB = new Date(a.date);
        return dateA - dateB; //сортировка по убывающей дате
      });
    }

    createCardslist(visibleFilter.slice(0, totalCards));
  }
  sortDate.addEventListener('click', sortByDate);

  /////

  const loadMoreButton = document.querySelector('.articles__btn');

  loadMoreButton.addEventListener('click', () => {
    totalCards += 3;

    createCardslist(visibleFilter.slice(0, totalCards));

    checkLoadMoreButton();
  });

  function checkLoadMoreButton() {
    console.log('checkLoadMoreButton');
    if (visibleFilter.length <= totalCards) {
      loadMoreButton.style.display = 'none';
    } else {
      loadMoreButton.style.display = 'block';
    }
  }

  /////

  (async () => {
    visibleFilter = await getFilterChange();
    createCardslist(visibleFilter.slice(0, totalCards));
    checkLoadMoreButton();
  })();
})();
