// import { photos } from './setup.js';

// import { openBigPicture } from './full-size-pictures.js';
import './form.js';
import './img-effects.js';
import './scale-control.js';
import './server-data.js';
import { renderRemoteThumbnails, openCard } from './server-data.js';
import { submitForm, closeForm } from './form.js';

renderRemoteThumbnails();
openCard();
submitForm(closeForm);

