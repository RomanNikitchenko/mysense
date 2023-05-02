const webinarsBtn = document.querySelector('.vebinars-btn');
const postsBtn = document.querySelector('.posts');
const platformContent = document.querySelector('.platform__content');

platformContent.classList.remove('show-posts');
platformContent.classList.add('show-webinars');

let posts = false;
let webinars = true;

webinarsBtn.addEventListener('click', () => {
  platformContent.classList.remove('show-posts');
  platformContent.classList.add('show-webinars');
  posts = false;
  webinars = true;
});

postsBtn.addEventListener('click', () => {
  platformContent.classList.remove('show-webinars');
  platformContent.classList.add('show-posts');
  posts = true;
  webinars = false;
});
