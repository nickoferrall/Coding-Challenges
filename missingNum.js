const nums = [3, 0, 1];

// loop through the length + 1
// save each number in a hash table
// second for loop, if the number is not in the hash table,
// return the number

var missingNumber = function(nums) {
  const obj = {};
  for (let j = 0; j < nums.length; j++) {
    obj[nums[j]] = 1;
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!obj[i]) return i;
  }
};

console.log(missingNumber(nums));
