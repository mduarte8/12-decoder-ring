// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabetEncode = "abcdefghijklmnopqrstuvwxyz";
  let letterToIndexMap = {};
  let indexToLetterMap = {};

  for (let index in alphabetEncode) {
    indexToLetterMap[index] = alphabetEncode[index]; // create number to letter map
    letterToIndexMap[alphabetEncode[index]] = index; // as well as letter to number map
  }

  const numLettersInAlphabet = 26;

  function caesar(input = "", shift = 0, encode = true) {
    if (!encode) return caesar(input, -shift); // recursive use of function to decode which is just a shift in opposite direction
    if (shift === 0 || shift < -25 || shift > 25) return false;
    input = input.toLowerCase();
    let returnString = "";
    for (let letter of input) {
      // each index in the input string, get the corresponding number in alphabet
      let letterIndex = parseInt(letterToIndexMap[letter]); // need parseInt to ensure number comes back as number and not string
      if (!alphabetEncode.includes(letter)) {
        returnString += letter; // if it's a non-letter just add to the string
      } else {
        let newIndex =
          (letterIndex + shift + numLettersInAlphabet) % numLettersInAlphabet; // this handles both positive and negative shifts by adding 26 to the shifted number and taking the remainder to ensure between 0 and 25
        returnString += indexToLetterMap[newIndex];
      }
    }
    return returnString;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
