const assert = require("assert");
const removeElement = require("../index");

describe("#removeElement()", function () {
  it("should return 2", function () {
    const nums = [3,2,2,3];

    const k = removeElement(nums, 3);

    assert.equal(k, 2);
  });

  it("should return 5", function () {
    const nums = [0,1,2,2,3,0,4,2];

    const k = removeElement(nums, 2);

    assert.equal(k, 5);
  });
});
