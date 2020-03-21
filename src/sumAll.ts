// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
export function sumAll(arr: number[]): number {
  const min = Math.min(...arr),
    max = Math.max(...arr);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
