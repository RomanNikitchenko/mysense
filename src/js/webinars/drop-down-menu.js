const filterMenu = document.querySelector('.filter-menu');
const filterToggle = filterMenu.querySelector('.filter-toggle');
const listFilter = filterMenu.querySelector('.list-filter');
const filterValue = filterToggle.querySelector('.filter-value');
const filterIconArrow = filterToggle.querySelector('.filter-icon-arrow');

filterToggle.addEventListener('click', function () {
  filterMenu.classList.toggle('open');
  filterIconArrow.classList.toggle('rotate');
});

listFilter.addEventListener('click', function (event) {
  event.preventDefault();
  if (!event.target.classList.contains('item-filter')) return;
  filterValue.textContent = event.target.textContent;
  filterMenu.classList.remove('open');
  filterIconArrow.classList.remove('rotate');
});

//////////////////////////////

const sortMenu = document.querySelector('.sort-menu');
const sortToggle = sortMenu.querySelector('.sort-toggle');
const sortSection = sortMenu.querySelector('.sort-section');
const sortValue = sortToggle.querySelector('.sort-value');
const sortIconArrow = sortToggle.querySelector('.sort-icon-arrow');

sortToggle.addEventListener('click', function () {
  sortMenu.classList.toggle('open');
  sortIconArrow.classList.toggle('rotate');
});

sortSection.addEventListener('click', function (event) {
  event.preventDefault();
  if (!event.target.classList.contains('item-sort')) return;
  sortValue.textContent = event.target.textContent;
  sortMenu.classList.remove('open');
  sortIconArrow.classList.remove('rotate');
});
