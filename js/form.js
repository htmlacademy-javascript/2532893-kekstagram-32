import {isEscapeKey} from './helpers/test-keys.js';
import { areHashtagSymbolsValid, areHashtagsQuantityValid, areHashtagsUnique, areCommentValid } from './validate-tags.js';
import {showModal, hideModal} from './modal.js';
import {addOnButtonCloseClick, addEventListenerKeydown} from './helpers/event-listeners.js';
import {sendData} from './api.js';
import {showAlert} from './helpers/show-alert.js';
import {showMessage} from './modal-message.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const HASHTAGS_ERROR_SYMBOLS_TEXT = 'Введён невалидный хэштег';
const HASHTAGS_ERROR_QUANTITY_TEXT = 'Превышено количество хэштегов';
const HASHTAGS_ERROR_UNIQUE_TEXT = 'Хэштеги повторяются';
const COMMENT_ERROR_TEXT = 'Длина комментария больше 140 символов';

const buttonSubmitText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const sectionImgUpload = document.querySelector('.img-upload');
const formUpload = sectionImgUpload.querySelector('.img-upload__form');
const blockUploadOverlay = formUpload.querySelector('.img-upload__overlay');
const fieldUploadFile = formUpload.querySelector('#upload-file');
const hashTagsField = formUpload.querySelector('.text__hashtags');
const commentField = formUpload.querySelector('.text__description');
const buttonClose = formUpload.querySelector('#upload-cancel');
const buttonSubmit = formUpload.querySelector('#upload-submit');
const fieldsText = [hashTagsField, commentField];

const blockEffects = sectionImgUpload.querySelector('.effects');
const sliderContainer = sectionImgUpload.querySelector('.img-upload__effect-level');
const slider = sectionImgUpload.querySelector('.effect-level__slider');
const fieldEffectLevel = sectionImgUpload.querySelector('.effect-level__value');
const imagePreview = sectionImgUpload.querySelector('.img-upload__preview img');


const buttonSmaller = sectionImgUpload.querySelector('.scale__control--smaller');
const buttonBigger = sectionImgUpload.querySelector('.scale__control--bigger');
const fieldScale = sectionImgUpload.querySelector('.scale__control--value');
const scale = sectionImgUpload.querySelector('.scale');


const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
},
true);

const showChosenFile = () => {
  const file = fieldUploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imagePreview.src = URL.createObjectURL(file);
  }
};

const onInputFileChange = () => {
  showModalForm();
  showChosenFile();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModalForm();
  }
};

function showModalForm() {
  showModal(blockUploadOverlay);
  document.addEventListener('keydown', onDocumentKeydown);
  addOnButtonCloseClick(buttonClose, hideModalForm);
  addEventListenerKeydown(fieldsText);
  pristine.reset();
}

function hideModalForm() {
  hideModal(blockUploadOverlay);
  document.removeEventListener('keydown', onDocumentKeydown);
  addOnButtonCloseClick(buttonClose, hideModalForm, false);
  addEventListenerKeydown(fieldsText, false);
  formUpload.reset();
  pristine.reset();
}

pristine.addValidator(
  hashTagsField,
  areHashtagsQuantityValid,
  HASHTAGS_ERROR_QUANTITY_TEXT);

pristine.addValidator(
  hashTagsField,
  areHashtagSymbolsValid,
  HASHTAGS_ERROR_SYMBOLS_TEXT);

pristine.addValidator(
  hashTagsField,
  areHashtagsUnique,
  HASHTAGS_ERROR_UNIQUE_TEXT);

pristine.addValidator(
  commentField,
  areCommentValid,
  COMMENT_ERROR_TEXT
);


const blockSubmitButton = () => {
  buttonSubmit.disabled = true;
  buttonSubmit.textContent = buttonSubmitText.SENDING;
};

const unblockSubmitButton = () => {
  buttonSubmit.disabled = false;
  buttonSubmit.textContent = buttonSubmitText.IDLE;
};

const setOnFormSubmit = (onSuccess) => {
  formUpload.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(formUpload))
        .then(() => {
          onSuccess();
          showMessage('success');
        })
        .catch(
          (err) => {
            showAlert(err.message);
            showMessage('error');
          }
        )
        .finally(unblockSubmitButton);
    }
  });
};

fieldUploadFile.addEventListener('change', onInputFileChange);

export { blockEffects, sliderContainer, slider, fieldEffectLevel, imagePreview, buttonSmaller, buttonBigger, fieldScale, scale, showModalForm, hideModalForm, setOnFormSubmit };
