const str1 = 'ppale';
const str2 = 'ppakee';

function oneWay(str1, str2) {
  if (str1.length - str2.length > 1 || str1.length - str2.length < -1)
    return false;
  const first = str1.length > str2.length ? str1.split('') : str2.split('');
  const second = str1.length > str2.length ? str2.split('') : str1.split('');
  let count = 0;
  console.log('First', first, second);
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) break;
      if (j === second.length - 1 && first[i] !== second[j]) {
        console.log('If..', i, j, count, first[i], second[j]);
        if (count === 1) return false;
        count += 1;
        console.log('COunt', count);
      }
    }
  }
  return true;
}

console.log(oneWay(str1, str2));
