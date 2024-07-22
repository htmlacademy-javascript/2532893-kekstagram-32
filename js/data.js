import { getRandomNum, getUniqueID } from './utils.js';

const COUNT_OF_PHOTOS = 25;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const LIKES_MIN = 15;
const LIKES_MAX = 200;

const getCommentID = getUniqueID();

// Массив ID
const getArrayOfID = function(){
  const arrayOfID = [];
  for (let i = 1; i <= COUNT_OF_PHOTOS; i++){
    arrayOfID.push(i);
  }
  return arrayOfID;
};

// Массив URL

const getArrayOfURL = function(){
  const arrayOfURL = [];
  for (let i = 1; i <= COUNT_OF_PHOTOS; i++){
    arrayOfURL.push(`photos/${getArrayOfID()[i - 1]}.jpg`);

  }
  return arrayOfURL;
};

// Ссылка на аватарки
const getURLofAvatar = function(){
  return `img/avatar-${getRandomNum(1, 6)}.svg`;
};

// Массив текстовых описаний фотографий
const arrayOfDescriptions = ['Пляж отеля', 'Указатель', 'Океан', 'Девушка на пляже', 'Мисо', 'Ламборгини', 'Клубника', 'Морс', 'Самолёт', 'Обувница', 'Яркое небо', 'Ауди', 'Салат', 'Суши-котик', 'Угги', 'Вид из самолёта', 'Оркестр', 'Ретро-авто', 'Тапочки с фонариком', 'Пальмы в отеле', 'Завтрак', 'Закат на Бали', 'Краб', 'Концерт', 'Сафари'];

// Массив случайных комментариев
const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

// Массив имён пользователей
const getArrayOfNames = ['Александр', 'Алексей', 'Андрей', 'Антон', 'Артём', 'Владимир', 'Вячеслав', 'Геннадий', 'Георгий', 'Дмитрий', 'Евгений', 'Иван', 'Илья', 'Кирилл', 'Максим', 'Михаил', 'Николай', 'Олег', 'Павел', 'Пётр', 'Роман', 'Сергей', 'Степан', 'Тимофей', 'Фёдор', 'Эдуард', 'Юрий', 'Александра', 'Алиса', 'Анастасия', 'Ангелина', 'Анна', 'Вероника', 'Виктория', 'Дарья', 'Екатерина', 'Елена', 'Елизавета', 'Ирина', 'Кристина', 'Ксения', 'Лариса', 'Марина', 'Мария', 'Надежда', 'Наталья', 'Ольга', 'Полина', 'Светлана', 'София', 'Татьяна', 'Юлия'];

const createComment = function(){
  return {
    id: getCommentID(),
    avatar: getURLofAvatar(),
    message: messages[getRandomNum(0, messages.length - 1)],
    name: getArrayOfNames[getRandomNum(0, messages.length - 1)]
  };

};

// Массив объектов с комментариями
const getArrayOfComments = function(){
  return Array.from({length: getRandomNum(COMMENTS_MIN, COMMENTS_MAX)}, createComment);
};
const comments = getArrayOfComments();


export { getArrayOfID, getArrayOfURL, arrayOfDescriptions, getArrayOfComments, COUNT_OF_PHOTOS, COMMENTS_MIN, COMMENTS_MAX, LIKES_MIN, LIKES_MAX, createComment, comments };
