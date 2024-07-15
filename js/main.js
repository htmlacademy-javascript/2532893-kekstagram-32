import { getArrayOfObjects } from './setup.js';
import { generateThumbnails } from './thumbs.js';
import { showFullSizeImages } from './full-size-pictures.js';


generateThumbnails(getArrayOfObjects());
showFullSizeImages(getArrayOfObjects());

// Не работает

// 1. Тексты комментариев одинаковые, то есть при вызове функции - генератора одно значение присваивается всем элементам с комментариями

// 2. Утилити функция проверки клавиши Escape не работает - окно закрывается от любой клавиши
