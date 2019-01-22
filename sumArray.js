// Given an array of numbers containing at least one positive number (or zero), find the greatest contiguous sum of numbers.

// Contiguous, in this case, can be as few as zero numbers (an empty subset of the original array, with a total worth of zero).

function sumArray(arr) {
  let ans = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    ans = Math.max(0, ans + arr[i]);
    console.log('Ans =', ans, i, arr[i]);
    sum = Math.max(sum, ans);
    console.log('Sum: ', sum);
  }

  return sum;
}

// console.log(sumArray([1, 2, 3])); // => 6
// console.log(sumArray([4, -1, 5])); // => 8
console.log(sumArray([10, -11, 11])); // => 11
