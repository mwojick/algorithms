// Combination Sum II
// LeetCode (Medium)
// Amazon, Microsoft, Uber

// https://leetcode.com/problems/combination-sum-ii/
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
// Each number in candidates may only be used once in the combination.

const combinationSum2 = (candidates, target) => {
  let result = [];
  candidates.sort((a, b) => a - b);
  findCombinations(candidates, 0, target, [], result);

  return result;
};

const findCombinations = (candidates, index, target, current, result) => {
  if (target === 0) {
    result.push(Object.assign([], current));
    return;
  }

  if (target < 0) {
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    const el = candidates[i];
    if (i === index || el !== candidates[i - 1]) {
      current.push(el);
      findCombinations(candidates, i + 1, target - el, current, result);
      current.pop();
    }
  }
};

let test1 = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
console.log("test1:", test1);
