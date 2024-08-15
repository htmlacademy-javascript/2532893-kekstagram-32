import {getTemplate} from './helpers/get-template.js';

const thumbnailTemplate = getTemplate('#picture', '.picture');


const createThumbnail = ({url, description, comments, likes, id}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const thumbnailPicture = thumbnail.querySelector('.picture__img');

  thumbnailPicture.src = url;
  thumbnailPicture.alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.thumbnailId = id;

  return thumbnail;
};

export { createThumbnail };
