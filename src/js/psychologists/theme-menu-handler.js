(() => {
  const filterThemesTitles = document.querySelectorAll(
    '.psychologists-section__filter-themes-title'
  );

  const filterThemesButton = document.querySelectorAll(
    '.psychologists-section__filter-themes-button'
  );

  const filterThemesList = document.querySelectorAll(
    '.psychologists-section__filter-list'
  );

  filterThemesTitles.forEach((item, index) => {
    item.addEventListener('click', () => {
      filterThemesButton[index].classList.toggle('rotated');

      const itemText = filterThemesList[index];

      if (itemText.style.maxHeight) {
        itemText.style.maxHeight = null;
      } else {
        itemText.style.maxHeight = itemText.scrollHeight + 'px';
      }
    });
  });
})();
