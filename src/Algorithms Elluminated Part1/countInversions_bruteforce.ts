export function countInversions(arr: Array<number>): number {
  let inversions = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        inversions += 1;
        console.log(`inversion: ${inversions}, `, arr[i], arr[j]);
      }
    }
  }
  return inversions;
}

// const inversions = countInversions([1, 3, 5, 2, 4, 6]);
// console.log('inversions', inversions);

const inversions = countInversions([6, 5, 4, 3, 2, 1]);
console.log('inversions', inversions);
