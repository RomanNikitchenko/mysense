import fetchCardByValues from './fetchCardByValues';
import createImageCardsMarcup from './createImageCardsMarcup';

const getFilterChange = async (array = [], gender = []) => {
  console.log(array);
  console.log(gender);
  try {
    const { data, hits } = await fetchCardByValues({
      array,
      gender,
    });

    createImageCardsMarcup({ data, hits });
  } catch (error) {
    console.log('Ошибка', error);
  }
};

export default getFilterChange;
