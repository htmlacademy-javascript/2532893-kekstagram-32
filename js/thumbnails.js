import { getRandomNum } from './utils.js';
import { getArrayOfURL, arrayOfDescriptions, COUNT_OF_PHOTOS, COMMENTS_MIN, COMMENTS_MAX, LIKES_MIN, LIKES_MAX} from './data.js';


const templatePictures = document.querySelector('#picture').content; // - содержимое шаблона
const thumbnail = templatePictures.querySelector('.picture');// - блок с фотографией для клонирования
// console.log(templatePictures);
const image = templatePictures.querySelector('.picture__img'); // - фотография <img>
const likesQuantity = templatePictures.querySelector('.picture__likes');
const commentsQuantity = templatePictures.querySelector('.picture__comments');
const pictures = document.querySelector('.pictures');// - секция для вставки фото
const fragment = document.createDocumentFragment(); // - создали фрагмент

for (let i = 0 ; i <= COUNT_OF_PHOTOS ; i++) {
  const picture = thumbnail.cloneNode(true);
  Object.assign(image, {
    src: getArrayOfURL()[i],
    alt: arrayOfDescriptions[i]
  }); // - установили атрибуты к фотографии
  likesQuantity.textContent = getRandomNum(LIKES_MIN, LIKES_MAX); // - добавили количество лайков
  commentsQuantity.textContent = getRandomNum(COMMENTS_MIN, COMMENTS_MAX); // - добавили количество комментариев

  fragment.append(picture);
} // - очень хотелось этот процесс (for и fragment.append) обернуть в функцию, но не получилось

function addPictures() {
  pictures.append(fragment);

  const photos = document.querySelectorAll('.picture');
  photos[0].remove(); // - Это костыль, не понимаю, почему cloneNode в цикле вставляет первым пустой элемент

  return pictures;
}

export { addPictures };

