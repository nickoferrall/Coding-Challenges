function solution(str) {
  let split = str.match(/.{1,2}/g);
  split.slice(-1)[0].length === 1
    ? split.splice(-1, 1, split.slice(-1)[0] + '_')
    : null;
  console.log(split);
}

solution('abc');
solution('abcdef');
