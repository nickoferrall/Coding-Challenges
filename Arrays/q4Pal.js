// const str = 'Taco Cat';
const str = 'Taco Catt';

function pal(str) {
  if (str.length === 1) return true;
  let palDict = {};
  const strTrimmed = str.replace(/\s+/g, '');
  let palArr = strTrimmed.toLowerCase().split('');
  for (let i = 0; i < strTrimmed.length; i++) {
    if (palDict[palArr[i]]) {
      palDict[palArr[i]] += 1;
    } else {
      palDict[palArr[i]] = 1;
    }
  }
  let oddCount = 0;
  let vals = Object.values(palDict);
  for (let j = 0; j < vals.length; j++) {
    if (vals[j] % 2 !== 0) {
      if (oddCount === 1) {
        return false;
      } else {
        oddCount += 1;
      }
    }
  }
  return true;
}

console.log(pal(str));
