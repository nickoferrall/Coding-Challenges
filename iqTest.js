function iqTest(numbers) {
  let myNumbers = numbers.split(' ');
  let even = [];
  let odd = [];
  for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] % 2 === 0) {
      even.push(myNumbers[i]);
    }
    if (myNumbers[i] % 2 !== 0 && myNumbers[i] !== ' ') {
      odd.push(myNumbers[i]);
    }
  }
  if (odd.length === 1) {
    console.log(myNumbers.findIndex(odd));
    // console.log(Array.isArray(myNumbers));
  } else {
    console.log(even);
  }
}

// iqTest('2 4 7 8 10');
// iqTest('1 2 2');
