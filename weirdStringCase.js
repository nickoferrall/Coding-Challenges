function toWeirdCase(string) {
  const answer = string
    .split(' ')
    .map(word =>
      word
        .split('')
        .map((letter, index) =>
          index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
        )
        .join('')
    )
    .join(' ');
  console.log(word);
}

// toWeirdCase('This');
// toWeirdCase('is');
toWeirdCase('This is a test');
