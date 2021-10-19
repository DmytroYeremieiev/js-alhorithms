// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const c_map = new Map();

  for(let i = 0; i < N; i ++){
      c_map.set(i, 0);
  }
  
  for(let i = 0; i < A.length; i ++){
      const c_id = A[i] - 1;
      if(c_id === N) {
          for (const [c_id, c_value] of c_map) {
              c_map.set(c_id, c_value+1);
          }
          console.log(`max counter ${c_id}`, c_map);

      }else {
          const c_value = c_map.get(c_id);
          c_map.set(c_id, c_value+1);
          console.log(`increase ${c_id}`, c_map)

      }
  }
  const res = Array.from(c_map.values());
  console.log(res);
  return res;
}

console.log(`asdasd`);
