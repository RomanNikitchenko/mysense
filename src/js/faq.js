const itemWraps = document.querySelectorAll('.item__wrap');
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
