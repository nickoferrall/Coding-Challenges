function findOutlier(integers) {
  let odd = integers.filter(number => number % 2 !== 0);
  let even = integers.filter(number => number % 2 === 0);
  return odd.length === 1 ? parseInt(odd) : parseInt(even);
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));
