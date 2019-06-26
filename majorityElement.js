// const nums = [3, 2, 3];
const nums = [2, 2];

// save a variable with length / 2
// for loop through array
// save each element in a hash table
// increase the value by 1 every time we find the same number
// if value === variable length / 2, return number

var majorityElement = function(nums) {
  if (nums.length === 1) return nums[0];
  let majority = nums.length === 2 ? 2 : Math.ceil(nums.length / 2);
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
      if (obj[nums[i]] === majority) {
        return nums[i];
      }
    } else {
      obj[nums[i]] = 1;
    }
  }
};

console.log(majorityElement(nums));
