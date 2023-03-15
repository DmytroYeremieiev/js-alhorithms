
#%%
from typing import List

def maxSubArray(arr: List[int]) -> int:
    maxSumBest = -float('inf')
    maxSumAtIndex = 0
    s = 0
    subArray = []
    for i in range(len(arr)):
        maxSumAtIndex += arr[i]
        if maxSumAtIndex > maxSumBest:
            maxSumBest = maxSumAtIndex
            subArray = [s, i]
        if maxSumAtIndex < 0:
            maxSumAtIndex = 0
            s = i + 1
    return (maxSumBest, subArray)

def test(arr):
    (longest, subArray) = maxSubArray(arr)
    print(f"The longest subArray for {arr} with maximum sum is: ", longest)
    print("The subArray is: ")
    for i in range(subArray[0], subArray[1] + 1):
        print(arr[i], end=" ")
    print()

test([-2, 1, -3, 4, -1, 2, 1, -5, 4]) # [4, -1, 2, 1] has the largest sum = 6.

test([-2, -6, -3, -4, -1, -2, -1, -5, -4]) # [4, -1, 2, 1] has the largest sum = 6.


# %%
