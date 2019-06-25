const nums = [4, 3, 2, 7, 8, 2, 3, 1];

var findDisappearedNumbers = function(nums) {
  const dict = {};
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    dict[nums[i]] = 1;
  }
  for (let j = 1; j <= nums.length; j++) {
    if (dict[j]) continue;
    else {
      answer.push(j);
    }
  }
  return answer;
};

console.log(findDisappearedNumbers(nums));
