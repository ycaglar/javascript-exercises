const repeatString = function (string, repcount) {
  if (repcount < 0) {
    return 'ERROR';
  };
  return string.repeat(repcount);
};

// Do not edit below this line
module.exports = repeatString;
