const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const nums = [1, 2];

var maxSubArray = function(nums) {
  let maxTotal = nums[0],
    sum = 0;
  for (let i of nums) {
    sum += i;
    if (maxTotal < sum) {
      maxTotal = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
    console.log(i, sum, maxTotal);
  }
  return maxTotal;
};

console.log(maxSubArray(nums));
