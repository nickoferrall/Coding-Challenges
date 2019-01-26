const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(function(item) {
  copy.push(item + '!');
});

console.log(copy);
