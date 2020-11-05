// Primarality example

// a function to check whether a number is prime or not

let testVal = 2017;

// First option, pretty intuitive
function isPrime(k) {
  if (k < 2) {
    return "Not Prime";
  }

  // why start at 2?
  for (let i = 2; i < k; i++) {
    if (k % i == 0) return "Not Prime";
  }

  return "Prime!";
}

let str = isPrime(testVal);
console.log(str);

// Optimized slightly!
// Think about why this works
// k = 30 as example

// 2 * 15 || 3 * 10 || 5 * 6      ....     15 * 2 || 10 * 3 || 6 * 5

// 16 - perfect square (4)

function isPrimeSqrt(k) {
  if (k < 2) {
    return "Not Prime";
  }

  let sqrt = parseInt(Math.sqrt(k));

  for (let i = 2; i <= sqrt; i++) {
    if (k % i === 0) {
      return "Not Prime";
    }
  }
  return "Prime!";
}

let str2 = isPrimeSqrt(testVal);
console.log(str2);

// First 'n' primes:
// Benchmark to compare the brute force vs the sqrt
// A simple loop using our optimized version!
function first_N_Primes(n, opt) {
  let num = 2;
  let i = 0;
  let str = "";

  while (i < n) {
    // optimization or not
    if (opt) {
      str = isPrimeSqrt(num);
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
console.log(`\nTesting with first ${n} primes\n`);

console.time("N primes - original");
// first_N_Primes(n);
console.timeEnd("N primes - original");

console.time("N primes - OPTIMIZED!!");
first_N_Primes(n, true);
console.timeEnd("N primes - OPTIMIZED!!", n);

n = 1000;

// test speeds!!
console.log(`\nTesting with first ${n} primes\n`);
console.time("N primes - original");

// first_N_Primes(n);

console.timeEnd("N primes - original");

console.time("N primes - OPTIMIZED!!");
first_N_Primes(n, true);
console.timeEnd("N primes - OPTIMIZED!!", n);

n = 10000;

// test speeds!!
console.log(`\nTesting with first ${n} primes\n`);
console.time("N primes - original");
// first_N_Primes(n);
console.timeEnd("N primes - original");

console.time("N primes - OPTIMIZED!!");
first_N_Primes(n, true);
console.timeEnd("N primes - OPTIMIZED!!", n);

n = 30000;

// test speeds!!
console.log(`\nTesting with first ${n} primes\n`);
console.time("N primes - original");
// first_N_Primes(n);
console.timeEnd("N primes - original");

console.time("N primes - OPTIMIZED!!");
first_N_Primes(n, true);
console.timeEnd("N primes - OPTIMIZED!!", n);
