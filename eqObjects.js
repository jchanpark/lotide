const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

// TEST CODE
// const ab = { a: "1", b: "2", c: "4"};
// const ba = { b: "2", a: "1", c: "4"};
// eqObjects(ab, ba); // => true

// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// assertEqual(eqObjects(cd, dc), true);




