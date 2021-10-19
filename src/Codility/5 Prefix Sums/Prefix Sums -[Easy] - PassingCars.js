function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let pairs = 0;
  for (let i = 0; i < A.length; i++) {
    const firstCar = A[i];
    for (let j = i; j < A.length; j++) {
      const secondCar = A[j];
      if (firstCar - secondCar === -1) {
        pairs += 1;
        console.log(`pair: ${i} - ${j}`);
      }
    }
  }
  return pairs > 1000000000 ? -1 : pairs;
}

console.log(solution([0, 1, 0, 1, 1])); // 5, We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).
