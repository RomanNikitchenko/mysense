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

sectionState.style.display = 'none';
sectionRequests.style.display = 'none';
sectionConsern.style.display = 'none';
sectionCategory.style.display = 'none';
fixedBox.style.display = 'none';

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

    fixedBox.style.display = 'flex';
  });
});

const fixedButtonPrew = document.querySelector('.fixed__button-prew');
const fixedButtonNext = document.querySelector('.fixed__button-next');

fixedButtonNext.addEventListener('click', () => {
  if (page === 0) {
    page += 1;

    testpageContainer.style.display = 'none';

    if (myself) {
      sectionState.style.display = 'block';
      return;
    }
    if (family) {
      sectionConsern.style.display = 'block';
      return;
    }
    if (child) {
      sectionCategory.style.display = 'block';
      return;
    }
  }

  if (page === 1) {
    if (myself) {
      sectionState.style.display = 'none';
      sectionRequests.style.display = 'block';
      return;
    }
    if (family) {
      sectionConsern.style.display = 'block';
      return;
    }
    if (child) {
      sectionCategory.style.display = 'block';
      return;
    }
  }
});
