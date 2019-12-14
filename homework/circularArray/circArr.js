/* You are to create a function that accepts two parameters

arr is the array, (can be anything), and numLoops is the number of times you circle around it.

You are only allowed to use a WHILE loop

And you must use the mod operator
 */

/* random-words generates random words for use as sample text. 
Get it at `npm install random-words`
 */
let randomWords = require("random-words");

let temp = 0;
let circularArray = (arr, numLoops) => {
  //temp is a counter. temp starts at zero and iterates the numLoops * the array length.
  //For example, the numLoops = 4 and we have an array that is 20 items, it will go through
  // and iterate 20 * 4 times or 80 times.
  while (temp < numLoops * arr.length) {
    /* newArr equals the remainder of temp divided by the array length (in this case 10 random words)
       so it will give us a remainder. The while loop starts at 0 and counts up to the length of the array.
        temp at first iteration will be 1 mod 10 = 1 which will have a remainder of 1*/

    let newArr = temp % arr.length;
    temp++;
    /* Prints the output to the console */
    console.log(arr[newArr]);
    if (temp === numLoops*arr.length) console.log('***All done***');
  }
};
let random = Math.floor(Math.random() * 25)
circularArray(randomWords(random), 4);
console.log(`${random} items in the array`);
