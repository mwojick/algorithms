// power of two
// LeetCode
// Amazon

const powerOfTwo = num => {
  let i = 1;
  while (i < num) {
    i *= 2;
  }
  return i === num;
};

console.log(powerOfTwo(16));
console.log(powerOfTwo(15));
console.log(powerOfTwo(1));
console.log(powerOfTwo(-1));
console.log(powerOfTwo(0));
