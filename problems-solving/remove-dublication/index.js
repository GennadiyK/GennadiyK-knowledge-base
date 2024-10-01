/**
 * Time Complexity: O(n)
 * 
 * @param {*} nums 
 * @returns k
 * 
 */
const removeDuplicates = function (nums) {
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  nums.length = k;
  return k;
};

module.exports = removeDuplicates;
