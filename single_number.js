// single number
// LeetCode
// Amazon

// given a non-empty array of integers, every element appears twice except
// for one. Find that single one.

const singleNumber = arr => {
  return arr.reduce((prev, current) => prev ^ current);
};

let arr1 = [1, 1, 3, 5, 4, 4, 3, 6, 8, 6, 8];

console.log(singleNumber(arr1));
