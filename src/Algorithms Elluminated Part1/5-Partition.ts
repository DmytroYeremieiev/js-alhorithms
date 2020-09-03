export function Partition(arr: Array<number>, pivotIndex: number): Array<number> {
  let i = 1;
  let temp = null;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] < arr[pivotIndex]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i += 1;
    }
  }
  temp = arr[i - 1];
  arr[i - 1] = arr[pivotIndex];
  arr[pivotIndex] = temp;
  return arr;
}

console.log('r1', Partition([3, 8, 2, 5, 1, 4, 7, 6], 0));
