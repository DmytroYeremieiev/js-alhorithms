import { expect } from 'chai';

import { QuickSortNaive } from 'src/Algorithms Elluminated Part1/5-QuickSort';

describe('QuickSortNaive', () => {
  it('QuickSortNaive([3, 8, 2, 5, 1, 4, 7, 6]) should return [1, 2, 3, 4, 5, 6, 7, 8].', () => {
    const result = QuickSortNaive([3, 8, 2, 5, 1, 4, 7, 6]);
    console.log('result', result);
    // expect(result).to.eql([1, 2, 3, 5, 8, 4, 7, 6]);
    // expect(result).to.have.members([1, 2, 3, 5, 8, 4, 7, 6]);
    expect(result).to.have.ordered.members([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
