export function mergeSort<T>(arr: Array<T>, selector: (item: T) => any): Array<T> {
  console.log('subproblem', arr);
  if (arr.length === 1) {
    return arr;
  }
  const result = Array(arr.length);
  const leftPartArr = mergeSort(arr.slice(0, arr.length / 2), selector);
  const rightPartArr = mergeSort(arr.slice(arr.length / 2, arr.length), selector);
  let l_Indx = 0,
    r_Indx = 0;
  for (let index = 0; index < arr.length; index++) {
    const leftPartArrCurrItem = leftPartArr[l_Indx],
      leftPartArrSelectedProp = selector(leftPartArrCurrItem),
      reachedEndOfLeft = leftPartArr.length <= l_Indx;

    const rightPartArrCurrItem = rightPartArr[r_Indx],
      rightPartArrSelectedProp = selector(rightPartArrCurrItem),
      reachedEndOfRight = rightPartArr.length <= r_Indx;

    if ((leftPartArrSelectedProp < rightPartArrSelectedProp && !reachedEndOfLeft) || reachedEndOfRight) {
      result[index] = leftPartArrCurrItem;

      if (!reachedEndOfLeft) {
        l_Indx++;
      }
      continue;
    }
    if ((leftPartArrSelectedProp >= rightPartArrSelectedProp && !reachedEndOfRight) || reachedEndOfLeft) {
      result[index] = rightPartArrCurrItem;

      if (!reachedEndOfRight) {
        r_Indx++;
      }
      continue;
    }
  }
  return result;
}

// const r = mergeSort([8, 3, 6, 2, 8, 1, 4, 7], item => item);
// const r = mergeSort([5, 3, 6, 2, 8, 1, 4, 7], item => item);
// console.log('r', r);
