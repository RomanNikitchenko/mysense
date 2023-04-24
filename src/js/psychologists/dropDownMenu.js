const sortToggle = document.querySelector('.sort-toggle');
const sortList = document.querySelector('.sort-list');
const sortValue = document.querySelector('.sort-value');
const sortButton = document.querySelectorAll('.sort-button');
console.log(sortButton);

sortToggle.addEventListener('click', () => {
  sortToggle.classList.toggle('rotated');

  if (sortList.style.maxHeight) {
    sortList.style.maxHeight = null;
  } else {
    sortList.style.maxHeight = sortList.scrollHeight + 'px';
  }
});

sortList.addEventListener('click', event => {
  event.preventDefault();

  if (!event.target.classList.contains('sort-button')) return;

  sortToggle.classList.toggle('rotated');

  sortButton.forEach(item => {
    return item.classList.remove('active');
  });

  event.target.classList.add('active');

  sortValue.textContent = event.target.textContent;

  sortList.style.maxHeight = null;
});
