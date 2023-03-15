
# %%
from typing import List

# copy = [[0 for i in range(len(matrix[0]))] for i in range(len(matrix))]
# print("copy: ", copy)

# worst complexity: row*col
def SetMatrixZeros(matrix: List[List[int]]) -> None: 
  print("\nInput matrix:")
  printMatrix(matrix)

  rowsToClear = [False for i in range(len(matrix))];
  columnsToClear = [False for i in range(len(matrix[0]))];
  for row in range(len(matrix)):
    for col in range(len(matrix[row])):
      element = matrix[row][col]
      if element == 0: 
        print("zero element: ", row, col)
        rowsToClear[row] = True;
        columnsToClear[col] = True;

  print("rowsToClear: ", rowsToClear,"\ncolumnsToClear: ", columnsToClear)

  for row in range(len(matrix)):
    for col in range(len(matrix[row])):
      if rowsToClear[row] or columnsToClear[col]:
        matrix[row][col] = 0
  
  print("\nZeroed matrix: ")
  printMatrix(matrix)

def printMatrix(matrix: List[List[int]]):
    for row in matrix:
        for val in row:
            print(val, end=' ')
        print()

if __name__ == "__main__":
  SetMatrixZeros(matrix=[
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ])

  SetMatrixZeros(matrix=[
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ])




# %%
