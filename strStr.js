// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// const haystack = 'hello';
// const needle = 'll';
const haystack = 'babbbbbabb';
const needle = 'bbab';

// 2
// if string is empty
// always letters
// what if it's a capital letter

// brute force of checking if i in haystack ==== needle[0]
// if true, for loop through length of needle. If subsequent letters
// are the same, return i

var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack.length === 1) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (needle.length === 1) return i;
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) break;
        else if (haystack[i + j] === needle[j] && j === needle.length - 1) {
          return i;
        }
      }
    }
  }
  return -1;
};

console.log(strStr(haystack, needle));
