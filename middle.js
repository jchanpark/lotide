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

const assertArraysEqual = function(actual, expected) {
  if (actual === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqArraysResult = eqArrays(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(eqArraysResult, true);