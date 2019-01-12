// function isPrime(num) {

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    return num % i === 0 ? false : num > 1;
  }
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(10));
