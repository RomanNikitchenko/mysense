import { fakeAPI } from '../fakeAPI/fakeAPI';

export default async function fetchCardByValues({ array, gender }) {
  const response = await fakeAPI;

  if (!response) {
    console.log('Ошибка !response');
  } else {
    const filteredEmployees = await filterEmployeesByAllSkills({
      response,
      array,
      gender,
    });

    const limitedQuantity = filteredEmployees.slice(0, 8);

    return {
      data: limitedQuantity,
      hits: filteredEmployees.length,
    };
  }
}

function filterEmployeesByAllSkills({ response, array, gender }) {
  if (array.length === 0) {
    return []; // возвращает пустой массив, если переданный массив пустой
  }

  return response.filter(item => {
    //по specialties
    const hasSelectedSkills = array.every(skill =>
      item.specialties.includes(skill)
    );

    //по gender
    let hasSelectedGender = false;
    if (gender.length === 0) {
      hasSelectedGender = true;
    } else {
      if (gender.includes(item.gender)) {
        hasSelectedGender = true;
      }
    }

    return hasSelectedSkills && hasSelectedGender;
  });
}
