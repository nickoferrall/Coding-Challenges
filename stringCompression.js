// Good morning! Implement a method to perform basic string compression using the counts of repeated characters.

// For example, the string  'aabcccccaaa' would become a2b1c5a3.

// If the "compressed" string would not become smaller than the original string, then your method should return the original string.

// You can assume the string has only uppercase and lowercase letters (a - z).

// Use splice. Use a for loop. If arr[i] is equal to the last letter of
// temp arr, count increases. When it's not equal, splice count into
// temp arr

function stringCompression(str) {
  let arr = str.split('');
  let tempArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else {
      tempArr.push(`${arr[i]}${count + 1}`);
      count = 0;
    }
  }
  const regex = /[2-9]/;
  if (tempArr.join('').length >= str.length) {
    return str;
  }
  return regex.test(tempArr) ? tempArr.join('') : str;
}

console.log(stringCompression('aabcccccaaa'));
console.log(stringCompression('abcd'));
console.log(stringCompression('aaaaqqqqqqqqqwertyuiop'));
