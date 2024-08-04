// Постоянные константы из ТЗ
const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;
const HASHTAGS_ERROR_SYMBOLS_TEXT = 'Введён невалидный хэштег';
const HASHTAGS_ERROR_QUANTITY_TEXT = 'Превышено количество хэштегов';
const HASHTAGS_ERROR_UNIQUE_TEXT = 'Хэштеги повторяются';
const MAX_COMMENT_SYMBOLS = 140;
const COMMENT_ERROR_TEXT = 'Длина комментария больше 140 символов';

// Поиск элементов
const imgUploadInput = document.querySelector('.img-upload__input');
const uploadForm = document.querySelector('.img-upload__form');
const hashTagsField = uploadForm.querySelector('.text__hashtags');
const commentField = uploadForm.querySelector('.text__description');
const isFieldInFocus = () => document.activeElement === hashTagsField || document.activeElement === commentField;
// const hashtags = hashTagsField.value.split(' '); - - не работает


// Открытие и закрытие формы редактирования изображения
imgUploadInput.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
});

document.querySelector('.img-upload__cancel').addEventListener('click', () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgUploadInput.value = '';
});

document.addEventListener('keydown', (evt) => {

  if (evt.key === 'Escape' && !isFieldInFocus()) {
    evt.preventDefault();
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.body.classList.remove('modal-open');
    imgUploadInput.value = '';
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


uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate(); // непонятно что с отправкой формы
});


