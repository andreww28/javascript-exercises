const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  if(nums.length === 0) return 0;
  
	return nums.reduce((total, num) => {
	  return total + num;
	});
};

const multiply = function(nums) {
  if(nums.length === 0) return 0;
  
  return nums.reduce((total, num) => {
    return total * num;
  });
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  return (n === 1 || n === 0) ? 1 : n * factorial(n-1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
