// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below. It should return the resulting array of integers.

// rotLeft has the following parameter(s):

// An array of integers .
// An integer , the number of rotations.
// Input Format

// The first line contains two space-separated integers  and , the size of  and the number of left rotations you must perform.
// The second line contains  space-separated integers .

// we could do this in place and move each item's index by d
// or we could create a new array and insert each item at the correct index. More space but O(N) rather than O(N^2)
// create empty array
// for loop through existing array
// start with index 0 of new arr which will be index 4
// could use splice to do it in place

// we want to start with index 0 + d + 1 = 5. Then 1 + d + 1 = 1
// index = d. index increments until it reaches length, then 0

// start new array with index d at position 0
// then go through array after position a[d] until it reaches length. Reset index to 0
// once the index is equal to d, break

const a = [1, 2, 3, 4, 5];
const d = 4;

function rotLeft(a, d) {
  let newArr = [a[d]];
  for (let i = d + 1; i !== d; i++) {
    if (i === a.length) {
      i = -1;
    } else {
      newArr.push(a[i]);
    }
  }
  return newArr;
}

console.log(rotLeft(a, d));
