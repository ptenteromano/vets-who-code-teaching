// Day 4
// Example code

// Recursion - factorial
// k! - this is factorial
// I.E., 5! = 5 * 4 * 3 * 2 * 1 = 120

// What a recursive formula looks like:

// k! = k * k - 1 * k - 2 * k - 3 * ... * 1

// Grows very fast: (think of just 8!)





// closed form
// ax + b = c


// recursive, recursion

// example
// factorial
// k! // this is the math symbol for factorial


// k is a whole integer

// k! = k * (k-1) * (k-2) * .... * (1)

// k = 8
function factorial(k) {
  // base case
  if (k <= 0) {
    return 1;
  }

  // recursion
  return k * factorial(k-1);
}

console.log(factorial(8));


// k = 5
// run the function

//        THE CALL STACK
//
//    |        |
//    |        |
//    |        |
//    |    1 * 1 = 1
//    |    2 * 1 = 2     |
//    |    factorial(3)    |
//    |    factorial(4)    |
//    |____factorial(5)____|                first function call factorial(5)




// sequence

