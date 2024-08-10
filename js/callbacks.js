
const imgUploadInput = document.querySelector('.img-upload__input');
const uploadForm = document.querySelector('.img-upload__form');
const hashTagsField = uploadForm.querySelector('.text__hashtags');
const commentField = uploadForm.querySelector('.text__description');
const successMessage = document.querySelector('#success').content;
const successMessageModal = successMessage.querySelector('.success');
const unsuccessMessage = document.querySelector('#error').content;
const closeUnsuccessMessage = () => document.querySelector('.error').classList.add('hidden');

const renderSuccessModal = () => {
  document.body.append(successMessage);
  successMessageModal.classList.add('hidden');
};


const closeForm = () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgUploadInput.value = '';
  document.querySelector('.img-upload__preview img').style.filter = '';
  hashTagsField.value = '';
  commentField.value = '';
};


function hideUnsuccessMessage() {

  document.querySelector('.error__button').addEventListener('click', closeUnsuccessMessage);

  document.body.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeUnsuccessMessage();
    }
  });
  document.addEventListener('click', (evt) => {
    if (!evt.target.closest('.error__inner')) {
      closeUnsuccessMessage();
    }
  });

}

function showSuccessMessage() {
  successMessageModal.classList.remove('hidden');
}

function hideSuccessMessage() {

  document.querySelector('.success__button').addEventListener('click', closeSuccessMessage);

  document.body.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeSuccessMessage();
    }
  });

  document.addEventListener('click', (evt) => {
    if (!evt.target.closest('.success__inner')) {
      closeSuccessMessage();
    }
  });
}


function closeSuccessMessage() {
  successMessageModal.classList.add('hidden');
}


export { closeForm, renderSuccessModal, showSuccessMessage, hideSuccessMessage };
