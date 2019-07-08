// Given a collection of distinct integers, return all possible permutations.

const nums = [1, 2, 3];

// recursive call from for loop
// recursive fun takes in array and swaps first number with next number
// until it reaches the end
// outer loop then for loops backwards with 3 moving to position 0

var permute = function(nums) {
  let results = [];

  let permutations = (current, remaining) => {
    if (remaining.length <= 0) {
      //   console.log('SLICE', current, remaining);
      results.push(current);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        // Loop through remaining elements
        const test = [1, 2, 3];
        console.log('REMAIN', test.slice(1));
        current.push(remaining[i]); // Insert the iTH element onto the end of current
        permutations(
          current.slice(),
          remaining.slice(0, i).concat(remaining.slice(i + 1))
        ); // Recurse with inserted element removed
        current.pop(); // Remove last inserted element for next iteration
      }
    }
  };

  permutations([], nums);
  return results;
};

console.log(permute(nums));
