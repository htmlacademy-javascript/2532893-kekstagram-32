import { isValid } from './form-validate.js';
import { closeForm, renderSuccessModal, hideSuccessMessage, showSuccessMessage } from './callbacks.js';

const REMOTE_SUBMIT_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';


const submitButton = document.querySelector('#upload-submit');
const uploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = document.querySelector('.img-upload__input');
const hashTagsField = uploadForm.querySelector('.text__hashtags');
const commentField = uploadForm.querySelector('.text__description');
const isFieldInFocus = () => document.activeElement === hashTagsField || document.activeElement === commentField;

// const unsuccessMessageModal = document.body.append(unsuccessMessage.cloneNode(true)).classList.add('hidden');
// const successMessageModal = document.body.append(successMessage.cloneNode(true)).classList.add();


//
renderSuccessModal();

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

//
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

function submitForm(successCallback) {

  uploadForm.addEventListener('submit', (evt) => {

    evt.preventDefault();
    if (isValid) {
      const formData = new FormData(evt.target); // в примере здесь evt.target, не получилось
      fetch(REMOTE_SUBMIT_URL, {
        method: 'POST',
        body: formData
      })
        .then(successCallback)
        .then(showSuccessMessage())
        .then(hideSuccessMessage());
    }
  });
}





export { submitForm };
