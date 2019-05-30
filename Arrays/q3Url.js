const str = 'Mr John Smith';

function spaces(str) {
  let strArr = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (strArr[i] === ' ') {
      strArr[i] = '%20';
    }
  }
  return strArr.join('');
}

console.log(spaces(str));
