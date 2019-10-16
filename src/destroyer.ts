// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.
export function destroyer(arr: any[], ...params: any[]) : any[] {
  const result = []
  for (let index = 0; index < arr.length; index++) {
    if (!~params.indexOf(arr[index])) {
      result.push(arr[index]);
    }
  }
  return result;
}

