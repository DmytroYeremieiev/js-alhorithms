export function NaivePartition(arr: Array<number>, l_indX: number, r_indX: number): number {
  console.log('before pre-processing step', arr, `l: ${arr[l_indX]}, r: ${arr[r_indX]}`);
  let i = l_indX;
  let temp = null;
  const pivotIndex = l_indX;
  for (let j = l_indX; j < r_indX; j++) {
    if (arr[j] < arr[pivotIndex]) {
      console.log('if arr[j] < arr[pivotIndex]', arr, `arr[j]: ${arr[j]}, j: ${j}, i: ${i}`);
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i += 1;
    }
  }
  temp = arr[i - 1];
  arr[i - 1] = arr[pivotIndex];
  arr[pivotIndex] = temp;
  console.log('final result: ', arr, `pivot: ${i - 1}`);
  return i - 1;
}

console.log('r1', NaivePartition([3, 8, 2, 5, 1, 4, 7, 6], 0, 7));
