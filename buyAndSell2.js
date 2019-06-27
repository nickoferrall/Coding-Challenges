const prices = [7, 1, 5, 3, 6, 4];
// const prices = [1, 2, 3, 4, 5];
// [7,6,4,3,1]

var maxProfit = function(prices) {
  let profits = 0;
  for (let i = 0; i < prices.length; i++) {
    console.log('i-', i);
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        console.log('prices', prices[j], prices[i]);
        profits += prices[j] - prices[i];
        i = j - 1;
        break;
      }
    }
  }
  return profits;
};

console.log(maxProfit(prices));
