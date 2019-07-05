var _ = require('lodash');

var object = { a: [{ b: { c: 3 } }] };

console.log(_.get(object, 'a[0].b.c'));
// => 3

console.log(_.get(object, ['a', '0', 'b', 'c']));
// => 3

console.log(_.get(object, 'a.b.c', 'default'));
// => default

console.log('-------------------');

function getObj(obj, path, defaultVal = 'Does not exist') {
  if (typeof path === 'string') {
    path = path.match(/[a-z]+|\d+/gi);
  }
  let newObj = obj;
  for (let i = 0; i < path.length; i++) {
    if (newObj[path[i]]) newObj = newObj[path[i]];
    else {
      newObj = defaultVal;
    }
  }
  return newObj;
}

console.log(getObj(object, ['a', '0', 'b', 'c']));
console.log('------------------');
console.log(getObj(object, 'a[0].b.c'));
console.log('------------------');
console.log(getObj(object, 'a.b.c', 'default'));
