import { expect } from 'chai';

import { getNumLength } from 'src/Algorithms Elluminated Part1/getNumLength';

describe('getNumLength', () => {
  it('getNumLength(1) should return 1.', () => {
    const result = getNumLength(1);
    expect(result).to.be.equal(1);
  });
  it('getNumLength(2) should return 1.', () => {
    const result = getNumLength(2);
    expect(result).to.be.equal(1);
  });
  it('getNumLength(20) should return 2.', () => {
    const result = getNumLength(20);
    expect(result).to.be.equal(2);
  });
  it('getNumLength(12) should return 2.', () => {
    const result = getNumLength(12);
    expect(result).to.be.equal(2);
  });
  it('getNumLength(0) should return 1', () => {
    const result = getNumLength(0);
    expect(result).to.be.equal(1);
  });
  it('getNumLength(103) should return 3.', () => {
    const result = getNumLength(103);
    expect(result).to.be.equal(3);
  });
});
