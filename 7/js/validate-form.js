import { showMsg } from './show-message.js';
import { setInitStartPin } from './map.js';

const mainForm = document.querySelector('.ad-form');

mainForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  fetch('https://22.javascript.pages.academy/keksobooking', {
    method: 'POST',
    credentials: 'same-origin',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      mainForm.reset();
      showMsg();
      setInitStartPin();
    }
  });
});



