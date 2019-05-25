// Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

// Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

// For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider

// s = 'aba';
// const s = 'gfcaaaecbg';
// s =
//   'epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq';
s = 'ceebbcb';
//   'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm';
const n = 817723;

function repeatedString(s, n) {
  if (s.length == 0) {
    return 0;
  }
  if (s.match(/a/g) == null) {
    return 0;
  }
  if (s.length == 1 && n == 'a') {
    return n;
  }

  let count = s.match(/a/g).length;

  // this is the remainder of how many times the string length fits in the new string in %
  const remainder = n % s.length;
  const countPreRemainder = (count * (n - remainder)) / s.length;

  let remainderAs = 0;
  for (let j = 0; j < remainder; j++) {
    if (s[j] == 'a') {
      remainderAs += 1;
    }
  }
  return countPreRemainder + remainderAs;
}

console.log(repeatedString(s, n));
