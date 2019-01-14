// A twin prime is a prime number that differs from another prime number by two. Write a function called isTwinPrime which takes an integer and returns true if it is a twin prime, or false if it is not.
// Example:

// 5 is a prime, and 5 + 2 = 7, which is also a prime, so it returns true.
// 9 is not a prime, and so does not need checking, so it returns false.
// 7 is a prime, but 7 + 2 = 9, which is not a prime. However, 7 - 2 = 5, which is a prime, so it returns true.
// 23 is a prime, but 23 + 2 is 25, which is not a prime.  23 - 2 is 21, which isn't a prime either, so 23 is not a twin prime.

function isTwinPrime(n) {
  let minus = true;
  let plus = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
    else if (n - 2 !== i && (n - 2) % i === 0) {
      minus = false;
    } else if ((n + 2) % i === 0) {
      plus = false;
    }
  }
  return n > 2 && (minus === true || plus === true);
}

console.log(isTwinPrime(5)); // true
console.log(isTwinPrime(7)); // true
console.log(isTwinPrime(9)); // false
console.log(isTwinPrime(19)); // true
console.log(isTwinPrime(23)); //false
