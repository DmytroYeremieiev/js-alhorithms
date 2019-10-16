import { expect } from 'chai';
import 'mocha'
import {maxsubArray} from '../../src/leetcode/maxsubArray';

describe('maxsubArray', () => {
  it('should return 6', () => {
    var result = maxsubArray([-2,1,-3,  4,-1,2,1,  -5,4]);
    expect(result).to.be.equal(6);
  });
  it('should return -1', () => {
    var result = maxsubArray([-2, -1]);
    expect(result).to.be.equal(-1);
  });
  it('should return 1', () => {
    var result = maxsubArray([-2, 1]);
    expect(result).to.be.equal(1);
  });
  it('should return -1', () => {
    var result = maxsubArray([-2, -3, -1]);
    expect(result).to.be.equal(-1);
  });
  it('should return 21', () => {
    var result = maxsubArray([8,-19,5,-4,20]);
    expect(result).to.be.equal(21);
  });
  it('should return 6', () => {
    var result = maxsubArray([1,2,-1,-2,2,1,-2,1,4,-5,4]);
    expect(result).to.be.equal(6);
  });
  it('should return -1', () => {
    var result = maxsubArray([-1,-2]);
    expect(result).to.be.equal(-1);
  });
  it('should return 3', () => {
    var result = maxsubArray([2,-1,1,1]);
    expect(result).to.be.equal(3);
  });
  it('should return 4', () => {
    var result = maxsubArray([-1, 1,2,1]);
    expect(result).to.be.equal(4);
  });
  it('should return 5', () => {
    var result = maxsubArray([-3,1,0,-1,-2,3,2,-1]);
    expect(result).to.be.equal(5);
  });
});
