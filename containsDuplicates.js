// const nums = [1, 2, 3, 1];
const nums = [1, 2, 3, 4];

// var containsDuplicate = function(nums) {
//   const dict = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (dict[nums[i]]) return true;
//     dict[nums[i]] = 1;
//   }
//   return false;
// };

var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
};

console.log(containsDuplicate(nums));
