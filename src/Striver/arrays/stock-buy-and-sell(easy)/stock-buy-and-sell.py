
#%%
from typing import List

def buyLowSellHigh(arr: List[int]) -> None:
    minP = float('inf')
    profit = 0
    for i in range(0, len(arr)):
        minP = min(arr[i], minP)
        profit = max(arr[i] - minP, profit)
    return profit


if buyLowSellHigh([7,1,5,3,6,4]) != 5:
    raise ValueError('[7,1,5,3,6,4] should return 5')

if buyLowSellHigh([7,6,4,3,1]) != 0:
    raise ValueError('[7,6,4,3,1] should return  0')

if buyLowSellHigh([2,4,1]) != 2:
    raise ValueError('[2,4,1] should return 2')

if buyLowSellHigh([3,2,6,5,0,3]) != 4:
    raise ValueError('[3,2,6,5,0,3] should return  4')

if buyLowSellHigh([1, 2]) != 1:
    raise ValueError('[1, 2] should return 1')

if buyLowSellHigh([2,1,2,1,0,1,2]) != 2:
    raise ValueError('[2,1,2,1,0,1,2] should return  2')

if buyLowSellHigh([2,1,4,1,0,1]) != 3:
    raise ValueError('[2,1,2,1,0,1,2] should return  3')

