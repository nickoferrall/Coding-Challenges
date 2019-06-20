const s = 'anagram';
const t = 'nagaram';

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let dict = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) continue;
    if (dict[s[i]]) {
      dict[s[i]] += 1;
    } else if (!dict[s[i]]) {
      dict[s[i]] = 1;
    }
    if (dict[t[i]]) {
      dict[t[i]] -= 1;
    } else if (!dict[t[i]]) {
      dict[t[i]] = -1;
    }
  }
  if (Object.values(dict).find(val => val !== 0)) return false;
  return true;
};

console.log(isAnagram(s, t));
