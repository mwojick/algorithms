// best time to buy and sell stock II
// LeetCode
// Amazon, Facebook

const bestTimeToBuySell = prices => {
  if (prices.length === 0) return 0;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) profit += prices[i + 1] - prices[i];
  }

  return profit;
};

console.log(bestTimeToBuySell([1, 5, 7, 5, 5, 5]));
