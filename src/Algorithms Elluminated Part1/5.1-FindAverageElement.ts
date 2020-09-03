export function FindAverageElement(arr: Array<number>): number {
  let minEl = arr[0];
  let maxEl = arr[0];
  let averageEl = arr[0];
  const average_diff = 0;
  for (let j = 1; j < arr.length; j++) {
    const currEl = arr[j];
    if (currEl > maxEl) {
      maxEl = arr[j];
    }
    if (currEl < minEl) {
      minEl = arr[j];
    }
    const average = (maxEl + minEl) / 2;
    const average_diff = Math.abs(currEl - average);
    // average_diff = temp_average_diff;
    console.log(
      `currEl: ${currEl}, average_diff: ${average_diff}, average ${average}, temp_average_diff: ${temp_average_diff}, min: ${minEl}, max: ${maxEl}`
    );
    if (temp_average_diff < average_diff) {
      average_diff = temp_average_diff;
      averageEl = currEl;
    }
  }
  return averageEl;
}

console.log('r1', FindAverageElement([3, 8, 2, 5, 1, 4, 7, 6]));
