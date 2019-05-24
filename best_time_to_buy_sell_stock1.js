// best time to buy and sell stock I
// LeetCode
// Amazon, Facebook

const bestTimeToBuySell = prices => {
  if (prices.length === 0) return 0;
  let maxProfit = 0;
  let minVal = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minVal) {
      minVal = prices[i];
    } else if (maxProfit < prices[i] - minVal) maxProfit = prices[i] - minVal;
  }

  return maxProfit;
};

console.log(bestTimeToBuySell([1, 5, 7, 5, 5, 5]));
