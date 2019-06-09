// Container with most water
// LeetCode (Medium)
// Amazon, Facebook, Google, Microsoft

const maxArea = nums => {
  let max = -Infinity,
    i = 0,
    j = nums.length - 1;

  while (i < j) {
    let min = Math.min(nums[i], nums[j]);
    let area = min * (j - i);
    if (area > max) max = area;
    nums[i] < nums[j] ? i++ : j--;
  }

  return max;
};

let test1 = maxArea([2, 2, 5, 3, 1, 7]);
console.log(test1);
