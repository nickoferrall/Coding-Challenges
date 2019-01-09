function findOdd(A) {
  const sortedArray = {};
  A.forEach(num => {
    if (sortedArray.hasOwnProperty(num)) {
      sortedArray[num] += 1;
    } else {
      sortedArray[num] = 1;
    }
  });
  for (let prop in sortedArray) {
    if (sortedArray[prop] % 2 === 1) {
      return Number(prop);
    }
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(findOdd([10]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));

// Check if string includes all the letters in the alphabet

function isPangram(string) {
  const regex = /[a-z]/;
  let letters = {};
  string
    .toLowerCase()
    .split('')
    .forEach(letter => {
      if (letters.hasOwnProperty(letter) && regex.test(letter)) {
        letters[letter] += 1;
      } else if (regex.test(letter)) {
        letters[letter] = 1;
      }
    });
  return Object.keys(letters).length === 26;
}

var string = 'The quick brown fox jumps over the lazy dog.';
console.log(isPangram(string));

var secondString = 'This is not a pangram.';
console.log(isPangram(secondString));
