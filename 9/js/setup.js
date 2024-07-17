import { getRandomNum } from './utils.js';
import { getArrayOfID, getArrayOfURL, arrayOfDescriptions, getArrayOfComments, COUNT_OF_PHOTOS, LIKES_MIN, LIKES_MAX} from './data.js';


// Массив объектов
const getArrayOfObjects = function(){
  const arrayOfObjects = [];
  for (let i = 0; i < COUNT_OF_PHOTOS; i++){
    arrayOfObjects.push({
      id: getArrayOfID()[i],
      url: getArrayOfURL()[i],
      description: arrayOfDescriptions[i],
      likes: getRandomNum(LIKES_MIN, LIKES_MAX),
      comments: getArrayOfComments()
    });
  }
  return arrayOfObjects;
};
const photos = getArrayOfObjects();

export {photos};
