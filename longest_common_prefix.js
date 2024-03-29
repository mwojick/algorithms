//https://leetcode.com/problems/longest-common-prefix/solution/
const solution = strings => {
  // Type your solution here
  if (strings.length === 0) return "";

  let prefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    while (strings[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }

  return prefix;
};
