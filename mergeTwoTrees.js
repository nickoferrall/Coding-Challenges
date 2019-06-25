const t1 = [1, 3, 2, 5];
const t2 = [2, 1, 3, null, 4, null, 7];

// [3,4,5,5,4,null,7]

// empty array
// root + root
// 2n + 1 + 2n + 1
// test what happens when adding null
// return array

var mergeTrees = function(t1, t2) {
  const treeArr = [];
  const longerLen = t1.length >= t2.length ? t1.length : t2.length;
  treeArr.push(t1[0] + t2[0]);
  for (let i = 0; 2 * i + 2 < longerLen; i++) {
    if (t1[2 * i + 1] && t2[2 * i + 1]) {
      treeArr.push(t1[2 * i + 1] + t2[2 * i + 1]);
    } else if (t1[2 * i + 1]) {
      treeArr.push(t1[2 * i + 1]);
    } else if (t2[2 * i + 1]) {
      treeArr.push(t2[2 * i + 1]);
    } else if (t1[2 * i + 1] === null || t2[2 * i + 1] === null) {
      treeArr.push(null);
    }
    if (t1[2 * i + 2] && t2[2 * i + 2]) {
      treeArr.push(t1[2 * i + 2] + t2[2 * i + 2]);
    } else if (t1[2 * i + 2]) {
      treeArr.push(t1[2 * i + 2]);
    } else if (t2[2 * i + 2]) {
      treeArr.push(t2[2 * i + 2]);
    } else if (t1[2 * i + 2] === null || t2[2 * i + 2] === null) {
      treeArr.push(null);
    }
  }
  return treeArr;
};

console.log(mergeTrees(t1, t2));
