// Given a 6x6 2D Array, arr:

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

// For example, given the 2D array:

// -9 -9 -9  1 1 1
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
// We calculate the following  hourglass values:

// -63, -34, -9, 12,
// -10, 0, 28, 23,
// -27, -11, -2, 10,
// 9, 17, 25, 18
// Our highest hourglass value is  from the hourglass:

// 0 4 3
//   1
// 8 6 6

// const arr = [
//   1,
//   1,
//   1,
//   0,
//   0,
//   0,
//   0,
//   1,
//   0,
//   0,
//   0,
//   0,
//   1,
//   1,
//   1,
//   0,
//   0,
//   0,
//   0,
//   0,
//   2,
//   4,
//   4,
//   0,
//   0,
//   0,
//   0,
//   2,
//   0,
//   0,
//   0,
//   0,
//   1,
//   2,
//   4,
//   0
// ];

// const arr = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0]
// ];

const arr = [
  [-1, 1, -1, 0, 0, 0],
  [0, -1, 0, 0, 0, 0],
  [-1, -1, -1, 0, 0, 0],
  [0, -9, 2, -4, -4, 0],
  [-7, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
];

// output = 19

// have a count of the max hourglass total
// it's 6 across and 6 deep
// top row = index 0, 1, 2
// middle row = 7th index
// bottom row = 12, 13, 14
// for loop incrementing from 0 that stops if index + 14 = null

// nested for loop would mean that 6 times, we could go 4 across counting score
// i needs to be a multipler or + of j
// if i is equal to the index to break to a new line, add more

// function hourglassSum(arr) {
//     let maxScore;
//   //   for (let i = 0; i < arr.length - 14; i++) {
//   //     let skipLine = [3, 9, 15];
//   //     let currentScore =
//   //       arr[i] +
//   //       arr[i + 1] +
//   //       arr[i + 2] +
//   //       arr[i + 7] +
//   //       arr[i + 12] +
//   //       arr[i + 13] +
//   //       arr[i + 14];
//   //     if (!maxScore) {
//   //       maxScore = currentScore;
//   //     }
//   //     if (currentScore > maxScore) {
//   //       maxScore = currentScore;
//   //     }
//   //     if (skipLine.includes(i)) {
//   //       i += 2;
//   //     }
//   //   }
//   return arr[2][1];
// }

// get top row, middle and bottom row
// outer for loop x4 depth. Inner x4 wide
// top row = i, i+ 1, i + 2
// middle = i + 1
// bottom = i, i+ 1, i + 2

function hourglassSum(arr) {
  let maxScore;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let topRow = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      let middleRow = arr[i + 1][j + 1];
      let bottomRow = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      let currentScore = topRow + middleRow + bottomRow;
      if (maxScore == undefined) {
        maxScore = currentScore;
      }
      if (maxScore < currentScore) {
        maxScore = currentScore;
      }
    }
  }
  return maxScore;
}

console.log(hourglassSum(arr));
