const nums = [1, 2, 3, 4];

// [
//     [1,2,3],
//     [1,3,2],
//     [2,1,3],
//     [2,3,1],
//     [3,1,2],
//     [3,2,1]
//   ]

// [1, 2, 3, 4]
// [2, 1, 3, 4]
// [2, 3, 1, 4]
// [2, 3, 4, 1]
// [1, 3, 2, 4]
// [1, 3, 4, 2]
// [2, 1, 3, 4]
// [1, 2, 4, 3]
// [3, 1, 2, 4]
// [4, 1, 2, 3]
// [4, 1, 2, 3]
// [4, 1, 2, 3]

var permute = function(nums) {
  const res = [];
  backtrack(nums, res);
  return res;

  function backtrack(nums, res, n = 0) {
    if (n === nums.length - 1) {
      //   console.log('Nums =>', nums, nums.slice(0));
      res.push(nums.slice(0));
      //   res.push(nums);
      return;
    }
    for (let i = n; i < nums.length; i++) {
      [nums[i], nums[n]] = [nums[n], nums[i]];
      backtrack(nums, res, n + 1);
      [nums[n], nums[i]] = [nums[i], nums[n]];
    }
  }
};

console.log(permute(nums));
