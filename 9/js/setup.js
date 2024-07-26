// Модуль генерации рабочих данных

import { generateRandomInteger, uniqueID, getRandomIndex } from './utils.js';
import { descriptions, messages, names, photosID, COUNT_OF_PHOTOS, COUNT_OF_LIKES_MIN, COUNT_OF_LIKES_MAX, COUNT_OF_COMMENTS_MIN, COUNT_OF_COMMENTS_MAX, COUNT_OF_AVATARS } from './data.js';

// Генерация комментариев

const createComments = () => ({
  id: uniqueID(),
  avatar: `img/avatar-${generateRandomInteger(1, COUNT_OF_AVATARS)}.svg`,
  message: messages[getRandomIndex(messages)],
  name: names[getRandomIndex(names)],
});

// Генерация фотографий

const createPhotos = (index) => ({
  id: photosID[index],
  url: `photos/${photosID[index]}.jpg`,
  description: descriptions[index],
  likes: generateRandomInteger(COUNT_OF_LIKES_MIN, COUNT_OF_LIKES_MAX),
  comments: Array.from(
    { length: generateRandomInteger(COUNT_OF_COMMENTS_MIN, COUNT_OF_COMMENTS_MAX) },
    createComments)
});

const getPhotos = () => Array.from(
  { length: COUNT_OF_PHOTOS },
  (_, index) => createPhotos(index));

const photos = getPhotos();

export { photos };
