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
