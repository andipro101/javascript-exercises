const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0)
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current,1)
};

multiply([5,3])

const power = function(a, b) {
	return (Math.pow(a, b))
};

const factorial = function(num) {
	if (num == 0){
    return 1;
  }
  else {
    return (num * factorial(num - 1))
  }

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
