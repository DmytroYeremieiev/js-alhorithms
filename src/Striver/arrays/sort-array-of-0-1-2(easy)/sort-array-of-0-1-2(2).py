
#%%
from typing import List

# Time complexity: N => O(n)
def sortColors(arr: List[int]) -> int:
    low = 0
    mid = 0
    high = len(arr) - 1
    while mid <= high:
        if arr[mid] == 0:
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1
            mid += 1
        elif arr[mid] == 1:
            mid += 1
        elif arr[mid] == 2:
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1

    return arr


print('  ',sortColors([1,2,0,2,1,1,0,2])) # [0, 0, 1, 1, 1, 2, 2, 2]
print('  ',sortColors([2,0,1])) # [0, 1, 2]
print('  ',sortColors([0])) # [0]


# %%
