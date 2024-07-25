

const template = document.querySelector('#picture').content;

const container = document.querySelector('.pictures');

const createThumbnails = ({ url, description, likes, comments }) => {
  const thumbnail = template.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const image = createThumbnails(picture);
    fragment.append(image);
  });
  container.append(fragment);
};

export { renderThumbnails };
