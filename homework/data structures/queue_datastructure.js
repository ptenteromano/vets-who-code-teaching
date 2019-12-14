/* FIFO - First in, first out!
It’s just a line, like the line at the grocery store */

class Queue {
  constructor(obj) {
    this.obj = obj;
    this.arr = [];
  }
  /* Shift removes the first object at bottom of stack. 
  "First In, First Out"  */
  firstOut(obj) {
    this.arr.shift(obj);
    console.log(this.arr);
  }
  /* Puts obj object at end of line 
  "Last In, Last Out" */
  lastIn(obj) {
    this.isEmpty(obj)
    this.arr.push(obj);
    console.log(this.arr);
  }
  //Did someone put nothing in there? This will check and return an empty array []
  isEmpty(arr) {
    return this.arr.length === 0;
  }
}
console.log(`Demonstration of a Stack. LIFO or 
Last In First Out
-----------------`);

let queue = new Queue();
queue.lastIn(15);
queue.lastIn(16);
queue.lastIn(17);
queue.lastIn(18);
queue.lastIn(45);
queue.lastIn(122);
queue.firstOut();
queue.firstOut();
queue.firstOut();
queue.firstOut();
queue.firstOut();
queue.firstOut();
queue.lastIn();
/* 
Demonstration of a Stack. LIFO or 
Last In First Out
-----------------
[ 15 ]
[ 16, 15 ]
[ 17, 16, 15 ]
[ 18, 17, 16, 15 ]
[ 45, 18, 17, 16, 15 ]
[ 122, 45, 18, 17, 16, 15 ]
[ 45, 18, 17, 16, 15 ]
[ 18, 17, 16, 15 ]
[ 17, 16, 15 ]
[ 16, 15 ]
[ 15 ]
[] */