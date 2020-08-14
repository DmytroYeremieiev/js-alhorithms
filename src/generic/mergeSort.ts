export function mergeSort(arr: Array<number>): Array<number> {
  console.log('subproblem', arr);
  if (arr.length === 1) {
    return arr;
  }
  const result = [];
  const leftPartArr = mergeSort(arr.slice(0, arr.length / 2));
  const rightPartArr = mergeSort(arr.slice(arr.length / 2, arr.length));
  let l_Indx = 0,
    r_Indx = 0;
  for (let index = 0; index < arr.length; index++) {
    const reachedEndOfLeft = leftPartArr.length <= l_Indx;
    const reachedEndOfRight = rightPartArr.length <= r_Indx;

    if ((leftPartArr[l_Indx] < rightPartArr[r_Indx] && !reachedEndOfLeft) || reachedEndOfRight) {
      result[index] = leftPartArr[l_Indx];

      if (!reachedEndOfLeft) {
        l_Indx++;
      }
      continue;
    }
    if ((leftPartArr[l_Indx] >= rightPartArr[r_Indx] && !reachedEndOfRight) || reachedEndOfLeft) {
      result[index] = rightPartArr[r_Indx];

      if (!reachedEndOfRight) {
        r_Indx++;
      }
      continue;
    }
  }
  return result;
}

let r = mergeSort([5, 3, 6, 2, 8, 1, 4, 7]);
console.log('r', r);
