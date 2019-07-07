// merge using splice

const l1 = [1, 2, 4];
const l2 = [1, 3, 4];
// const l1 = [1, 10, 20, 40];
// const l2 = [3, 4, 18];

var mergeTwoLists = function(l1, l2) {
  const arr1 = l1.length > l2.length ? l1 : l2;
  const arr2 = l1.length > l2.length ? l2 : l1;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] >= arr2[j]) {
        arr1.splice(i, 0, arr2[j]);
        arr2.splice(j, 1);
        if (arr2.length === 0) return arr1;
      }
    }
  }
};

console.log(mergeTwoLists(l1, l2));
