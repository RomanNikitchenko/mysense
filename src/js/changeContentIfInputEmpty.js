export default function changeContentIfInputEmpty() {
  const textInput = document.querySelector('#textInput');
  const filterValue = document.querySelector('.filter-value');

  if (textInput.value.trim() === '') {
    filterValue.textContent = 'всі статті';
  }
}
