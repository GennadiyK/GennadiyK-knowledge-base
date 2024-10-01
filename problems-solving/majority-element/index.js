/**
 *
 * @param {*} nums
 * @returns
 *
 * Time complexity: O(n)
 */
// const majorityElement = function(nums) {
//   let count = 0
//   let majority = null

//   for(let el of nums) {
//     if(count === 0) {
//       majority = el
//     }

//     if(majority !== el) {
//       count--
//     } else {
//       count++
//     }
//     return majority
//   }
// }

/**
 *
 * @param {*} nums
 * it return majority element
 */
const majorityElement = function (nums) {
  const hash = {};
  let res = 0;
  let majority = 0;

  for (let num of nums) {
    hash[num] = 1 + (hash[num] || 0);
    if (hash[num] > majority) {
      res = num;
      majority = hash[num];
    }
  }
  return res;
};

module.exports = majorityElement;
