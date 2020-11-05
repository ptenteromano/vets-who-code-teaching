/**
 * Returns an array of prime factors of a given number
 * We can manipulate the argument, n, because it is passed by value
 *
 * @param {Number} n - Integer to get the prime factors from
 *
 * @return {Array} - Array of prime factors
 */
function primeFactor(n) {
  const primes = [];

  // 2 is the easiest prime to add to the list
  while (n % 2 === 0) {
    primes.push(2);
    n /= 2;
  }

  // Continuously break 'n', printing the factors which do so
  // We can start at 3 now (since we did 2 above)
  // We can also increment by 2, since all primes > 2 are odd
  // Use the square root for real optimization!
  for (let factor = 3; factor <= Math.sqrt(n); factor += 2) {
    while (n % factor === 0) {
      primes.push(factor);
      n /= factor;
    }
  }

  // We could be left with n itself as the last prime
  if (n > 2) primes.push(n);

  return primes;
}

// time to use it
let testArr = [2, 13, 19, 348, 9573, 123450, 5093849, 4567891237, 123456788901237];
let k = 0;

while (k < testArr.length) {
  console.log("Testing:", testArr[k], "-->", primeFactor(testArr[k]));

  k++;
}
