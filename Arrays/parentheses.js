const n = 3;

// [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
//   ]

var generateParenthesis = function(n) {
  let arr = [];
  compose(
    n,
    n,
    ''
  );
  return arr;

  function compose(left, right, str) {
    if (!left && !right && str.length) return arr.push(str);
    if (left)
      compose(
        left - 1,
        right,
        str + '('
      );
    if (right > left)
      compose(
        left,
        right - 1,
        str + ')'
      );
  }
};

// console.log(generateParenthesis(3));

const person = new Object();

name = 'dave';
person[name] = 1;

person['address'] = { SF: 'USA', LDN: 'UK' };

console.log(person['address']);

console.log(person['address'].SF);
