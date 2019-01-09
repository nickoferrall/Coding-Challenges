// Takes an array and reduces it to a single value. You can use it to find the average for example.
// The main difference between reduce and filter or map is that it has an accumulator.

const numbers = [2, 10, 11, 5, 16];

const total = numbers.reduce((acc, currentVal) => {
  return acc + currentVal;
}, 0);

console.log(total);

// Write a function that returns the index in the given array at which the sums of the numbers on either side of it are equal to each other.

function equalSides(arr) {
  function sumSide(myArr) {
    return myArr.reduce((acc, currentVal) => {
      return acc + currentVal;
    }, 0);
  }
  for (let i = 1; i < arr.length; i++) {
    let a = arr.slice(0, i);
    let b = arr.slice(i + 1, arr.length);
    if (sumSide(a) === sumSide(b)) {
      return i;
    }
  }
  return -1;
}

console.log(equalSides([1, 1, 1, 4, 2, 1]));
console.log(equalSides([1, 2, 3, 4, 3, 2, 1]));
