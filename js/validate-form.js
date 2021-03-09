import { showMsg } from './show-message.js';
import { setInitStartPin } from './map.js';
import { createSubmit } from './create-fetch.js';

const mainForm = document.querySelector('.ad-form');
const typeField = mainForm.querySelector('#type');
const inputFieldPrice = mainForm.querySelector('#price');
const timeIn = mainForm.querySelector('#timein');
const timeOut = mainForm.querySelector('#timeout');

const TypeApartment = {
  bungalow: {
    min: 0,
    max: 999,
    placeholder: 0,
  },
  flat: {
    min: 1000,
    max: 4999,
    placeholder: 1000,
  },
  palace: {
    min: 10000,
    max: 1000000,
    placeholder: 10000,
  },
  house: {
    min: 5000,
    max: 9999,
    placeholder: 5000,
  },
}

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
    () => {},
  );
});

typeField.addEventListener('change', () => {
  inputFieldPrice.min = TypeApartment[typeField.value].min;
  inputFieldPrice.max = TypeApartment[typeField.value].max;
  inputFieldPrice.placeholder = TypeApartment[typeField.value].placeholder;
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});
timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});





