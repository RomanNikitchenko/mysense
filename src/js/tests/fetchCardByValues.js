import { teamMembers } from './teamMembers';

export default async function fetchCardByValues({ array }) {
  const response = await teamMembers;

  if (!response) {
    console.log('Ошибка !response');
  } else {
    const filteredEmployees = await filterEmployeesByAllSkills({
      response,
      array,
    });

    return { data: filteredEmployees, hits: filteredEmployees.length };
  }
}

function filterEmployeesByAllSkills({ response, array }) {
  if (!array.length) {
    return array;
  }

  return response.filter(item => {
    console.log('qwe');
    //по specialties
    const hasSelectedSkills = array.every(skill =>
      item.specialties.includes(skill)
    );

    return hasSelectedSkills;
  });
}
