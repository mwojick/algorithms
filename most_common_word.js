// Most Common Word
// LeetCode (Easy)
// Amazon, Microsoft

const mostCommon = (str, banned) => {
  let bannedWords = new Set();
  banned.forEach(b => bannedWords.add(b));

  let counts = {};
  let filteredStr = str
    .replace(/\W+/g, " ")
    .toLowerCase()
    .split(" ");

  console.log("filteredStr:", filteredStr);
  filteredStr.forEach(word => {
    if (!bannedWords.has(word)) {
      counts[word] ? counts[word]++ : (counts[word] = 1);
    }
  });

  let res = "";
  Object.keys(counts).forEach(key => {
    if (!res || counts[key] > counts[res]) {
      res = key;
    }
  });
  return res;
};

let test1 = mostCommon("  Hi HI,  My name IS  hi MY MY my", ["my", "hi"]);
console.log(test1);
