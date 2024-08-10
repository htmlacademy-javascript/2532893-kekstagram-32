
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const userPhotoInput = document.querySelector('.img-upload input[type=file]');
const userPhotoPreview = document.querySelector('.img-upload__preview img');
const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');

userPhotoInput.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.querySelector('#effect-none').checked = true;
  slider.classList.add('hidden');
  sliderContainer.classList.add('hidden');
  const file = userPhotoInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    userPhotoPreview.src = URL.createObjectURL(file);
  }

});
