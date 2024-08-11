// Реализовал самостоятельно, лайв не смотрел, возможны ошибки. Хочу доработать основной обработчик, чтобы избавиться от switch-case. Хочу попробовать Array.find() по "evt.target.value".

import './form.js';
import { EFFECTS } from './filters-for-noUi.js';

// Глобальные переменные, нужны для присвоения стилей в зависимости от выбранного фильтра
let effectName = null;
let measureUnit = null;

// Поиск элементов
const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const previewPicture = document.querySelector('.img-upload__preview img');
const hiddenInput = document.querySelector('.effect-level__value');

// Утилити функция с повторяющимся для каждого эффекта кодом
function applyEffect() {
  slider.classList.remove('hidden');
  sliderContainer.classList.remove('hidden');
  previewPicture.style.filter = `${effectName}(${slider.noUiSlider.get()}${measureUnit})`;
}

// Создание слайдера по умолчанию
noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 10
  },
  start: 0.5,
  step: 0.1,
  connect: 'lower'
});

// Получение текущего значения из слайдера
slider.noUiSlider.get(); // не смог присвоить переменной

// Обработка событий - изменение положения слайдера
slider.noUiSlider.on('update', () => {
  hiddenInput.value = slider.noUiSlider.get();
  previewPicture.style.filter = `${effectName}(${slider.noUiSlider.get()}${measureUnit})`;
});

// Основной обработчик - выбор фильтра
document.querySelector('.effects__list').addEventListener('click', (evt) => {

  switch (evt.target.value) {
    case ('chrome'):
      slider.noUiSlider.updateOptions(EFFECTS.CHROME);
      effectName = 'grayscale';
      measureUnit = '';
      applyEffect();
      break;
    case ('sepia'):
      slider.noUiSlider.updateOptions(EFFECTS.SEPIA);
      effectName = 'sepia';
      measureUnit = '';
      applyEffect();
      break;
    case ('marvin'):

      slider.noUiSlider.updateOptions(EFFECTS.MARVIN);
      effectName = 'invert';
      measureUnit = '%';
      applyEffect();
      break;
    case ('phobos'):

      slider.noUiSlider.updateOptions(EFFECTS.PHOBOS);
      effectName = 'blur';
      measureUnit = 'px';
      applyEffect();
      break;
    case ('heat'):

      slider.noUiSlider.updateOptions(EFFECTS.HEAT);
      effectName = 'brightness';
      measureUnit = '';
      applyEffect();
      break;
    default:
      slider.classList.add('hidden');
      sliderContainer.classList.add('hidden');
      slider.noUiSlider.updateOptions(EFFECTS.NONE);
      previewPicture.style.filter = 'none';
      break;
  }
});


