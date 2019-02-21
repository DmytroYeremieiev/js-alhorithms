import { expect } from 'chai';

import {myReplace} from '../src/myReplace';

describe('myReplace', () => {
  it('should return a "Let us go to the mall"', () => {
    var result = myReplace("Let us go to the store", "store", "mall");
    expect(result).to.be.equal("Let us go to the mall");
  });
  it('should return a "He is Sitting on the couch"', () => {
    var result = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
    expect(result).to.be.equal("He is Sitting on the couch");
  });
  it('should return a "This has a spelling error"', () => {
    var result = myReplace("This has a spellngi error", "spellngi", "spelling");
    expect(result).to.be.equal("This has a spelling error");
  });
  it('should return a "His name is John"', () => {
    var result = myReplace("His name is Tom", "Tom", "john");
    expect(result).to.be.equal("His name is John");
  });
  it('should return a "Let us get back to more Algorithms"', () => {
    var result = myReplace("Let us get back to more Coding", "Coding", "algorithms");
    expect(result).to.be.equal("Let us get back to more Algorithms");
  });
});
