import {createThumbnail} from './create-thumbnail.js';

const sectionPictures = document.querySelector('.pictures');

const renderThumbnails = (arrayMedia) => {
  const arrayThumbnails = sectionPictures.querySelectorAll('.picture');
  if (arrayThumbnails.length > 0) {
    arrayThumbnails.forEach((elementThumbnails) => elementThumbnails.remove());
  }

  const fragment = document.createDocumentFragment();

  arrayMedia.forEach((elementMedia) => {
    const thumbnail = createThumbnail(elementMedia);
    fragment.append(thumbnail);
  });

  sectionPictures.append(fragment);
};

export { renderThumbnails };
