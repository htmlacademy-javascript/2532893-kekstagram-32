import { photos } from './setup.js';
import { container } from './thumbs.js';
import { isHidden } from './utils.js';
// import { comments } from './data.js';

// const picture = document.querySelector('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img').querySelector('img');
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');
const socialCommentsShownCount = document.querySelector('.social__comment-shown-count');
const socialCommentsTotalCount = document.querySelector('.social__comment-total-count');
const socialCommentsCount = document.querySelector('.social__comment-count');
const socialCommentsLoader = document.querySelector('.comments-loader');
const bigPictureCancelButton = document.querySelector('.big-picture__cancel');
// const quantityOfShownComments = countShowComments();
const socialPicture = document.querySelector('.social__picture');
const socialText = document.querySelector('.social__text');
const socialComments = document.querySelector('.social__comments');
const socialCommentTemplate = document.querySelector('.social__comment');
const overlayPicture = document.querySelector('.overlay');

const fullSizePictures = () => {
  container.addEventListener('click', (evt) => {
    bigPicture.classList.remove('hidden');
    for (let i = 0; i < photos.length; i++) {
      if (evt.target.src.includes(photos[i].url)) {
        bigPictureImg.src = photos[i].url;
        likesCount.textContent = photos[i].likes;
        socialCommentsShownCount.textContent = photos[i].comments.length;
        socialCommentsTotalCount.textContent = photos[i].comments.length;
        socialCaption.textContent = photos[i].description;
        socialComments.innerHTML = '';
        const socialCommentsFragment = document.createDocumentFragment();
        photos[i].comments.forEach((comment) => {

          const socialComment = socialCommentTemplate.cloneNode(true);

          socialPicture.src = comment.avatar;
          socialPicture.alt = comment.name;
          socialText.textContent = comment.message;

          socialCommentsFragment.append(socialComment);
        });
        socialComments.appendChild(socialCommentsFragment);
        socialCommentsCount.classList.add('hidden');
        socialCommentsLoader.classList.add('hidden');
      }
    }
    document.addEventListener('keydown', onEscapeCloseModal);
    document.addEventListener('click', onLeftClickCloseModal);
    bigPictureCancelButton.addEventListener('click', onClickCloseModal);

    if (isHidden(bigPicture)) {
      bigPictureCancelButton.removeEventListener('click', onClickCloseModal);
    }
  });
};

function onClickCloseModal(evt) {
  evt.preventDefault();
  bigPicture.classList.add('hidden');
}

function onEscapeCloseModal(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
  }
  // if (isEscapeKey()) {
  //   bigPicture.classList.add('hidden');
  // }
}
function onLeftClickCloseModal(evt) {
  evt.preventDefault();
  if (evt.target === overlayPicture) {
    bigPicture.classList.add('hidden');
  }

}

// function openModal(evt) {
//   evt.preventDefault();
//   bigPicture.classList.remove('hidden');
// }

export{fullSizePictures};

