// Problem 3.3 You are given a sorted (from smallest to largest) array A of n distinct integers which can be positive, negative, or zero.
// You want to decide whether or not there is an index i such that A[i] = i. Design the fastest algorithm you can for solving this problem.

export function searchIndexAsElem(sortedArr: Array<number>, offset = 0): number {
  const middleEl_Indx = Math.floor(sortedArr.length / 2);
  console.log('sortedArr', sortedArr, 'middleEl_Indx: ', middleEl_Indx, ', offset: ', offset);
  if (sortedArr[middleEl_Indx] === offset + middleEl_Indx) {
    return sortedArr[middleEl_Indx];
  }
  let half: Array<number>;
  if (sortedArr[middleEl_Indx] > offset + middleEl_Indx) {
    // index growing pace +1 will never reach any further growing element: sortedArr[index], where index > middleEl_Indx
    // right half can be discarded, slicing left part
    half = sortedArr.slice(0, middleEl_Indx);
  } else {
    // biggest element of the left part sortedArr[middleEl_Indx] < middleEl_Indx
    // left half can be discarded
    half = sortedArr.slice(middleEl_Indx + 1);
    offset += middleEl_Indx + 1;
  }
  return searchIndexAsElem(half, offset);
}

console.log(
  'searchIndexAsElem',
  searchIndexAsElem([
    -23,
    -19,
    -17,
    -14,
    -12,
    -10,
    -8,
    -7,
    -6,
    -4,
    -2,
    -1,
    0,
    2,
    5,
    6,
    16, //10
    18, //17
    19,
    20,
    23,
    35,
    100,
    150,
  ])
);
