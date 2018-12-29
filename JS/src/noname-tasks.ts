export {sumAll, diffArray, destroyer, whatIsInAName, spinalCase}

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str:string) : string {
  const resultArr : string[] = [];
  for (let index=0; index<str.length; index++) {
    let currentSymbol = str[index], previousSymbol = str[index-1];
    if (currentSymbol === '_' || currentSymbol === ' ' || currentSymbol === '-') {
      resultArr.push('-');
      continue;
    }
    if (currentSymbol === currentSymbol.toUpperCase()) {
      resultArr.push((index !== 0 && resultArr[resultArr.length-1] !== '-') ? '-'+currentSymbol.toLowerCase():currentSymbol.toLowerCase());
    } else {
      resultArr.push(currentSymbol.toLowerCase());
    }
  }
  return resultArr.join('')
}

function matchAllPropertiesOfSourceObj(source:{[key:string]:any}, objToMatch: {[key:string]:any}) : boolean {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if(!objToMatch[key] || objToMatch[key] !== source[key]){return false}
    }
  }
  return true
}

// Make a function that looks through an array of objects (first argument) and 
// returns an array of all objects that have matching name and value pairs (second argument). 
// Each name and value pair of the source object has to be present in the object from the collection 
// if it is to be included in the returned array.
function whatIsInAName(collection: object[], source: object) : object[] {
  // What's in a name?
  const result : object[] = [];
  // Only change code below this line
  
  for (let index = 0; index < collection.length; index++) {
    if(matchAllPropertiesOfSourceObj(source, collection[index])){
      result.push(collection[index]);
    }
  }
  // Only change code above this line
  return result;
}

whatIsInAName([
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }], 
  { last: "Capulet" });

// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr: any[], ...params: any[]) : any[] {
  const result = []
  for (let index = 0; index < arr.length; index++) {
    if (!~params.indexOf(arr[index])) {
      result.push(arr[index]);
    }
  }
  return result;
}


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


// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
function sumAll(arr: number[]) : number {
  let min = Math.min(...arr), max = Math.max(...arr), sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
