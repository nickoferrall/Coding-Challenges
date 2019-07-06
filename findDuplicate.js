// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only

// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.

// nested for loop
// const with i number in array
// if j === i, return i

const nums = [1, 3, 4, 2, 7, 2];

var findDuplicate = function(nums) {
  if (nums.length === 2) return nums[0];
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[j] === nums[i]) return nums[i];
  //     }
  //   }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return nums[i];
  }
};

console.log(findDuplicate(nums));
