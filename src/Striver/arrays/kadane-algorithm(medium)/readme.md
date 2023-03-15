# Kadane’s Algorithm : Maximum Subarray Sum in an Array(Medium)

## Problem Statement

Given an integer array arr, find the contiguous subarray (containing at least one number) which has the largest sum and returns its sum and prints the subarray.

Examples:

```javascript
Example 1:

Input: arr = [-2,1,-3,4,-1,2,1,-5,4] 

Output: 6 

Explanation: [4,-1,2,1] has the largest sum = 6. 

Examples 2: 

Input: arr = [1] 

Output: 1 

Explanation: Array has only one element and which is giving positive sum of 1. 
```

## Intuition

We carrying only a sub array which gives a positive sum, even if it contains negative numbers inside: `[4, -1, 2]`.

Carrying a subArray which give you negative sum will be of no use. Because you want to maximize the subArray sum. And carrying the negative sum will automatically decrease your sum.

If all elements are negative the greatest sum will come from a single smallest negative element. `start` and `end` indexes of such subArray will be equal.
