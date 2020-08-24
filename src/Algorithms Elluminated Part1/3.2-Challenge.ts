// Problem 3.2 You are given a unimodal array of n distinct elements,
// meaning that its entries are in increasing order up until its maximum element,
// after which its elements are in decreasing order.
// Give an algorithm to compute the maximum element of a unimodal array that runs in O(log n) time.

export function findMax(arr: Array<number>): number {
  console.log('findMax', arr, arr.length);
  if (arr.length === 1) {
    return arr[0];
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }
  const middleEl_Indx = Math.floor(arr.length / 2);
  let biggerHalf: Array<number>;
  if (arr[middleEl_Indx] > arr[middleEl_Indx + 1]) {
    biggerHalf = arr.slice(0, middleEl_Indx);
  } else {
    biggerHalf = arr.slice(middleEl_Indx + 1);
  }

  return findMax(biggerHalf);
}

console.log(
  'findMax',
  findMax([
    1,
    2,
    4,
    6,
    9,
    13,
    16,
    18,
    20,
    22,
    24,
    30,
    35,
    40,
    42,
    43,
    45,
    44,
    41,
    39,
    38,
    37,
    36,
    34,
    33,
    32,
    25,
    23,
    19,
    14,
    10,
  ])
);
