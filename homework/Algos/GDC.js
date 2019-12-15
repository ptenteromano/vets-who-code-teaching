/* 
(“Hard”) - GCD - Greatest Common Divisor, can be Euclid’s Algorithm

- Given two integers, a and b, find the largest integer that divides them both (GCD).
- Euclid’s algorithm is well-known, but don’t copy - your own detriment!
- Try to solve this on your own first! Only use “hints” when you have to.
- How could you break down each number?
*/
//How to find the GCD...the long way
//Function to find the square root on both numbers rounded down to the nearest integer.
numRoot = num => Math.floor(Math.sqrt(num));
let gcd = (a, b) => {
  //variables to put found common divisors into array
  let firstArr = [];
  let secondArr = [];
  //temp variable to store common divisors to push to arrays
  let temp = 1;
  //Finding sqrt of a and b
  let f = numRoot(a);
  let s = numRoot(b);
  //create empty array to store common variables in
  let common = [];
  //Take the number, loop through it numRoot times
  for (i = 1; i <= f; i++) {
    /*  If the temp mod i == zero then temp will equal a / i. 
    This will push the temp number and then increment it
 */ if (
      temp % i ===
      0
    ) {
      temp = a / i;
      firstArr.push(temp);
    }
    //I also have to add the i variable if a mod i == zero
    if (a % i === 0) firstArr.push(i);
  }
  for (i = 1; i <= s; i++) {
    if (temp % i === 0) {
      temp = b / i;
      secondArr.push(temp);
    }
    if (b % i === 0) secondArr.push(i);
  }
  //I sort the arrays
  firstArr.sort(function(a, b) {
    return a - b;
  });
  secondArr.sort(function(a, b) {
    return a - b;
  });
  /* I compare the arrays below to find the
  highest common number between the two arrays
  I pull both of the common numbers because I have to 
  all common numbers between both due to numbers not sharing the 
  same element position */
  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      if (firstArr[i] == secondArr[j]) {
        common.push(firstArr[i]);
        common.push(secondArr[j]);
      }
    }
  }
  //Filter out all duplicates. Set ADT lesson helped here
  common = common.filter((el, pos) => common.indexOf(el) == pos);
  //Find max of the array then console.lof it
  let final = Math.max(...common);
  console.log(`The GCD of ${a} & ${b} is ${final}`);
};
gcd(12, 16);
gcd(100,410);
