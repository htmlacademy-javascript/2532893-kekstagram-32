import {getTemplate} from './helpers/get-template.js';
import { isEscapeKey } from './helpers/test-keys.js';
import { onFormKeydown } from './form.js';

const body = document.querySelector('body');
const templateMessageSuccess = getTemplate('#success', '.success');
const templateMessageError = getTemplate('#error', '.error');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const onDocumentClick = (evt) => {
  if (evt.target === body.querySelector('.success') || evt.target === body.querySelector('.error')) {
    evt.preventDefault();
    closeMessage();
  }
};

const createMessage = (template) => {
  const fragment = document.createDocumentFragment();
  fragment.append(template);
  body.append(fragment);
};

const hideMessage = () => {
  const successMessage = body.querySelector('.success');
  const unsuccessMessage = body.querySelector('.error');
  if (successMessage !== null) {
    successMessage.remove();
  } else if (unsuccessMessage !== null) {
    unsuccessMessage.remove();

  }

  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);
};

const showMessage = (state) => {
  createMessage(state === 'success' ? templateMessageSuccess : templateMessageError);
  const buttonClose = body.querySelector(`.${state}__button`);
  document.removeEventListener('keydown', onFormKeydown);
  buttonClose.addEventListener('click', hideMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);
};

function closeMessage () {
  if ((body.querySelector('.success') !== null) || (body.querySelector('.error') !== null)) {
    hideMessage();
  }
}

export { hideMessage, showMessage };
