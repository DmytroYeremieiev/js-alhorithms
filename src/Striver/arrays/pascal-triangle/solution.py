
# %%
from typing import List

def buildPascalTriangle(N: int): 
  if N == 1:
    return [
      [1]
    ]
  if N == 2:
    return [
      [1],
      [1, 1]
    ]
  matrix = [
    [1],
    [1, 1]
  ]
  for row in range(2, N):
    if len(matrix) == row: 
      matrix.append([])
    for col in range(row+1):
      if(col == 0): 
        matrix[row].append(1)
        continue
      if(col == row): 
        matrix[row].append(1)
        continue
      leftParent = matrix[row-1][col-1]
      rightParent = matrix[row-1][col]
      matrix[row].append(leftParent + rightParent)
  return matrix

def printMatrix(matrix: List[List[int]]):
    print("\n")
    for row in matrix:
        for val in row:
            print(val, end=' ')
        print()


r = [[1]*(i+1) for i in range(3)]
printMatrix(r)

# printMatrix(buildPascalTriangle(1));
# printMatrix(buildPascalTriangle(2));
# printMatrix(buildPascalTriangle(3));
# printMatrix(buildPascalTriangle(4));
# printMatrix(buildPascalTriangle(5));
# printMatrix(buildPascalTriangle(6));
# printMatrix(buildPascalTriangle(7));






# %%
