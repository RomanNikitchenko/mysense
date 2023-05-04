import fetchCardByValues from './fetchCardByValues';

const getFilterChange = async array => {
  try {
    const { data, hits } = await fetchCardByValues({
      array,
    });

    console.log(hits);
    console.log(data);

    return { data, hits };
  } catch (error) {
    console.log('Ошибка', error);
  }
};

export default getFilterChange;
