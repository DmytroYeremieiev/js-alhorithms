import { expect } from 'chai';

import * as nonameTasks from '../src/noname-tasks';

describe('sumAll', () => {
  it('should return a number.', () => {
    var result = nonameTasks.sumAll([1, 4]);
    expect(result).to.be.a('number');
  });
  it('should return 10', () => {
    var result = nonameTasks.sumAll([1, 4]);
    expect(result).to.equal(10);
  });
  it('should return 10', () => {
    var result = nonameTasks.sumAll([4, 1]);
    expect(result).to.equal(10);
  });
  it('should return 45', () => {
    var result = nonameTasks.sumAll([5, 10]);
    expect(result).to.equal(45);
  });
  it('should return 45', () => {
    var result = nonameTasks.sumAll([10, 5]);
    expect(result).to.equal(45);
  });
})

