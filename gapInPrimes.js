// We will write a function gap with parameters:

// g (integer >= 2) which indicates the gap we are looking for

// m (integer > 2) which gives the start of the search (m inclusive)

// n (integer >= m) which gives the end of the search (n inclusive)

// In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

// So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise nil or null or None or Nothing (depending on the language).

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1 && num !== 0;
}

function gap(g, m, n) {
  let primes = [];
  for (let i = m; i <= n; i++) {
    if (isPrime(i) === true) {
      primes.push(i);
      if (primes[primes.length - 1] - primes[primes.length - 2] === g) {
        return [primes[primes.length - 2], primes[primes.length - 1]];
      }
    }
  }
  return null;
}

console.log(gap(2, 100, 110)); // [101, 103]);
console.log(gap(4, 100, 110)); // [103, 107]);
console.log(gap(6, 100, 110)); // null);
console.log(gap(8, 300, 400)); // [359, 367]);
console.log(gap(10, 300, 400)); // [337, 347]);
