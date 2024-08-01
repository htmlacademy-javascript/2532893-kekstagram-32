/* 2.31. Нужно больше функций */

/* Функция для проверки длины строки */

// eslint-disable-next-line no-unneeded-ternary
const checkLength = (testingString, numberOfSymbols) =>
  // eslint-disable-next-line no-unneeded-ternary
  testingString.length <= numberOfSymbols ? true : false;
// eslint-disable-next-line no-console
// console.log(checkLength('проверяемая строка', 10));
checkLength('проверяемая строка', 10);
/* Функция для проверки, является ли строка палиндромом */

const isPalindrome = (testingString) => {
  // eslint-disable-next-line no-unused-vars
  const revereAndLowerCase = (str) =>
    str.split('').reverse().join('').toLowerCase();
  let checkString = '';

  for (const symbol of testingString) {
    if (symbol !== ' ') {
      checkString += symbol;
    }
  }
  return checkString.revereAndLowerCase === testingString.revereAndLowerCase;
};
// eslint-disable-next-line no-console
// console.log(isPalindrome('Лёша на полке клопа нашёл '));

isPalindrome('Лёша на полке клопа нашёл ');
/* Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. */

const getNaturalNumbersFromString = function (str) {
  const acc = [];
  const arr = str.split('');
  //console.log(arr)

  for (const symb of arr) {
    switch (false) {
      case isNaN(+symb):
        acc.push(+symb);
        break;
      default:
        break;
    }
  }
  const finalArr = acc.filter((item) => item >= 0);
  return +finalArr.join('');
};
// eslint-disable-next-line no-console
// console.log(getNaturalNumbersFromString('00aa56a03-4'));
getNaturalNumbersFromString('00aa56a03-4');

// Module5-task2


// Функция перевода строки времени в минуты
function getMinutes(data){
  const [hours, minutes] = data.split(':');
  return +hours * 60 + +minutes;
}

// Функция из условия задания
const isTimingOK = (timeOfStartOfDay, timeOfEndOfDay, timeOfStartOfMeeting, durationOfMeeting) => (getMinutes(timeOfStartOfDay) <= getMinutes(timeOfStartOfMeeting)) && (getMinutes(timeOfEndOfDay) >= getMinutes(timeOfStartOfMeeting) + +durationOfMeeting);

// console.log(isTimingOK('08:00', '17:30', '14:00', 90)); // true
// console.log(isTimingOK('8:0', '10:0', '8:0', 120)); // true
// console.log(isTimingOK('08:00', '14:30', '14:00', 90)); // false
// console.log(isTimingOK('14:00', '17:30', '08:0', 90)); // false
// console.log(isTimingOK('8:00', '17:30', '08:00', 900)); // false
isTimingOK('08:00', '17:30', '14:00', 90);
