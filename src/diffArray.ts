// Compare two arrays and return a new array with any items only found in one
// of the two given arrays, but not both. In other words,
// return the symmetric difference of the two arrays.
export function diffArray(arr1: any[], arr2: any[]): any[] {
  const newArr: any[] = Array<any>();
  for (let index = 0; index < arr1.length; index++) {
    if (!~arr2.indexOf(arr1[index])) {
      newArr.push(arr1[index]);
    }
  }
  for (let index = 0; index < arr2.length; index++) {
    if (!~arr1.indexOf(arr2[index])) {
      newArr.push(arr2[index]);
    }
  }
  return newArr;
}
