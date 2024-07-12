const thumbnailsTemplate = document.querySelector('#picture').content;

const createThumbnail = ({url, description, likes, comments}) => {
  const thumbnail = thumbnailsTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  return thumbnail;
};

const container = document.querySelector('.pictures');

const generateThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const image = createThumbnail(picture);
    fragment.append(image);

  });
  container.append(fragment);
};

export { generateThumbnails };
