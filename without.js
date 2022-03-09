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

const without = function(sourceArr, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (!itemsToRemove.includes(sourceArr[i])) {
      newArr.push(sourceArr[i]);
    }
  }
  return newArr;
};

// TEST CODE
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(eqArrays(words, ["hello", "world", "lighthouse"]), true);