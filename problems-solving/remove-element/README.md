
# Remove element
Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><strong>in-place</strong></a>. The order of the elements may be changed. Then return <em>the number of elements in </em><code>nums</code><em> which are not equal to </em><code>val</code>.

Consider the number of elements in <code>nums</code> which are not equal to <code>val</code> be <code>k</code>, to get accepted, you need to do the following things:

 - Change the array <code>nums</code> such that the first <code>k</code> elements of <code>nums</code> contain the elements which are not equal to <code>val</code>. The remaining elements of <code>nums</code> are not important as well as the size of <code>nums</code>.
 - Return <code>k</code>.

## Example 1:
<code>
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
</code>

## Example 2:
<code>
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
</code>

## Example 3:
<code>
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
</code>

## Constraints:

- 0 <= nums.length <= 100
- 0 <= nums[i] <= 50
- 0 <= val <= 100

<details>
  <summary><i>Solution, algorithm</i></summary>
  <p>
   - Define loop
   - Define i and this i has to be equal m - the lenght of nums1
   - Define j, and it has to be equal 0, this will be used to iterate through the second nums2 aray
   - then define th statement - and if j less then n -  do iteration, and increment i and j
   - return sorted nums1 from the merge function
  </p>
</details>
