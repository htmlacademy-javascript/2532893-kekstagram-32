
import { closeModal, isEscapeKey } from './utils.js';

const container = document.querySelector('.pictures');

const picture = document.querySelector('.big-picture');
const bigPicture = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const socialCommentShownCount = document.querySelector('.social__comment-shown-count');
const socialCommentTotalCount = document.querySelector('.social__comment-total-count');
const socialCaption = document.querySelector('.social__caption');
const socialCommentsCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
const closeButton = document.querySelector('.big-picture__cancel');
const overlayPicture = document.querySelector('.overlay');

function fillListener(pictures) {
  container.addEventListener('click', (evt) => {
    evt.preventDefault();
    picture.classList.remove('hidden');
    pictures.forEach((thumb) => {
      bigPicture.src = evt.target.src;
      likesCount.textContent = thumb.likes;
      socialCommentShownCount.textContent = 2;
      socialCommentTotalCount.textContent = thumb.comments.length;
      socialCaption.textContent = evt.target.alt;
      socialCommentsCount.classList.add('hidden');
      commentLoader.classList.add('hidden');
      document.body.classList.add('modal-open');
    });
  });
}


const onClickClosing = () => closeButton.addEventListener('click', () => closeModal(picture));

const onESCclosing = () => document.addEventListener('keydown', (evt) => {
  if (isEscapeKey) {
    evt.preventDefault();
    closeModal(picture);
  }
});

const onLeftClickClosing = () => document.addEventListener('click', (evt) => {
  if (evt.target === overlayPicture) {
    closeModal(picture);
  }
});

export { fillListener, onClickClosing, onESCclosing, onLeftClickClosing };
