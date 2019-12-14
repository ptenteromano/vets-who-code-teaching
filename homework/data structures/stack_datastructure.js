/* 
## Stack
We went over stack already LIFO - 
Last in, first out! What does a Stack class do? We can add to the stack We can remove from the stack We can check if the stack is empty or not We can initialize it in multiple ways.
*/

class Stack {
    /* Setting up the constructor */
  constructor(obj) {
    this.obj = obj;
    this.arr = []
  }

  /* Push pushes item to the top of the stack "Last In"*/
  lastIn(obj) {
    this.arr.unshift(obj);
    return this.arr;
  }
  /* Removes item from top of the stack "First Out"*/
  firstOut(obj) {
    if (this.arr === null) return this.isEmpty();
    this.arr.shift(obj);
    return this.arr;
  }
    //Did someone put nothing in there? This will check and return an empty array []
  isEmpty(arr) {
    return this.arr.length === 0;
  }
}
console.log(`Demonstration of a Stack. LIFO or 
Last In First Out
-----------------`);
let stack = new Stack(15);
console.log(stack.lastIn(15));
console.log(stack.lastIn(16));
console.log(stack.lastIn(17));
console.log(stack.lastIn(18));
console.log(stack.lastIn(45));
console.log(stack.lastIn(122));
console.log(stack.firstOut());
console.log(stack.firstOut());
console.log(stack.firstOut());
console.log(stack.firstOut());
console.log(stack.firstOut());
console.log(stack.firstOut());
console.log(stack.firstOut());
/* Demonstration of a Stack. LIFO or 
Last In First Out
-----------------
[ 15 ]
[ 15, 16 ]
[ 15, 16, 17 ]
[ 15, 16, 17, 18 ]
[ 15, 16, 17, 18, 45 ]
[ 15, 16, 17, 18, 45, 122 ]
[ 15, 16, 17, 18, 45 ]
[ 15, 16, 17, 18 ]
[ 15, 16, 17 ]
[ 15, 16 ]
[ 15 ]
[] */