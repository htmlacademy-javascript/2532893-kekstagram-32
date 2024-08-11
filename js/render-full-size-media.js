import {renderComments} from './render-comments.js';

const renderFullSizeMedia = ({url, likes, comments, description}) => {
  document.querySelector('.big-picture__img').querySelector('img').src = url;
  document.querySelector('.likes-count').textContent = likes;
  document.querySelector('.social__comment-total-count').textContent = comments.length;
  document.querySelector('.social__caption').textContent = description;

  renderComments(comments);
};

export { renderFullSizeMedia };
