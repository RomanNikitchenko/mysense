const itemWraps = document.querySelectorAll('.request-item__wrap');

itemWraps.forEach(itemWrap => {
  itemWrap.addEventListener('click', () => {
    itemWrap.classList.toggle('rotated');

    const itemText = itemWrap.nextElementSibling;

    if (itemText.style.maxHeight) {
      itemText.style.maxHeight = null;
    } else {
      itemText.style.maxHeight = itemText.scrollHeight + 'px';
    }
  });
});

// itemWraps[0].classList.toggle('rotated');
// const itemText = itemWraps[0].nextElementSibling;
// itemText.style.maxHeight = itemText.scrollHeight + 'px';
