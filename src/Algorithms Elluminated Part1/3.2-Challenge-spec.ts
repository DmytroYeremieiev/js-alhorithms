import { expect } from 'chai';

import { findMax } from 'src/Algorithms Elluminated Part1/3.2-Challenge';

describe('findMax', () => {
  it('should return 45.', () => {
    const result = findMax([
      1,
      2,
      4,
      6,
      9,
      13,
      16,
      18,
      20,
      22,
      24,
      30,
      35,
      40,
      42,
      43,
      45,
      44,
      41,
      39,
      38,
      37,
      36,
      34,
      33,
      32,
      25,
      23,
      19,
      14,
      10,
    ]);
    expect(result).to.be.equal(45);
  });
  it('should return 2.', () => {
    const result = findMax([1, 2]);
    expect(result).to.be.equal(2);
  });
  it('should return 3.', () => {
    const result = findMax([1, 2, 3]);
    expect(result).to.be.equal(3);
  });
  it('should return 1.', () => {
    const result = findMax([1]);
    expect(result).to.be.equal(1);
  });
});
