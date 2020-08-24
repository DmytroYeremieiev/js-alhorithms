function FastPower(a: number, b: number): number {
  console.group();
  let ans = 0;
  console.log(`a: ${a}, b: ${b}`);
  if (b === 1) {
    console.groupEnd();
    return a;
  } else {
    const c = a * a;
    ans = FastPower(c, Math.floor(b / 2));
  }
  if (b % 2 === 1) {
    console.log(`a * ans: ${a * ans}`);
    console.groupEnd();
    return a * ans;
  } else {
    console.log(`ans: ${ans}`);
    console.groupEnd();
    return ans;
  }
}

console.log('FastPower(2, 4)', FastPower(2, 128));
