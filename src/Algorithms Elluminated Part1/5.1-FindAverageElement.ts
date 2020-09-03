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

  console.log(`min: ${minVal}, max: ${maxVal}, ${average}`);

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

// console.log('r1', FindAverageElement([3, 8, 2, 5, 1, 4, 7, 6]));
// console.log('r2', FindAverageElement([3, 8, 2, 5, 1, 4, 7, 6, 9, 10, 11, 12, 13, 14, 16]));
console.log('r2', FindAverageElement([14, 3, 13, 8, 9, 2, 12, 5, 1, 11, 4, 7, 6, 10, 16]));
