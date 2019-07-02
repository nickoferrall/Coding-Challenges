const s = 'cbaebabacd';
const p = 'abc';

// create obj
// for loop through s
// if a letter is in p obj, begin new for loop
// if all the letters are in the obj the same number of times,
// add index. else, break and I moves one

function createObj(p) {
  const obj = {};
  for (let i = 0; i < p.length; i++) {
    if (obj[p[i]]) {
      obj[p[i]] += 1;
    } else {
      obj[p[i]] = 1;
    }
  }
  return obj;
}

var findAnagrams = function(s, p) {
  const obj = createObj(p);
  const indexes = [];
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      let tempObj = {};
      tempObj[s[i]] = 1;
      for (let j = i + 1; j < i + p.length; j++) {
        if (obj[s[j]] && j === i + p.length - 1) {
          tempObj[s[i]] ? (tempObj[s[i]] += 1) : (tempObj[s[i]] = 1);
          for (let index = 0; index < p.length; index++) {
            if (obj[p[index]] !== tempObj[p[index]]) {
              break;
            }
          }
          tempObj = createObj(p);
          indexes.push(i);
          i = j;
        } else if (obj[s[j]]) {
          if (tempObj[s[j]]) {
            tempObj[s[j]] += 1;
            if (tempObj[s[j]] > obj[s[j]]) {
              tempObj = createObj(p);
              break;
            }
          } else {
            tempObj[s[j]] = 1;
          }
        } else {
          break;
        }
      }
    }
  }
  return indexes;
};

console.log(findAnagrams(s, p));
