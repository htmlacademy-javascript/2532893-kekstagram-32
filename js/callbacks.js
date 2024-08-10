
const imgUploadInput = document.querySelector('.img-upload__input');
const uploadForm = document.querySelector('.img-upload__form');
const hashTagsField = uploadForm.querySelector('.text__hashtags');
const commentField = uploadForm.querySelector('.text__description');
const successMessage = document.querySelector('#success').content;
const successMessageModal = successMessage.querySelector('.success');
const unsuccessMessage = document.querySelector('#error').content;
const unsuccessMessageModal = unsuccessMessage.querySelector('.error');


const renderSuccessModal = () => {
  document.body.append(successMessage);
  successMessageModal.classList.add('hidden');
};

const renderUnsuccessModal = () => {
  document.body.append(unsuccessMessage);
  unsuccessMessageModal.classList.add('hidden');

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

  unsuccessMessageModal.addEventListener('click', closeUnsuccessMessage);

  unsuccessMessageModal.addEventListener('keydown', (evt) => {// доделать закрытие модального окна без закрытия формы
    if (evt.key === 'Escape') {
      closeUnsuccessMessage();
    }
  });
  unsuccessMessageModal.addEventListener('click', (evt) => {
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

function closeUnsuccessMessage() {
  unsuccessMessageModal.classList.add('hidden');
}

function showUnsuccessMessage() {
  unsuccessMessageModal.classList.remove('hidden');
}

export { closeForm, renderSuccessModal, showSuccessMessage, hideSuccessMessage, renderUnsuccessModal, showUnsuccessMessage, hideUnsuccessMessage };
