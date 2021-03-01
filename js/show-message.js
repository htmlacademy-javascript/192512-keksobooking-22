

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

export { showMsg };
