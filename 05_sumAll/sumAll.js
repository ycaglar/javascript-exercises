const sumAll = function (m, n) {
  if (m < 0 || n < 0 || typeof m !== 'number' || typeof n !== 'number') {
    return 'ERROR';
  };
  leftBoundary = Math.min(m, n);
  rightBoundary = Math.max(m, n);

  return (rightBoundary + leftBoundary) * (rightBoundary - leftBoundary + 1) / 2
};

// Do not edit below this line
module.exports = sumAll;
