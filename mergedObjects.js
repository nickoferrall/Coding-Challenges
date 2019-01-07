function mergeObjects(arr) {
  let answer = {};
  for (let i = 0; i < arr.length; i++) {
    answer = Object.assign(answer, arr[i]);
  }
  return answer;
}

console.log(
  mergeObjects([
    { 1: '1', 2: '2', 3: '3' },
    { 3: '4', 4: '4', 5: '6' },
    { 5: '5', 6: '6', 7: '7' }
  ])
);
