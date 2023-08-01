(() => {
  const pensil = document.querySelectorAll('.item-task .pensil');
  const save = document.querySelectorAll('.item-task .save');
  const cancel = document.querySelectorAll('.item-task .cancel');
  const textarea = document.querySelectorAll('.item-task .task__message-edit');

  const looksElements = taskBlock => {
    const taskMessage = taskBlock.querySelector('.task__message');
    const taskMessageEdit = taskBlock.querySelector('.task__message-edit');
    const dataBlockTask = taskBlock.querySelector('.data_block-task');

    return { taskMessage, taskMessageEdit, dataBlockTask };
  };

  pensil.forEach(item => {
    item.addEventListener('click', () => {
      const taskBlock = item.parentNode.parentNode;

      const { taskMessage, taskMessageEdit, dataBlockTask } =
        looksElements(taskBlock);

      taskBlock.classList.add('on_click-bg');
      dataBlockTask.classList.add('on__click-btns');
      taskMessage.style.display = 'none';

      taskMessageEdit.value = taskMessage.textContent;
      autoResize(taskMessageEdit);

      taskMessageEdit.focus();
    });
  });

  function autoResize(item) {
    item.style.height = 'auto';
    item.style.height = item.scrollHeight + 'px';
  }

  textarea.forEach(item => {
    item.addEventListener('input', () => {
      autoResize(item);
    });
  });

  ///// сохранить

  save.forEach(item => {
    item.addEventListener('click', () => {
      const taskBlock = item.parentNode.parentNode.parentNode;

      const { taskMessage, taskMessageEdit, dataBlockTask } =
        looksElements(taskBlock);

      taskBlock.classList.remove('on_click-bg');
      dataBlockTask.classList.remove('on__click-btns');
      taskMessage.style.display = 'block';

      taskMessage.textContent = taskMessageEdit.value;
    });
  });

  ///// отмена

  cancel.forEach(item => {
    item.addEventListener('click', () => {
      const taskBlock = item.parentNode.parentNode.parentNode;

      const { taskMessage, dataBlockTask } = looksElements(taskBlock);

      taskBlock.classList.remove('on_click-bg');
      dataBlockTask.classList.remove('on__click-btns');
      taskMessage.style.display = 'block';
    });
  });

  ///// удалить блок
  const cart = document.querySelectorAll('.item-task .cart');

  cart.forEach(item => {
    item.addEventListener('click', () => {
      const itemTask = item.parentNode.parentNode.parentNode;
      itemTask.remove();
    });
  });
})();
