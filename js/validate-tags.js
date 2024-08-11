const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;
const MAX_COMMENT_SYMBOLS = 140;

const uploadForm = document.querySelector('.img-upload__form');
const hashTagsField = uploadForm.querySelector('.text__hashtags');
const commentField = uploadForm.querySelector('.text__description');


const areHashtagSymbolsValid = () => hashTagsField.value.length === 0 || hashTagsField.value
  .trim()
  .split(' ')
  .every((hashtag) => HASHTAG_SYMBOLS.test(hashtag));

const areHashtagsQuantityValid = () => hashTagsField.value.split(' ').length <= MAX_HASHTAG_COUNT;

const createSetOfHashtags = () => {
  const setOfHashtags = new Set();
  const uniqueHashtags = hashTagsField.value.split(' ').map((hashtag) => hashtag.trim().toLowerCase());
  for (let i = 0; i < uniqueHashtags.length; i++) {
    setOfHashtags.add(uniqueHashtags[i]);
  }
  return setOfHashtags;
};

const areHashtagsUnique = () => createSetOfHashtags().size === hashTagsField.value.split(' ').length;

const areCommentValid = () => commentField.value.length <= MAX_COMMENT_SYMBOLS;


export { areHashtagSymbolsValid, areHashtagsQuantityValid, areHashtagsUnique, areCommentValid };
