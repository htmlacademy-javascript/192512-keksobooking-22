/* Task 1 */
function getIntegerNumber(min, max) {

  if (min < 0 || max < 0) {
    throw 'Число должно быть не меньше нуля!';
  }

  if (max <= min) {
    max = min;
  }

  return Math.floor(Math.random() * (max - min) + min);
}

try {
  console.log(getIntegerNumber(0, 150));
} catch (e) {
  console.error(e);
}


/* Task keksobooking */
function getIntegerFloatNumber(min, max, decimalNum) {

  //получаем рандомное число
  let rand = Math.random() * (max - min) + min;

  //возводим в степень
  let degree = Math.pow(10, decimalNum);

  if (min < 0 || max < 0) {
    throw 'Число должно быть не меньше нуля!';
  }

  if (max <= min) {
    max = min;
  }

  return Math.floor(rand * degree) / degree;
}

try {
  console.log(getIntegerFloatNumber(0, 15, 2));
} catch (e) {
  console.error(e);
}



