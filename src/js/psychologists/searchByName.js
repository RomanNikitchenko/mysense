import fetchCardName from './fetchCardName';
import createImageCardsMarcup from './createImageCardsMarcup';

(() => {
  const textInput = document.querySelector(
    '.psychologists-section__search-input'
  );

  let description = '';
  let visiblefilter = [];
  let visiblehits = null;

  const getFilterChange = async () => {
    try {
      const { data, hits } = await fetchCardName({ description });
      visiblefilter = data;
      visiblehits = hits;
      return;
    } catch (error) {
      console.log('Ошибка', error);
    }
  };

  //поиск в инпут
  textInput.addEventListener('input', async event => {
    description = event.currentTarget.value.trim();
    await getFilterChange();
    createImageCardsMarcup(visiblefilter);
  });

  (async () => {
    await getFilterChange();
    createImageCardsMarcup(visiblefilter);
  })();
})();
