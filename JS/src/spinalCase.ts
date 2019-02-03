//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
export function spinalCase(str:string) : string {
  const resultArr : string[] = [];
  for (let index=0; index<str.length; index++) {
    let currentSymbol = str[index];
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

spinalCase("jnjnj 11")