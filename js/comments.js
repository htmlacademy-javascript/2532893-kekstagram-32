import {getArrayOfComments} from './data.js';


const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelectorAll('.social__comment');
// const socialPicture = socialComments.querySelector('.social__picture');
// const socialCommentText = socialComments.querySelector('.social__text');
const comments = getArrayOfComments();
// const socialComment = document.querySelectorAll('.social__comment');


function showComments() {
  for (const item of socialComment) {
    const socialPicture = item.querySelector('.social__picture');
    const socialCommentText = item.querySelector('.social__text');

    comments.forEach((comment) => {
      socialPicture.src = comment.avatar;
      socialPicture.alt = comment.name;
      socialCommentText.textContent = comment.message;
    });
  }

}
showComments();

export {showComments};

