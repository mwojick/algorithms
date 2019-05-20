// robot return to origin
// LeetCode
// Amazon

const returned = str => {
  let counter = {};
  str.split("").forEach(char => {
    counter.hasOwnProperty(char) ? counter[char]++ : (counter[char] = 1);
  });
  return counter["U"] === counter["D"] && counter["L"] === counter["R"];
};

console.log(returned("UDLRR"));
console.log(returned("UDLRRRLL"));
