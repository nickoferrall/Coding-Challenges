// const str1 = 'dog';
// const str2 = 'god';
const str1 = 'doggg';
const str2 = 'ggod';

// we could split the two strings
// check if 1 is permutation of 2 by getting count of each letter
// in str1 and saving in dict
// we could then for loop through second str creating a dict
// while checking if each value is in dict1. If not, return false
// if each value is in str1Dict, we check the count

function permutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  const str1Arr = str1.split('');
  const str2Arr = str2.split('');
  let str1Dict = {};
  let str2Dict = {};
  for (let i = 0; i < str1.length; i++) {
    if (str1Dict[str1Arr[i]]) {
      str1Dict[str1Arr[i]] += 1;
    } else {
      str1Dict[str1Arr[i]] = 1;
    }
  }
  for (let j = 0; j < str2.length; j++) {
    if (str1Dict[str2Arr[j]] === undefined) return false;
    {
      if (str2Dict[str2Arr[j]]) {
        str2Dict[str2Arr[j]] += 1;
      } else {
        str2Dict[str2Arr[j]] = 1;
      }
    }
  }
  for (let index = 0; index < Object.values(str1Dict).length; index++) {
    let val = Object.keys(str1Dict)[index];
    if (str1Dict[val] !== str2Dict[val]) return false;
  }
  return true;
}

console.log(permutation(str1, str2));
