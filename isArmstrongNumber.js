// An Armstrong number is an n-digit number that is equal to the sum of the n'th powers of its digits. Determine if the input number is an Armstrong number.  Return either true or false .

// For example with the number 153 there are 3 digits so you would add together the cubed values of all the digits like this: 1^3 + 5^3 + 3^3 === 153

function isArmstrongNumber(n) {
  const numArray = n
    .toString()
    .split('')
    .map(num => parseInt(num));
  if (numArray.length === 1) return numArray == n;
  const total = numArray.reduce((acc, currentVal) => {
    return acc + Math.pow(currentVal, 3);
  }, 0);
  return total === n;
}

console.log(isArmstrongNumber(6));
console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(351));
