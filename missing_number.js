// missing number
// LeetCode
// Amazon

const missingNum = arr => {
  let sum = 0;
  arr.forEach(num => {
    sum += num;
  });

  let n = arr.length;
  return (n * (n + 1)) / 2 - sum;
};
console.log(missingNum([0, 1, 2, 3, 5, 6, 7, 8, 9]));
