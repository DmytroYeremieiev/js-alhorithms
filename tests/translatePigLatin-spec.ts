import { expect } from 'chai';

import { translatePigLatin } from '../src/translatePigLatin';

describe('translatePigLatin', () => {
  it('should return a "aliforniacay"', () => {
    const result = translatePigLatin('california');
    expect(result).to.be.equal('aliforniacay');
  });
  it('should return a "aragraphspay"', () => {
    const result = translatePigLatin('paragraphs');
    expect(result).to.be.equal('aragraphspay');
  });
  it('should return a "oveglay"', () => {
    const result = translatePigLatin('glove');
    expect(result).to.be.equal('oveglay');
  });
  it('should return a "algorithmway"', () => {
    const result = translatePigLatin('algorithm');
    expect(result).to.be.equal('algorithmway');
  });
  it('should return a "eightway"', () => {
    const result = translatePigLatin('eight');
    expect(result).to.be.equal('eightway');
  });
});
