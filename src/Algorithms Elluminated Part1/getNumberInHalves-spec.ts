import { expect } from 'chai';
import { getNumberInHalves } from 'src/Algorithms Elluminated Part1/getNumberInHalves';

describe('getNumberInHalves', () => {
  it('getNumberInHalves(12) should return [1, 2].', () => {
    const result = getNumberInHalves(12);
    expect(result).to.be.include.all.members([1, 2]);
  });
  it('getNumberInHalves(123) should return [1, 23].', () => {
    const result = getNumberInHalves(123);
    expect(result).to.be.include.all.members([1, 23]);
  });
  it('getNumberInHalves(4512) should return [45, 12].', () => {
    const result = getNumberInHalves(4512);
    expect(result).to.be.include.all.members([45, 12]);
  });
  it('getNumberInHalves(1) should return [1].', () => {
    const result = getNumberInHalves(1);
    expect(result).to.be.include.all.members([1]);
  });
});
