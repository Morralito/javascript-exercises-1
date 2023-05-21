const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let result = 0;
  for (const val of array) result += val;

	return result;
};

const multiply = function(array) {
  let result = 1;
  for (const val of array) {
    result *= val;
  }

	return result;
};

const power = function(base, exponent) {
	let result = base;
  for (let i = 1; i < exponent; i++) result *= base;
  return result;
  
  
};

const factorial = function(n) {
  if (n === 0) return 1;

	return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
