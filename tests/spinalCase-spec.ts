import { expect } from 'chai';

import { spinalCase } from '../src/spinalCase';

describe('spinalCase', () => {
  it('should return a "this-is-spinal-tap"', () => {
    const result = spinalCase('This Is Spinal Tap');
    expect(result).to.be.equal('this-is-spinal-tap');
  });
  it('should return a "this-is-spinal-tap"', () => {
    const result = spinalCase('thisIsSpinalTap');
    expect(result).to.be.equal('this-is-spinal-tap');
  });
  it('should return a "the-andy-griffith-show"', () => {
    const result = spinalCase('The_Andy_Griffith_Show');
    expect(result).to.be.equal('the-andy-griffith-show');
  });
  it('"Teletubbies say Eh-oh" should return a "teletubbies-say-eh-oh"', () => {
    const result = spinalCase('Teletubbies say Eh-oh');
    expect(result).to.be.equal('teletubbies-say-eh-oh');
  });
  it('"AllThe-small Things" should return a "all-the-small-things"', () => {
    const result = spinalCase('AllThe-small Things');
    expect(result).to.be.equal('all-the-small-things');
  });
});
