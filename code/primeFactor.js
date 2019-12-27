function primeFactor(n) {
  // a method of storing and returning multiple values
  let results = [];

  // print 2 as long as it is a factor
  while (n % 2 == 0) {
    results.push(2);
    n /= 2;
  }

  // continuously break 'n', printing the factors which do so
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i == 0) {
      results.push(i);
      n /= i;
    }
  }

  // n itself will be the last prime
  if (n > 2) results.push(n);

  return results;
}
console.log(primeFactor(600851475143))
// time to use it
/* let testArr = [2, 348, 9573, 123450, 5093849, 4567891237, 123456788901237];
let k = 0;

while (k < testArr.length) {
  console.log("Testing: ", testArr[k], primeFactor(testArr[k]));

  k++;
} */
