// Sort Array By Parity
// LeetCode (Easy)
// Amazon, Google, Microsoft, Adobe

const sortArrayByParity = arr => {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      let temp = arr[index];
      arr[index++] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
};

let test1 = sortArrayByParity([1, 3, 2, 4, 5, 7, 6, 8, 4]);
console.log("test1:", test1);
