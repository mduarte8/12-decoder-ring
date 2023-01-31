// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const square = ["abcde", "fghi/jk", "lmnop", "qrstu", "vwxyz"];
  let letterToNumberMap = {}; // initializes the two map objects going from letters to numbers and numbers to letters
  let numberToLetterMap = {};
  let rowCount = 1;
  let colCount = 1;
  for (let i = 0; i < square.length; i++) {
    // iterates over each "row" in the square
    const row = square[i];
    for (let j = 0; j < row.length; j++) {
      // each letter in a row represents a column j
      if (row[j] === "i") {
        letterToNumberMap["i/j"] = 42; // hard coding the special case of i and j
        numberToLetterMap[42] = "i/j";
        j = j + 2;
        colCount++;
      } else {
        letterToNumberMap[row[j]] = parseInt(`${colCount}${rowCount}`); // column has to go first in number
        numberToLetterMap[parseInt(`${colCount}${rowCount}`)] = row[j];
        colCount++;
      }
    }
    colCount = 1;
    rowCount++;
  }

  function polybius(input, encode = true) {
    // your solution code here
    input = input.toLowerCase();
    // console.log("input is", input);
    let returnString = "";
    let mapToUse = {};
    let charLength = 0;
    if (encode) {
      // sets the length of slices to use in encoding message e.g. if decode then it needs to look at 2 characters.
      charLength = 1;
      mapToUse = letterToNumberMap; // also sets which map to use
    } else {
      charLength = 2;
      mapToUse = numberToLetterMap;
      if (input.replace(" ", "").length % 2 === 1) return false;
    }
    for (let i = 0; i < input.length; i++) {
      // i++ here and the 2 characters is handled by last line of code in for block
      let subStringToPush = "";
      if (input[i] === " ") {
        subStringToPush += " "; // pushes space to the substring
        i++; // needs to incremement to next line of code to evaluate
      }
      if (input[i] === "i" || input[i] === "j") {
        subStringToPush += mapToUse["i/j"];
      } else {
        subStringToPush += mapToUse[input.slice(i, i + charLength)];
      }
      returnString += subStringToPush;
      i += charLength - 1; // needs to increase i by either 1 or 0, 1 if it is the number decode that needs 2 characters read, so for loop jumps the next index
    }
    return returnString;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
