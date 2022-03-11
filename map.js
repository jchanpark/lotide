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
  const eqResult = eqArrays(actual, expected);
  if (eqResult === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'o', 't' ]);
assertArraysEqual(results1, [ 'c', 't' ]);