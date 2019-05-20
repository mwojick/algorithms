// remove element
// LeetCode
// Amazon

const removeEl = (nums, val) => {
  let index = 0;
  for (const i of nums) {
    if (i !== val) nums[index++] = i;
  }
  console.log("nums:", nums);
  return index;
};

let test = removeEl([1, 2, 3, 3, 5, 6, 2, 3, 5], 3);
console.log("test:", test);
