import { createPopup } from './popup-сard.js';

const form = document.querySelector('.ad-form');
const formFilter = document.querySelector('.map__filters');
const formChildren = form.children;
const formElements = Array.from(formChildren);
const formFilterChildren = formFilter.children;
const formFilterElements = Array.from(formFilterChildren);
const LAT = 35.6895000;
const LNG = 139.6917100;
const map = L.map('map-canvas');
const smallIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

let markersGroup = L.layerGroup().addTo(map);

/*функция создает массив меток*/
const createMarks = function (offers) {
  offers.forEach(offer => {
  /*global L:readonly*/
    const marker = L.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      {
        icon: smallIcon,
      });
    marker
      .addTo(markersGroup)
      .bindPopup(
        createPopup(offer),
      );
  });
};

const removeMarker = () => {
  map.removeLayer(markersGroup);
  markersGroup = L.layerGroup().addTo(map);
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

map.on('load', () => {
  removeElementDisabled(form, formElements);
  removeElementDisabled(formFilter, formFilterElements);
})
  .setView({
    lat: LAT,
    lng: LNG,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const addAddress = (lat, lng) => {
  const address = document.querySelector('#address');
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

const onLoadMainPin = (evt) => {
  const latLng = evt.target.getLatLng();
  addAddress(latLng.lat, latLng.lng);
};

const mainPinMarker = L.marker(
  {
    lat: LAT,
    lng: LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
addAddress(LAT, LNG);
mainPinMarker.on('moveend', onLoadMainPin);

const setInitStartPin = () => {
  map.setView({
    lat: LAT,
    lng: LNG,
  }, 10);
  mainPinMarker.setLatLng({
    lat: LAT,
    lng: LNG,
  });
  addAddress(LAT, LNG);
};

export { createMarks, setInitStartPin, removeMarker };
