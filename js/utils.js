const getRandomNum = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getUniqueID(){
  let uniqueID = 0;
  return function(){
    uniqueID += 1;
    return uniqueID;
  };
}

function closeModal(element){
  element.classList.add('hidden');
}

const isEscapeKey = (evt) => evt.keyCode === 27;

export { getRandomNum, getUniqueID, closeModal, isEscapeKey };
