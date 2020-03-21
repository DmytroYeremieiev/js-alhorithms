/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
export function doSearch(array: Array<number>, targetValue: number): number {
  let min = 0;
  let max = array.length - 1;
  let guess, guessValue;
  let attempts = 0;
  while (min <= max) {
    attempts += 1;
    guess = Math.floor((min + max) / 2);
    guessValue = array[guess];

    if (guessValue === targetValue) {
      console.log('attempts', attempts);
      return guess;
    }
    if (targetValue > guessValue) {
      min = guess + 1;
    }
    if (targetValue < guessValue) {
      max = guess - 1;
    }
  }
  return -1;
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const target = 41;
console.log('doSearch(primes, ' + target + '), ', doSearch(primes, target), primes.indexOf(target));
