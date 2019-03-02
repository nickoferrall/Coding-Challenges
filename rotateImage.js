// // Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9, write a method to rotate the image by 90 degrees counterclockwise. Can you do this in place?

function rotateImage(arr) {
  let newArr = [];
  let test = [];
  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr[i];
    for (let n = 1; n < arr.length; n++) {
      test.push(arr[i][arr.length - n]);
    }
  }
  console.log(arr.length);
  return test;
}

// // console.log(rotateImage([[1, 2], [3, 4]])); // [ [2, 4],[1, 3]]

// console.log(
//   rotateImage([
//     [1, 1, 5, 9, 9],
//     [2, 2, 6, 0, 0],
//     [3, 3, 7, 1, 1],
//     [4, 4, 8, 2, 2],
//     [5, 5, 9, 3, 3]
//   ])
// );

// //   [ [ 9, 0, 1, 2, 3 ],
// //   [ 9, 0, 1, 2, 3 ],
// //   [ 5, 6, 7, 8, 9 ],
// //   [ 1, 2, 3, 4, 5 ],
// //   [ 1, 2, 3, 4, 5 ] ]
