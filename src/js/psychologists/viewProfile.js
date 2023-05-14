export default function viewProfile(visiblefilterAll) {
  const items = document.querySelectorAll('.our-team__item');

  const data = visiblefilterAll.slice(0, 9);

  //   получаем по id объект с массива
  function findItemById(id, data) {
    return data.find(item => item.id === id);
  }

  items.forEach(element => {
    element.addEventListener('click', e => {
      if (!e.target.classList.contains('our-team__link')) {
        return;
      }
      // e.preventDefault();
      const itemId = element.getAttribute('data-item-id');
      const item = findItemById(itemId, visiblefilterAll);
      localStorage.setItem('item', JSON.stringify(item));
      localStorage.setItem('items', JSON.stringify({ data, itemId }));
    });
  });
}
