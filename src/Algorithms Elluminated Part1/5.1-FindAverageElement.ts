export function FindAverageElement(arr: Array<number>): number {
  let minVal = arr[0];
  let maxVal = arr[0];
  for (let j = 1; j < arr.length; j++) {
    const currEl = arr[j];
    if (currEl > maxVal) {
      maxVal = arr[j];
    }
    if (currEl < minVal) {
      minVal = arr[j];
    }
  }
  const average = (maxVal + minVal) / 2;

  console.log(`min: ${minVal}, max: ${maxVal}, average: ${average}`);

  let averageEl = arr[0];
  let average_diff = maxVal - minVal;

  for (let j = 1; j < arr.length; j++) {
    const currEl = arr[j];
    const temp_average_diff = Math.abs(currEl - average);
    console.log(`currEl: ${currEl}, average_diff: ${average_diff}, temp_average_diff: ${temp_average_diff}`);
    if (temp_average_diff < average_diff) {
      average_diff = temp_average_diff;
      averageEl = currEl;
    }
  }
  return averageEl;
}

// console.log('r1: ', FindAverageElement([3, 8, 2, 5, 1, 4, 7, 6])); //  4 or 5
// console.log('r2: ', FindAverageElement([3, 8, 2, 5, 1, 4, 7, 6, 9, 10, 11, 12, 13, 14, 16])); // 8
// console.log('r3: ', FindAverageElement([14, 3, 13, 8, 9, 2, 12, 5, 1, 11, 4, 7, 6, 10, 16])); // 8

console.log('r4: ', FindAverageElement([1, 20, 3, 4, 8])); // 4
// console.log('r5: ', FindAverageElement([6, 8, 9, 2, 3])); // 3
// console.log('r6: ', FindAverageElement([3, 2, 8, 9, 5, 1, 10, 4, 7, 6])); // 5 or 6
// console.log('r7: ', FindAverageElement([6, 8, 9, 2])); // 6 or 8
