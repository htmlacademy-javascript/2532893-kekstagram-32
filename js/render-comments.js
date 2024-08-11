const socialCommentShow = document.querySelector('.social__comment-shown-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentsList = document.querySelector('.social__comments');

const STEP_COMMENTS_SHOW = 5;
let commentsShow = 0;
let newArrayComments = [];

const getTemplateComment = (arrayElement) => {
  const commentTemplate =
    `<li class="social__comment">
      <img class="social__picture" src="${arrayElement.avatar}" alt="${arrayElement.name}" width="35" height="35">
      <p class="social__text">${arrayElement.message}</p>
    </li>`;

  return commentTemplate;
};

const resetCommentsShow = () => {
  commentsShow = 0;
};

const renderComments = (arrayComments) => {
  commentsList.innerHTML = '';

  if (Array.isArray(arrayComments)) {
    newArrayComments = arrayComments;
  }

  commentsShow += STEP_COMMENTS_SHOW;
  if (commentsShow >= newArrayComments.length) {
    commentsShow = newArrayComments.length;
    commentsLoader.classList.add('hidden');
  }

  newArrayComments.slice(0, commentsShow).forEach((element) => {
    const comment = getTemplateComment(element);
    commentsList.insertAdjacentHTML('beforeEnd', comment);
  });

  socialCommentShow.textContent = commentsShow;
};

export { getTemplateComment, resetCommentsShow, renderComments };
