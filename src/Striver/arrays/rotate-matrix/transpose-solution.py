# %% 
from typing import List
from typing import Deque


def rotate( matrix: List[List[int]]) -> None:
    # transpose matrix 
    print(f"original matrix\n {matrix}")
    for r in range(len(matrix)): 
        for c in range(r):
            matrix[r][c], matrix[c][r] =  matrix[c][r], matrix[r][c]
    
    print(f"matrix after transpose\n {matrix}")

    # reverse each row 
    for r in range(len(matrix)): 
        matrix[r].reverse()

    print(f"final matrix\n {matrix}")


matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ]
res = rotate(matrix=matrix)
if(matrix != [[7,4,1],[8,5,2],[9,6,3]]):
    print("[ERROR] in [[1,2,3],[4,5,6],[7,8,9]], output should be [[7,4,1],[8,5,2],[9,6,3]]" )

matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
res = rotate(matrix=matrix)
if(matrix != [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]):
    print("[ERROR] in [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]], output should be [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]")

matrix = [[1,2,3,4,5],
          [6,7,8,9,10],
          [11,12,13,14,15],
          [16,17,18,19,20],
          [21,22,23,24,25]]
res = rotate(matrix=matrix)
if(matrix != [[21,16,11,6,1],[22,17,12,7,2],[23,18,13,8,3],[24,19,14,9,4],[25,20,15,10,5]]):
    print(f"[ERROR] in {res}, output should be [[21,16,11,6,1],[22,17,12,7,2],[23,18,13,8,3],[24,19,14,9,4],[25,20,15,10,5]]")




# %%
