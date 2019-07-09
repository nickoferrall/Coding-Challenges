const nums1 = [1, 2, 2, 1, 2];
const nums2 = [2, 2];
// [2, 2]

// could either array be empty
// could be minus or positive numbers. I don't think that would have an effect
// brute force option - loop through 1 and check if it's in 2. If it is, splice from both
// and add it to a new array
// more efficiently, loop through 1. If it's in num1 and nums2, splice and add to a
// new array. If it's not, add value to an object

var intersect = function(nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) return [];
  const newArr = [];
  const longerArr = nums1.length > nums2.length ? nums1 : num2;
  const shorterArr = nums1.length > nums2.length ? nums2 : num1;
  const obj = {};
  for (let i = 0; i < shorterArr.length; i++) {
    if (obj[shorterArr[i]]) {
      obj[shorterArr[i]] += 1;
    } else {
      obj[shorterArr[i]] = 1;
    }
  }
  for (let i = 0; i < longerArr.length; i++) {
    if (obj[longerArr[i]]) {
      newArr.push(longerArr[i]);
      obj[longerArr[i]] -= 1;
    }
  }
  return newArr;
};

console.log(intersect(nums1, nums2));
