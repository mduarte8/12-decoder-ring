const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius written by Mark Duarte, encode", () => {
  it("should correctly cipher when passed a message", () => {
    const expected = "23513434112251";
    const message = "message";
    const actual = polybius(message);
    expect(actual).to.eql(expected);
  });
  it("should correctly cipher when passaged a message", () => {
    const expected = "4432423352125413";
    const message = "thinkful";
    const actual = polybius(message);
    expect(actual).to.eql(expected);
  });
  it("should correctly cipher and ignore capital letters", () => {
    const expected = "3251131343 2543241341";
    const message = "Hello world";
    const actual = polybius(message);
    expect(actual).to.eql(expected);
  });
});

describe("polybius written by Mark Duarte, decode", () => {
  it("should correctly decipher and include spaces", () => {
    const expected = "hello world";
    const message = "3251131343 2543241341";
    const actual = polybius(message, false);
    expect(actual).to.eql(expected);
  });
  it("should correctly decipher and include i/j character", () => {
    const expected = "thi/jnkful";
    const message = "4432423352125413";
    const actual = polybius(message, false);
    expect(actual).to.eql(expected);
  });
});

describe("polybius written by Mark Duarte, edge case", () => {
  it("should return false if given invalid length of characters for decode", () => {
    const expected = false;
    const message = "44324233521254134";
    const actual = polybius(message, false);
    expect(actual).to.eql(expected);
  });
});
