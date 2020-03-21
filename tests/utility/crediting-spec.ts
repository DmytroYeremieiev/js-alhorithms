import { expect } from 'chai';

import { Prospect } from '../../src/utility/crediting';

describe('crediting', () => {
  it('should e a single number"', () => {
    const result = new Prospect(0.0599, [26.5, 26.5, 26.5, 26.5], 907000, 0.15);
    expect(result).to.be.a('number');
  });
});
