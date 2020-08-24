import { expect } from 'chai';

import { searchIndexAsElem } from 'src/Algorithms Elluminated Part1/3.3-Challenge';

describe('findMax', () => {
  it('should return 17.', () => {
    const result = searchIndexAsElem([
      -23,
      -19,
      -17,
      -14,
      -12,
      -10,
      -8,
      -7,
      -6,
      -4,
      -2,
      -1,
      0,
      2,
      5,
      6,
      16,
      18,
      19,
      20,
      23,
      35,
      100,
      150,
    ]);
    expect(result).to.be.equal(16);
  });
  it('should return 17.', () => {
    const result = searchIndexAsElem([
      -23,
      -19,
      -17,
      -14,
      -12,
      -10,
      -8,
      -7,
      -6,
      -4,
      -2,
      -1,
      0,
      2,
      5,
      6,
      10,
      17,
      19,
      20,
      23,
      35,
      100,
      150,
    ]);
    expect(result).to.be.equal(17);
  });
  it('should return 5.', () => {
    const result = searchIndexAsElem([-8, -7, -6, -5, -4, 5]);
    expect(result).to.be.equal(5);
  });
  it('should return null.', () => {
    const result = searchIndexAsElem([34, 67, 89]);
    expect(result).to.be.null;
  });
  it('should return 2 or 3', () => {
    const result = searchIndexAsElem([-1, 0, 2, 3, 5, 7, 9]);
    expect([2, 3]).to.include(result);
  });
  it('should return either  0,1,2,3,4 ', () => {
    const result = searchIndexAsElem([0, 1, 2, 3, 4]);
    expect([0, 1, 2, 3, 4]).to.include(result);
  });
});
