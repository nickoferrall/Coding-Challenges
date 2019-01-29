// Write a function called getProduct that gets the product of all the integers at the array EXCEPT the one at that index.

// For example, given [1, 9, 6, 5, 2] your function should return [540, 60, 90, 108,  270], because the calculation looks like this:

// [9 * 6 * 5 * 2, 1 * 6 * 5 * 2, 1 * 9 * 5 * 2, 1 * 9 * 6 * 5].

// Edge cases:
// No division, as some arrays may include 0.
// Target time: O(n).

function getProduct(arr) {
    let myArr = [];
    for (let i = 0; i < arr.length; i++) {
        let tempArr = arr.filter(num => num !== arr[i])
        myArr.push(tempArr.reduce((acc, currentVal) => {
            return acc * currentVal;
        }))
    }
    return myArr;
}

console.log(getProduct([0, 0, 6, 5, 2]));