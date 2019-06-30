const n = 2;

const squares = {
  '1': 1,
  '2': 4,
  '3': 9,
  '4': 16,
  '5': 25,
  '6': 36,
  '7': 49,
  '8': 64,
  '9': 81
};

var isHappy = function(n) {
  const seen = {};
  function helper(num, seen) {
    if (seen[num]) return false;
    else {
      seen[num] = 1;
    }
    let newNumArr = [];
    let numArr = num.toString().split('');
    console.log('Num arr', numArr);
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] !== '0') {
        newNumArr.push(squares[numArr[i]]);
      }
    }

    const newNum = newNumArr
      .map(val => parseInt(val))
      .reduce((acc, currentVal) => (acc += currentVal), 0);

    return newNum === 1 ? true : helper(newNum, seen);
  }

  return helper(n, seen) === true ? true : false;
};

console.log(isHappy(n));
