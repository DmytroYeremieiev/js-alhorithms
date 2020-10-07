import { Partition } from './5-Partition';

export function QuickSortNaive(arr: Array<number>, l_indX: number, r_indX: number): void {
  if (l_indX >= r_indX) {
    return; // for 0, 1 lengths
  }
  const pivotIndex = l_indX; // choose pivot as leftmost element
  const newPivotIndex = Partition(arr, l_indX, r_indX, pivotIndex);
  QuickSortNaive(arr, l_indX, newPivotIndex - 1);
  QuickSortNaive(arr, newPivotIndex + 1, r_indX);
}
export const QuickSortNaiveHelper = (arr: Array<number>) => {
  QuickSortNaive(arr, 0, arr.length);
  return arr;
};

console.log('r1', QuickSortNaiveHelper([3, 8, 2, 5, 1, 4, 7, 6]));
