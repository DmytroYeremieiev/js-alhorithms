
#%%
from typing import List

def maxSubArray(arr: List[int]) -> int:
    maxSumBest = -float('inf')
    maxSumAtIndex = 0
    s = 0
    subArray = ()
    for i in range(len(arr)):
        maxSumAtIndex += arr[i]
        if maxSumAtIndex > maxSumBest:
            maxSumBest = maxSumAtIndex
            subArray = (s, i)
        # Carrying a subArray which give you negative sum will be of no use because
        # it will decrease your sum.   
        if maxSumAtIndex < 0: 
            maxSumAtIndex = 0
            s = i + 1
          
    return (maxSumBest, subArray)

def test(arr):
    (longest, (start, end)) = maxSubArray(arr)
    print(f"The longest subArray for {arr} with maximum sum is: ", longest)
    print(f"The subArray is: {(start, end)}")
    for i in range(start, end + 1):
        print(arr[i], end=" ")
    print()

test([-2, 1, -3, 4, -1, 2, 1, -5, 4]) # [4, -1, 2, 1] has the largest sum = 6.

test([-2, -6, -3, -4, -1, -2, -1, -5, -4]) # [4, -1, 2, 1] has the largest sum = 6.


# %%
