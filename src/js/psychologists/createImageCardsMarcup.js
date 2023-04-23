const gallery = document.querySelector('.our-team__list');

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
              </li>`
    )
    .join('');

  if (change) {
    gallery.innerHTML = listCards;
  } else {
    gallery.insertAdjacentHTML('beforeend', listCards);
  }
}
