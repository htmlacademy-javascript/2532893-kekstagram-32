import './form.js';
import { EFFECTS } from './filters-for-noUi.js';
// console.log(CHROME);
let effectName = null;
let measureUnit = null;

// Настройка слайдера
const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const previewPicture = document.querySelector('.img-upload__preview img');
const hiddenInput = document.querySelector('.effect-level__value');

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 10
  },
  start: 0.5,
  step: 0.1,
  connect: 'lower'
});
slider.noUiSlider.get(); // не смог присвоить переменной

slider.noUiSlider.on('update', () => {
  hiddenInput.value = slider.noUiSlider.get();
  previewPicture.style.filter = `${effectName}(${slider.noUiSlider.get()}${measureUnit})`;
});

document.querySelector('.effects__list').addEventListener('click', (evt) => {

  switch (evt.target.value) {
    case ('chrome'):
      slider.classList.remove('hidden');
      sliderContainer.classList.remove('hidden');
      slider.noUiSlider.updateOptions(EFFECTS.CHROME);
      effectName = 'grayscale';
      measureUnit = '';
      previewPicture.style.filter = `${effectName}(${slider.noUiSlider.get()}${measureUnit})`;
      break;
    case ('sepia'):
      slider.classList.remove('hidden');
      sliderContainer.classList.remove('hidden');
      slider.noUiSlider.updateOptions(EFFECTS.SEPIA);
      effectName = 'sepia';
      measureUnit = '';
      previewPicture.style.filter = `${effectName}(${slider.noUiSlider.get()}${measureUnit})`;
      break;
    case ('marvin'):
      slider.classList.remove('hidden');
      sliderContainer.classList.remove('hidden');
      slider.noUiSlider.updateOptions(EFFECTS.MARVIN);
      effectName = 'invert';
      measureUnit = '%';
      previewPicture.style.filter = `${effectName}(${slider.noUiSlider.get()}${measureUnit})`;
      break;
    case ('phobos'):
      slider.classList.remove('hidden');
      sliderContainer.classList.remove('hidden');
      slider.noUiSlider.updateOptions(EFFECTS.PHOBOS);
      effectName = 'blur';
      measureUnit = 'px';
      previewPicture.style.filter = `${effectName}(${slider.noUiSlider.get()}${measureUnit})`;
      break;
    case ('heat'):
      slider.classList.remove('hidden');
      sliderContainer.classList.remove('hidden');
      slider.noUiSlider.updateOptions(EFFECTS.HEAT);
      effectName = 'brightness';
      measureUnit = '';
      previewPicture.style.filter = `${effectName}(${slider.noUiSlider.get()}${measureUnit})`;
      break;
    default:
      slider.classList.add('hidden');
      sliderContainer.classList.add('hidden');
      slider.noUiSlider.updateOptions(EFFECTS.NONE);
      previewPicture.style.filter = 'none';
      break;
  }
});


