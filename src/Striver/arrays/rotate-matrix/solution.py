# %% 
from typing import List
from typing import Deque


def rotate( matrix: List[List[int]]) -> None:
    stack = Deque()

    # Peeling
    for layer in range(int(len(matrix) / 2)):
        # peel layer starting from the outmost
        portion = len(matrix) - 2*layer - 1
        print(f'Gather layer {layer} with portion size {portion}')
        for topI in range(portion):
            stack.append(matrix[layer][topI + layer])
        for rightI in range(portion):
            stack.append(matrix[rightI + layer][portion + layer])
        for bottomI in range(portion, 0, -1):
            stack.append(matrix[portion + layer][bottomI + layer])
        for leftI in range(portion, 0, -1):
            stack.append(matrix[leftI + layer][layer])

    print("stack: ", stack)

    # Insertion
    for layer in range(int(len(matrix) / 2)):
        # peel layer starting from the outmost
        portion = len(matrix) - 2*layer - 1
        print(f'Construct layer {layer} with portion size {portion}')

        for rightI in range(portion):
            matrix[rightI + layer][portion + layer] = stack.popleft()
        for bottomI in range(portion, 0, -1):
            matrix[portion + layer][bottomI + layer] = stack.popleft()
        for leftI in range(portion, 0, -1):
            matrix[leftI + layer][layer] = stack.popleft()
        for topI in range(portion):
            matrix[layer][topI + layer] = stack.popleft()
            
    return matrix

matrix = [[1,2,3],[4,5,6],[7,8,9]]
res = rotate(matrix=matrix)
if(res != [[7,4,1],[8,5,2],[9,6,3]]):
    print("[ERROR] in [[1,2,3],[4,5,6],[7,8,9]], output should be [[7,4,1],[8,5,2],[9,6,3]]" )

matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
res = rotate(matrix=matrix)
if(res != [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]):
    print("[ERROR] in [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]], output should be [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]")

matrix = [[1,2,3,4,5],
          [6,7,8,9,10],
          [11,12,13,14,15],
          [16,17,18,19,20],
          [21,22,23,24,25]]
res = rotate(matrix=matrix)
if(res != [[21,16,11,6,1],[22,17,12,7,2],[23,18,13,8,3],[24,19,14,9,4],[25,20,15,10,5]]):
    print(f"[ERROR] in {res}, output should be [[21,16,11,6,1],[22,17,12,7,2],[23,18,13,8,3],[24,19,14,9,4],[25,20,15,10,5]]")




# %%
