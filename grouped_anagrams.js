// Grouped Anagrams
// LeetCode (Medium)
// Amazon, Google, Facebook, Uber

const groupAnagrams = strs => {
  let map = {};

  strs.forEach(str => {
    let sorted = str
      .split("")
      .sort()
      .join("");
    if (map[sorted]) {
      map[sorted].push(str);
    } else {
      map[sorted] = [str];
    }
  });

  return Object.values(map);
};

let test1 = groupAnagrams(["ate", "tea", "eat", "fdsa"]);
console.log("test1:", test1);
