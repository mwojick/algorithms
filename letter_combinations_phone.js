// letter combinations of a phone number
// LeetCode
// Amazon, Facebook, Google

const letterComb = digits => {
  let result = [];
  if (!digits || digits.length === 0) return result;

  let mapping = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz"
  ];

  letterCombRec(result, digits, "", 0, mapping);
  return result;
};

const letterCombRec = (result, digits, currentStr, index, mapping) => {
  if (index === digits.length) {
    result.push(currentStr);
    return;
  }
  let letters = mapping[parseInt(digits[index])];
  letters.split("").forEach(letter => {
    letterCombRec(result, digits, currentStr + letter, index + 1, mapping);
  });
};

let digits1 = "2";
let test = letterComb(digits1);
console.log("letterComb:", test);
