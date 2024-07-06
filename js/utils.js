const getRandomNum = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
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


export { getRandomNum, getUniqueID };
