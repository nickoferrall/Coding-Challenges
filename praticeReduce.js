// Takes an array and reduces it to a single value. You can use it to find the average for example.
// The main difference between reduce and filter or map is that it has an accumulator.

const numbers = [2, 10, 11, 5, 16];

const total = numbers.reduce((acc, currentVal) => {
  return acc + currentVal;
}, 0);

console.log(total);
