const itemWraps = document.querySelectorAll('.item__wrap');
const item__title = document.querySelectorAll('.item__title');
itemWraps.forEach(itemWrap => {
  itemWrap.addEventListener('click', () => {
    itemWrap.classList.toggle('rotated');
    item__title.classList.toggle('rotated');
    const itemText = itemWrap.nextElementSibling;
    if (itemText.style.maxHeight) {
      itemText.style.maxHeight = null;
    } else {
      itemText.style.maxHeight = itemText.scrollHeight + 'px';
    }
  });
});