import { createPopup } from './markup.js';

const form = document.querySelector('.ad-form');
const formFilter = document.querySelector('.map__filters');

const formChildren = form.children;
const formElements = Array.from(formChildren);
const formFilterChildren = formFilter.children;
const formFilterElements = Array.from(formFilterChildren);


/*функция создает массив меток*/
const createMarks = function (offers) {
  offers.forEach(offer => {

    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({
      lat: offer.location.x,
      lng: offer.location.y,
      icon: icon
    });

    marker
      .addTo(map)
      .bindPopup(
        createPopup(offer)
      );
  });

};



/*функция добавляет класс .ad-form--disabled и атрибут disabled */
const addElementDisabled = function(classEl, elems) {
  classEl.classList.add('ad-form--disabled');
  elems.forEach(el => {
    el.setAttribute('disabled', 'true');
  });
};

addElementDisabled(form, formElements);
addElementDisabled(formFilter, formFilterElements);


const removeElementDisabled = function (classEl, elems) {
  classEl.classList.remove('ad-form--disabled');
  elems.forEach(el => {
    el.removeAttribute('disabled');
  });
};

const map = L.map('map-canvas')
  .on('load', () => {
    removeElementDisabled(form, formElements);
    removeElementDisabled(formFilter, formFilterElements);
  })
  .setView({
    lat: 35.6895000,
    lng: 139.6917100,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895000,
    lng: 139.6917100,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
mainPinMarker.on('moveend', (evt) => {
  const address = document.querySelector('#address');
  address.value = evt.target.getLatLng();
});


export { createMarks };
