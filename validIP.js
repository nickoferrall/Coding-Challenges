function isValidIP(str) {
  if (str.split('.').length !== 4 || /\s/.test(str)) return false;
  let strArray = str
    .split('.')
    .filter(number => number <= 255)
    .filter(e => e >= 0)
    .filter(value => (value.length > 1 ? value[0] != 0 : value));
  return strArray.length === 4 ? true : false;
}

console.log(isValidIP('1.2.3.4'));
console.log(isValidIP('123.45.67.89'));
console.log(isValidIP('123.045.067.089'));
console.log(isValidIP('1.2.3'));
console.log(isValidIP('123.456.78.90'));
console.log(isValidIP('255.0.78.90'));
console.log(isValidIP('1.2.3.4.5'));
console.log(isValidIP('0.0.0.0'));
