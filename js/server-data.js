import { generateThumbnails } from './thumbs.js';
import { renderComments } from './full-size-pictures.js';
import { container } from './thumbs.js';

// КОнстанта
const REMOTE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram/data';

// Поиск элементов
const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const socialCommentsLoader = document.querySelector('.comments-loader');
let currentPicture;


// Шаблон ошибки
const errorMessageTemplate = document.querySelector('#data-error').content;
const errorMessage = document.querySelector('.data-error__title');

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessageElement);
};

// Отрисовка фото

const openBigPicture = (data, pictureId) => {
  currentPicture = data.find((photo) => photo.id === Number(pictureId));


  bigPictureImg.src = currentPicture.url;
  likesCount.textContent = currentPicture.likes;

  renderComments(currentPicture);
}

// Запрос фото с сервера и отрисовка
const renderRemoteThumbnails = () => {
  fetch(REMOTE_URL).then((response) => response.json()).then((data) => generateThumbnails(data));
};


const renderRemotePhotos = (pictureId) => {
  fetch(REMOTE_URL)
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        // showErrorMessage();
        throw new Error(errorMessage);

      }

    })
    .then((response) => response.json())
    .then((data) => openBigPicture (data, pictureId))
    .catch((error) => console.log(error));

};
socialCommentsLoader.addEventListener('click', () => renderComments(currentPicture));

const openCard = () => {
  container.addEventListener('click', (evt) => {
    const currentPhoto = evt.target.closest('.picture');

    if (currentPhoto) {
      renderRemotePhotos(currentPhoto.dataset.pictureId);

    }
  });
};
export { renderRemotePhotos, renderRemoteThumbnails, openCard };
