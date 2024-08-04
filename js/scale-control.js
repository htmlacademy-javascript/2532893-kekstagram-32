import './form.js';

// Постоянные значения по ТЗ
const MIN_SIZE_VALUE = 25;
const MAX_SIZE_VALUE = 100;
const COUNT_SIZE_VALUE = 25;

// Поиск элементов
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger')
const scaleControlValue = document.querySelector('.scale__control--value');
const previewPicture = document.querySelector('.img-upload__preview img');

const scaleInputValue = parseInt(scaleControlValue.value, 10);
let currentScaleValue = scaleControlValue;

scaleSmallerButton.addEventListener('click', (evt) => {
  if (scaleInputValue >= MIN_SIZE_VALUE && scaleInputValue <= MAX_SIZE_VALUE) {
    evt.preventDefault();

    previewPicture.style.transform = `scale(calc(${(scaleInputValue - COUNT_SIZE_VALUE) / 100}`;
    scaleControlValue.value = `${scaleInputValue - COUNT_SIZE_VALUE}%`;
  }

});

scaleBiggerButton.addEventListener('click', (evt) => {
  if (scaleInputValue >= MIN_SIZE_VALUE && scaleInputValue <= MAX_SIZE_VALUE) {
    evt.preventDefault();

    previewPicture.style.transform = `scale(calc(${(scaleInputValue + COUNT_SIZE_VALUE) / 100}`;
    scaleControlValue.value = `${scaleInputValue + COUNT_SIZE_VALUE}%`;
  }

});
