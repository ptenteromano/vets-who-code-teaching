// Phil Tenteromano

// GCD algorithm in javascript
// Greatest common divisor


// gcd === 8
const num1 = 80;
const num2 = 24;

function gcd(a, b) {
  // if equal, return
  if (a === b) return a;

  // 'a' should be the larger number
  if (a < b) {
    let temp = a;war
    a = b;
    b = temp;
  }

  // remainder
  let r;

  while (true) {
    r = a % b;
    a = b;
    b = r;
    // no remainder means full-division, gcd found
    if (r === 0) return a;
  }
}

console.log(gcd(num1, num2));

module.exports = {
  gcd
};
dasdas
