// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

function dirReduc(arr) {
  function remove(newArr) {
    for (let i = 0; i < newArr.length; i++) {
      if (
        (newArr[i] === 'NORTH' || newArr[i] === 'SOUTH') &&
        (newArr[i + 1] === 'NORTH' || newArr[i + 1] === 'SOUTH') &&
        newArr[i] !== newArr[i + 1]
      ) {
        newArr.splice(i, 2);
      } else if (
        (newArr[i] === 'EAST' || newArr[i] === 'WEST') &&
        (newArr[i + 1] === 'WEST' || newArr[i + 1] === 'EAST') &&
        newArr[i] !== newArr[i + 1]
      ) {
        newArr.splice(i, 2);
      }
    }
    return newArr;
  }
  let changingArr = remove(arr);
  do {
    changingArr = remove(changingArr);
  } while (changingArr !== remove(changingArr));
  return changingArr;
}

// console.log(
//   dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
// ); // ["WEST"])
// console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST'])); // ["NORTH", "WEST", "SOUTH", "EAST"])
// console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])); // [])

dirReduc([
  'NORTH',
  'EAST',
  'NORTH',
  'EAST',
  'WEST',
  'WEST',
  'EAST',
  'EAST',
  'WEST',
  'SOUTH'
]);
