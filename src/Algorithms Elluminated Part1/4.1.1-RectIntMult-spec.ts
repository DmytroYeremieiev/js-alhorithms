import { expect } from 'chai';

import { RectIntMult } from 'src/Algorithms Elluminated Part1/4.1.1-RectIntMult';

describe('RectIntMult', () => {
  it('RectIntMult(25, 25) should return 625.', () => {
    const result = RectIntMult(25, 25);
    expect(result).to.be.equal(625);
  });
  // it('RectIntMult(123, 123) should return 15129.', () => {
  //   const result = RectIntMult(123, 123);
  //   expect(result).to.be.equal(15129);
  // });
  it('RectIntMult(2, 2) should return 4.', () => {
    const result = RectIntMult(2, 2);
    expect(result).to.be.equal(4);
  });
  it('RectIntMult(1, 0) should return 0.', () => {
    const result = RectIntMult(1, 0);
    expect(result).to.be.equal(0);
  });
  it('RectIntMult(1412, 3141) should return 4435092.', () => {
    const result = RectIntMult(1412, 3141);
    expect(result).to.be.equal(4435092);
  });
});
