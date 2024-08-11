// Модуль вспомогательных функций

function generateRandomInteger(firstInt, secondInt) {
  const min = Math.ceil(Math.min(firstInt, secondInt));
  const max = Math.floor(Math.max(firstInt, secondInt));
  return Math.ceil(Math.random() * (max - min)) + min - 1;
}

function generateUniqueID() {
  let id = 1;
  return function () {
    return id++;
  };
}
const uniqueID = generateUniqueID();

function getRandomIndex(arr) {
  return generateRandomInteger(0, arr.length - 1);
}

export { generateRandomInteger, uniqueID, getRandomIndex };


