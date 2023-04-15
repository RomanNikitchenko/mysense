// function handleSelectBlock(selectBlock) {
//   const selectSingle = selectBlock.querySelector('.__select');
//   const selectSingle_title = selectSingle.querySelector('.__select__title');
//   const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

//   selectSingle_title.addEventListener('click', () => {
//     if ('active' === selectSingle.getAttribute('data-state')) {
//       selectSingle.setAttribute('data-state', '');
//     } else {
//       selectSingle.setAttribute('data-state', 'active');
//     }
//   });

//   for (let i = 0; i < selectSingle_labels.length; i++) {
//     selectSingle_labels[i].addEventListener('click', evt => {
//       selectSingle_title.textContent = evt.target.textContent;
//       selectSingle.setAttribute('data-state', '');
//     });
//   }
// }

// handleSelectBlock(document.querySelector('.__select-container'));

// handleSelectBlock(document.querySelector('.select-block'));
