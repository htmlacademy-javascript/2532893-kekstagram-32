import { generateThumbnails } from './thumbs.js';
import { renderComments } from './full-size-pictures.js';
import { container } from './thumbs.js';

const REMOTE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram/data';

const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const socialCommentsLoader = document.querySelector('.comments-loader');
let currentPicture;

const renderRemoteThumbnails = () => {
  fetch(REMOTE_URL).then((response) => response.json()).then((data) => generateThumbnails(data));
};


const renderRemotePhotos = (pictureId) => {
  fetch(REMOTE_URL)
    .then((response) => response.json())
    .then((data) => {

      currentPicture = data.find((photo) => photo.id === Number(pictureId));


      bigPictureImg.src = currentPicture.url;
      likesCount.textContent = currentPicture.likes;

      renderComments(currentPicture);

    });

};
socialCommentsLoader.addEventListener('click', () => renderComments(currentPicture));

const openCard = () => {
  container.addEventListener('click', (evt) => {
    const currentPhoto = evt.target.closest('.picture');

    if (currentPhoto) {
      renderRemotePhotos(currentPhoto.dataset.pictureId);

    }
  });
}
export { renderRemotePhotos, renderRemoteThumbnails, openCard };
