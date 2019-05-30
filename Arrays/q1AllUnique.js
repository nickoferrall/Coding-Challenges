// const s = 'dsdhhnk';
// const s = 'qwerty';
const s = 's';

// split str
// go through the array, and add to dict
// if letter is in the dict, return false. Else, true

function allUnique(s) {
  if (s.length === 1) return true;
  const splitStr = s.split('');
  let strDict = {};
  for (let i = 0; i < splitStr.length; i++) {
    if (strDict[splitStr[i]]) {
      return false;
    } else {
      strDict[splitStr[i]] = 1;
    }
  }
  return true;
}

console.log(allUnique(s));
