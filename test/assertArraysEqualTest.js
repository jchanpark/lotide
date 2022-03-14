const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
const eqArrayResult = eqArrays([2, 4, 7], [2, 4, 7]);
assertArraysEqual(eqArrayResult, false);