import { expect } from 'chai';

import { Partition } from 'src/Algorithms Elluminated Part1/5-Partition';

describe('Partition', () => {
  it('Partition([3, 8, 2, 5, 1, 4, 7, 6], 0) should return [1,2,3,5,8,4,7,6].', () => {
    const result = Partition([3, 8, 2, 5, 1, 4, 7, 6], 0);
    console.log('result', result);
    // expect(result).to.eql([1, 2, 3, 5, 8, 4, 7, 6]);
    // expect(result).to.have.members([1, 2, 3, 5, 8, 4, 7, 6]);
    expect(result).to.have.ordered.members([1, 2, 3, 5, 8, 4, 7, 6]);
  });
  it('Partition([3, 8, 2, 5, 1, 4, 7, 6], 0) should return [2, 3, 8, 5, 1, 4, 7, 6].', () => {
    const result = Partition([3, 8, 2, 5, 1, 4, 7, 6], 2); // 2, 8, 3, 5, 1, 4 ,7 ,6
    console.log('result', result);
    expect(result).to.have.ordered.members([1, 2, 3, 5, 8, 4, 7, 6]);
  });
  it('Partition([3, 8, 5, 4, 7, 6], 0) should return [3, 8, 5, 4, 7, 6].', () => {
    const result = Partition([3, 8, 5, 4, 7, 6], 0);
    console.log('result', result);
    expect(result).to.eql([3, 8, 5, 4, 7, 6]);
  });
  it('Partition([3, 2], 0) should return [2, 3].', () => {
    const result = Partition([3, 2], 0);
    console.log('result', result);
    expect(result).to.eql([2, 3]);
  });
  it('Partition([3], 0) should return [3].', () => {
    const result = Partition([3], 0);
    console.log('result', result);
    expect(result).to.eql([3]);
  });
});
