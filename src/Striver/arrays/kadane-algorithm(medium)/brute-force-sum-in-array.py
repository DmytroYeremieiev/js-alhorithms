
#%%
from typing import List

def maxSubArray(arr: List[int]) -> int:
    
    return (arr, (0,1))

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
