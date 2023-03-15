# %%
from typing import List


def findNextPermutation(arr: List[int]):
  if arr == [] or len(arr) == 1: return arr
  # Find the last increasing sequence 
  startIndex = len(arr) - 1
  while(startIndex >= 0):
    breakPointIndex = startIndex - 1
    if(arr[breakPointIndex] < arr[startIndex]):
      break
    startIndex -= 1

  print(f'the break point starts at {breakPointIndex + 1} index')

  if breakPointIndex < 0: 
    print(f'last increasing sequence starts at {startIndex} index, reversing input')
    arr.reverse()
    return arr


  # Find a bigger element than a break point
  biggerThanBreakPoint = len(arr) - 1
  while(biggerThanBreakPoint >= 0):
    if(arr[biggerThanBreakPoint] > arr[breakPointIndex]):
      break
    biggerThanBreakPoint -= 1

  # swap 
  arr[biggerThanBreakPoint], arr[breakPointIndex] = arr[breakPointIndex], arr[biggerThanBreakPoint]

  #reverse the sequence after breakpoint to lessen it's value 
  arr[breakPointIndex + 1:] = arr[breakPointIndex + 1:][::-1]

  return arr;


res = findNextPermutation([1, 3, 5, 4, 2])
if(res != [1, 4, 2, 3, 5]):
  print('failed at [1, 3, 5, 4, 2]')
  
res = findNextPermutation([2, 4, 1, 3])
if(res != [2, 4, 3, 1]):
  print('failed at [2, 4, 1, 3]')
  
res = findNextPermutation([1, 2, 3])
if(res != [1, 3, 2]):
  print('failed at [1, 2, 3]')

res = findNextPermutation([2, 1, 3])
if(res != [2, 3, 1]):
  print('failed at [2, 1, 3]')

res = findNextPermutation([3, 2, 1])
if(res != [1, 2, 3]):
  print('failed at [3, 2, 1]')
  
res = findNextPermutation([1, 2])
if(res != [2, 1]):
  print('failed at [1, 2]')
  
res = findNextPermutation([1])
if(res != [1]):
  print('failed at [1]')
  
res = findNextPermutation([])
if(res != []):
  print('failed at []')
