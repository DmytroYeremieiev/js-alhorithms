import { expect } from 'chai';

import {uniteUnique} from '../src/uniteUnique';

describe('uniteUnique', () => {
  it('should return a [1, 3, 2, 5, 4]', () => {
    var result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    expect(result).to.be.deep.equal([1, 3, 2, 5, 4]);
  });
  it('should return a [1, 3, 2, [5], [4]]', () => {
    var result = uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
    expect(result).to.be.deep.equal([1, 3, 2, [5], [4]]);
  });
  it('should return a [1, 2, 3, 5]', () => {
    var result = uniteUnique([1, 2, 3], [5, 2, 1]);
    expect(result).to.be.deep.equal([1, 2, 3, 5]);
  });
  it('should return a [1, 2, 3, 5, 4, 6, 7, 8]', () => {
    var result = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
    expect(result).to.be.deep.equal([1, 2, 3, 5, 4, 6, 7, 8]);
  });
});
