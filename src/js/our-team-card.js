import ourTeam1Mobil2x from '../images/our-team-mobil@2x.jpg';
import ourTeam1Tablet2x from '../images/our-team-tablet@2x.jpg';
import ourTeam1Desktop2x from '../images/our-team-desktop@2x.jpg';

import ourTeam2Mobil2x from '../images/ourTeam2Mobil2x.jpg';
import ourTeam2Tablet2x from '../images/ourTeam2Tablet2x.jpg';
import ourTeam2Desktop2x from '../images/ourTeam2Desktop2x.jpg';

import ourTeam3Mobil2x from '../images/ourTeam3Mobil2x.jpg';
import ourTeam3Tablet2x from '../images/ourTeam3Tablet2x.jpg';
import ourTeam3Desktop2x from '../images/ourTeam3Desktop2x.jpg';

import ourTeam4Mobil2x from '../images/ourTeam4Mobil2x.jpg';
import ourTeam4Tablet2x from '../images/ourTeam4Tablet2x.jpg';
import ourTeam4Desktop2x from '../images/ourTeam4Desktop2x.jpg';

import HelloImg from '../images/15hv.png';

const teamMembers = [
  {
    name: 'Іван Виговський',
    experience: '3 роки практики',
    specialties: ['Тривога', 'Страх', 'Мотивація', 'Вигорання', 'Стосунки'],
    priceValue: '300',
    priceUnit: 'грн/час',
    iconSrc: HelloImg,
    status: false,
    friendly: false,
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

//code
const gallery = document.querySelector('.our-team__list');

const cardsMarcup = createImageCardsMarcup(teamMembers);

gallery.insertAdjacentHTML('beforeend', cardsMarcup);

function createImageCardsMarcup(Items) {
  return Items.map(
    ({
      photoSources,
      photoSrc,
      alt,
      name,
      experience,
      specialties,
      priceValue,
      priceUnit,
      iconSrc,
      status,
      friendly,
    }) => {
      return `
                <li class="our-team__item">
                    <figure class="our-team__photo">
                        <picture>
                            ${photoSources
                              .map(source => {
                                return `<source media="${source.media}" srcset="${source.srcset}" />`;
                              })
                              .join('')}
                            <img src="${photoSrc}" alt="${alt}" />
                        </picture>
                        <figcaption class="our-team__caption">
                            <h3 class="our-team__name">${name}<span class="our-team__status ${
        status ? 'online' : 'offline'
      }"></span></h3>
                            <p class="our-team__experience">${experience}</p>
                        </figcaption>
                    </figure>
                    <ul class="our-team__specialties">
                        ${specialties
                          .map(
                            specialty =>
                              `<li class="our-team__specialty">${specialty}</li>`
                          )
                          .join('')}
                    </ul>
                    <div class="our-team__price">
                        <span class="our-team__price-value">${priceValue}</span><span class="our-team__price-unit">${priceUnit}</span>
                    </div>
                    <div class="our-team__buttons">
                    
                        <button type="button" class="our-team__session-button ${
                          !friendly ? 'not--friendly' : ''
                        }">Записатись на сессію</button>

                        <button type="button" class="our-team__details-button ${
                          friendly ? 'friendly' : ''
                        }">
                            <img class="our-team__icon-Hello" src="${iconSrc}" alt="icon Hello">
                        </button>
                    </div>
                </li>`;
    }
  ).join('');
}
