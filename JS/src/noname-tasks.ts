export {sumAll}
 
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
function sumAll(arr:[number, number]) {
  let min = Math.min(...arr), max = Math.max(...arr), sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
