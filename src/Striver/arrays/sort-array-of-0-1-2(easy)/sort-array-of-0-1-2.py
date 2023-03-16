
#%%
from typing import List

def maxSubArray(arr: List[int]) -> int:
    dict = {
        0: 0,
        1: 0,
        2: 0
    }
    for i in range(len(arr)):
        dict[arr[i]] = dict[arr[i]] + 1
    print("Counted: ", dict)

    for i in range(len(arr)):
        if dict[0] > 0:
            arr[i] = 0
            dict[0] = dict[0] - 1; 
            continue
        if dict[1] > 0:
            arr[i] = 1
            dict[1] = dict[1] - 1;
            continue
        if dict[2] > 0:
            arr[i] = 2
            dict[2] = dict[2] - 1; 
            continue

    return arr


print(maxSubArray([2,0,2,1,1,0])) # [0,0,1,1,2,2]
print(maxSubArray([2,0,1])) # [0,1,2]
print(maxSubArray([0])) # [0]


# %%
