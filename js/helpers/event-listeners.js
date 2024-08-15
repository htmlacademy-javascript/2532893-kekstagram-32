

const addOnButtonCloseClick = (element, functionClose, add = true) => {
  if (add) {
    element.addEventListener('click', functionClose);
  } else {
    element.removeEventListener('click', functionClose);
  }
};


export { addOnButtonCloseClick };
