// const str = 'aabcccccaaa';
// // const str = 'adsjkdsjhkjsndkjnsdhhhhddd';

// // function shorter(str) {
// //   if (str.length === 1) return str + 1;
// //   const strArr = str.toLowerCase().split('');
// //   let result = '';
// //   for (let i = 0; i < strArr.length; i++) {
// //     let sameLetter = 1;
// //     while (sameLetter < strArr.length)
// //       if (strArr[i] === strArr[i + sameLetter]) {
// //         sameLetter += 1;
// //       } else {
// //         break;
// //       }
// //     result = result + strArr[i] + sameLetter;
// //     i += sameLetter - 1;
// //     sameLetter = 1;
// //   }
// //   return result;
// // }

function shorter(str) {
  if (str.length === 1) return str;
  let dict = {};
  dict[str[0]] = 1;
  let result = '';
  const strArr = str.toLowerCase().split('');
  for (let i = 1; i <= strArr.length; i++) {
    if (dict[strArr[i]]) {
      dict[strArr[i]] += 1;
    } else {
      result += strArr[i - 1] + dict[strArr[i - 1]];
      dict = {};
      dict[strArr[i]] = 1;
    }
  }
  return result.length < str.length ? result : str;
}

console.log(shorter(str));
