# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jchanpark/lotide`

**Require it:**

`const _ = require('@jchanpark/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: To trim items off in an array except the first item
* `function2(tail)`: To trim the first item off in an array
* `function3(middle)`: To retrieve an item(two items in an even array) in the middle in an array
* `function4(eqArrays)`: To check an equality in their length and in each element between two arrays
* `function5(assertEqual)`: To compare two parameters for their equality
* `function6(assertArraysEqual)`: To compare two arrays and assert their equality
* `function7(assertObjectsEqual)`: To check an equality between two objects and their elements
* `function8(countLetters)`: To count the number of letters in a string
* `function9(countOnly)`: To count specfic values only in an array
* `function10(eqObjects)`: To check an equality between two objects
* `function11(findKey)`: To find elements in an objects according to a given callback
* `function12(findKeyByValue)`: To find keys in an object acoording to a value
* `function13(letterPositions)`: To assert if the index of a letter within a word equal to a specific index
* `function14(map)`: To manipulate an array based on a callback
* `function15(takeUntil)`: To take array elements until the a condition met by a callback
* `function16(without)`: To remove elements in an array from another array 