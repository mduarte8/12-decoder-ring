const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar written by Mark Duarte, encode", () => {
  it("should return the correct cipher when passed in valid shift", () => {
    const phrase = "Zebra Magazine";
    const shift = 3;
    const expected = "cheud pdjdclqh";

    const actual = caesar(phrase, shift);
    expect(actual).to.eql(expected);
  });
  it("should handle negative shift", () => {
    const phrase = "thinkful";
    const shift = -3;
    const expected = "qefkhcri";

    const actual = caesar(phrase, shift);
    expect(actual).to.eql(expected);
  });
  it("should encode and ignore capital letters and include spaces", () => {
    const phrase = "This is a secret message!";
    const shift = 8;
    const expected = "bpqa qa i amkzmb umaaiom!";

    const actual = caesar(phrase, shift);
    expect(actual).to.eql(expected);
  });
});

describe("caesar written by Mark Duarte, decode", () => {
  it("should decode", () => {
    const phrase = "wklqnixo";
    const shift = 3;
    const expected = "thinkful";

    const actual = caesar(phrase, shift, false);
    expect(actual).to.eql(expected);
  });

  it("should decode and ignore capital letters and include spaces", () => {
    const phrase = "BPQA qa I amkzmb umaaiom!";
    const shift = 8;
    const expected = "this is a secret message!";

    const actual = caesar(phrase, shift, false);
    expect(actual).to.eql(expected);
  });
});

describe("caesar written by Mark Duarte, handle edge cases and return false", () => {
  it("return false without shift input", () => {
    const phrase = "thinkful";
    // const shift = 3;
    const expected = false;

    const actual = caesar(phrase);
    expect(actual).to.eql(expected);
  });
  it("return false when given larger number than 25", () => {
    const phrase = "thinkful";
    const shift = 99;
    const expected = false;

    const actual = caesar(phrase, shift);
    expect(actual).to.eql(expected);
  });
  it("should return false when given number less than -25", () => {
    const phrase = "thinkful";
    const shift = -26;
    const expected = false;

    const actual = caesar(phrase, shift);
    expect(actual).to.eql(expected);
  });
});
