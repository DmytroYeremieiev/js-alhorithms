import { expect } from 'chai';

import {sumFibs} from '../src/sumFibs';

describe('sumFibs', () => {
  it('should return a number', () => {
    var result = sumFibs(1);
    expect(result).to.be.an.instanceOf(Number);
  });
  it('should return 1785', () => {
    var result = sumFibs(1000);
    expect(result).to.be.equal(1785);
  });
  it('should return 4613732', () => {
    var result = sumFibs(4000000);
    expect(result).to.be.equal(4613732);
  });
  it('should return 5', () => {
    var result = sumFibs(4);
    expect(result).to.be.equal(5);
  });
  it('should return 60696', () => {
    var result = sumFibs(75024);
    expect(result).to.be.equal(60696);
  });
  it('should return 135721', () => {
    var result = sumFibs(75025);
    expect(result).to.be.equal(135721);
  });
});
