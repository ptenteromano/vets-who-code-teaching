/* 
(Medium) - Integer to String

- Given any positive OR negative integers, returns it as a String
- NO BUILT-INs
- And obviously no JS type inferring magic.
*/
/* Create a new array from the number entered */
let arr = n => [...`${n}`].map(i => parseInt(i));

//Function changing the integer to string
let intToString = num => {
  //From arr function adding the numbers in
  let newArr = arr(num);
  /* Loop through numbered array and find charcode() position. e.g., 5 => 53
 Doesn't work on negatives
0 = ASCII (48)
1 = ASCII (49)
2 = ASCII (50)
3 = ASCII (51)
4 = ASCII (52)
5 = ASCII (53)
6 = ASCII (54)
7 = ASCII (55)
8 = ASCII (56)
9 = ASCII (57)
Add 48 to each number to find  ASCII code
*/
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = (newArr[i] % 10) + 48;
  }
  let s = String.fromCharCode(...newArr);
  console.log(s);
  //Type of shows it is a string
  console.log(typeof s);
};

intToString(500);
intToString(1);
intToString(120);
intToString(0);
