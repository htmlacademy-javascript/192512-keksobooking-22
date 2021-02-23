import { getIntegerNumber, getFloatNumber, shuffleData } from './util.js';

const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


/*функция которая создает данные для объявлений*/
const createOffer = () => {
  const randomCheckin = getIntegerNumber(0, CHECKINS.length - 1);
  const randomType = getIntegerNumber(0, TYPES.length - 1);
  const randomCheckout = getIntegerNumber(0, CHECKOUTS.length - 1);
  const randomFeature = shuffleData(FEATURES).slice(0, getIntegerNumber(1, FEATURES.length));
  const randomPhoto = shuffleData(PHOTOS).slice(0, getIntegerNumber(1, PHOTOS.length));
  const x = getFloatNumber(35.65000, 35.70000, 5);
  const y = getFloatNumber(139.70000, 139.80000, 5);
  const addressValue = x + ', ' + y;

  const avatarSrc = 'img/avatars/user0' + getIntegerNumber(1, 8) + '.png';

  return {
    author: {
      avatar: avatarSrc,
    },
    offer: {
      title: 'Hotel Royal 5 stars',
      address: addressValue,
      price: 8,
      type: TYPES[randomType],
      rooms: 6,
      guests: 10,
      checkin: CHECKINS[randomCheckin],
      checkout: CHECKOUTS[randomCheckout],
      features: randomFeature,
      description: 'The beautiful place',
      photos: randomPhoto,
    },
    location: {
      x: x,
      y: y,
    },
  };
};

/*функция которая создает массив объявлений из предоставленных данных функции createOffer*/
const createSimilarOffers = (item) => {
  const similarOffers = new Array(item).fill(null).map(() => createOffer());
  return similarOffers;
};



export { createSimilarOffers };














