const nums = [2, 7, 11, 15];
const target = 9;

// we don't know if the numbers are positive or negative

// nested for loop. If nums[i] + nums[j] === target, return indices

// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// save each value in an object
// check if target - nums[i] is in the obj
// if it is, return indices

var twoSum = function(nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    let desiredNum = target - nums[i];
    if (obj[desiredNum] !== undefined) {
      return [obj[desiredNum], i];
    }
    if (!obj[nums[i]]) {
      obj[nums[i]] = i;
    }
  }
  return false;
};

console.log(twoSum(nums, target));
