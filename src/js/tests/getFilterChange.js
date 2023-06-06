import fetchCardByValues from './fetchCardByValues';
import createImageCardsMarcup from './createImageCardsMarcup';

const getFilterChange = async (
  array = [],
  gender = [],
  lang = [],
  cost = []
) => {
  console.log(array);
  console.log(gender);
  console.log(lang);
  console.log(cost);
  try {
    const { data, hits } = await fetchCardByValues({
      array,
      gender,
      lang,
      cost,
    });

    createImageCardsMarcup({ data, hits });
  } catch (error) {
    console.log('Ошибка', error);
  }
};

export default getFilterChange;
