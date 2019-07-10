// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

const nums = [1, 2, 3, 4]; // [24,12,8,6]

// check if array is empty
// will numbers always be > 0
// will they always be numbers

// loop through array
// we could create a new array and splice i and then multiply other numbers

function returnProduct(arr) {
  return arr.reduce((acc, currentVal) => (acc *= currentVal));
}

var productExceptSelf = function(nums) {
  if (nums.length === 0) return [];
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    let tempArr = nums.slice();
    tempArr.splice(i, 1);
    arr.push(returnProduct(tempArr));
  }
  return arr;
};

console.log(productExceptSelf(nums));
