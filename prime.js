// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   let divisible = 0;
//   let notDivisibe = 0;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       divisible += 1;
//     } else {
//       notDivisibe += 1;
//     }
//   }
//   return divisible === 0 ? true : false;
// }

// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     } else {
//       return num > 1;
//     }
//   }
// }

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
