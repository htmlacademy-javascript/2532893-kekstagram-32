import './form.js';

// Настройка слайдера
const slider = document.querySelector('.effect-level__slider');
const hiddenInput = document.querySelector('.effect-level__value');

hiddenInput.value = 50;

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100
  },
  start: 50,
  connect: 'lower'
});

slider.noUiSlider.on('update', () => {
  hiddenInput.value = slider.noUiSlider.get();
});

document.querySelector('.effects__list').addEventListener('click', (evt) => {
  console.log(evt.target);
  console.log(document.querySelector('.img-upload__preview img'));
  document.querySelector('.img-upload__preview img').style.filter = 'blur(2px)';
});
