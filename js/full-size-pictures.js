import { photos } from './setup.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img').querySelector('img');
const likesCount = document.querySelector('.likes-count');
const socialComments = document.querySelector('.social__comments');
const socialCommentTemplate = document.querySelector('.social__comment');
const socialCaption = document.querySelector('.social__caption');
const socialCommentsShownCount = document.querySelector('.social__comment-shown-count');
const socialCommentsTotalCount = document.querySelector('.social__comment-total-count');
const socialCommentsCount = document.querySelector('.social__comment-count');
const socialCommentsLoader = document.querySelector('.comments-loader');
const bigPictureCancelButton = document.querySelector('.big-picture__cancel');


function onClickCloseModal(evt) {
  evt.preventDefault();
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

function onEscapeCloseModal(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    closeBigPicture();
  }

};

function closeBigPicture(){
  bigPicture.classList.add('hidden');
  bigPictureCancelButton.removeEventListener('click', onBigPictureCancelClick);
}

const openBigPicture = (pictureId) => {
  const currentPicture = photos.find((photo) => photo.id === Number(pictureId));
  const socialCommentsFragment = document.createDocumentFragment();

  bigPictureImg.src = currentPicture.url;
  likesCount.textContent = currentPicture.likes;
  socialCommentsTotalCount.textContent = currentPicture.comments.length;
  socialCommentsShownCount.textContent = currentPicture.comments.length;
  socialComments.innerHTML = '';

  currentPicture.comments.forEach((comment) => {
    const socialComment = socialCommentTemplate.cloneNode(true);

    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alt = comment.name;
    socialComment.querySelector('.social__text').textContent = comment.message;
    socialCommentsFragment.appendChild(socialComment);
  });
  socialComments.appendChild(socialCommentsFragment);
  socialCaption.textContent = currentPicture.description;
  socialCommentsCount.classList.add('hidden');
  socialCommentsLoader.classList.add('hidden');

  bigPicture.classList.remove('hidden');
  bigPictureCancelButton.addEventListener('click', onBigPictureCancelClick);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyClick);
};


export { openBigPicture };
