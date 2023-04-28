export default function toggleActiveClass(testLine, currentPage, step) {
  for (let i = 0; i < testLine.length; i += 1) {
    if (testLine[i].classList.contains('active')) {
      testLine[i].classList.remove('active');
      break;
    }
  }

  if (!currentPage.classList.contains('visually-hidden')) {
    testLine[step - 1].classList.add('active');
  }
}
