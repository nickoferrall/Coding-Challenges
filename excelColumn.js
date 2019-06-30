const s = 'ZZY';

var titleToNumber = function(column) {
  const alpha = {};
  for (let i = 65; i < 91; i++) {
    alpha[String.fromCharCode(i)] = i - 64;
  }
  let answer = 0;
  const colLen = column.length;
  let multiplier = 0;
  for (let i = colLen - 1; i >= 0; i--) {
    if (multiplier === 0) {
      answer = alpha[column[i]];
      multiplier = 26;
    } else {
      answer += alpha[column[i]] * multiplier;
      multiplier *= 26;
    }
  }
  return answer;
};

console.log(titleToNumber(s));
