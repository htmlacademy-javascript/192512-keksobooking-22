const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const SIMILAR_OFFER_COUNT = 10;

//генерация рандомного числа
function getRandomNumber(min, max) {
  let rand = Math.random() * (max - min) + min;
  return rand;
}


//проверка на отрицательное число
function checkNegativeNumber(min, max) {
  if (min < 0 || max < 0) {
    throw 'Число должно быть не меньше нуля!';
  }
}


//получение случайного числа из представленого диапазона чисел
function getIntegerNumber(min, max) {
  checkNegativeNumber(min, max);
  return Math.floor(getRandomNumber(min, max));
}

getIntegerNumber(0, 20);


//получение случайного числа с плавающей точкой из представленого диапазона чисел
function getFloatNumber(min, max, decimalNum) {
  //возводим в степень
  let degree = Math.pow(10, decimalNum);
  checkNegativeNumber(min, max);
  return Math.floor(getRandomNumber(min, max) * degree) / degree;
}

getFloatNumber(0, 20, 2);


function shuffleData(data) {

  let elems = data.slice();

  for (let i = elems.length - 1; i > 0; i--) {
    let j = getIntegerNumber(0, elems.length - 1);
    let temp = elems[i];
    elems[i] = elems[j];
    elems[j] = temp;
  }
  return elems;

}



const createOffer = () => {
  const randomCheckin = getIntegerNumber(0, CHECKINS.length - 1);
  const randomType = getIntegerNumber(0, TYPES.length - 1);
  const randomCheckout = getIntegerNumber(0, CHECKOUTS.length - 1);
  const randomFeature = shuffleData(FEATURES).slice(0, getIntegerNumber(1, FEATURES.length - 1));
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

const similarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());
similarOffers;






