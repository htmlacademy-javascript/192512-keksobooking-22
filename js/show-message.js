const showMsg = () => {
  const templateCard = document.querySelector('#success').content;
  const newCard = templateCard.querySelector('.success');
  const cardElement = newCard.cloneNode(true);

  const container = document.querySelector('main');
  container.appendChild(cardElement);

  cardElement.addEventListener('click', () => {
    cardElement.remove();
  });

  const onSuccessSend = (evt) => {
    if (evt.code === 'Escape') {
      cardElement.remove();
      document.removeEventListener('keydown', onSuccessSend);
    }
  };

  document.addEventListener('keydown', onSuccessSend);

};

const showError = () => {
  const templateCard = document.querySelector('#error').content;
  const newCard = templateCard.querySelector('.error');
  const cardElement = newCard.cloneNode(true);

  const container = document.querySelector('main');
  container.appendChild(cardElement);

  cardElement.addEventListener('click', () => {
    cardElement.remove();
  });

  const onErrorSend = (evt) => {
    if (evt.code === 'Escape') {
      cardElement.remove();
      document.removeEventListener('keydown', onErrorSend);
    }
  };

  document.addEventListener('keydown', onErrorSend);
  console.log('error');
};

export { showMsg, showError };
