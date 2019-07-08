// Subsets
// LeetCode (Medium)
// Amazon, Facebook, Google, Uber, Microsoft

// nums is a set of distinct integers
const subsets = nums => {
  let subsets = [];
  generateSubsets(0, nums, [], subsets);

  return subsets;
};

const generateSubsets = (index, nums, current, subsets) => {
  subsets.push(Object.assign([], current));

  for (let i = index; i < nums.length; i++) {
    const el = nums[i];
    current.push(el);
    generateSubsets(i + 1, nums, current, subsets);
    current.pop();
  }
};

let test1 = subsets([1, 2, 3]);
console.log("test1:", test1);
