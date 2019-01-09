// Bubble sort is the most basic sorting algorithm.
//  It compares the first element of an array with the second element.
//  If the first element is greater than the second element then it swaps them.
//  Then it compares the second and third elements and swaps them if the second is larger.
//  Then it compares the third and fourth elements and does the same.
//  This continues and the the larger elements begin to "bubble" towards the end.
//  The loop then restarts and repeats this process until it makes a clean pass
//  without performing any swaps.

//  Implement a function that takes an array and sorts it using this technique.
//  Don't use JavaScript's built-in sorting function (Array.prototype.sort).

function bubbleSort(arr) {
  function sortArr(myArr) {
    let sortedArr = [];
    for (let i = 0; i < myArr.length; i++) {
      if (myArr[i] < sortedArr[sortedArr.length - 1]) {
        sortedArr.splice(-1, 0, myArr[i]);
      } else {
        sortedArr.push(myArr[i]);
      }
    }
    return sortedArr;
  }
  let changingArr = sortArr(arr);
  for (let i = 0; i < 10; i++) {
    if (changingArr == sortArr(changingArr)) {
      return changingArr;
    } else {
      changingArr = sortArr(changingArr);
    }
  }
  return changingArr;
}

console.log(bubbleSort([2, 1, 3, 23, 2, 6, 5, 3, 2, 4242]));
