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
// if it is to be included in the returned array
export function whatIsInAName(collection: object[], source: object) : object[] {
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
