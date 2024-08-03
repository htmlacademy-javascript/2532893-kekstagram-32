const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1, 19}$/i;
const MAX_HASHTAG_COUNT = 5;

const imgUploadInput = document.querySelector('.img-upload__input');


imgUploadInput.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
});

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});


