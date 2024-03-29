import { expect } from 'chai';

import { PartitionHelper } from 'src/Algorithms Elluminated Part1/5-Partition';

describe('Partition', () => {
  it('Partition([3, 8, 2, 5, 1, 4, 7, 6], 0, 7, 0) should return [1,2,3,5,8,4,7,6].', () => {
    const result = PartitionHelper([3, 8, 2, 5, 1, 4, 7, 6], 0, 7, 0);
    console.log('result', result);
    // expect(result).to.eql([1, 2, 3, 5, 8, 4, 7, 6]);
    // expect(result).to.have.members([1, 2, 3, 5, 8, 4, 7, 6]);
    expect(result).to.have.ordered.members([1, 2, 3, 5, 8, 4, 7, 6]);
  });
  it('PartitionHelper([[3, 8, 2, 5, 1, 4, 7, 6], 0, 7, 2) should return [2, 3, 8, 5, 1, 4, 7, 6].', () => {
    const result = PartitionHelper([3, 8, 2, 5, 1, 4, 7, 6], 0, 7, 2); // 2, 8, 3, 5, 1, 4 ,7 ,6
    console.log('result', result);
    expect(result).to.have.ordered.members([1, 2, 3, 5, 8, 4, 7, 6]);
  });
  it('PartitionHelper([3, 8, 5, 4, 7, 6], 0, 5, 0) should return [3, 8, 5, 4, 7, 6].', () => {
    const result = PartitionHelper([3, 8, 5, 4, 7, 6], 0, 5, 0);
    console.log('result', result);
    expect(result).to.eql([3, 8, 5, 4, 7, 6]);
  });
  it('PartitionHelper([3, 2], 0, 1, 0) should return [2, 3].', () => {
    const result = PartitionHelper([3, 2], 0, 1, 0);
    console.log('result', result);
    expect(result).to.eql([2, 3]);
  });
  it('PartitionHelper([3], 0, 0, 0) should return [3].', () => {
    const result = PartitionHelper([3], 0, 0, 0);
    console.log('result', result);
    expect(result).to.eql([3]);
  });
});
