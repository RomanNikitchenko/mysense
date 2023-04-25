import LazyLoad from 'vanilla-lazyload';

(() => {
  const LazyImage = {
    elements_selector: '.lazy',
  };

  if (!document.lazyLoadInstance) {
    document.lazyLoadInstance = new LazyLoad(LazyImage);
  }

  document.lazyLoadInstance.update();
})();
