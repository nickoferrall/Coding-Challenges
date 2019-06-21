const n = 15;

var fizzBuzz = function(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
      continue;
    } else if (i % 3 === 0) {
      arr.push('Fizz');
      continue;
    } else if (i % 5 === 0) {
      arr.push('Buzz');
      continue;
    } else {
      arr.push(i.toString());
      continue;
    }
  }
  return arr;
};

console.log(fizzBuzz(n));
