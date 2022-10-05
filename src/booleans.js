function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return a == false && b == false;
}

function one(a, b) {
  return a != b;
}

function truthiness(a) {
  return (
    a.length > 0 ||
    a > 0 ||
    (Array.isArray(a) && a.length === 0) ||
    typeof a === 'object'
  );
}

function isEqual(a, b) {
  return a === b
}

function isGreaterThan(a, b) {
  return a  > b
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
}

function isOdd(a) {
  return a % 2 == 1;
}

function isEven(a) {
  return a % 2 ==0;
}

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a))
}

function startsWith(char, string) {
  return char === string.charAt(0);
}

function containsVowels(string) {
  if (string.match(/[aeiou]/gi)) {
    return true;
  }
  return false;
}

function isLowerCase(string) {
  string.replace(/\d+/g, '');
  if (string.toLowerCase() === string) {
    return true;
  }
  return false;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
