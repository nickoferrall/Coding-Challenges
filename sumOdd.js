// function rowSumOddNumbers(n) {
//   let myAnswer = 0;
//   for (let i = 0; i < n.length; i++) {
//     if (n % 2 !== 0) {
//       myAnswer += n;
//     }
//   }
//   return myAnswer;
// }

// rowSumOddNumbers(3, 4, 5);

const items = ["item1", "item2", "item3"];
const copy = [];

items.forEach(function(item) {
  copy.push(item + "!");
});

console.log(copy);
