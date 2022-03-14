const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const results = {};
  for (let letter of str) {
    if (letter === " ") {
      continue;
    }
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
// TEST CODE
// const result1 = countLetters("lighthouse in the house");
// console.log(result1);
// assertEqual(result1.l, 1);
// assertEqual(result1.i, 2);
