const array = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present'
];

const newArray = array.filter(i => i.length > 5);
console.log(newArray);

function findOutlier(integers) {
  let odd = integers.filter(number => number % 2 !== 0);
  let even = integers.filter(number => number % 2 === 0);
  return odd.length === 1 ? parseInt(odd) : parseInt(even);
}
console.log(findOutlier([0, 1, 2]));
