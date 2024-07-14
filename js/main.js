import { getArrayOfObjects } from './setup.js';
import { generateThumbnails } from './thumbs.js';
import { showFullSizeImages } from './full-size-pictures.js';


generateThumbnails(getArrayOfObjects());
showFullSizeImages(getArrayOfObjects());

