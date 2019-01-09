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
