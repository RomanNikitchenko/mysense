(() => {
  const pensil = document.querySelectorAll('.item-task .pensil');
  const save = document.querySelectorAll('.item-task .save');
  const cancel = document.querySelectorAll('.item-task .cancel');

  /////
  const looksElements = taskBlock => {
    const taskMessage = taskBlock.querySelector('.task__message');
    const taskMessageEdit = taskBlock.querySelector('.task__message-edit');
    const dataBlockTask = taskBlock.querySelector('.data_block-task');

    return { taskBlock, taskMessage, taskMessageEdit, dataBlockTask };
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
      autoResize();
    });
  });

  function autoResize() {
    const textarea = document.getElementById('taskTextarea');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  document.getElementById('taskTextarea').addEventListener('input', autoResize);

  document.addEventListener('DOMContentLoaded', function () {
    autoResize();
  });

  /////

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

  /////

  cancel.forEach(item => {
    item.addEventListener('click', () => {
      const taskBlock = item.parentNode.parentNode.parentNode;
      const { taskMessage, dataBlockTask } = looksElements(taskBlock);

      taskBlock.classList.remove('on_click-bg');
      dataBlockTask.classList.remove('on__click-btns');
      taskMessage.style.display = 'block';
    });
  });
})();
