const removeFromArray = function (arr, ...vals) {
  return arr.filter(arrElem => !vals.includes(arrElem));
};

// Do not edit below this line
module.exports = removeFromArray;
