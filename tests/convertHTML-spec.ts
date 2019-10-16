import { expect } from 'chai';
import 'mocha'

import {convertHTML} from '../src/convertHTML';

describe('convertHTML', () => {
  it('should return a "Dolce &​amp; Gabbana"', () => {
    var result = convertHTML("Dolce & Gabbana");
    expect(result).to.be.equal("Dolce &​amp; Gabbana");
  });
  it('should return a "Hamburgers &​lt; Pizza &​lt; Tacos"', () => {
    var result = convertHTML("Hamburgers < Pizza < Tacos");
    expect(result).to.be.equal("Hamburgers &​lt; Pizza &​lt; Tacos");
  });
  it('should return a "Sixty &​gt; twelve"', () => {
    var result = convertHTML("Sixty > twelve");
    expect(result).to.be.equal("Sixty &​gt; twelve");
  });
  it('should return a "Stuff in &​quot;quotation marks&​quot;"', () => {
    var result = convertHTML("Stuff in \"quotation marks\"");
    expect(result).to.be.equal("Stuff in &​quot;quotation marks&​quot;");
  });
  it('should return a "Schindler&​apos;s List"', () => {
    var result = convertHTML("Schindler's List");
    expect(result).to.be.equal("Schindler&​apos;s List");
  });
  it('should return a "&​lt;&​gt;"', () => {
    var result = convertHTML("<>");
    expect(result).to.be.equal("&​lt;&​gt;");
  });
  it('should return a "abc"', () => {
    var result = convertHTML("abc");
    expect(result).to.be.equal("abc");
  });
});
