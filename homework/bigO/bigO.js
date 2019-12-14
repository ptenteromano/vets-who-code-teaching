/* 
Assignment:
Write three functions with the following Big O:

Constant time: O(1)
Linear time: O(n)
Polynomial time: O(n^k)

*Make up your own data to write these 
*/

/* O(1) Constant time: */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrDisplay = array => {
  console.log(array[Math.ceil(Math.random() * 10)]);
};
arrDisplay(arr);

/* )(n) Linear time */
let searchArr = (num, array) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===num) console.log(array[i]);
    }
    return false;
};
searchArr(10, arr);

/* O(n^2) Polynomial time */
let unsortedArr = [84, 16, 56, 91, 41, 70, 77, 73, 99, 27, 13, 98, 19, 17, 3, 33, 39, 37, 86, 66, 50, 42, 74, 59, 35, 2, 6, 4, 81, 25, 14, 55, 44, 34, 22, 100, 96, 94, 29, 23, 46, 62, 26, 12, 48, 65, 21, 51, 30, 53, 52, 7, 80, 72, 87, 90, 83, 47, 40, 24, 82, 76, 67, 64, 92, 97, 45, 36, 54, 8, 61, 57, 18, 43, 93, 85, 60, 79, 11, 78, 89, 9, 88, 68, 69, 10, 20, 1, 75, 15, 32, 28, 58, 63, 71, 38, 95, 49, 31, 5];

const printSetsOfThree = (array) =>{
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      for(let k = 0; k < array.length; k++){
        console.log(`${i}, ${j}, ${k}`);

      }
    }
  }
}
printSetsOfThree(unsortedArr);