const middle = require('../middle');
const assert = require('chai').assert;

//TEST CODE

describe("#middle", () => {
  it("should return [2, 3] when passed [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })

  it("should return ['Lighthouse'] when passed ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse']);
  })

  it("should return [] when passed ['7', '8']", () => {
    assert.deepEqual(middle(['7', '8']), []);
  })


});
