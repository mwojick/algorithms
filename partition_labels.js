// Partition Labels
// LeetCode (Medium)
// Amazon

// https://leetcode.com/problems/partition-labels/
// A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

const partitionLabels = str => {
  let partitionLengths = [];
  let lastIndexes = {};
  for (let i = 0; i < str.length; i++) {
    lastIndexes[str[i]] = i;
  }

  let i = 0;
  while (i < str.length) {
    let end = lastIndexes[str[i]];
    let j = i;
    while (j !== end) {
      end = Math.max(end, lastIndexes[str[j]]);
      j++;
    }

    partitionLengths.push(j - i + 1);
    i = j + 1;
  }

  return partitionLengths;
};

let test1 = partitionLabels("abcabxfxggryrr");
console.log("test1:", test1);
