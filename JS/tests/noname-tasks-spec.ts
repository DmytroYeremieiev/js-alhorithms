import { expect } from 'chai';

import * as nonameTasks from '../src/noname-tasks';

describe('spinalCase', () => {
  it('should return a "this-is-spinal-tap"', () => {
    var result = nonameTasks.spinalCase("This Is Spinal Tap");
    expect(result).to.be.equal("this-is-spinal-tap");
  });
  it('should return a "this-is-spinal-tap"', () => {
    var result = nonameTasks.spinalCase("thisIsSpinalTap");
    expect(result).to.be.equal("this-is-spinal-tap");
  });
  it('should return a "the-andy-griffith-show"', () => {
    var result = nonameTasks.spinalCase("The_Andy_Griffith_Show");
    expect(result).to.be.equal("the-andy-griffith-show");
  });
  it('"Teletubbies say Eh-oh" should return a "teletubbies-say-eh-oh"', () => {
    var result = nonameTasks.spinalCase("Teletubbies say Eh-oh");
    expect(result).to.be.equal("teletubbies-say-eh-oh");
  });
  it('"AllThe-small Things" should return a "all-the-small-things"', () => {
    var result = nonameTasks.spinalCase("AllThe-small Things");
    expect(result).to.be.equal("all-the-small-things");
  });
});

describe('whatIsInAName', () => {
  it('should return [{ first: "Tybalt", last: "Capulet" }]', ()=>{
    var result = nonameTasks.whatIsInAName([
      { first: "Romeo", last: "Montague" }, 
      { first: "Mercutio", last: null }, 
      { first: "Tybalt", last: "Capulet" }], 
      { last: "Capulet" }
    );
    expect(result).to.have.deep.members([{ first: "Tybalt", last: "Capulet" }]);
  })
  it('should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]', ()=>{
    var result = nonameTasks.whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });
    expect(result).to.have.deep.members([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]);
  })
  it('should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]', ()=>{
    var result = nonameTasks.whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
    expect(result).to.have.deep.members([{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]);
  })
  it('should return [{ "apple": 1, "bat": 2, "cookie": 2 }]', ()=>{
    var result = nonameTasks.whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
    expect(result).to.have.deep.members([{ "apple": 1, "bat": 2, "cookie": 2 }]);
  });
  it('should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]', ()=>{
    var result = nonameTasks.whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });
    expect(result).to.have.deep.members([{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]);
  });
  it('should return [{ "apple": 1, "bat": 2, "cookie": 2 }]', ()=>{
    var result = nonameTasks.whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});
    expect(result).to.have.lengthOf(0);
  });
});

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
});

describe("diffArray", ()=>{
  it('should return an array.', ()=>{
    var result = nonameTasks.diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
    expect(result).to.be.a("array");
  })
  it('should return ["pink wool"]', ()=>{
    var result = nonameTasks.diffArray(
      ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
    expect(result).to.have.lengthOf(1).and.to.include("pink wool")
  })
  it('should return ["diorite", "pink wool"]', ()=>{
    var result = nonameTasks.diffArray(
      ["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
    expect(result).to.have.lengthOf(2).and.to.include.members(["diorite", "pink wool"])
  })
  it('should return ["piglet", 4]', ()=>{
    var result = nonameTasks.diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
    expect(result).to.have.lengthOf(2).and.to.include.members(["piglet", 4]);
  })
  it('should return an empty array', ()=>{
    var result = nonameTasks.diffArray(
      ["andesite", "grass", "dirt", "dead shrub"], 
      ["andesite", "grass", "dirt", "dead shrub"]);
    expect(result).to.have.lengthOf(0);
  })
  it('should return [4]', ()=>{
    var result = nonameTasks.diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
    expect(result).to.have.lengthOf(1).and.to.include(4);
  })
  it('should return ["snuffleupagus", "cookie monster", "elmo"]', ()=>{
    var result = nonameTasks.diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
    expect(result).to.have.lengthOf(3).and.to.include.members(["snuffleupagus", "cookie monster", "elmo"]);
  })
  it('should return [1, "calf", 3, "piglet", 7, "filly"]', ()=>{
    var result = nonameTasks.diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
    expect(result).to.have.lengthOf(6).and.to.include.members([1, "calf", 3, "piglet", 7, "filly"]);
  })
});

describe('destroyer', () => {
  it('should return a [1, 1]', () => {
    var result = nonameTasks.destroyer([1, 2, 3, 1, 2, 3], 2, 3);
    expect(result).to.have.lengthOf(2).to.be.a('array').and.to.include.members([1, 1]);
  });
  it('should return a [1, 5, 1]', () => {
    var result = nonameTasks.destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
    expect(result).to.have.lengthOf(3).and.to.include.members([1, 5, 1]);
  });
  it('should return a [1]', () => {
    var result = nonameTasks.destroyer([3, 5, 1, 2, 2], 2, 3, 5);
    expect(result).to.have.lengthOf(1).and.to.include.members([1]);
  });
  it('should return a []', () => {
    var result = nonameTasks.destroyer([2, 3, 2, 3], 2, 3);
    expect(result).to.have.lengthOf(0);
  });
  it('should return a ["hamburger"]', () => {
    var result = nonameTasks.destroyer(["tree", "hamburger", 53], "tree", 53);
    expect(result).to.have.lengthOf(1).and.to.include.members(["hamburger"]);
  });
  it('should return a ["hamburger"]', () => {
    var result = nonameTasks.destroyer(["tree", "hamburger", 53], "tree", 53);
    expect(result).to.have.lengthOf(1).and.to.include.members(["hamburger"]);
  });
  it('should return a [12,92,65]', () => {
    var result = nonameTasks.destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");
    expect(result).to.have.lengthOf(3).and.to.include.members([12,92,65]);
  });
});
