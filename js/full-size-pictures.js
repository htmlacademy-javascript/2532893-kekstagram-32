import { showComments } from './comments.js';
import { fillListener, onClickClosing, onESCclosing, onLeftClickClosing } from './listeners.js';

const showFullSizeImages = (pictures) => {
  fillListener(pictures);
  showComments();
  onClickClosing();
  onESCclosing();
  onLeftClickClosing();
};


export {showFullSizeImages};
