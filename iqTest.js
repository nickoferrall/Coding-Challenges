function iqTest(numbers) {
  let myNumbers = numbers.split(' ');
  let even = [];
  let odd = [];
  for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] % 2 === 0) {
      even.push(i + 1);
    }
    if (myNumbers[i] % 2 !== 0 && myNumbers[i] !== ' ') {
      odd.push(i + 1);
    }
  }
  if (odd.length === 1) {
    console.log(odd[0]);
  } else {
    console.log(even[0]);
  }
}

iqTest('2 4 7 8 10');
iqTest('1 2 2');
