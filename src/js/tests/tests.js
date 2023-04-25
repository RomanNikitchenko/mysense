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
const sectionTestPage = document.querySelector('.testpage');
const testCardWrapBtn = document.querySelectorAll('.test__card-wrap');
const fixedBox = document.querySelector('.fixed__box');
const sectionState = document.querySelector('.state');
const sectionRequests = document.querySelector('.requests');
const sectionConsern = document.querySelector('.consern');
const sectionCategory = document.querySelector('.category');

fixedBox.classList.add('state--is-hidden');
sectionState.classList.add('state--is-hidden');
sectionRequests.classList.add('state--is-hidden');
sectionConsern.classList.add('state--is-hidden');
sectionCategory.classList.add('state--is-hidden');

let myself = false;
let family = false;
let child = false;

testCardWrapBtn.forEach(item => {
  item.addEventListener('click', e => {
    if (e.currentTarget.dataset.for === 'myself') {
      console.log('myself');
      myself = true;
      family = false;
      child = false;
    }

    if (e.currentTarget.dataset.for === 'family') {
      console.log('family');
      myself = false;
      family = true;
      child = false;
    }

    if (e.currentTarget.dataset.for === 'child') {
      console.log('child');
      myself = false;
      family = false;
      child = true;
    }
  });
});

const fixedButtonPrew = document.querySelector('.fixed__button-prew');
const fixedButtonNext = document.querySelector('.fixed__button-next');

fixedButtonNext.addEventListener('click', () => {
  if (myself) {
    console.log('myself');
  }
  if (family) {
    console.log('family');
  }
  if (child) {
    console.log('child');
  }
});
