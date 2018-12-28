export {sumAll, diffArray}
 
// Compare two arrays and return a new array with any items only found in one
// of the two given arrays, but not both. In other words, 
// return the symmetric difference of the two arrays.
function diffArray(arr1: any[], arr2: any[]) : any[] {
  var newArr: any[] = Array<any>();
  for (let index = 0; index < arr1.length; index++) {
    if (!~arr2.indexOf(arr1[index])){
      newArr.push(arr1[index])
    }
  }
  for (let index = 0; index < arr2.length; index++) {
    if (!~arr1.indexOf(arr2[index])){
      newArr.push(arr2[index])
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
function sumAll(arr: number[]) : number {
  let min = Math.min(...arr), max = Math.max(...arr), sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
