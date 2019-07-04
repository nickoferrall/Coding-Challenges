// const nums = [1, 2, 3, 1];
// const nums = [2,7,9,3,1]
// const nums = [2, 1, 1, 2];
// const nums = [10, 1, 3, 10, 2];
const nums = [2, 3, 2];

var rob = function(nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let maxAtTwoBefore = nums[0];
  let maxAtOneBefore = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

    maxAtTwoBefore = maxAtOneBefore;
    maxAtOneBefore = maxAtCurrent;
  }

  return maxAtOneBefore;
};

console.log(rob(nums));
