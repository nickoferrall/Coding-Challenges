// Insertion sort is a basic sorting algorithm.

// Insertion sort iterates over an array, growing a sorted array behind the current location.

// It takes each element from the input and finds the spot, up to the current point, where that element belongs.

// It does this until it gets to the end of the array.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  let sortedArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let n = 0; n < array.length; n++) {
      if (array[i] < array[n]) {
        sortedArray.splice(n, 1, array[i]);
      } 
    } if (sortedArray){
        sortedArray.push(array[i]);
      }
  }
  return sortedArray;
}

console.log(insertionSort([12, 44, 10, 2, 35, 1098, 356]));
