export function getNumLength(num: number) {
  if (num === 0) return 1;
  let dec = 0;
  while (num >= 1) {
    num = num / 10;
    dec += 1;
  }
  return dec;
}
