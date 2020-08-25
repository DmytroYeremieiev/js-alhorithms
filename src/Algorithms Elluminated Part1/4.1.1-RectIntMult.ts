import { getNumLength } from 'src/Algorithms Elluminated Part1/getNumLength';
import { getNumberInHalves } from 'src/Algorithms Elluminated Part1/getNumberInHalves';

export function RectIntMult(first: number, second: number): number {
  const dec = getNumLength(first);
  console.log(`[RectIntMult], first: ${first}, second: ${second}, dec: ${dec}`);
  if (dec === 1) {
    return first * second;
  }
  const [a, b] = getNumberInHalves(first),
    [c, d] = getNumberInHalves(second);
  const a_c = RectIntMult(a, c),
    a_d = RectIntMult(a, d),
    b_c = RectIntMult(b, c),
    b_d = RectIntMult(b, d);
  return Math.pow(10, dec) * a_c + Math.pow(10, dec / 2) * (a_d + b_c) + b_d;
}

console.log('RectIntMult', RectIntMult(1234, 5678));
