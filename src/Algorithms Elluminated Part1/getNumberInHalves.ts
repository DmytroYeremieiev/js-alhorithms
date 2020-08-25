import { getNumLength } from 'src/Algorithms Elluminated Part1/getNumLength';

export function getNumberInHalves(num: number) {
  const dec = getNumLength(num);
  if (dec === 1) {
    return [num];
  }
  const power = Math.ceil(dec / 2);
  const firstHalf = Math.floor(num / Math.pow(10, power));
  const secondHalf = num - firstHalf * Math.pow(10, power);
  return [firstHalf, secondHalf];
}
