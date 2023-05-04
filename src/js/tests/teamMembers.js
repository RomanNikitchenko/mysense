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

export const teamMembers = [
  {
    id: 1,
    name: 'Іван Виговський',
    gender: 'male',
    therapys: ['особиста', 'парна'],
    languages: ['українська', 'російська'],
    experience: '3 роки практики',
    experienceValue: 3,
    specialties: ['Дипресія', 'Стрес', 'Смуток', 'Гнів', 'Вигорання'],
    priceValue: 430,
    priceRange: '400-799',
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
    id: 2,
    name: 'Марія Оса',
    gender: 'female',
    therapys: ['парна', 'Дитяча'],
    languages: ['українська', 'англійська'],
    experience: '12 років практикиx',
    experienceValue: 12,
    specialties: ['Малята'],
    priceValue: 850,
    priceRange: '800-1199',
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
    id: 3,
    name: 'Олег Марʼяненко',
    gender: 'male',
    therapys: ['особиста', 'парна', 'Дитяча'],
    languages: ['українська', 'англійська', 'російська'],
    experience: '5 років практики',
    experienceValue: 5,
    specialties: ['Молодший дошкільний вік', 'Молодший шкільний вік'],
    priceValue: 1300,
    priceRange: '1200+',
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
    id: 4,
    name: 'Карина Вайн',
    gender: 'female',
    therapys: ['особиста', 'Дитяча'],
    languages: ['українська'],
    experience: '10 років практикиx',
    experienceValue: 10,
    specialties: ['Гнів', 'Вигорання', 'Стосунки', 'Самотність', 'Дипресія'],
    priceValue: 1000,
    priceRange: '800-1199',
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
    id: 5,
    name: 'Іван Виговський',
    gender: 'male',
    therapys: ['особиста', 'парна'],
    languages: ['українська', 'російська'],
    experience: '3 роки практики',
    experienceValue: 3,
    specialties: ['Дипресія', 'Стрес', 'Смуток', 'Гнів', 'Вигорання'],
    priceValue: 430,
    priceRange: '400-799',
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
    id: 6,
    name: 'Марія Оса',
    gender: 'female',
    therapys: ['парна', 'Дитяча'],
    languages: ['українська', 'англійська'],
    experience: '12 років практикиx',
    experienceValue: 12,
    specialties: ['Стрес', 'Смуток', 'Гнів', 'Вигорання', 'Стосунки'],
    priceValue: 850,
    priceRange: '800-1199',
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
    id: 7,
    name: 'Олег Марʼяненко',
    gender: 'male',
    therapys: ['особиста', 'парна', 'Дитяча'],
    languages: ['українська', 'англійська', 'російська'],
    experience: '5 років практики',
    experienceValue: 5,
    specialties: ['Смуток', 'Гнів', 'Вигорання', 'Стосунки', 'Самотність'],
    priceValue: 1300,
    priceRange: '1200+',
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
    id: 8,
    name: 'Карина Вайн',
    gender: 'female',
    therapys: ['особиста', 'Дитяча'],
    languages: ['українська'],
    experience: '10 років практикиx',
    experienceValue: 10,
    specialties: ['Гнів', 'Вигорання', 'Стосунки', 'Самотність', 'Дипресія'],
    priceValue: 1000,
    priceRange: '800-1199',
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
    id: 9,
    name: 'Іван Виговський',
    gender: 'male',
    therapys: ['особиста', 'парна'],
    languages: ['українська', 'російська'],
    experience: '3 роки практики',
    experienceValue: 3,
    specialties: ['Дипресія', 'Стрес', 'Смуток', 'Гнів', 'Вигорання'],
    priceValue: 430,
    priceRange: '400-799',
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
    id: 10,
    name: 'Марія Оса',
    gender: 'female',
    therapys: ['парна', 'Дитяча'],
    languages: ['українська', 'англійська'],
    experience: '12 років практикиx',
    experienceValue: 12,
    specialties: ['Стрес', 'Смуток', 'Гнів', 'Вигорання', 'Стосунки'],
    priceValue: 850,
    priceRange: '800-1199',
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
    id: 11,
    name: 'Олег Марʼяненко',
    gender: 'male',
    therapys: ['особиста', 'парна', 'Дитяча'],
    languages: ['українська', 'англійська', 'російська'],
    experience: '5 років практики',
    experienceValue: 5,
    specialties: ['Смуток', 'Гнів', 'Вигорання', 'Стосунки', 'Самотність'],
    priceValue: 1300,
    priceRange: '1200+',
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
    id: 12,
    name: 'Карина Вайн',
    gender: 'female',
    therapys: ['особиста', 'Дитяча'],
    languages: ['українська'],
    experience: '10 років практикиx',
    experienceValue: 10,
    specialties: ['Гнів', 'Вигорання', 'Стосунки', 'Самотність', 'Дипресія'],
    priceValue: 1000,
    priceRange: '800-1199',
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
