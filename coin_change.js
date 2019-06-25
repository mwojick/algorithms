// Coin Change
// LeetCode (Medium)
// Amazon, Google, Facebook, Microsoft

const coinChange = (coins, amount) => {
  coins.sort((a, b) => a - b);
  let dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      if (coin <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      } else {
        break;
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};

let test1 = coinChange([1, 5, 10], 12);
let test2 = coinChange([4, 5, 10], 3);
console.log("test1:", test1);
console.log("test2:", test2);
