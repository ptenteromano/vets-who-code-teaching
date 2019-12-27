/* 
Assignment:
We’ve gotten good at solving problems with code...
You will pick at least 2 sorting algorithms yourself and code themselves.
Can use either Class or Functions like before
Preferably, don’t do two O(n^2) - Try an O(n log n)!
*/

/* 
Compare a[k] to previous items in the array a[1], a[2], a[3], . . . , a[k − 1], starting
from the largest and moving downward. Whenever a[k] is less than a preceding array
item, increment the index of the preceding item to move it one position to the right.
As soon as a[k] is greater than or equal to an array item, insert the value of a[k] to
the right of that item. If a[k] is greater than or equal to a[k − 1], then leave the value
of a[k] unchanged. 
Sources: Epp, S. S. (2011). Discrete Mathematics with Applications Fourth Edition. Boston, MA: Cengage Learning. Page 740
<https://dev.to/ryan_dunton/insertion-sorting-for-beginners-in-js------fkg>
*/

class Sort {
  insertionSort(arr = []) {
    this.len = arr.length;
    this.arr = arr;
    /* for loop looping over each element of the array */
    for (let i = 0; i < this.len; i++) {
      /*Set up a variable el to hold the current value 
      and initialize another variable j and set it 
      outside of our next for loop for scoping.
       */
      this.el = this.arr[i];
      let j;
      /* for loop inside our first for loop. We assign j 
      the value of our current array position minus 1 and
      evaluate it against if it is greater than 0 and if 
      the current element is smaller than the starting loop 
      element. */
      for (j = i - 1; j >= 0 && this.arr[j] > this.el; j--) {
        this.arr[j + 1] = this.arr[j];
      }
      /* Assign the value el to the current index position 
      in the array. Using j+1 because we are initially 
      setting the value of j to i-1. */
      this.arr[j + 1] = this.el;
    }
    return this.arr;
  }
  /* For Bubble sort a static method is setup to swap 
  elements in an array if certain conditions are met. */
  swap(arr, i, j) {
    this.arr = arr;
    this.i = i;
    this.j = j;
    /* reassign the elements at index i and j */
    [this.arr[this.i], this.arr[this.j]] = [this.arr[this.j], this.arr[this.i]];
  }
  bubbleSort(arr) {
    this.len = arr.length;
    this.arr = arr;
    /* The outer loop will repeat the iteration n amount of times. 
    The inner will look at each element and the one ahead of it. */
    while (this.len > 0) {
      for (let i = 0; i < this.len; i++) {
        let j = i + 1;
        /* compare two adjacent elements */
        if (this.arr[i] > this.arr[j]) {
          
          this.noSwap = false;
          /* If current element at i is greater than the next at j
          swap them. */
          this.swap(this.arr, i, j);
        }
        /* Add logic to break the loop if no swaps happened */
        if (this.noSwap) break;
      }
      this.len--;
    }
    return this.arr;
  }
}
let sup = "2";
let i = new Sort();
console.log(`Insertion Sort :: 
Unsorted:10,20,2,13,1,6,4,19,18,14,12,8,9,16,17,15,7,11,5,3`);
console.log(
  `Sorted: ${i.insertionSort([
    10,
    20,
    2,
    13,
    1,
    6,
    4,
    19,
    18,
    14,
    12,
    8,
    9,
    16,
    17,
    15,
    7,
    11,
    5,
    3
  ])}`
);
console.log(`Insertion sort — O=(n^2)`);
let b = new Sort();
console.log(`---------------------------------------------------------`);
console.log(`Bubble Sort :: 
Unsorted:10,20,2,13,1,6,4,19,18,14,12,8,9,16,17,15,7,11,5,3`);
console.log(
  `Sorted:${b.bubbleSort([
    10,
    20,
    2,
    13,
    1,
    6,
    4,
    19,
    18,
    14,
    12,
    8,
    9,
    16,
    17,
    15,
    7,
    11,
    5,
    3
  ])}`
);
console.log(`Bubble sort — O=(n^2)`);
