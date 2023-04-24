const gallery = document.querySelector('.our-team__list');

let screenWidth = window.innerWidth;

const scaleTarget = () => {
  return (screenWidth = window.innerWidth);
};

const baseImage = () => {
  if (screenWidth <= 744) {
    return 'data:image/gif;base64,R0lGODlhSwAxAIAAAP///wAAACH5BAEAAAEALAAAAABLADEAAAJAjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1iCgA7';
  }
  if (screenWidth >= 745 && screenWidth <= 1279) {
    return 'data:image/gif;base64,R0lGODlhOwAxAIAAAP///wAAACH5BAEAAAEALAAAAAA7ADEAAAI4jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvPZKgAAOw==';
  }
  if (screenWidth >= 1280) {
    return 'data:image/gif;base64,R0lGODlhuQCTAIAAAP///wAAACH5BAEAAAEALAAAAAC5AJMAAALPjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7OvloAADs=';
  }
};

scaleTarget();

window.addEventListener('resize', scaleTarget);

export default function createImageCardsMarcup({ visiblefilter, change }) {
  const listCards = visiblefilter
    .map(
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
      }) =>
        `
              <li class="our-team__item">
                  <figure class="our-team__photo">
                      <picture>
                          ${photoSources
                            .map(source => {
                              return `<source media="${source.media}" srcset="${source.srcset}" />`;
                            })
                            .join('')}
                          <img class="lazy" data-src="${photoSrc}" src="${baseImage()}" alt="${alt}" />
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
              </li>`
    )
    .join('');

  if (change) {
    gallery.innerHTML = listCards;
  } else {
    gallery.insertAdjacentHTML('beforeend', listCards);
  }
}
