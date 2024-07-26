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
// const quantityOfShownComments = countShowComments();
const socialPicture = document.querySelector('.social__picture');
const socialText = document.querySelector('.social__text');
const socialComments = document.querySelector('.social__comments');
const socialCommentTemplate = document.querySelector('.social__comment');
const socialCommentsItems = document.querySelectorAll('.social__comment');
const overlayPicture = document.querySelector('.overlay');

for (const item of photos) {
  // console.log(item.comments);
}


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
        // console.log(photos[i].comments);


        for (let j = 0; j < photos[i].comments.length; j++) {
          const socialComment = socialCommentTemplate.cloneNode(true);
          socialComment.querySelector('.social__picture').src = photos[i].comments[j].avatar;

          // console.log(photos[i].comments[j].avatar);
          socialComment.querySelector('.social__picture').alt = photos[i].comments[j].name;
          // console.log(photos[i].comments[j].name);
          socialComment.querySelector('.social__text').textContent = photos[i].comments[j].message;
          // console.log(photos[i].comments[j].message);
          socialCommentsFragment.append(socialComment);
        }
        //  console.log(socialPicture)


        socialComments.append(socialCommentsFragment);

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
  socialCommentsShownCount.textContent = quantityOfShownComments;
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

function countShowComments () {

  return socialComments.children.length;
}

export { openBigPicture };
