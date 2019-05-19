// first unique character in a string
// LeetCode
// Amazon

const firstUniqChar = str => {
  let chars = {};

  str.split("").forEach((ch, i) => {
    chars.hasOwnProperty(ch) ? (chars[ch] = -1) : (chars[ch] = i);
  });
  let min = Infinity;

  for (let key of Object.keys(chars)) {
    let index = chars[key];
    if (index < min && index !== -1) min = index;
  }
  return Number.isFinite(min) ? min : -1;
};

let word1 = "leetcode";
let word2 = "loveleetcode";
let word3 = "eeccoo";
console.log("firstUniqChar(word1):", firstUniqChar(word1));
console.log("firstUniqChar(word2):", firstUniqChar(word2));
console.log("firstUniqChar(word3):", firstUniqChar(word3));
