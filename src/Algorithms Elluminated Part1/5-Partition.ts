export const Partition = (arr: Array<number>, leftIndex: number, rightIndex: number, pivotIndex: number): number => {
  // console.log('before pre-processing step', arr, `,  pivotIndex: ${pivotIndex}, pivot: ${arr[pivotIndex]}`);
  Swap(arr, leftIndex, pivotIndex);
  pivotIndex = leftIndex;
  // console.log('after pre-processing step', arr, `,  pivotIndex: ${pivotIndex}, pivot: ${arr[pivotIndex]}`);

  let i = leftIndex + 1; // remember the last position that an element less than the pivot was placed in
  let j = leftIndex + 1; // scanner, from left to right-1 boundary(inclusive)

  while (j <= rightIndex) {
    if (arr[j] < arr[pivotIndex]) {
      // console.log(`found element: ${arr[j]} less than the pivot, j: ${j}, i: ${i}`);
      Swap(arr, i, j);
      i += 1;
    }
    j += 1;
  }
  // console.log('after loop: ', arr, `i: ${i}`);
  const newPivotIndex = i - 1;
  Swap(arr, newPivotIndex, pivotIndex);
  // console.log('final result: ', arr, `i: ${i}`);
  return newPivotIndex;
};

export const PartitionHelper = (arr: Array<number>, leftIndex: number, rightIndex: number, pivotIndex: number) => {
  Partition(arr, leftIndex, rightIndex, pivotIndex);
  return arr;
};
const Swap = (arr: Array<number>, firstIndex: number, secondIndex: number) => {
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};

// console.log('r1', Partition([3, 8, 2, 5, 1, 4, 7, 6], 0, 7, 5));
// console.log('r1', Partition([3, 8, 2, 5, 1, 4, 7, 6], 5, 7, 7));
// console.log('r1', Partition([3, 8, 2, 5, 1, 4, 7, 6], 0, 3, 3));
