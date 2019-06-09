// Jewels and Stones
// LeetCode (Easy)
// Amazon

const jewels = (stones, jewels) => {
  let jewelsSet = new Set();
  let count = 0;
  jewels.split("").forEach(j => jewelsSet.add(j));
  stones.split("").forEach(s => {
    if (jewelsSet.has(s)) count++;
  });
  return count;
};

let test1 = jewels("aAAbbbb", "aA");
console.log(test1);
