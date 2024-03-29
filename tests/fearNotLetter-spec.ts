import { expect } from 'chai';

import { fearNotLetter } from '../src/fearNotLetter';

describe('fearNotLetter', () => {
  it('should return a "d"', () => {
    const result = fearNotLetter('abce');
    expect(result).to.be.equal('d');
  });
  it('should return a "i"', () => {
    const result = fearNotLetter('abcdefghjklmno');
    expect(result).to.be.equal('i');
  });
  it('should return a "u"', () => {
    const result = fearNotLetter('stvwx');
    expect(result).to.be.equal('u');
  });
  it('should return a "e"', () => {
    const result = fearNotLetter('bcdf');
    expect(result).to.be.equal('e');
  });
  it('should return a undefined', () => {
    const result = fearNotLetter('abcdefghijklmnopqrstuvwxyz');
    expect(result).to.be.equal(undefined);
  });
});
