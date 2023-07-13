(() => {
  //button
  const btnChatApp = document.querySelector('.btn-chat-app');
  const btnChatCorrespondence = document.querySelectorAll(
    '.btn-chat-correspondence'
  );

  //chat mysense
  const chatContainerMysense = document.querySelector(
    '.chat__container-mysense'
  );

  //chat correspondence
  const chatContainer = document.querySelector('.chat__container');

  const chatBody = document.querySelector('.chat__body');
  const notesBody = document.querySelector('.notes__body');
  const taskBody = document.querySelector('.task__body');

  const clientsSwitchBtns = document.querySelector('.clients__switch-btns');

  const dataSwitchButton = document.querySelectorAll('[data-switch-button]');

  //chat switcher
  function chatSwitcher(element) {
    for (let i = 0; i < btnChatCorrespondence.length; i++) {
      if (btnChatCorrespondence[i].classList.contains('active')) {
        btnChatCorrespondence[i].classList.remove('active');
        break;
      }
    }
    btnChatApp.classList.remove('active');

    element.classList.add('active');
  }

  btnChatApp.addEventListener('click', e => {
    chatContainerMysense.style.display = 'block';
    chatContainer.style.display = 'none';

    notesBody.classList.add('visually-hidden');
    taskBody.classList.add('visually-hidden');
    chatBody.classList.remove('visually-hidden');
    // clientsSwitchBtns.style.display = 'none';

    chatSwitcher(e.currentTarget);
  });

  btnChatCorrespondence.forEach(item => {
    item.addEventListener('click', () => {
      chatContainerMysense.style.display = 'none';
      chatContainer.style.display = 'block';
      clientsSwitchBtns.style.display = 'flex';
      chatSwitcher(item);

      for (let i = 0; i < dataSwitchButton.length; i++) {
        if (dataSwitchButton[i].classList.contains('btn_active-chat')) {
          dataSwitchButton[i].classList.remove('btn_active-chat');
          break;
        }
      }

      dataSwitchButton[0].classList.add('btn_active-chat');

      notesBody.classList.add('visually-hidden');
      taskBody.classList.add('visually-hidden');
      chatBody.classList.remove('visually-hidden');
    });
  });
})();
