import fetchCardByValues from './fetchCardByValues';
import createImageCardsMarcup from './createImageCardsMarcup';

const getFilterChange = async (array = []) => {
  console.log(array);
  try {
    const { data, hits } = await fetchCardByValues({
      array,
    });

    createImageCardsMarcup({ data, hits });
  } catch (error) {
    console.log('Ошибка', error);
  }
};

export default getFilterChange;
