/* FIFO - First in, first out!
It’s just a line, like the line at the grocery store */

class Queue {
  constructor(obj) {
    this.obj = obj;
    this.arr = [];
  }
  /* Shift removes the first object  */
  shiftObj(obj) {
    this.arr.shift(obj);
    console.log(this.arr);
  }
  /* Puts the first object in line */
  unshiftObj(obj) {
    this.isEmpty(obj)
    this.arr.unshift(obj);
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
queue.unshiftObj(15);
queue.unshiftObj(16);
queue.unshiftObj(17);
queue.unshiftObj(18);
queue.unshiftObj(45);
queue.unshiftObj(122);
queue.shiftObj();
queue.shiftObj();
queue.shiftObj();
queue.shiftObj();
queue.shiftObj();
queue.shiftObj();
queue.unshiftObj();
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