import { expect } from 'chai';

import {whatIsInAName} from '../src/whatIsInAName';


describe('whatIsInAName', () => {
  it('should return [{ first: "Tybalt", last: "Capulet" }]', ()=>{
    var result = whatIsInAName([
      { first: "Romeo", last: "Montague" }, 
      { first: "Mercutio", last: null }, 
      { first: "Tybalt", last: "Capulet" }], 
      { last: "Capulet" }
    );
    expect(result).to.have.deep.members([{ first: "Tybalt", last: "Capulet" }]);
  })
  it('should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]', ()=>{
    var result = whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });
    expect(result).to.have.deep.members([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]);
  })
  it('should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]', ()=>{
    var result = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
    expect(result).to.have.deep.members([{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]);
  })
  it('should return [{ "apple": 1, "bat": 2, "cookie": 2 }]', ()=>{
    var result = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
    expect(result).to.have.deep.members([{ "apple": 1, "bat": 2, "cookie": 2 }]);
  });
  it('should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]', ()=>{
    var result = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });
    expect(result).to.have.deep.members([{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]);
  });
  it('should return [{ "apple": 1, "bat": 2, "cookie": 2 }]', ()=>{
    var result = whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});
    expect(result).to.have.lengthOf(0);
  });
});
