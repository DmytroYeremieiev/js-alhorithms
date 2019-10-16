import { expect } from 'chai';

import {destroyer} from '../src/destroyer';

describe('destroyer', () => {
  it('should return a [1, 1]', () => {
    var result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
    expect(result).to.have.lengthOf(2).to.be.a('array').and.to.include.members([1, 1]);
  });
  it('should return a [1, 5, 1]', () => {
    var result = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
    expect(result).to.have.lengthOf(3).and.to.include.members([1, 5, 1]);
  });
  it('should return a [1]', () => {
    var result = destroyer([3, 5, 1, 2, 2], 2, 3, 5);
    expect(result).to.have.lengthOf(1).and.to.include.members([1]);
  });
  it('should return a []', () => {
    var result = destroyer([2, 3, 2, 3], 2, 3);
    expect(result).to.have.lengthOf(0);
  });
  it('should return a ["hamburger"]', () => {
    var result = destroyer(["tree", "hamburger", 53], "tree", 53);
    expect(result).to.have.lengthOf(1).and.to.include.members(["hamburger"]);
  });
  it('should return a ["hamburger"]', () => {
    var result = destroyer(["tree", "hamburger", 53], "tree", 53);
    expect(result).to.have.lengthOf(1).and.to.include.members(["hamburger"]);
  });
  it('should return a [12,92,65]', () => {
    var result = destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");
    expect(result).to.have.lengthOf(3).and.to.include.members([12,92,65]);
  });
});
