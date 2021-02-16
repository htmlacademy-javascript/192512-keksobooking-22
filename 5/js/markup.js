import { createSimilarOffers } from './data.js';

const templateCard = document.querySelector('#card').content;
const newCard = templateCard.querySelector('.popup');

const mapCanvas = document.querySelector('.map__canvas');


const similarCards = createSimilarOffers();
const cardFragment = document.createDocumentFragment();

similarCards.forEach(offer => {
  const cardElement = newCard.cloneNode(true);

  const titlePopup = cardElement.querySelector('.popup__title');
  const addressPopup = cardElement.querySelector('.popup__text--address');
  const pricePopup = cardElement.querySelector('.popup__text--price');
  const typePopup = cardElement.querySelector('.popup__type');
  const capacityPopup = cardElement.querySelector('.popup__text--capacity');
  const timePopup = cardElement.querySelector('.popup__text--time');
  const featuresPopup = cardElement.querySelector('.popup__features');
  const descPopup = cardElement.querySelector('.popup__description');
  const photosPopup = cardElement.querySelector('.popup__photos');
  const avatarPopup = cardElement.querySelector('.popup__avatar');

  titlePopup.textContent = offer.offer.title;
  addressPopup.textContent = offer.offer.address;
  pricePopup.textContent = `${offer.offer.price} ₽/ночь`;
  typePopup.textContent = offer.offer.type;
  capacityPopup.textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей`;
  timePopup.textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;
  featuresPopup.innerHTML = `
      <li class="popup__feature popup__feature--wifi">${ offer.offer.features }</li>
      <li class="popup__feature popup__feature--dishwasher">${ offer.offer.features }</li>
      <li class="popup__feature popup__feature--parking">${ offer.offer.features }</li>
      <li class="popup__feature popup__feature--washer">${ offer.offer.features }</li>
      <li class="popup__feature popup__feature--elevator">${ offer.offer.features }</li>
      <li class="popup__feature popup__feature--conditioner">${ offer.offer.features }</li>
  `;
  descPopup.textContent = offer.offer.description;
  photosPopup.innerHTML = `
  <img src="${offer.offer.photos[0]}" class="popup__photo" width="45" height="40" alt="Фотография жилья">
  <img src="${offer.offer.photos[1]}" class="popup__photo" width="45" height="40" alt="Фотография жилья">
  <img src="${offer.offer.photos[2]}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
  avatarPopup.src = offer.author.avatar;
  cardFragment.appendChild(cardElement);
});

mapCanvas.appendChild(cardFragment);

