// integer division
//  5 / 2 == 2

// Quotient-remainder equation
// Describes divison and modulus
// A = (B * Q) + R

// 11 = (2 * 5) + 1
// 2 = (5 * 0) + 2

// A = (B * Q) + R

// 0 = (5 * 0) + 0

// console.log("2 goes into 5 twice:", 5 % 2);
// console.log("5 does not fit into two:", 2 % 5);

const checkModulus = (left, right) => {
  // console.log(left % right);

  let k = 0;

  while (k < 20) {
    console.log(k % right);
    k++;
  }
};

checkModulus(6, 6);
11 % 3 == 2;
12 % 3 == 0;
13 % 3 == 1;
14 % 3 == 2;
15 % 3 == 0;

// Modulus... range checker
// Bounded by the right hand operand



// print out ever element, and break the iterations by a "------" 
const circularArray = (arr, numberOfLoops) => {

  // With only 1 loop (for, while, etc)
  // Must use the mod operator



};
