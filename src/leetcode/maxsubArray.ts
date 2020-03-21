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
  let minAcc = 0,
    maxAcc = nums[0],
    Acc = 0,
    curr;
  //[-2, -1]; => -1;
  //[-2, 1]; => 1;
  //[-2, -3, -1]; => -1;
  //[2,-1,1,1]; => 3;
  //[-1, 1,2,1]; => 4;
  //[8,-19,5,-4,20]; => 21 => [5,-4,20];
  //[-2,1,-3,  4,-1,2,1,  -5,4]; => 6;
  //[1,2,-1,-2,   2,1,-2,1,4,   -5,4] => 6 => [2,1,-2,1,4];
  //[-3,1,0,-1,-2,  3,2,  -1];

  for (let i = 0; i < nums.length; i++) {
    curr = nums[i];

    Acc += curr;
    console.log(`curr: ${curr}, Acc: ${Acc}, minAcc: ${minAcc}, maxAcc: ${maxAcc}`);

    if (curr > maxAcc) {
      maxAcc = curr;
    }

    if (Acc <= minAcc) {
      minAcc = Acc;
      Acc = 0;
      console.log('Breakpoint at ', curr);
      continue;
    }
    if (Acc > maxAcc) {
      maxAcc = Acc;
    }

    console.log(`curr: ${curr}, Acc: ${Acc}, minAcc: ${minAcc}, maxAcc: ${maxAcc}`);
  }
  return maxAcc;
}

maxsubArray([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4]);
