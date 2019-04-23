// Day 3
// Part 2

// a function to check whether a number is prime or not

let testVal = 2017;

// First option, pretty intuitive
function isPrime(k) {
  if (k < 2) {
    return "Not Prime";
  }

  // why start at 2?

  // n ^ (1/2)
  for (let i = 2; i < k; i++) {
    if (k % i == 0) return "Not Prime";
  }

  return "Prime!";
}

// 36 - [2 * 18], [6 * 6], [18 * 2]

let str = isPrime(testVal);
console.log(str);

// First 'n' primes:
// A simple loop using our optimized version!
function first_N_Primes(n, opt) {
  let num = 2;
  let i = 0;
  let str = "";

  while (i < n) {
    // optimization or not
    if (opt) {
      str = "optimizedAlgorithm()!";
    } else {
      str = isPrime(num);
    }

    if (str == "Prime!") {
      // console.log(num);
      i++;
    }
    num++;
  }
}

let n = 10;

// test speeds!!
console.log(`Testing with first ${n} primes\n`);
console.time("N primes - original");
first_N_Primes(n);
console.timeEnd("N primes - original");

console.time("N primes - OPTIMIZED!!");
first_N_Primes(n, true);
console.timeEnd("N primes - OPTIMIZED!!", n);
