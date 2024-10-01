const assert = require("assert");
const removeDuplicates = require("../index");

describe("#removeDuplicates()", function () {
  it("should return 2", function () {
    const nums = [1,1,2];

    const k = removeDuplicates(nums);

    assert.equal(k, 2);
  });

  it("should return 5", function () {
    const nums = [0,0,1,1,1,2,2,3,3,4];

    const k = removeDuplicates(nums);

    assert.equal(k, 5);
  });
});
