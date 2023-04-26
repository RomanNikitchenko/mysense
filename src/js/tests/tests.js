const itemWraps = document.querySelectorAll('.request-item__wrap');
itemWraps.forEach(itemWrap => {
  itemWrap.addEventListener('click', () => {
    itemWrap.classList.toggle('rotated');
    const itemText = itemWrap.nextElementSibling;
    if (itemText.style.maxHeight) {
      itemText.style.maxHeight = null;
    } else {
      itemText.style.maxHeight = itemText.scrollHeight + 'px';
    }
  });
});

//section
const testpageContainer = document.querySelector('.testpage__container');
const testCardWrapBtn = document.querySelectorAll('.test__card-wrap');
const fixedBox = document.querySelector('.fixed__box');
const sectionState = document.querySelector('.state');
const sectionRequests = document.querySelector('.requests');
const sectionConsern = document.querySelector('.consern');
const sectionCategory = document.querySelector('.category');

sectionState.classList.add('visually-hidden');
sectionRequests.classList.add('visually-hidden');
sectionConsern.classList.add('visually-hidden');
sectionCategory.classList.add('visually-hidden');
fixedBox.classList.add('visually-hidden');

let myself = false;
let family = false;
let child = false;

let page = 0;

testCardWrapBtn.forEach(item => {
  item.addEventListener('click', e => {
    for (let i = 0; i < testCardWrapBtn.length; i += 1) {
      if (testCardWrapBtn[i].classList.contains('is-active')) {
        testCardWrapBtn[i].classList.remove('is-active');
        break;
      }
    }

    if (e.currentTarget.dataset.for === 'myself') {
      myself = true;
      family = false;
      child = false;
    }

    if (e.currentTarget.dataset.for === 'family') {
      myself = false;
      family = true;
      child = false;
    }

    if (e.currentTarget.dataset.for === 'child') {
      myself = false;
      family = false;
      child = true;
    }

    item.classList.add('is-active');

    fixedBox.classList.remove('visually-hidden');
  });
});

/////

const fixedButtonPrew = document.querySelector('.fixed__button-prew');

fixedButtonPrew.addEventListener('click', () => {
  if (page === 1) {
    page -= 1;

    testpageContainer.classList.remove('visually-hidden');

    if (myself) {
      sectionState.classList.add('visually-hidden');
      return;
    }

    if (family) {
      sectionConsern.classList.add('visually-hidden');
      return;
    }

    if (child) {
      sectionCategory.classList.add('visually-hidden');
      return;
    }
  }

  if (page === 2) {
    page -= 1;

    if (myself) {
      sectionRequests.classList.add('visually-hidden');
      sectionState.classList.remove('visually-hidden');
      return;
    }

    if (family) {
      sectionConsern.classList.add('visually-hidden');
      return;
    }

    if (child) {
      sectionCategory.classList.add('visually-hidden');
      return;
    }
  }
});

/////

const fixedButtonNext = document.querySelector('.fixed__button-next');

fixedButtonNext.addEventListener('click', () => {
  if (page === 0) {
    page += 1;

    testpageContainer.classList.add('visually-hidden');

    if (myself) {
      sectionState.classList.remove('visually-hidden');
      return;
    }
    if (family) {
      sectionConsern.classList.remove('visually-hidden');
      return;
    }
    if (child) {
      sectionCategory.classList.remove('visually-hidden');
      return;
    }
  }

  if (page === 1) {
    page += 1;

    if (myself) {
      sectionState.classList.add('visually-hidden');
      sectionRequests.classList.remove('visually-hidden');
      return;
    }
    if (family) {
      page = 1;
      sectionConsern.classList.remove('visually-hidden');
      return;
    }
    if (child) {
      page = 1;
      sectionCategory.classList.remove('visually-hidden');
      return;
    }
  }
});
