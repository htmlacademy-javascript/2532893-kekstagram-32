//Количество объектов-фотографий
const countOfPhotos = 25;

// Генератор случайных чисел
function getRandomNum(min, max){
  return Math.floor(Math.random() * (max + min - 1) + min);
}

// Массив ID
const getArrayOfID = function(){
  const arrayOfID = [];
  for (let i = 1; i <= countOfPhotos; i++){
    arrayOfID.push(i);
  }
  return arrayOfID;
};
// console.log(getArrayOfID());

// Массив URL
const getArrayOfURL = function(){
  const arrayOfURL = [];
  for (let i = 1; i <= countOfPhotos; i++){
    arrayOfURL.push(`photos/${getArrayOfID()[i - 1]}.jpg`);

  }
  return arrayOfURL;
};
// console.log(getArrayOfURL());

// Массив текстовых описаний фотографий
const getArrayOfDescriptions = ['Пляж отеля', 'Указатель', 'Океан', 'Девушка на пляже', 'Мисо', 'Ламборгини', 'Клубника', 'Морс', 'Самолёт', 'Обувница', 'Яркое небо', 'Ауди', 'Салат', 'Суши-котик', 'Угги', 'Вид из самолёта', 'Оркестр', 'Ретро-авто', 'Тапочки с фонариком', 'Пальмы в отеле', 'Завтрак', 'Закат на Бали', 'Краб', 'Концерт', 'Сафари'];

// Массив случайных комментариев
const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

// Ссылка на аватарки
const getURLofAvatar = function(){
  return `img/avatar-${getRandomNum(1, 6)}.svg`;
};

// Массив имён пользователей
const getArrayOfNames = ['Александр', 'Алексей', 'Андрей', 'Антон', 'Артём', 'Владимир', 'Вячеслав', 'Геннадий', 'Георгий', 'Дмитрий', 'Евгений', 'Иван', 'Илья', 'Кирилл', 'Максим', 'Михаил', 'Николай', 'Олег', 'Павел', 'Пётр', 'Роман', 'Сергей', 'Степан', 'Тимофей', 'Фёдор', 'Эдуард', 'Юрий', 'Александра', 'Алиса', 'Анастасия', 'Ангелина', 'Анна', 'Вероника', 'Виктория', 'Дарья', 'Екатерина', 'Елена', 'Елизавета', 'Ирина', 'Кристина', 'Ксения', 'Лариса', 'Марина', 'Мария', 'Надежда', 'Наталья', 'Ольга', 'Полина', 'Светлана', 'София', 'Татьяна', 'Юлия'];


// Массив объектов с комментариями
const getArrayOfComments = function(min, max){
  const arrayOfComments = [];
  for (let i = 0; i < max; i++){
    arrayOfComments.push({
      id: getRandomNum(1, 200),
      avatar: getURLofAvatar(),
      message: messages[getRandomNum(0, messages.length - 1)],
      name: getArrayOfNames[getRandomNum(0, messages.length - 1)]
    });
  }
  return arrayOfComments;
};
// console.log(getArrayOfComments(0, 30));

// Массив объектов
const getArrayOfObjects = function(){
  const arrayOfObjects = [];
  for (let i = 0; i < countOfPhotos; i++){
    arrayOfObjects.push({
      id: getArrayOfID()[i],
      url: getArrayOfURL()[i],
      description: getArrayOfDescriptions[i],
      likes: getRandomNum(15, 200),
      comments: getArrayOfComments(0, 30)[i]
    });
  }
  return arrayOfObjects;
};
console.log(getArrayOfObjects());
