/* https://leetcode.com/problems/maximum-subarray/
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6. */
/**
 * @param {number[]} nums
 * @return {number}
 */
export function maxsubArray(nums: number[]) {
  let min = 0, max = 0, accum = 0, curr, next;
  //[-2, -1]; => -1;
  //[-2, -3, -1]; => -1;
  //[8,-19,5,-4,20]; => 21
  for (let i = 0; i < nums.length; i++) {
    curr = nums[i];
    next = nums[i+1];
    if (curr < min) min = curr;
    if (curr > max) max = curr;

    accum += curr;
    console.log(`curr: ${curr},   min: ${min}, max: ${max}, accum: ${accum}`);

    if (accum > max) {
      max = accum;
    }
    if (accum <= min) {
      accum = 0;
    } else {
      min = accum;
    }

  }
  return max;
}