const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


//TEST CODE
assertEqual(eqArrays([1, 2], [1, 2, 3, 5]), false);