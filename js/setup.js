import { getRandomNum } from './utils.js';
import { getArrayOfID, getArrayOfURL, getArrayOfDescriptions, getArrayOfComments, COUNT_OF_PHOTOS} from './data.js';

// Массив объектов
const getArrayOfObjects = function(){
  const arrayOfObjects = [];
  for (let i = 0; i < COUNT_OF_PHOTOS; i++){
    arrayOfObjects.push({
      id: getArrayOfID()[i],
      url: getArrayOfURL()[i],
      description: getArrayOfDescriptions[i],
      likes: getRandomNum(15, 200),
      comments: getArrayOfComments()
    });
  }
  return arrayOfObjects;
};

export {getArrayOfObjects};
