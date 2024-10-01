const assert = require("assert");
const majorityElement = require("../index");

describe("#majorityElement()", function () {
  it("should return majority 3", function () {
    const nums = [3,2,3];

    const max = majorityElement(nums);

    assert.equal(max, 3);
  });

  it("should return majority 2", function () {
    const nums = [2,2,1,1,1,2,2];

    const max = majorityElement(nums);

    assert.equal(max, 2);
  });

  it("should return majority 3", function () {
    const nums = [3,3,4];

    const max = majorityElement(nums);

    assert.equal(max, 3);
  });

 
});
