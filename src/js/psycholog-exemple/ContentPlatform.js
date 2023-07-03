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

// var wrap = $('.wrap__main');
// var sidebar = $('.psycholog__side-bar');
// $(window).scroll(function() {
//   var sdb = $(document).scrollTop();
//   var sdb1 = wrap.offset().top;
//   var sdb2 = sdb1 + wrap.outerHeight() - $(window).height();
//   if (sdb > sdb1) {
//     sidebar.css('position', 'fixed');
//   } else {
//     sidebar.css('position', 'absolute');
//   }
//   if (sdb > sdb2) {
//     sidebar.css('top', sdb2 - sdb);
//   } else {
//     sidebar.css('top', '0');
//   }
// });
