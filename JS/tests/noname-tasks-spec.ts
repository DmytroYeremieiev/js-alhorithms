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
})

