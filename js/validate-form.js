import { showMsg } from './show-message.js';
import { setInitStartPin } from './map.js';
import { createSubmit } from './create-fetch.js';

const mainForm = document.querySelector('.ad-form');

mainForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  createSubmit(
    formData,
    () => {
      mainForm.reset();
      showMsg();
      setInitStartPin();
    },
    () => {}
  );

});



