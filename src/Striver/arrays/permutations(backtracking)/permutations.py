
# %%
from typing import List

def findPermutations(array: List[int], start = 0, result: List[int] = []) -> List[int]:
  if(start == len(array) - 1):
    print(f'[start:{start}], write the copy of uttermost leave as a result: {array.copy()}')
    result.append(array.copy())
    return
    
  print(f'[start:{start}], run a recursion for each iteration of {array}')

  for index in range(start, len(array)):
    print(f'[start:{start}], swap indexes: {start} and {index} of {array}')
    array[index], array[start] = array[start], array[index]
    findPermutations(array, start + 1, result)

  return result


print('\nfindPermutations: ', findPermutations([1,2,3]))


# %%
