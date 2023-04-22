import ourTeam1Mobil2x from '../../images/our-team-mobil@2x.jpg';
import ourTeam1Tablet2x from '../../images/our-team-tablet@2x.jpg';
import ourTeam1Desktop2x from '../../images/our-team-desktop@2x.jpg';

import ourTeam2Mobil2x from '../../images/ourTeam2Mobil2x.jpg';
import ourTeam2Tablet2x from '../../images/ourTeam2Tablet2x.jpg';
import ourTeam2Desktop2x from '../../images/ourTeam2Desktop2x.jpg';

import ourTeam3Mobil2x from '../../images/ourTeam3Mobil2x.jpg';
import ourTeam3Tablet2x from '../../images/ourTeam3Tablet2x.jpg';
import ourTeam3Desktop2x from '../../images/ourTeam3Desktop2x.jpg';

import ourTeam4Mobil2x from '../../images/ourTeam4Mobil2x.jpg';
import ourTeam4Tablet2x from '../../images/ourTeam4Tablet2x.jpg';
import ourTeam4Desktop2x from '../../images/ourTeam4Desktop2x.jpg';

import HelloImg from '../../images/Hello.png';

const teamMembers = [
  {
    name: 'Іван Виговський',
    experience: '3 роки практики',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '300',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: true,
    friendly: true,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam1Desktop2x} 1x, ${ourTeam1Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam1Tablet2x} 1x, ${ourTeam1Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam1Mobil2x} 1x, ${ourTeam1Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam1Mobil2x,
    alt: 'Фото Іван Виговський',
  },
  {
    name: 'Марія Оса',
    experience: '12 років практикиx',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '1200',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: false,
    friendly: false,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam2Desktop2x} 1x, ${ourTeam2Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam2Tablet2x} 1x, ${ourTeam2Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam2Mobil2x} 1x, ${ourTeam2Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam2Mobil2x,
    alt: 'Фото Марія Оса',
  },
  {
    name: 'Олег Марʼяненко',
    experience: '5 років практики',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '450',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: true,
    friendly: true,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam3Desktop2x} 1x, ${ourTeam3Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam3Tablet2x} 1x, ${ourTeam3Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam3Mobil2x} 1x, ${ourTeam3Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam3Mobil2x,
    alt: 'Фото Олег Марʼяненко',
  },
  {
    name: 'Карина Вайн',
    experience: '10 років практикиx',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '1000',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: true,
    friendly: false,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam4Desktop2x} 1x, ${ourTeam4Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam4Tablet2x} 1x, ${ourTeam4Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam4Mobil2x} 1x, ${ourTeam4Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam4Mobil2x,
    alt: 'фото Карина Вайн',
  },
  {
    name: 'Іван Виговський',
    experience: '3 роки практики',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '300',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: true,
    friendly: true,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam1Desktop2x} 1x, ${ourTeam1Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam1Tablet2x} 1x, ${ourTeam1Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam1Mobil2x} 1x, ${ourTeam1Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam1Mobil2x,
    alt: 'Фото Іван Виговський',
  },
  {
    name: 'Марія Оса',
    experience: '12 років практикиx',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '1200',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: false,
    friendly: false,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam2Desktop2x} 1x, ${ourTeam2Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam2Tablet2x} 1x, ${ourTeam2Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam2Mobil2x} 1x, ${ourTeam2Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam2Mobil2x,
    alt: 'Фото Марія Оса',
  },
  {
    name: 'Олег Марʼяненко',
    experience: '5 років практики',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '450',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: true,
    friendly: true,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam3Desktop2x} 1x, ${ourTeam3Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam3Tablet2x} 1x, ${ourTeam3Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam3Mobil2x} 1x, ${ourTeam3Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam3Mobil2x,
    alt: 'Фото Олег Марʼяненко',
  },
  {
    name: 'Карина Вайн',
    experience: '10 років практикиx',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '1000',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: true,
    friendly: false,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam4Desktop2x} 1x, ${ourTeam4Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam4Tablet2x} 1x, ${ourTeam4Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam4Mobil2x} 1x, ${ourTeam4Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam4Mobil2x,
    alt: 'фото Карина Вайн',
  },
  {
    name: 'Іван Виговський',
    experience: '3 роки практики',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '300',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: true,
    friendly: true,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam1Desktop2x} 1x, ${ourTeam1Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam1Tablet2x} 1x, ${ourTeam1Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam1Mobil2x} 1x, ${ourTeam1Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam1Mobil2x,
    alt: 'Фото Іван Виговський',
  },
  {
    name: 'Марія Оса',
    experience: '12 років практикиx',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '1200',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: false,
    friendly: false,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam2Desktop2x} 1x, ${ourTeam2Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam2Tablet2x} 1x, ${ourTeam2Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam2Mobil2x} 1x, ${ourTeam2Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam2Mobil2x,
    alt: 'Фото Марія Оса',
  },
  {
    name: 'Олег Марʼяненко',
    experience: '5 років практики',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '450',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: true,
    friendly: true,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam3Desktop2x} 1x, ${ourTeam3Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam3Tablet2x} 1x, ${ourTeam3Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam3Mobil2x} 1x, ${ourTeam3Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam3Mobil2x,
    alt: 'Фото Олег Марʼяненко',
  },
  {
    name: 'Карина Вайн',
    experience: '10 років практикиx',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '1000',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: true,
    friendly: false,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam4Desktop2x} 1x, ${ourTeam4Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam4Tablet2x} 1x, ${ourTeam4Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam4Mobil2x} 1x, ${ourTeam4Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam4Mobil2x,
    alt: 'фото Карина Вайн',
  },
  {
    name: 'Іван Виговський',
    experience: '3 роки практики',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '300',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: true,
    friendly: true,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam1Desktop2x} 1x, ${ourTeam1Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam1Tablet2x} 1x, ${ourTeam1Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam1Mobil2x} 1x, ${ourTeam1Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam1Mobil2x,
    alt: 'Фото Іван Виговський',
  },
  {
    name: 'Марія Оса',
    experience: '12 років практикиx',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '1200',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: false,
    friendly: false,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam2Desktop2x} 1x, ${ourTeam2Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam2Tablet2x} 1x, ${ourTeam2Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam2Mobil2x} 1x, ${ourTeam2Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam2Mobil2x,
    alt: 'Фото Марія Оса',
  },
  {
    name: 'Олег Марʼяненко',
    experience: '5 років практики',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '450',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: true,
    friendly: true,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam3Desktop2x} 1x, ${ourTeam3Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam3Tablet2x} 1x, ${ourTeam3Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam3Mobil2x} 1x, ${ourTeam3Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam3Mobil2x,
    alt: 'Фото Олег Марʼяненко',
  },
  {
    name: 'Карина Вайн',
    experience: '10 років практикиx',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '1000',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: true,
    friendly: false,
    photoSources: [
      {
        media: '(min-width: 1280px)',
        srcset: `${ourTeam4Desktop2x} 1x, ${ourTeam4Desktop2x} 2x`,
      },
      {
        media: '(min-width: 744px)',
        srcset: `${ourTeam4Tablet2x} 1x, ${ourTeam4Tablet2x} 2x`,
      },
      {
        media: '(max-width: 743px)',
        srcset: `${ourTeam4Mobil2x} 1x, ${ourTeam4Mobil2x} 2x`,
      },
    ],
    photoSrc: ourTeam4Mobil2x,
    alt: 'фото Карина Вайн',
  },
];

export default async function fetchCardName({ description = '' }) {
  const response = await teamMembers;

  if (!response) {
    throw new Error(response.status);
  } else {
    const normalizedFilter = description.toLowerCase();

    const filterCards = response.filter(item => {
      return item.name.toLowerCase().includes(normalizedFilter);
    });

    return { data: filterCards, hits: filterCards.length };
  }
}
