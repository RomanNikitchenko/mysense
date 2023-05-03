const webinarsBtn = document.querySelector('.vebinars-btn');
const postsBtn = document.querySelector('.posts');
const platformContent = document.querySelector('.platform__content');

platformContent.classList.remove('show-posts');
platformContent.classList.add('show-webinars');

webinarsBtn.addEventListener('click', () => {
  platformContent.classList.remove('show-posts');
  platformContent.classList.add('show-webinars');
});

postsBtn.addEventListener('click', () => {
  platformContent.classList.remove('show-webinars');
  platformContent.classList.add('show-posts');
});
