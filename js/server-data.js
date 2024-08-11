// Не получилось сделать очистку фотографий при нажатии на фильтр, новый массив генерится после текущего загруженного

import { generateThumbnails } from './thumbs.js';
import { renderComments } from './full-size-pictures.js';
import { container } from './thumbs.js';
import { showFilters } from './filters.js';
import { generateRandomInteger } from './utils.js';
import { debounce } from './utils.js';

// КОнстанта
const REMOTE_GET_URL = 'https://32.javascript.htmlacademy.pro/kekstagram/data';
const ALERT_SHOW_TIME = 5000;
const RERENDER_DELAY = 500;

// Поиск элементов
const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const socialCommentsLoader = document.querySelector('.comments-loader');
let currentPicture;


// Шаблон ошибки
const errorMessageTemplate = document.querySelector('#data-error').content;
// const errorMessage = document.querySelector('.data-error__title');

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessageElement);
  setTimeout(() => {
    document.querySelector('.data-error').remove();
  }, ALERT_SHOW_TIME);
};

// Отрисовка фото

const openBigPicture = (data, pictureId) => {
  currentPicture = data.find((photo) => photo.id === Number(pictureId));


  bigPictureImg.src = currentPicture.url;
  likesCount.textContent = currentPicture.likes;

  renderComments(currentPicture);
};

// Запрос фото с сервера и отрисовка
const renderRemoteThumbnails = () => {
  fetch(REMOTE_GET_URL)
    .then((response) => {
      if (response.ok) {
        showFilters();
        return response;
      }
    })
    .then((response) => response.json())
    .then((data) => generateThumbnails(data));
};


const renderRemotePhotos = (pictureId) => {
  fetch(REMOTE_GET_URL)
    .then((response) => {
      if (response.ok) {

        return response;
      }

    })
    .then((response) => response.json())
    .then((data) => openBigPicture(data, pictureId))
    .catch(() => showErrorMessage());

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

function showRandomPhotos() {
  fetch(REMOTE_GET_URL)
    .then((response) => response.json())
    .then((data) => data.slice())
    .then((data) => data.filter((photo) => photo.id = generateRandomInteger(0, 24)))
    .then((data) => data.slice(0, 9))
    .then((data) => generateThumbnails(data));
}
// const renderRandomPhotos = () => {
//   document.querySelectorAll('.picture').forEach((picture) => {
//     picture.innerHTML = '';
//     showRandomPhotos();
//   });
// }
function showMostCommentedPhotos() {
  fetch(REMOTE_GET_URL)
    .then((response) => response.json())
    .then((data) => data.slice())
    .then((data) => data.sort(sortMostCommentedPhotos))
    .then((data) => generateThumbnails(data));
}

function sortMostCommentedPhotos(photo1, photo2) {
  return photo1.comments.length - photo2.comments.length;
}

function showRandomPhotosDebounce() {
  debounce(() => showRandomPhotos(), RERENDER_DELAY);
}

function showMostCommentedDebounce() {
  debounce(() => showMostCommentedPhotos(), RERENDER_DELAY);
}


document.querySelector('#filter-random').addEventListener('click', showRandomPhotosDebounce);
document.querySelector('#filter-discussed').addEventListener('click', showMostCommentedDebounce);

document.querySelector('#filter-random').addEventListener('click', showRandomPhotos);
document.querySelector('#filter-discussed').addEventListener('click', showMostCommentedPhotos);

export { renderRemotePhotos, renderRemoteThumbnails, openCard };
