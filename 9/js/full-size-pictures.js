import { photos } from './setup.js';
import { container } from './thumbs.js';
import { isHidden } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img').querySelector('img');
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');
const socialCommentsShownCount = document.querySelector('.social__comment-shown-count');
const socialCommentsTotalCount = document.querySelector('.social__comment-total-count');
const bigPictureCancelButton = document.querySelector('.big-picture__cancel');
const socialComments = document.querySelector('.social__comments');
const socialCommentTemplate = document.querySelector('.social__comment');
const overlayPicture = document.querySelector('.overlay');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');



const fullSizePictures = () => {
  document.body.classList.add('modal-open');
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


        for (let j = 0; j < photos[i].comments.length; j++) {
          const socialComment = socialCommentTemplate.cloneNode(true);
          socialComment.querySelector('.social__picture').src = photos[i].comments[j].avatar;
          socialComment.querySelector('.social__picture').alt = photos[i].comments[j].name;
          socialComment.querySelector('.social__text').textContent = photos[i].comments[j].message;
          socialCommentsFragment.append(socialComment);
        }


        socialComments.append(socialCommentsFragment);

      }
    }
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
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
  document.body.classList.remove('modal-open');
}

function onEscapeCloseModal(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }

}
function onLeftClickCloseModal(evt) {
  evt.preventDefault();
  if (evt.target === overlayPicture) {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }

}


export{fullSizePictures};

