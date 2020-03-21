import { expect } from 'chai';

import { pairElement } from '../src/pairElement';

describe('pairElement', () => {
  it('should return a [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', () => {
    const result = pairElement('ATCGA');
    expect(result).to.be.deep.equal([
      ['A', 'T'],
      ['T', 'A'],
      ['C', 'G'],
      ['G', 'C'],
      ['A', 'T']
    ]);
  });
  it('should return a [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]', () => {
    const result = pairElement('TTGAG');
    expect(result).to.be.deep.equal([
      ['T', 'A'],
      ['T', 'A'],
      ['G', 'C'],
      ['A', 'T'],
      ['G', 'C']
    ]);
  });
  it('should return a [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]', () => {
    const result = pairElement('CTCTA');
    expect(result).to.be.deep.equal([
      ['C', 'G'],
      ['T', 'A'],
      ['C', 'G'],
      ['T', 'A'],
      ['A', 'T']
    ]);
  });
});
