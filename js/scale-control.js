
import './form-validate.js';

const MIN_SIZE_VALUE = 25;
const MAX_SIZE_VALUE = 100;
const COUNT_SIZE_VALUE = 25;

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const previewPicture = document.querySelector('.img-upload__preview img');


const scaleDownImage = () => {
  const scaleInputValue = parseInt(scaleControlValue.value, 10);
  if (scaleInputValue > MIN_SIZE_VALUE) {
    previewPicture.style.transform = `scale(${(scaleInputValue - COUNT_SIZE_VALUE) / 100})`;
    scaleControlValue.value = `${scaleInputValue - COUNT_SIZE_VALUE}%`;
  }

};

const scaleUpImage = () => {
  const scaleInputValue = parseInt(scaleControlValue.value, 10);
  if (scaleInputValue < MAX_SIZE_VALUE) {
    previewPicture.style.transform = `scale(${(scaleInputValue + COUNT_SIZE_VALUE) / 100})`;
    scaleControlValue.value = `${scaleInputValue + COUNT_SIZE_VALUE}%`;
  }

};
scaleSmallerButton.addEventListener('click', scaleDownImage);
scaleBiggerButton.addEventListener('click', scaleUpImage);
