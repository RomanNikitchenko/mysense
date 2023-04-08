const languageMenu = document.querySelector('.language-menu');
const languageToggle = languageMenu.querySelector('.language-toggle');
const language = languageToggle.querySelector('.language');
const languageList = languageMenu.querySelector('.language-list');
const iconArrow = languageToggle.querySelector('.icon-arrow');

languageToggle.addEventListener('click', function () {
  languageMenu.classList.toggle('open');
  iconArrow.classList.toggle('rotate');
});

languageList.addEventListener('click', function (event) {
  event.preventDefault();
  const lang = event.target.getAttribute('lang');
  document.documentElement.lang = lang;
  language.textContent = event.target.textContent;
  languageMenu.classList.remove('open');
  iconArrow.classList.remove('rotate');
});
