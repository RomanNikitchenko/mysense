export default function viewProfile(data) {
  const items = document.querySelectorAll('.our-team__item');

  //   получаем по id объект с массива
  function findItemById(id, data) {
    return data.find(item => item.id === id);
  }

  items.forEach(element => {
    element.addEventListener('click', e => {
      if (!e.target.classList.contains('our-team__link')) {
        return;
      }
      const itemId = element.getAttribute('data-item-id');
      const item = findItemById(itemId, data);
      localStorage.setItem('item', JSON.stringify(item));
      localStorage.setItem('items', JSON.stringify({ data, itemId }));
    });
  });
}
