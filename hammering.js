const x = 1;
const y = 4;

// create the bits array
// if the number is bigger than 8, add 1 to array. Minus 8 from num
// keep doing this in a while loop until the number is 0
// then do a for loop checking for differences

var hammingDistance = function(x, y) {
  const xArr = [];
  const yArr = [];
  let newX = x;
  let newY = y;
  let num = 8;
  while (num !== 0.5) {
    if (newX >= num) {
      xArr.push(1);
      newX -= num;
    } else {
      xArr.push(0);
    }
    if (newY >= num) {
      yArr.push(1);
      newY -= num;
    } else {
      yArr.push(0);
    }
    num = num / 2;
  }
  let count = 0;
  for (let i = 0; i < xArr.length; i++) {
    if (yArr[i] !== xArr[i]) {
      count += 1;
    }
  }
  return count;
};

console.log(hammingDistance(x, y));
