// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const realAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet = "", encode = true) {
    if (alphabet.length !== 26) return false; //returns false if substituted alphabet does not equal 26 letters
    console.log(alphabet);
    for (let letter of alphabet) {
      if (alphabet.split(letter).length > 2) return false;
    }
    input = input.toLowerCase();
    let realToNew = {};
    let newToReal = {};
    let mapToUse = {};
    let returnString = "";
    for (let letter in alphabet) {
      // iterates over the letters in the input alphabet and creates encode and decode maps
      realToNew[realAlphabet[letter]] = alphabet[letter];
      newToReal[alphabet[letter]] = realAlphabet[letter];
    }
    if (encode) {
      // checks which map to use based on the encode
      mapToUse = realToNew;
    } else {
      mapToUse = newToReal;
    }
    for (let inputLetter of input) {
      // iterates over each letter in the input and adds space if it's a space otherwise adds appropriate character
      if (inputLetter === " ") {
        returnString += " ";
      } else {
        returnString += mapToUse[inputLetter];
      }
    }
    return returnString;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
