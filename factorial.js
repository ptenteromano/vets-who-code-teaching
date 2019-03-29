// Day 2
// Example code

// Recursion - factorial
// k! - this is factorial
// I.E., 5! = 5 * 4 * 3 * 2 * 1 = 120
// Grows very fast: (think of just 8!)

function factorial(k) {
  // base case
  if (k <= 1) {
    return 1;
  }

  // recursive call
  return k * factorial(k - 1);
}

// run the function
let test = 8;
console.log(factorial(test));
