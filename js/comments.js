import {getArrayOfComments} from './data.js';


const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const socialPicture = socialComments.querySelector('.social__picture');
const socialCommentText = socialComments.querySelector('.social__text');
const comments = getArrayOfComments();
// const socialComment = document.querySelectorAll('.social__comment');
{/* <li class="social__comment">
  <img
    class="social__picture"
    src="{{аватар}}"
    alt="{{имя комментатора}}"
    width="35" height="35">
  <p class="social__text">{{текст комментария}}</p>
</li> */}

function showComments() {
  socialComment.cloneNode(true);
  comments.forEach((comment) => {
    socialPicture.src = comment.avatar;
    socialPicture.alt = comment.name;
    socialCommentText.textContent = comment.message;
  });


}
showComments();

export {showComments};

