// Day 2
// Part 2

// Recursion - Fibonacci
// Fibonacci:
// n = (n-1) + (n-2)

function Fibonacci(n) {
  // we need two base cases
  if (n <= 0) return 0;

  if (n === 1) return 1;

  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// run function
let test = 23;

console.log(Fibonacci(test));

// Things to consider:
// Recursion is not a very 'fast' method, but it is very succinct, and elegent.
// Anything past the ~50th fibonacci is so large, javascript cannot store the number in memory

// Iterative vs Recursion

// function sumOfFirstK(k) {
//   if (k <= 1) {
//     return 1;
//   }

//   return k + sumOfFirstK(k - 1);
// }

// console.log(sumOfFirstK(5));
