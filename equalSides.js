function equalSides(arr) {
  let left = 0;
  let right = 0;
  let reversed = arr.reverse();
  //   let middle = arr[Math.round((arr.length - 1) / 2)];
  let median = Math.round(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    // left += arr[i];
    // right += reversed[i];
    // if (left === right) return left, right;
    return arr.reduce((acc, currentVal) => {
      return acc + currentVal;
    }, median);
  }
  return median;
}

console.log(equalSides([1, 1, 1, 4, 2, 1]));
console.log(equalSides([1, 2, 3, 4, 3, 2, 1]));
