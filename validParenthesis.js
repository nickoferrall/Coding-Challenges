// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// const s = '()'; // true
// const s = '()[]{}'; // true
// const s = '(]'; // false
// const s = '([)]'; // false
const s = '{[]}'; // true
// const s = '((';

// we should have a stack LIFO
// loop through the split string pushing each bracket to the array
// if the closing bracket is not the top item on the stack, return false

// class brackets {
//   constructor() {
//     this.bracketStack = [];
//   }
//   addBracket(bracket) {
//     const brackets = { ')': 1, '(': 1, '}': 1, '{': 1, ']': 1, '[': 1 };
//     if (!brackets[bracket]) return false;
//     this.bracketStack.push(bracket);
//   }
//   removebracket() {
//     if (this.bracketStack.length === 0) {
//       return false;
//     }
//     const popped = this.bracketStack.pop();
//     return popped;
//   }
// }

var isValid = function(s) {
  if (s.length === 0) return true;
  if (s.length === 1) return false;
  const bracketsStack = [];
  const splitStr = s.split('');
  const openBrackets = { ')': '(', '}': '{', ']': '[' };
  const bracketOptions = { ')': 1, '(': 1, '}': 1, '{': 1, ']': 1, '[': 1 };
  for (let i = 0; i < splitStr.length; i++) {
    if (!bracketOptions[splitStr[1]]) return false;
    // if it's an open bracket
    if (!openBrackets[splitStr[i]]) {
      bracketsStack.push(splitStr[i]);
    } else {
      const topOfStack = bracketsStack.pop();

      // if the top of the stack isn't the open bracket for the closed bracket
      if (openBrackets[splitStr[i]] !== topOfStack) {
        return false;
      }
    }
  }
  return bracketsStack.length === 0;
};

console.log(isValid(s));
