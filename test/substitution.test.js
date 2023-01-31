const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution test written by Mark Duarte, encode", () => {
  it("should correctly cipher when passed a message and valid alphabet", () => {
    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    const expected = "ykrrpik";
    const actual = substitution("message", alphabet);
    expect(actual).to.eql(expected);
  });
  it("should correctly cipher when passed a message and valid alphabet", () => {
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const message = "thinkful";
    const expected = "jrufscpw";
    const actual = substitution(message, alphabet);
    expect(actual).to.eql(expected);
  });
  it("should ignore capital letters and spaces", () => {
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const message = "You are an excellent spy";
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(message, alphabet);
    expect(actual).to.eql(expected);
  });
  it("should still work with special characters in alphabet", () => {
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const message = "message";
    const expected = "y&ii$r&";
    const actual = substitution(message, alphabet);
    expect(actual).to.eql(expected);
  });
});

describe("substitution test written by Mark Duarte, decode", () => {
  it("should decode", () => {
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const message = "jrufscpw";
    const expected = "thinkful";
    const actual = substitution(message, alphabet, false);
    expect(actual).to.eql(expected);
  });
  it("should decode with special characters in the alphabet", () => {
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const message = "y&ii$r&";
    const expected = "message";
    const actual = substitution(message, alphabet, false);
    expect(actual).to.eql(expected);
  });
});

describe("substitution test written by Mark Duarte, edge cases", () => {
  it("should return false with not enough characters in alphabet", () => {
    const alphabet = "short";
    const message = "thinkful";
    const expected = false;
    const actual = substitution(message, alphabet);
    expect(actual).to.eql(expected);
  });
  it("should return false with invalid alphabet of repeating characters", () => {
    const alphabet = "abcabcabcabcabcabcabcabcyz";
    const message = "thinkful";
    const expected = false;
    const actual = substitution(message, alphabet);
    expect(actual).to.eql(expected);
  });
});
