export function Partition(arr: Array<number>, pivotIndex: number): Array<number> {
  console.log('before pre-processing step', arr, `,  pivotIndex: ${pivotIndex}`);

  let i = 1;
  let temp = arr[0];
  arr[0] = arr[pivotIndex];
  arr[pivotIndex] = temp;
  pivotIndex = 0;
  console.log('after pre-processing step', arr, `,  pivotIndex: ${pivotIndex}`);
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] < arr[pivotIndex]) {
      console.log('if arr[j] < arr[pivotIndex]', arr, `arr[j]: ${arr[j]}, j: ${j}, i: ${i}`);
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i += 1;
    }
  }
  console.log('after look: ', arr, i);
  temp = arr[i - 1];
  arr[i - 1] = arr[pivotIndex];
  arr[pivotIndex] = temp;
  console.log('final result: ', arr, i);
  return arr;
}

console.log('r1', Partition([3, 8, 2, 5, 1, 4, 7, 6], 2));
