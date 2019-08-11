let countSort = (arr, highestScore) => {
  let countArr = new Array(highestScore + 1).fill(0);
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]] += 1;
  }
  for (let i = 0; i < highestScore; i++) {
    countArr[i + 1] = countArr[i] + countArr[i + 1];
  }
  for (let i = 0; i < arr.length; i++) {
    res[countArr[arr[i]] - 1] = arr[i];
    countArr[arr[i]]--;
  }
  return res;
};

console.log(countSort([37, 89, 41, 89, 0, 100, 65, 91, 53], 100));
