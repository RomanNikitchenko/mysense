import { fakeAPI } from '../fakeAPI/fakeAPI';

export default async function fetchCardByValues({
  selectedSpecialties = [],
  selectedGender = [],
  selectedPriceRanges = [],
  selectedLanguages = [],
  selectedTherapys = [],
  sortingEnabledByPrice = false,
  sortingEnabledByExperience = false,
  reversed = false,
  page = 0,
  totalCards = 9,
  description = '',
}) {
  const response = await fakeAPI;

  if (!response) {
    console.log('Ошибка !response');
    // throw new Error(response.status);
  } else {
    const filteredEmployees = await filterEmployeesByAllSkills({
      response,
      selectedSpecialties,
      selectedGender,
      selectedPriceRanges,
      selectedLanguages,
      selectedTherapys,
    });

    const normalizedFilter = description.toLowerCase();

    const filterCards = filteredEmployees.filter(item => {
      return item.name.toLowerCase().includes(normalizedFilter);
    });

    if (sortingEnabledByPrice) {
      filterCards.sort((a, b) => {
        if (reversed) {
          return a.priceValue - b.priceValue;
        }
        if (!reversed) {
          return b.priceValue - a.priceValue;
        }
      });
    }

    if (sortingEnabledByExperience) {
      filterCards.sort((a, b) => {
        if (reversed) {
          return a.experienceValue - b.experienceValue;
        }
        if (!reversed) {
          return b.experienceValue - a.experienceValue;
        }
      });
    }

    const cards = filterCards.slice(page, totalCards);

    return { dataAll: filterCards, data: cards, hits: filterCards.length };
  }
}

function filterEmployeesByAllSkills({
  response,
  selectedSpecialties,
  selectedGender,
  selectedPriceRanges,
  selectedLanguages,
  selectedTherapys,
}) {
  return response.filter(item => {
    //по specialties
    const hasSelectedSkills = selectedSpecialties.every(skill =>
      item.specialties.includes(skill)
    );

    //по gender
    let hasSelectedGender = false;
    if (selectedGender.length === 0) {
      hasSelectedGender = true;
    } else {
      if (selectedGender.includes(item.gender)) {
        hasSelectedGender = true;
      }
    }

    //по price
    let hasSelectedPriceRange = false;
    if (selectedPriceRanges.length === 0) {
      hasSelectedPriceRange = true;
    } else {
      if (selectedPriceRanges.includes(item.priceRange)) {
        hasSelectedPriceRange = true;
      }
    }

    //по language
    const hasSelectedLanguages = selectedLanguages.every(language =>
      item.languages.includes(language)
    );

    //по therapy
    const hasSelectedTherapy = selectedTherapys.every(therapy =>
      item.therapys.includes(therapy)
    );

    return (
      hasSelectedSkills &&
      hasSelectedGender &&
      hasSelectedPriceRange &&
      hasSelectedLanguages &&
      hasSelectedTherapy
    );
  });
}
