const eqArrays = function(arr1, arr2) {
  let count = 0;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        count++;
      }
    }
  } if (count === arr1.length) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;