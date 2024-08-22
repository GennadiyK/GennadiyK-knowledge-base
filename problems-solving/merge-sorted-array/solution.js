/**
 * Plan
 * 
 * 1. filter nums1 array and remove 0
 * 2. filter nums2 array and remove 0
 * 3. check if m === 0  &&  n == 0 num1 = []
 * 4. num1 = [...nums1, ...nums2]
 * 5. sort array num1
 * 
 * 
 * 
 * 
 * 
 * 
 */





/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // check if m && n return are 0 return nums []
    if(m === 0 && n === 0) {
        nums1 = []
    }
    //filter nums1 and remove 0
    nums1 = nums1.filter(i => i > 0)
    //filter nums2 and return 0
    nums2 = nums2.filter(i => i > 0)
console.log(nums2)
    // merge nums1 and nums2
    // sort it
    // set the sorted array to the num1
    nums1 = [...nums1, ...nums2].sort()
    console.log(nums1)
};

let nums1Arr = [1,2,3,0,0,0]
let  nums2Arr=  [2,5,6]
merge(nums1Arr, 3, nums2Arr, 3)
console.log(nums1Arr)


