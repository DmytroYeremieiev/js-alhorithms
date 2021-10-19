function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const counters = new Array(N);
  for (let i = 0; i < counters.length; i++) {
    counters[i] = 0;
  }
  let max_c_value = 0;
  for (let i = 0; i < A.length; i++) {
    const c_index = A[i] - 1;
    if (c_index === N) {
      for (let i = 0; i < counters.length; i++) {
        counters[i] = max_c_value;
      }
    } else {
      counters[c_index] = counters[c_index] + 1;
      if (counters[c_index] > max_c_value) {
        max_c_value = counters[c_index];
      }
    }
  }
  return counters;
}

const result = solution(5, [3, 4, 4, 6, 1, 4, 4]); //output [3, 2, 2, 4, 2]
console.log(`result: `, result);
