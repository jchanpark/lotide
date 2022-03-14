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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter === " ") {
      continue;
    } if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  console.log(results);
  return results;
};

module.exports = letterPositions;

//TEST CODE
// assertArraysEqual(letterPositions("hello").e, [1]);
