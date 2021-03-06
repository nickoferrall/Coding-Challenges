// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

const digits = [9, 9, 9, 9, 9];
// [1, 2, 4];

var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === 0) {
      if (digits[i] === 9) {
        digits.splice(0, 1, 1, 0);
        return digits;
      } else {
        digits[i] += 1;
        return digits;
      }
    } else if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      return digits;
    }
  }
  return digits;
};

console.log(plusOne(digits));
