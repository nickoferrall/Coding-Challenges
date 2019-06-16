// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// const nums = [0, 1, 0, 3, 12];
const nums = [0, 0, 1];

var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      const zero = nums.splice(i, 1);
      nums.push(zero);
      i--;
    }
  }
  return nums.map(num => parseInt(num));
};

console.log(moveZeroes(nums));
