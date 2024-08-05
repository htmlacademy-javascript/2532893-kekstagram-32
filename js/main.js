import { photos } from './setup.js';
import { container, generateThumbnails } from './thumbs.js';
import { openBigPicture } from './full-size-pictures.js';
import './form.js';


generateThumbnails(photos);

container.addEventListener('click', (evt) => {
  const currentPhoto = evt.target.closest('.picture');

  if (currentPhoto) {
    openBigPicture(currentPhoto.dataset.pictureId);
  }
});
