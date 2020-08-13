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
    if (leftPartArr[l_Indx] < rightPartArr[r_Indx]) {
      result[index] = leftPartArr[l_Indx];
      if (leftPartArr.length - 1 > l_Indx) {
        l_Indx++;
      } else {
        result[index + 1] = rightPartArr[r_Indx];
        break;
      }
    } else {
      result[index] = rightPartArr[r_Indx];
      if (rightPartArr.length - 1 > r_Indx) {
        r_Indx++;
      } else {
        result[index + 1] = leftPartArr[l_Indx];
        break;
      }
    }
  }
  return result;
}

let r = mergeSort([5, 3, 6, 2, 8, 1, 4, 7]);
console.log('r', r);
