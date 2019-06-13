const T = [73, 74, 75, 71, 69, 72, 76, 73];

// nested for loop
// for i
// for j
// look through subsequent numbers. If j > i, return j - i
// else, return 0

var dailyTemperatures = function(T) {
  const arr = [];
  for (let i = 0; i < T.length; i++) {
    for (let j = 1 + i; j < T.length; j++) {
      if (T[j] > T[i]) {
        arr.push(j - i);
        break;
      }
      if (j === T.length - 1 && T[j] <= T[i]) {
        arr.push(0);
      }
    }
  }
  arr.push(0);
  return arr;
};

console.log(dailyTemperatures(T));
