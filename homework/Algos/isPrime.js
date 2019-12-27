/* 
Primality test
I figured that if a number is divisible by 2, 3, or 5 it cannot be a prime. 
Also 0, 1, 2 are not primes. BigO 0f O(1).
*/
let isPrime = num => {
  if (num < 3) return `${num} is not a prime number`;
  //tests negatives, 0, 1, & 2
  else if (num === 3 || num === 5) return `${num} is a prime number.`;
  //Checks 3 & 5. Can't include 4 because it is not a prime.
  else if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0)
    //If divisible by any of these tests it is not a prime.
    return `${num} is not a prime number`;
  else return `${num} is a prime number.`; //everything else is a prime.
};
/* 
Basically the same test as above but using a loop. BigO = O(n);
*/
let anotherPrime = num => {
  for (i = 2; i < num; i++) {
    if (num % i === 0) return `${num} is not a prime number`;
    else if (num > 1) return `${num} is a prime number.`;
  }
};

let testPrimes = (func) => {
  for (j = 0; j <= 100000; j++) {
    console.clear();
    console.log(func(j));
  }
};
testPrimes(isPrime);
//testPrimes(anotherPrime);
