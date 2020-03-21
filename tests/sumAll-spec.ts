import { expect } from 'chai';

import { sumAll } from '../src/sumAll';

describe('sumAll', () => {
  it('should return a number.', () => {
    const result = sumAll([1, 4]);
    expect(result).to.be.a('number');
  });
  it('should return 10', () => {
    const result = sumAll([1, 4]);
    expect(result).to.equal(10);
  });
  it('should return 10', () => {
    const result = sumAll([4, 1]);
    expect(result).to.equal(10);
  });
  it('should return 45', () => {
    const result = sumAll([5, 10]);
    expect(result).to.equal(45);
  });
  it('should return 45', () => {
    const result = sumAll([10, 5]);
    expect(result).to.equal(45);
  });
});
