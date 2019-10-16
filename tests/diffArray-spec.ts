import { expect } from 'chai';

import {diffArray} from '../src/diffArray';

describe("diffArray", ()=>{
  it('should return an array.', ()=>{
    var result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
    expect(result).to.be.a("array");
  })
  it('should return ["pink wool"]', ()=>{
    var result = diffArray(
      ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
    expect(result).to.have.lengthOf(1).and.to.include("pink wool")
  })
  it('should return ["diorite", "pink wool"]', ()=>{
    var result = diffArray(
      ["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
    expect(result).to.have.lengthOf(2).and.to.include.members(["diorite", "pink wool"])
  })
  it('should return ["piglet", 4]', ()=>{
    var result = diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
    expect(result).to.have.lengthOf(2).and.to.include.members(["piglet", 4]);
  })
  it('should return an empty array', ()=>{
    var result = diffArray(
      ["andesite", "grass", "dirt", "dead shrub"], 
      ["andesite", "grass", "dirt", "dead shrub"]);
    expect(result).to.have.lengthOf(0);
  })
  it('should return [4]', ()=>{
    var result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
    expect(result).to.have.lengthOf(1).and.to.include(4);
  })
  it('should return ["snuffleupagus", "cookie monster", "elmo"]', ()=>{
    var result = diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
    expect(result).to.have.lengthOf(3).and.to.include.members(["snuffleupagus", "cookie monster", "elmo"]);
  })
  it('should return [1, "calf", 3, "piglet", 7, "filly"]', ()=>{
    var result = diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
    expect(result).to.have.lengthOf(6).and.to.include.members([1, "calf", 3, "piglet", 7, "filly"]);
  })
});
