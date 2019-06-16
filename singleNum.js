const arr = [4, 1, 2, 1, 2];

// most efficient
// add each value to an object
// get Object.values. Find the element that only occurs once

// function singleNum(arr) {
//   const obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]] += 1;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }
//   return Object.keys(obj).find(key => obj[key] === 1);
// }

function singleNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null)
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr[i] = null;
          arr[j] = null;
        }
      }
  }
  return arr.find(val => val !== null);
}

const dictTest = { test: 100, testAgain: 200 };
console.log(dictTest);
console.log(dictTest.pop());
console.log(dictTest);

console.log(singleNum(arr));
