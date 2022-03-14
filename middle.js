const middle = function(arr) {
  let midArr = [];
  if (arr.length < 3) {
    return midArr;
  } if (arr.length % 2 !== 0) {
    midArr.push(arr[Math.floor(arr.length / 2)]);
  } else {
    midArr.push(arr[arr.length / 2 - 1]);
    midArr.push(arr[arr.length / 2]);
  }
  return midArr;
};

module.exports = middle;