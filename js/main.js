/* Task 1 */

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


/* Task keksobooking */

//получение случайного числа с плавающей точкой из представленого диапазона чисел
function getFloatNumber(min, max, decimalNum) {
  //возводим в степень
  let degree = Math.pow(10, decimalNum);
  checkNegativeNumber(min, max);
  return Math.floor(getRandomNumber(min, max) * degree) / degree;
}

getFloatNumber(0, 20, 2);




