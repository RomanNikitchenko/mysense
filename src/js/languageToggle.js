const languageMenu = document.querySelector('.language-menu');
const languageToggle = languageMenu.querySelector('.language-toggle');
const languageList = languageMenu.querySelector('.language-list');

languageToggle.addEventListener('click', function () {
  languageMenu.classList.toggle('open');
});

languageList.addEventListener('click', function (event) {
  event.preventDefault();
  const lang = event.target.getAttribute('lang');
  document.documentElement.lang = lang;
  languageToggle.textContent = event.target.textContent;
  languageMenu.classList.remove('open');
});
