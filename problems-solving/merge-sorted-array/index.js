/**
 *
 *Time Complexity:
 * The for loop has a time complexity of 𝑂(𝑛)O(n).
 * Sorting nums1 after merging nums2 into it has a
 * time complexity of 𝑂 ( 𝑘 log ⁡ 𝑘 ),
 * where 𝑘 is the total number of elements in nums1.
 * Since nums1 now contains m+n elements, the time complexity is O((m+n)log(m+n)).
 *
 * Total Time Complexity: 𝑂 ( 𝑛 ) O(n) (for merging) + O((m+n)log(m+n)) (for sorting).
 */
/**
 *
 * @param {*} nums1
 * @param {*} m
 * @param {*} nums2
 * @param {*} n
 */
const merge = function(nums1, m, nums2, n) {
    //define i and this i has to be equal m - the lenght of nums1
    // define j, and it has to be equal 0, this will be used to iterate through the second nums2 arr
    // then define th statement - and if j less then n -  do iteration,
    // increment i and j
    for(let i = m, j = 0; j < n; i++,j++) {
        // set to nums1 with index i the value from the nums2 with index j
        nums1[i] = nums2[j]
    }
    // return the sorted nums1
    return nums1.sort((a,b) => a - b)
}

/**
 * Second solution
 */
// const merge = function (nums1, m, nums2, n) {
//   nums1.reduce((acc, _, i) => {
//     if (i >= m) {
//         console.log(i)
//       nums1[i] = nums2[i - m];
//     }
//     return acc;
//   }, nums1);
//   return nums1.sort((a, b) => a - b);
// };

module.exports = merge;
