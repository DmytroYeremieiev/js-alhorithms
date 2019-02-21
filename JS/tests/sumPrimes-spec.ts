import { expect } from 'chai';

import {sumPrimes} from '../src/sumPrimes';

describe('sumPrimes', () => {
  it('should return a number', () => {
    var result = sumPrimes(10);
    expect(result).to.be.an.instanceOf(Number);
  });
  it('should return 17', () => {
    var result = sumPrimes(10);
    expect(result).to.be.equal(17);
  });
  it('should return 73156', () => {
    var result = sumPrimes(977);
    expect(result).to.be.equal(73156);
  });
});
