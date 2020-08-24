import { mergeSort } from 'src/Algorithms Elluminated Part1/mergeSort';

function closestLinearPair(points: Array<{ x: number; y: number }>): Array<{ x: number; y: number }> {
  const sortedPoints = mergeSort(points, item => {
    if (!item) {
      return;
    }
    return item.x;
  }) as Array<{ x: number; y: number }>;
  let closestPair = Array(2);
  let delta = null;
  console.log('sortedPoints', sortedPoints);
  for (let i = 0; i < sortedPoints.length; i++) {
    const curr = sortedPoints[i];
    const next = sortedPoints[i + 1];
    let newDelta = null;
    if (curr && next) {
      newDelta = Math.abs(curr.x - next.x);
    }
    if (!delta || (newDelta && newDelta < delta)) {
      delta = newDelta;
      closestPair = [curr, next];
    }
  }
  return closestPair;
}

const t1 = [
  { x: 1, y: 0 },
  { x: 3, y: 0 },
  { x: 6, y: 0 },
  { x: 9, y: 0 },
  { x: 4, y: 0 },
  { x: 11, y: 0 },
];
const t1_result = closestLinearPair(t1);
console.log('t1_result', t1_result);
