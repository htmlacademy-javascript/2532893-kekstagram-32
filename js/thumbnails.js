//  <template id="picture">
//     <a href="#" class="picture">
//       <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
//       <p class="picture__info">
//         <span class="picture__comments"></span>
//         <span class="picture__likes"></span>
//       </p>
//     </a>
//   </template>

import { getRandomNum } from './utils.js';
import {  getArrayOfURL, getArrayOfDescriptions, getArrayOfComments, COUNT_OF_PHOTOS} from './data.js';

const templatePictures = document.querySelector('#picture').content;
console.log(templatePictures);
