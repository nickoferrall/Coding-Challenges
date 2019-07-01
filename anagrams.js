const s = 'cbaebabacd';
const p = 'abc';

// object of p
// counter of correct letters
// index arr
// for loop through s
// if s is in object of p, keep checking for the remaining letters in
// len of p
// if count of correct letters = len, add to array: i - correct letters
// else, count of correct letters = 0

var findAnagrams = function(s, p) {
  const obj = {};
  for (let i = 0; i < p.length; i++) {
    if (obj[p[i]]) {
      obj[p[i]] += 1;
    } else {
      obj[p[i]] = 1;
    }
  }
  let correctCount = 0;
  let indexes = [];
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      correctCount += 1;
      if (correctCount === p.length) {
        indexes.push(i - (correctCount - 1));
      }
    } else {
      correctCount = 0;
    }
  }
  return indexes;
};

console.log(findAnagrams(s, p));
