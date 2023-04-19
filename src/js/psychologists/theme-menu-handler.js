const filterThemesTitles = document.querySelectorAll(
  '.psychologists-section__filter-themes-title'
);

filterThemesTitles.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('rotated');

    const itemText = item.nextElementSibling;

    if (itemText.style.maxHeight) {
      itemText.style.maxHeight = null;
    } else {
      itemText.style.maxHeight = itemText.scrollHeight + 'px';
    }
  });
});
