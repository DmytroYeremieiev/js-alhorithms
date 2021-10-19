function prefixSums(array) {
  const prefix_sums = new Array(array.length + 1);
  prefix_sums[0] = 0;
  for (let i = 1; i < prefix_sums.length; i++) {
    prefix_sums[i] = array[i - 1] + prefix_sums[i - 1];
  }
  return prefix_sums;
}

function count_total(prefixSums, start, end) {
  return prefixSums[end + 1] - prefixSums[start];
}
const sequence = [1, 2, 3, 4];
const r_sums = prefixSums(sequence);
console.log(`r_sums: ${r_sums}`);
console.log(`totalOfSlice [..,.., 3, 4]: ${count_total(r_sums, 2, 3)}`);
console.log(`totalOfSlice [1, 2, 3, ..]: ${count_total(r_sums, 0, 2)}`);
console.log(`totalOfSlice [1, 2, 3,  4]: ${count_total(r_sums, 0, 3)}`);
