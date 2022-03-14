const assert = require('chai').assert;
const tail = require('../tail');

//TEST CODE
describe("#tail", () => {
  it("should return [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  })

  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  })

  it("should return [5] for ['Hello', 5]", () => {
    assert.deepEqual(tail(['Hello', 5]), [5]);
  })
});