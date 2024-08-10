

function generateRandomInteger(firstInt, secondInt) {
  const min = Math.ceil(Math.min(firstInt, secondInt));
  const max = Math.floor(Math.max(firstInt, secondInt));
  return Math.ceil(Math.random() * (max - min)) + min - 1;
}

function generateUniqueID() {
  let id = 1;
  return function () {
    return id++;
  };
}
const uniqueID = generateUniqueID();

function getRandomIndex(arr) {
  return generateRandomInteger(0, arr.length - 1);
}

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle(callback, delayBetweenFrames) {
  let lastTime = 0;
  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

const renderSuccessModal = () => {
  document.body.append(successMessage);
  successMessageModal.classList.add('hidden');
};

export { generateRandomInteger, uniqueID, getRandomIndex, debounce, throttle, renderSuccessModal };


