export function countInversions(arr: Array<number>): { arr: Array<number>; inversions: number } {
  console.log('subproblem', arr);
  if (arr.length === 1) {
    return { arr: arr, inversions: 0 };
  }
  const resultArr = Array(arr.length);
  const { arr: leftPartArr, inversions: leftSideInversions } = countInversions(arr.slice(0, arr.length / 2));
  const { arr: rightPartArr, inversions: rightSideInversions } = countInversions(arr.slice(arr.length / 2, arr.length));
  let l_Indx = 0,
    r_Indx = 0;
  let splitSideInversions = 0;
  for (let index = 0; index < arr.length; index++) {
    const reachedEndOfLeft = leftPartArr.length <= l_Indx;
    const reachedEndOfRight = rightPartArr.length <= r_Indx;

    if ((leftPartArr[l_Indx] < rightPartArr[r_Indx] && !reachedEndOfLeft) || reachedEndOfRight) {
      resultArr[index] = leftPartArr[l_Indx];
      if (!reachedEndOfLeft) {
        l_Indx++;
      }
      continue;
    }
    if ((leftPartArr[l_Indx] >= rightPartArr[r_Indx] && !reachedEndOfRight) || reachedEndOfLeft) {
      resultArr[index] = rightPartArr[r_Indx];
      if (!reachedEndOfLeft) {
        splitSideInversions += leftPartArr.length - l_Indx;
      }
      if (!reachedEndOfRight) {
        r_Indx++;
      }
      continue;
    }
  }
  return {
    arr: resultArr,
    inversions: leftSideInversions + rightSideInversions + splitSideInversions,
  };
}

// const inversions = countInversions([6, 5, 4, 3, 2, 1]); // 15
const inversions = countInversions([1, 3, 5, 2, 4, 6]); // 3
console.log('inversions', inversions);
