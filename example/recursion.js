// Sum of first N numbers ---
// 5?

// 5 + 4 + 3 + 2 + 1 = 15
// iterative(1) = 1
// iterative(2) = 3 // 2 + 1
// iterative(3) = 6 // 3 + 2 + 1

const iterative = (n) => {
  let sum = 0;

  for (let int = 1; int <= n; int++) {
    sum += int;
  }

  return sum;
};

// fun fact, ezpz
const closed = (n) => {
  return (n * (n + 1)) / 2;
};

// 1...infinity
const factorial = (n) => {
  // base case - knows the answer
  if (n <= 1) return 1;

  // recursive case -- call itself over and over
  return sumOfFirstN(n - 1) * n;
};

// 1
// 1 + 2
// 3 + 3
// 6 + 4
// 10 + 5
// 15

// func call        // output

//    |    sumOfFirstN(1)    |  1    // this is base case, can finish, come off the call stack
//    |    sumOfFirstN(2)    |  1
//    |    sumOfFirstN(3)    |  1
//    |    sumOfFirstN(4)    |  1
//    |____sumOfFirstN(5)____|      < ---first function call sumOfFirstN(5)

// call stack above

// 1. Head towards something in recursive call..
// 2. That something is the base case

// console.log(iterative(100));
// console.log(closed(100));

const value = 2323;

console.log("recursive: ", sumOfFirstN(value)); // n = 5
console.log("closed, truth: ", closed(value)); // n = 5
console.log("iterative: ", iterative(value)); // n = 5
