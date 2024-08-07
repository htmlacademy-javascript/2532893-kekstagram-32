// Если ошибка, то не остаётся самой формы и если ошибка второй раз подряд без перезагрузки страницы, то форма не отправляется
// Непонятно как сделать проверку п.2.3 - хэштеги необязательны;

// Постоянные константы из ТЗ
const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;
const HASHTAGS_ERROR_SYMBOLS_TEXT = 'Введён невалидный хэштег';
const HASHTAGS_ERROR_QUANTITY_TEXT = 'Превышено количество хэштегов';
const HASHTAGS_ERROR_UNIQUE_TEXT = 'Хэштеги повторяются';
const MAX_COMMENT_SYMBOLS = 140;
const COMMENT_ERROR_TEXT = 'Длина комментария больше 140 символов';
const REMOTE_SUBMIT_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

// Поиск элементов
const imgUploadInput = document.querySelector('.img-upload__input');
const uploadForm = document.querySelector('.img-upload__form');
const hashTagsField = uploadForm.querySelector('.text__hashtags');
const commentField = uploadForm.querySelector('.text__description');
const isFieldInFocus = () => document.activeElement === hashTagsField || document.activeElement === commentField;
const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
// const hashtags = hashTagsField.value.split(' '); - - не работает


// Открытие и закрытие формы редактирования изображения
const openForm = () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.querySelector('#effect-none').checked = true;
  slider.classList.add('hidden');
  sliderContainer.classList.add('hidden');
};
imgUploadInput.addEventListener('change', openForm);

const closeForm = () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgUploadInput.value = '';
  document.querySelector('.img-upload__preview img').style.filter = '';
  hashTagsField.value = '';
  commentField.value = '';
};

document.querySelector('.img-upload__cancel').addEventListener('click', closeForm);

document.addEventListener('keydown', (evt) => {

  if (evt.key === 'Escape' && !isFieldInFocus()) {
    evt.preventDefault();
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.body.classList.remove('modal-open');
    imgUploadInput.value = '';
    document.querySelector('.img-upload__preview img').style.filter = '';
  }

});
// Валидация Pristine

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
},
true);

// Валидация хэштегов

const areHashtagSymbolsValid = () => {
  let validItem = null;
  for (const item of hashTagsField.value.split(' ')) {
    validItem = HASHTAG_SYMBOLS.test(item);
  }
  return validItem;
};

const areHashtagsQuantityValid = () => hashTagsField.value.split(' ').length <= MAX_HASHTAG_COUNT;

const createSetOfHashtags = () => {
  const setOfHashtags = new Set();
  const uniqueHashtags = hashTagsField.value.split(' ').map((hashtag) => hashtag.trim().toLowerCase());
  for (let i = 0; i < uniqueHashtags.length; i++) {
    setOfHashtags.add(uniqueHashtags[i]);


  }
  return setOfHashtags;
};
const areHashtagsUnique = () => createSetOfHashtags().size === hashTagsField.value.split(' ').length;

pristine.addValidator(
  hashTagsField,
  areHashtagSymbolsValid,
  HASHTAGS_ERROR_SYMBOLS_TEXT);

pristine.addValidator(
  hashTagsField,
  areHashtagsQuantityValid,
  HASHTAGS_ERROR_QUANTITY_TEXT);

pristine.addValidator(
  hashTagsField,
  areHashtagsUnique,
  HASHTAGS_ERROR_UNIQUE_TEXT);

// Валидация комментариев
const areCommentValid = () => commentField.value.length <= MAX_COMMENT_SYMBOLS;

pristine.addValidator(
  commentField,
  areCommentValid,
  COMMENT_ERROR_TEXT
);

// Отправка формы

const successMessage = document.querySelector('#success').content;
const closeSuccessMessage = () => document.querySelector('.success').classList.add('hidden');

const onButtonCloseSuccessMessage = () => {
  document.querySelector('.success__button').addEventListener('click', closeSuccessMessage);
};
const onEscCloseSuccessMessage = () => {
  document.body.addEventListener('keydown', (evt) => {
    if (evt.key === 27) {
      closeSuccessMessage();
    }
  });
};
const onLeftClickCloseSuccessMessage = () => {
  document.addEventListener('click', (evt) => {
    if (!evt.target.closest('.success__inner')) {
      closeSuccessMessage();
    }
  });
};

const hideSuccessMessage = () => {
  onButtonCloseSuccessMessage();
  onEscCloseSuccessMessage();
  onLeftClickCloseSuccessMessage();
};

const unsuccessMessage = document.querySelector('#error').content;
const closeUnsuccessMessage = () => document.querySelector('.error').classList.add('hidden');

const onButtonCloseUnsuccessMessage = () => {
  document.querySelector('.error__button').addEventListener('click', closeUnsuccessMessage);
};
const onEscCloseUnsuccessMessage = () => {
  document.body.addEventListener('keydown', (evt) => {
    if (evt.key === 27) {
      closeUnsuccessMessage();
    }
  });
};
const onLeftClickCloseUnsuccessMessage = () => {
  document.addEventListener('click', (evt) => {
    if (!evt.target.closest('.error__inner')) {
      closeUnsuccessMessage();
    }
  });
};

const hideUnsuccessMessage = () => {
  onButtonCloseUnsuccessMessage();
  onLeftClickCloseUnsuccessMessage();
  onEscCloseUnsuccessMessage();
};

function submitForm(successCallback) {
  uploadForm.addEventListener('submit', (evt) => {

    evt.preventDefault();
    if (pristine.validate()) {
      const formData = new FormData(uploadForm);
      fetch(REMOTE_SUBMIT_URL, {
        method: 'POST',
        body: formData

      }).then(() => successCallback())
        .then(document.body.append(successMessage.cloneNode(true)))
        .then(hideSuccessMessage())
        .catch(document.body.append(unsuccessMessage.cloneNode(true)))
      .then(hideUnsuccessMessage());
    }
    // hideSuccessMessage();
    // hideUnsuccessMessage();
  });

}

export { submitForm, closeForm };
