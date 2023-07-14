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

  const clientsSession = document.querySelector('.clients__session');

  const clientsSessionWrap = document.querySelector('.clients__session-wrap');

  const plusBtn = document.querySelector('.plus_btn');
  const btnEdit = document.querySelector('.btn-edit');
  const btnDel = document.querySelector('.btn-del');

  let width = window.innerWidth;

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
    width = window.innerWidth;
    chatContainerMysense.style.display = 'block';
    chatContainer.style.display = 'none';

    notesBody.classList.add('visually-hidden');
    taskBody.classList.add('visually-hidden');
    chatBody.classList.remove('visually-hidden');

    chatSwitcher(e.currentTarget);

    dataSwitchButton[0].parentNode.style.display = 'none';
    clientsSession.style.display = 'none';
    plusBtn.style.display = 'none';
    btnEdit.style.display = 'none';
    btnDel.style.display = 'none';

    clientsSwitchBtns.style.borderBottom = 'none';
    clientsSwitchBtns.style.padding = '0';

    if (width < 744) {
      console.log('qw');
      clientsSessionWrap.style.padding = '14px 10px';
    }
  });

  btnChatCorrespondence.forEach(item => {
    item.addEventListener('click', () => {
      width = window.innerWidth;
      chatContainerMysense.style.display = 'none';
      chatContainer.style.display = 'block';
      chatSwitcher(item);

      for (let i = 0; i < dataSwitchButton.length; i++) {
        if (dataSwitchButton[i].classList.contains('btn_active-chat')) {
          dataSwitchButton[i].classList.remove('btn_active-chat');
          break;
        }
      }

      dataSwitchButton[0].parentNode.style.display = 'flex';
      dataSwitchButton[0].classList.add('btn_active-chat');

      notesBody.classList.add('visually-hidden');
      taskBody.classList.add('visually-hidden');
      chatBody.classList.remove('visually-hidden');

      clientsSession.style.display = 'block';
      plusBtn.style.display = 'flex';
      btnEdit.style.display = 'flex';
      btnDel.style.display = 'flex';

      clientsSwitchBtns.style.borderBottom = '1px solid #222b401a';
      clientsSwitchBtns.style.padding = '12px 0';

      if (width < 744) {
        console.log('qw');
        clientsSessionWrap.style.padding = '0 10px 14px';
      }
    });
  });
})();
