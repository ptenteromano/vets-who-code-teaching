// Day 2
// Example code

// Recursion - factorial
// k! - this is factorial
// I.E., 5! = 5 * 4 * 3 * 2 * 1 = 120

// What a recursive formula looks like:

// k! = k * k - 1 * k - 2 * k - 3 * ... * 1

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
let test = 5;
let test_eight = 8;

console.log(factorial(test_eight));

//        THE CALL STACK
//
//    |   1    | comes off the stack
//    |    2 * 1  | = 2, comes off the stack
//    |    3 * 2    | = 6,
//    |    factorial(4)    | 24
//    |    factorial(5)    | 120
//    |    factorial(6)    |
//    |    factorial(7)    |
//    |____factorial(8)____| first function call

// sequence
// 20*19*18 * ... * 1

// fibonacci(20)

// 19th and 18th positions are, and add them
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ..... ,(20th position)
