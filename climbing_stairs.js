// climbing stairs
// LeetCode
// Amazon, Google, LinkedIn

const climbStairs = n => {
  let dp = [];
  // number of ways to climb 0 stairs;
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(climbStairs(2));
