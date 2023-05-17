# %% 
from typing import List

def merge(intervals: List[List[int]]) -> List[List[int]]:
    mergedIntervals = []
    intervals.sort()
    for i in range(len(intervals)):
        [start, end] = intervals[i]
        [prevStart, prevEnd] =  mergedIntervals[-1] if mergedIntervals else [-1, -1]
        if(start <= prevEnd):
            mergedIntervals[-1] = [prevStart, max(prevEnd, end)]
        else:
            mergedIntervals.append(intervals[i])
    return mergedIntervals



input = [[1,3],[2,6],[8,10],[15,18]]
expected = [[1,6],[8,10],[15,18]]
res = merge(input)
if res != expected:
    print(f"[ERROR]: result is {res}\n but expected is: {expected}")

input = [[1,4],[0,4]]
expected = [[0,4]]
res = merge(input)
if res != expected:
    print(f"[ERROR]: result is {res}\n but expected is: {expected}")

# %%
input = [[1,4],[2,3]]
expected = [[1,4]]
res = merge(input)
if res != expected:
    print(f"[ERROR]: result is {res}\n but expected is: {expected}")
# %%
