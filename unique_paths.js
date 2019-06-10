// Unique Paths
// LeetCode (Medium)
// Amazon, Google, Facebook, Adobe

const uniquePaths = (rows, cols) => {
  let dp = Array.from(Array(rows), () => new Array(cols));
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < dp[0].length; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  console.log(dp);
  return dp[rows - 1][cols - 1];
};

let test1 = uniquePaths(7, 3);
console.log("test1:", test1);
